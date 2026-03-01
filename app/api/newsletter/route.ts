import { NextResponse } from "next/server";

const ECOMAIL_API_URL = "https://api2.ecomailapp.cz";

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// Jednoduchý in-memory rate limiter (reset při restartu serveru)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000; // 1 minuta

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

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
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

    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim() : "";

    if (!email) {
      return NextResponse.json(
        { error: "Zadejte e-mail." },
        { status: 400 }
      );
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

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      const message =
        typeof data.message === "string"
          ? data.message
          : "Odběr se nepodařil. Zkuste to později.";
      return NextResponse.json({ error: message }, { status: res.status });
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
