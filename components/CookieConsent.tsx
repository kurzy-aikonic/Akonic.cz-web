"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export function CookieConsent() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const stored = window.localStorage.getItem("cookie-consent");
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const handleChoice = (value: "true" | "false") => {
    window.localStorage.setItem("cookie-consent", value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="mx-auto mb-4 w-[calc(100%-2rem)] max-w-3xl rounded-2xl border border-white/10 bg-slate-900/95 p-4 text-sm text-white shadow-2xl backdrop-blur">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-white/80">
                Používáme cookies, abychom vám zajistili co nejlepší zážitek z
                webu. Více informací v{" "}
                <Link
                  href="/ochrana-udaju"
                  className="text-white underline underline-offset-4 hover:text-white/90"
                >
                  ochraně osobních údajů
                </Link>
                .
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
                <button
                  type="button"
                  onClick={() => handleChoice("false")}
                  className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/80 transition hover:text-white"
                >
                  Odmítnout
                </button>
                <button
                  type="button"
                  onClick={() => handleChoice("true")}
                  className="rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow transition hover:bg-blue-700"
                >
                  Přijmout vše
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
