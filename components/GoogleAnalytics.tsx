"use client";

import * as React from "react";
import Script from "next/script";
import {
  COOKIE_CONSENT_UPDATED_EVENT,
  readCookiePreferences,
  type CookiePreferencesV1,
} from "../lib/cookie-consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function GoogleAnalytics() {
  const [analyticsAllowed, setAnalyticsAllowed] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    const prefs = readCookiePreferences();
    setAnalyticsAllowed(prefs?.analytics === true);

    const onConsent = (e: Event) => {
      const ce = e as CustomEvent<CookiePreferencesV1>;
      if (ce.detail?.analytics !== undefined) {
        setAnalyticsAllowed(ce.detail.analytics);
      }
    };
    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, onConsent);
    return () => window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, onConsent);
  }, []);

  if (!GA_ID || analyticsAllowed !== true) return null;

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
