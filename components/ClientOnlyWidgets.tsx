"use client";

import dynamic from "next/dynamic";

const CookieConsent = dynamic(
  () => import("./CookieConsent").then(m => ({ default: m.CookieConsent })),
  { ssr: false }
);

const KonamiEaster = dynamic(
  () => import("./KonamiEaster").then(m => ({ default: m.KonamiEaster })),
  { ssr: false }
);

const GoogleAnalytics = dynamic(
  () => import("./GoogleAnalytics").then(m => ({ default: m.GoogleAnalytics })),
  { ssr: false }
);

export function ClientOnlyWidgets() {
  return (
    <>
      <CookieConsent />
      <KonamiEaster />
      <GoogleAnalytics />
    </>
  );
}
