"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { NewsletterForm } from "./NewsletterForm";
import * as React from "react";
import { openCookieBanner } from "../lib/cookie-consent";

function KonamiHint() {
  const [show, setShow] = React.useState(false);

  return (
    <span className="relative">
      <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={() => setShow((v) => !v)}
        className="cursor-default select-none text-xs text-slate-400 transition hover:text-slate-600"
        aria-label="Nápověda ke Konami kódu"
      >
        🎮 Znáš Konami kód?
      </button>
      {show && (
        <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-mono font-semibold text-slate-700 shadow-md">
          ↑ ↑ ↓ ↓ ← → ← → B A
        </span>
      )}
    </span>
  );
}

export function Footer() {
  return (
    <footer className="border-t-2 border-slate-200 bg-gradient-to-b from-white to-slate-50/80 pb-safe">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-12 text-base text-slate-600 sm:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div className="space-y-4">
          <Image
            src="/logo.png"
            alt="AIKONIC logo"
            width={240}
            height={80}
            sizes="200px"
            className="h-16 w-auto object-contain"
          />
          <p className="text-base text-slate-500">
            AI a automatizace pro firmy. Školení a implementace.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Rychlé odkazy
          </p>
          <ul className="mt-4 space-y-0">
            <li>
              <Link href="/" className="block py-2.5 -my-2 transition hover:text-slate-900">
                Domů
              </Link>
            </li>
            <li>
              <Link href="/sluzby" className="block py-2.5 -my-2 transition hover:text-slate-900">
                Služby
              </Link>
            </li>
            <li>
              <Link href="/#cenik" className="block py-2.5 -my-2 transition hover:text-slate-900">
                Ceník
              </Link>
            </li>
            <li>
              <Link
                href="/#reference"
                className="block py-2.5 -my-2 transition hover:text-slate-900"
              >
                Reference
              </Link>
            </li>
            <li>
              <Link href="/newsletter" className="block py-2.5 -my-2 transition hover:text-slate-900">
                Newsletter
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="block py-2.5 -my-2 transition hover:text-slate-900">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Kontakt
          </p>
          <ul className="mt-4 space-y-0 text-base text-slate-600">
            <li>
              <a
                href="mailto:kurzy@aikonic.cz"
                className="block py-2.5 -my-2 transition hover:text-slate-900"
              >
                kurzy@aikonic.cz
              </a>
            </li>
            <li>
              <a
                href="tel:+420723061013"
                className="block py-2.5 -my-2 transition hover:text-slate-900"
              >
                +420 723 061 013
              </a>
            </li>
            <li className="py-2.5 -my-2">Heydukova 115, 572 01 Polička (fakturační adresa)</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Legální & Social
          </p>
          <ul className="mt-4 space-y-0 text-base">
            <li>
              <Link
                href="/obchodni-podminky"
                className="block py-2.5 -my-2 transition hover:text-slate-900"
              >
                Obchodní podmínky
              </Link>
            </li>
            <li>
              <Link
                href="/ochrana-udaju"
                className="block py-2.5 -my-2 transition hover:text-slate-900"
              >
                Ochrana údajů
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => openCookieBanner()}
                className="block w-full py-2.5 -my-2 text-left text-base transition hover:text-slate-900"
              >
                Nastavení cookies
              </button>
            </li>
          </ul>
          <div className="mt-5 flex items-center gap-4 text-slate-500">
            <Link
              href="https://www.linkedin.com/company/108064244/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="icon-glow-primary flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg hover:text-slate-900 hover:bg-slate-100 active:bg-slate-200"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61581039984128"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="icon-glow-primary flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg hover:text-slate-900 hover:bg-slate-100 active:bg-slate-200"
            >
              <Facebook className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.instagram.com/aikonic_training/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="icon-glow-primary flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg hover:text-slate-900 hover:bg-slate-100 active:bg-slate-200"
            >
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
          <div className="mt-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Newsletter
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Novinky a tipy do e-mailu. Jednou za čas, bez spamu.
            </p>
            <div className="mt-3">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-slate-500 md:flex-row md:px-6">
          <span>© 2026 Aikonic. Všechna práva vyhrazena.</span>
          <KonamiHint />
          <span>kurzy@aikonic.cz</span>
        </div>
      </div>
    </footer>
  );
}