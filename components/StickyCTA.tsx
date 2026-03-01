"use client";

import * as React from "react";
import Link from "next/link";
import { Calendar, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function StickyCTA() {
  const [visible, setVisible] = React.useState(false);
  const [dismissed, setDismissed] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-40 flex items-center gap-2 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 md:bottom-8 md:left-auto md:right-8 md:p-0"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Link
            href="/#contact"
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-slate-900/95 px-5 py-3.5 text-sm font-semibold text-white shadow-lg backdrop-blur-sm transition hover:bg-slate-800 active:scale-[0.98] md:flex-none md:w-auto md:rounded-full md:bg-gradient-to-r md:from-primary md:to-violet-600 md:px-6 md:py-3 md:text-base md:shadow-primary/20"
          >
            <Calendar className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
            Konzultace zdarma
          </Link>
          {/* Zavřít — pouze na mobilu */}
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-900/95 text-white shadow-lg backdrop-blur-sm transition hover:bg-slate-800 active:scale-[0.98] md:hidden"
            aria-label="Zavřít"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
