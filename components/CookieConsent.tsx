"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  COOKIE_BANNER_OPEN_EVENT,
  readCookiePreferences,
  writeCookiePreferences,
} from "../lib/cookie-consent";

export function CookieConsent() {
  const [hydrated, setHydrated] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [detailsOpen, setDetailsOpen] = React.useState(false);
  const [analyticsChecked, setAnalyticsChecked] = React.useState(false);

  React.useEffect(() => {
    const existing = readCookiePreferences();
    if (!existing) {
      setVisible(true);
      setAnalyticsChecked(false);
    }

    const openBanner = () => {
      const p = readCookiePreferences();
      setAnalyticsChecked(p?.analytics ?? false);
      setDetailsOpen(true);
      setVisible(true);
    };

    window.addEventListener(COOKIE_BANNER_OPEN_EVENT, openBanner);
    setHydrated(true);
    return () => window.removeEventListener(COOKIE_BANNER_OPEN_EVENT, openBanner);
  }, []);

  const closeAndSave = (analytics: boolean) => {
    writeCookiePreferences(analytics);
    setVisible(false);
  };

  if (!hydrated) return null;

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            className="fixed inset-0 z-[59] bg-black/40 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            aria-hidden="true"
          />
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-[60] flex justify-center p-4 md:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-banner-title"
            aria-describedby="cookie-banner-desc"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-800 shadow-2xl md:max-w-2xl md:p-6">
              <h2 id="cookie-banner-title" className="text-lg font-semibold text-text md:text-xl">
                Nastavení cookies a ochrana soukromí
              </h2>
              <div id="cookie-banner-desc" className="mt-3 space-y-3 text-slate-600">
                <p>
                  Tento web používá cookies.{" "}
                  <strong className="font-medium text-text">Nezbytné cookies</strong> jsou potřebné pro
                  základní funkce webu a uložení vašeho rozhodnutí.{" "}
                  <strong className="font-medium text-text">Analytické cookies</strong> (Google Analytics)
                  nám pomáhají pochopit návštěvnost — zapínají se jen s vaším souhlasem podle čl. 6 odst. 1 písm.
                  a) GDPR a § 89 zákona č. 127/2005 Sb. (elektronické komunikace).
                </p>
                <p>
                  Podrobnosti včetně dob uchování a práv najdete v{" "}
                  <Link
                    href="/ochrana-udaju#cookies"
                    className="font-semibold text-primary underline underline-offset-2 hover:text-blue-700"
                  >
                    zásadách ochrany osobních údajů (sekce Cookies)
                  </Link>
                  .
                </p>
              </div>

              <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50/80 p-4">
                <div className="flex items-start gap-3">
                  <input
                    id="cookie-necessary"
                    type="checkbox"
                    checked
                    disabled
                    className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300"
                    aria-describedby="cookie-necessary-desc"
                  />
                  <div>
                    <label htmlFor="cookie-necessary" className="font-semibold text-text">
                      Nezbytné cookies
                    </label>
                    <p id="cookie-necessary-desc" className="mt-1 text-xs text-slate-600">
                      Bezpečný provoz webu, zapamatování vašeho nastavení souhlasu. Nelze vypnout.
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setDetailsOpen((v) => !v)}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-text transition hover:bg-slate-50 min-h-[44px]"
                aria-expanded={detailsOpen}
              >
                {detailsOpen ? (
                  <>
                    Skrýt podrobné nastavení
                    <ChevronUp className="h-4 w-4" aria-hidden="true" />
                  </>
                ) : (
                  <>
                    Podrobné nastavení (analytické cookies)
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </button>

              <AnimatePresence initial={false}>
                {detailsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50/80 p-4">
                      <div className="flex items-start gap-3">
                        <input
                          id="cookie-analytics"
                          type="checkbox"
                          checked={analyticsChecked}
                          onChange={(e) => setAnalyticsChecked(e.target.checked)}
                          className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-primary focus:ring-primary"
                        />
                        <div>
                          <label htmlFor="cookie-analytics" className="font-semibold text-text">
                            Analytické cookies (Google Analytics)
                          </label>
                          <p className="mt-1 text-xs text-slate-600">
                            Statistika návštěv, zdrojů provozu a chování na webu. Zpracovatel: Google Ireland
                            Limited. Data mohou být přenesena do třetích zemí dle politiky Google.
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => closeAndSave(analyticsChecked)}
                        className="mt-4 w-full rounded-xl border-2 border-slate-300 bg-white py-3 text-sm font-semibold text-text transition hover:border-slate-400 hover:bg-slate-50 min-h-[48px]"
                      >
                        Uložit tento výběr
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Stejná výraznost tlačítek — odmítnutí nesmí být skryté ani výrazně slabší (doporučení EDPB / ÚOOÚ) */}
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-stretch">
                <button
                  type="button"
                  onClick={() => closeAndSave(false)}
                  className="flex-1 rounded-xl border-2 border-slate-800 bg-white py-3.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 min-h-[48px]"
                >
                  Odmítnout analytické
                </button>
                <button
                  type="button"
                  onClick={() => closeAndSave(true)}
                  className="flex-1 rounded-xl border-2 border-primary bg-primary py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-600 min-h-[48px]"
                >
                  Přijmout vše
                </button>
              </div>
              <p className="mt-3 text-center text-xs text-slate-500">
                Svůj souhlas můžete kdykoli změnit v patičce webu v odkazu „Nastavení cookies“.
                Platnost uloženého výběru je 30 dnů — poté se banner zobrazí znovu.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
