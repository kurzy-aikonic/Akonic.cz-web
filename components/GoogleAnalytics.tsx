"use client";

import * as React from "react";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function GoogleAnalytics() {
  const [consent, setConsent] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    const stored = window.localStorage.getItem("cookie-consent");
    if (stored !== null) {
      setConsent(stored === "true");
    }

    // Sleduj změny consentu (když uživatel klikne na banner)
    const onStorage = (e: StorageEvent) => {
      if (e.key === "cookie-consent") {
        setConsent(e.newValue === "true");
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  if (!GA_ID || consent !== true) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
