"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import dynamic from "next/dynamic";

const HeroGame = dynamic(() => import("./HeroGame").then(m => ({ default: m.HeroGame })), {
  ssr: false,
  loading: () => (
    <div className="flex h-[400px] w-[312px] items-center justify-center rounded-2xl border border-slate-200/80 bg-white/95">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-primary" />
    </div>
  ),
});

function SpaceIcon({ open }: { open: boolean }) {
  return (
    <>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={`h-5 w-5 invader-wrap transition-colors duration-200 ${open ? "text-white" : "text-primary"}`}
        aria-hidden="true"
      >
        {/* Body */}
        <rect x="8" y="8" width="8" height="6" rx="1" fill="currentColor" opacity="0.9" />
        {/* Eyes */}
        <rect x="9.5" y="9.5" width="2" height="2" rx="0.5" fill="white" className="invader-eye" />
        <rect x="12.5" y="9.5" width="2" height="2" rx="0.5" fill="white" className="invader-eye" />
        {/* Antennae */}
        <rect x="9" y="6" width="1.5" height="2" rx="0.5" fill="currentColor" opacity="0.75" className="invader-ant-l" />
        <rect x="13.5" y="6" width="1.5" height="2" rx="0.5" fill="currentColor" opacity="0.75" className="invader-ant-r" />
        {/* Legs */}
        <rect x="7" y="14" width="2" height="2" rx="0.5" fill="currentColor" opacity="0.75" className="invader-leg-l" />
        <rect x="10.5" y="14" width="3" height="1.5" rx="0.5" fill="currentColor" opacity="0.45" />
        <rect x="15" y="14" width="2" height="2" rx="0.5" fill="currentColor" opacity="0.75" className="invader-leg-r" />
        {/* Side arms */}
        <rect x="5.5" y="10" width="2.5" height="1.5" rx="0.5" fill="currentColor" opacity="0.6" className="invader-arm-l" />
        <rect x="16" y="10" width="2.5" height="1.5" rx="0.5" fill="currentColor" opacity="0.6" className="invader-arm-r" />
      </svg>
    </>
  );
}

export function HeroGameWidget() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-col items-end">
      {/* Trigger button — always visible */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Zavřít hru" : "Otevřít Space Invaders mini-hru"}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className={`group flex items-center gap-2.5 rounded-2xl border px-4 py-2.5 text-sm font-semibold shadow-sm transition-colors duration-200 ${
          open
            ? "border-primary/30 bg-primary text-white shadow-primary/20"
            : "border-slate-200 bg-white/90 text-slate-700 hover:border-primary/30 hover:text-primary"
        }`}
      >
        <SpaceIcon open={open} />
        <span>{open ? "Zavřít hru" : "Hrát mini-hru"}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className={`text-xs ${open ? "text-white/70" : "text-slate-400"}`}
        >
          ▾
        </motion.span>
      </motion.button>

      {/* Game panel — expands below the button */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="game-panel"
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            className="mt-2 origin-top-right"
          >
            {/* Close button inside panel */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Zavřít hru"
                className="absolute -right-2 -top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:bg-slate-50 hover:text-slate-800"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
              <HeroGame />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
