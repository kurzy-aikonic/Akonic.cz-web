import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 text-sm text-slate-600 md:grid-cols-3 md:px-6">
        <div className="space-y-4">
          <Image
            src="/logo.png"
            alt="AIKONIC logo"
            width={240}
            height={80}
            className="h-16 w-auto object-contain"
          />
          <p className="text-sm text-slate-500">
            AIKONIC - Váš partner pro AI a automatizaci.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Rychlé odkazy
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/" className="transition hover:text-slate-900">
                Domů
              </Link>
            </li>
            <li>
              <Link href="/#sluzby" className="transition hover:text-slate-900">
                Služby
              </Link>
            </li>
            <li>
              <Link
                href="/#reference"
                className="transition hover:text-slate-900"
              >
                Reference
              </Link>
            </li>
            <li>
              <Link href="/#kontakt" className="transition hover:text-slate-900">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Kontakt
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>
              <a
                href="mailto:kurzy@aikonic.cz"
                className="transition hover:text-slate-900"
              >
                kurzy@aikonic.cz
              </a>
            </li>
            <li>
              <a
                href="tel:+420723061013"
                className="transition hover:text-slate-900"
              >
                +420 723 061 013
              </a>
            </li>
            <li>Heydukova 115, 572 01 Polička (fakturační adresa)</li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Legální & Social
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href="/obchodni-podminky"
                className="transition hover:text-slate-900"
              >
                Obchodní podmínky
              </Link>
            </li>
            <li>
              <Link
                href="/ochrana-udaju"
                className="transition hover:text-slate-900"
              >
                Ochrana údajů
              </Link>
            </li>
          </ul>
          <div className="mt-5 flex items-center gap-3 text-slate-500">
            <Link
              href="https://www.linkedin.com/company/108064244/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="cursor-pointer hover:text-slate-900"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61581039984128"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="cursor-pointer hover:text-slate-900"
            >
              <Facebook className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.instagram.com/aikonic_training/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="cursor-pointer hover:text-slate-900"
            >
              <Instagram className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-slate-500 md:flex-row md:px-6">
          <span>© 2026 Aikonic. Všechna práva vyhrazena.</span>
          <span>kurzy@aikonic.cz</span>
        </div>
      </div>
    </footer>
  );
}