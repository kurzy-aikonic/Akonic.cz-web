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
  { label: "Služby", href: "/sluzby" },
  { label: "Ceník", href: "/#cenik" },
  { label: "O nás", href: "/#about" },
  { label: "Reference", href: "/#reference" },
  { label: "Kontakt", href: "/#contact" },
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

const SCROLL_THRESHOLD = 24;

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-300 ease-out ${
        scrolled
          ? "border-slate-200 bg-white/95 shadow-sm"
          : "border-slate-200/60 bg-white/70"
      }`}
    >
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-8">
        <FadeIn delay={0.02} animateOnMount>
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
            <FadeIn key={item.label} delay={0.06 + index * 0.05} animateOnMount>
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
          <FadeIn delay={0.2} animateOnMount>
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
                className="absolute right-4 top-4 flex min-h-[48px] min-w-[48px] items-center justify-center rounded-full text-slate-900 transition hover:bg-slate-100 active:bg-slate-200"
                aria-label="Zavřít menu"
              >
                <X className="h-6 w-6" />
              </button>

              <motion.nav
                className="flex h-full flex-col items-center justify-center gap-2 py-8 text-2xl font-bold text-slate-900 sm:text-3xl"
              >
                {navItems.map((item) => (
                  <motion.div key={item.label} variants={menuItemVariants} className="w-full max-w-xs text-center">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block min-h-[48px] w-full py-3 px-4 text-center text-slate-900 transition hover:text-blue-600 active:bg-slate-100 rounded-xl"
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
