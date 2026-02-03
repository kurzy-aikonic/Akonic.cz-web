"use client";

import * as React from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function StickyCTA() {
  const [visible, setVisible] = React.useState(false);

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
      {visible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:bottom-8 md:left-auto md:right-8 md:p-0"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Link
            href="/#kontakt"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-4 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800 md:w-auto md:rounded-full md:bg-primary md:px-6 md:py-3 md:text-base"
          >
            <Calendar className="h-4 w-4 md:h-5 md:w-5" />
            Konzultace zdarma
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
