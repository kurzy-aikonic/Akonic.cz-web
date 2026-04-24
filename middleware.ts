import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const IS_PROD = process.env.NODE_ENV === "production";

/** CSP pro veřejný web (Next.js + GA + Sanity obrázky). */
function contentSecurityPolicyPublic(): string {
  const directives = [
    "default-src 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https://cdn.sanity.io https://images.unsplash.com https://source.unsplash.com https://www.google-analytics.com https://www.googletagmanager.com",
    "font-src 'self' data:",
    "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://*.analytics.google.com https://*.apicdn.sanity.io https://cdn.sanity.io",
    "frame-src 'self' https://www.googletagmanager.com",
    "object-src 'none'",
  ];
  if (IS_PROD) {
    directives.push("upgrade-insecure-requests");
  }
  return directives.join("; ");
}

/** Studio: pouze frame-ancestors (Sanity embed); plné CSP by rozbilo editor. */
function contentSecurityPolicyStudio(): string {
  return "frame-ancestors 'self' https://www.sanity.io https://*.sanity.io";
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isStudio = pathname.startsWith("/studio");

  const res = NextResponse.next();

  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), interest-cohort=(), browsing-topics=()"
  );
  res.headers.set("X-DNS-Prefetch-Control", "on");

  if (isStudio) {
    res.headers.set("Content-Security-Policy", contentSecurityPolicyStudio());
    if (IS_PROD) {
      res.headers.set(
        "Strict-Transport-Security",
        "max-age=63072000; includeSubDomains; preload"
      );
    }
  } else {
    res.headers.set("X-Frame-Options", "DENY");
    res.headers.set("Content-Security-Policy", contentSecurityPolicyPublic());
    if (IS_PROD) {
      res.headers.set(
        "Strict-Transport-Security",
        "max-age=63072000; includeSubDomains; preload"
      );
    }
  }

  return res;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|woff2?)$).*)",
  ],
};
