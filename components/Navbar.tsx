"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { FadeIn } from "./FadeIn";
import { MagneticButton } from "./MagneticButton";

const navItems = [
  { label: "Služby", href: "/#sluzby" },
  { label: "O nás", href: "/#about" },
  { label: "Reference", href: "/#reference" },
  { label: "Kontakt", href: "/#kontakt" },
];

const menuVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const menuItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-md">
      <div className="container mx-auto flex h-24 items-center justify-between px-6 md:px-8">
        <FadeIn delay={0.02}>
          <Link
            href="/"
            className="flex items-center"
            aria-label="AIKONIC"
          >
            <Image
              src="/logo.png"
              alt="AIKONIC logo"
              width={240}
              height={80}
              className="h-10 w-auto object-contain md:h-16"
              priority
            />
          </Link>
        </FadeIn>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item, index) => (
            <FadeIn key={item.label} delay={0.06 + index * 0.05}>
              <Link
                href={item.href}
                className="transition-colors hover:text-text"
              >
                {item.label}
              </Link>
            </FadeIn>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <FadeIn delay={0.2}>
            <MagneticButton className="hidden md:inline-flex">
              <Button className="hidden md:inline-flex" size="default" asChild>
                <Link href="/#contact">Konzultace</Link>
              </Button>
            </MagneticButton>
          </FadeIn>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 transition hover:text-text md:hidden"
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 h-screen w-screen z-50 bg-white/90 backdrop-blur-md md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="absolute inset-0 flex h-full flex-col items-center justify-center gap-8 px-6 py-8 text-slate-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-6 top-6 text-slate-900"
                aria-label="Zavřít menu"
              >
                <X className="h-8 w-8" />
              </button>

              <motion.nav
                className="flex h-full flex-col items-center justify-center gap-8 text-3xl font-bold text-slate-900"
              >
                {navItems.map((item) => (
                  <motion.div key={item.label} variants={menuItemVariants}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-slate-900 transition hover:text-blue-600"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
