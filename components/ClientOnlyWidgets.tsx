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

export function ClientOnlyWidgets() {
  return (
    <>
      <CookieConsent />
      <KonamiEaster />
    </>
  );
}
