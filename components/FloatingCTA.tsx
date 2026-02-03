"use client";

import * as React from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function FloatingCTA() {
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
          className="fixed bottom-6 right-6 z-50 w-[calc(100%-2rem)] max-w-sm md:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Link
            href="/#kontakt"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            <Calendar className="h-4 w-4" />
            Rezervovat konzultaci
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
