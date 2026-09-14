import { NextResponse } from "next/server";

const ECOMAIL_API_URL = "https://api2.ecomailapp.cz";
const MAX_BODY_BYTES = 4_096;
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;

function isValidEmail(value: string): boolean {
  if (value.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/** Jednoduchý in-memory rate limiter (na serverless jen částečně účinný). */
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isAllowedRequestOrigin(request: Request): boolean {
  if (process.env.NODE_ENV !== "production") return true;
  const allowed = new Set<string>([
    "https://aikonic.cz",
    "https://www.aikonic.cz",
  ]);
  const vercel = process.env.VERCEL_URL;
  if (vercel) {
    allowed.add(`https://${vercel}`);
  }
  const origin = request.headers.get("origin");
  if (origin) return allowed.has(origin);
  const referer = request.headers.get("referer");
  if (!referer) return false;
  try {
    const u = new URL(referer);
    return allowed.has(`${u.protocol}//${u.host}`);
  } catch {
    return false;
  }
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

/** Periodicky vyčistí staré záznamy, aby Map nebobtnala. */
function pruneRateLimitMap() {
  if (rateLimitMap.size < 500) return;
  const now = Date.now();
  for (const [key, entry] of rateLimitMap) {
    if (now > entry.resetAt) rateLimitMap.delete(key);
  }
}

export async function POST(request: Request) {
  if (!isAllowedRequestOrigin(request)) {
    return NextResponse.json({ error: "Nepovolený požadavek." }, { status: 403 });
  }

  const contentLength = request.headers.get("content-length");
  if (contentLength && Number(contentLength) > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Požadavek je příliš velký." }, { status: 413 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip")?.trim() ??
    "unknown";

  pruneRateLimitMap();
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Příliš mnoho pokusů. Zkuste to za chvíli." },
      { status: 429 }
    );
  }

  try {
    const apiKey = process.env.ECOMAIL_API_KEY;
    const listId = process.env.ECOMAIL_LIST_ID;

    if (!apiKey || !listId) {
      console.error("ECOMAIL_API_KEY or ECOMAIL_LIST_ID is not set");
      return NextResponse.json(
        { error: "Newsletter není nakonfigurován." },
        { status: 500 }
      );
    }

    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Požadavek je příliš velký." }, { status: 413 });
    }

    let body: { email?: unknown; website?: unknown };
    try {
      body = JSON.parse(raw) as { email?: unknown; website?: unknown };
    } catch {
      return NextResponse.json({ error: "Neplatný požadavek." }, { status: 400 });
    }

    // Honeypot — boti často vyplní skryté pole
    if (typeof body.website === "string" && body.website.trim() !== "") {
      return NextResponse.json({
        success: true,
        message: "Odběr byl odeslán. Zkontrolujte e-mail a potvrďte odběr.",
      });
    }

    const email = typeof body.email === "string" ? body.email.trim() : "";

    if (!email) {
      return NextResponse.json({ error: "Zadejte e-mail." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Neplatná e-mailová adresa." },
        { status: 400 }
      );
    }

    const res = await fetch(`${ECOMAIL_API_URL}/lists/${listId}/subscribe`, {
      method: "POST",
      headers: {
        key: apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subscriber_data: { email },
        trigger_autoresponders: true,
        update_existing: true,
        skip_double_opt_in: false,
      }),
    });

    const data = (await res.json().catch(() => ({}))) as {
      already_subscribed?: boolean;
    };

    if (!res.ok) {
      // Nepropouštět raw zprávy z Ecomailu klientovi
      console.error("Ecomail subscribe failed", res.status);
      return NextResponse.json(
        { error: "Odběr se nepodařil. Zkuste to později." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: data.already_subscribed
        ? "Tento e-mail už je přihlášen."
        : "Odběr byl odeslán. Zkontrolujte e-mail a potvrďte odběr.",
    });
  } catch (e) {
    console.error("Newsletter subscribe error:", e);
    return NextResponse.json(
      { error: "Něco se pokazilo. Zkuste to později." },
      { status: 500 }
    );
  }
}
