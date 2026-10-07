"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { LeadLink } from "./cro/LeadLink";
const navItems = [
  { label: "AI školení", href: "/ai-skoleni-pro-firmy" },
  { label: "AI audit", href: "/audit" },
  { label: "Automatizace", href: "/automatizace" },
  { label: "Dotace", href: "/dotace-na-skoleni" },
  { label: "Reference", href: "/reference" },
  { label: "O nás", href: "/#about" },
];
export function Navbar() {
  const dialog = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  function close() {
    dialog.current?.close();
    document.body.style.overflow = "";
    toggle.current?.focus();
  }
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="cro-container flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link href="/" aria-label="AIKONIC — úvodní stránka">
          <Image
            src="/logo.png"
            alt="AIKONIC"
            width={180}
            height={60}
            sizes="140px"
            className="h-11 w-32 object-contain"
          />
        </Link>
        <nav
          aria-label="Hlavní navigace"
          className="hidden items-center gap-5 text-sm lg:flex"
        >
          {navItems.map((n, i) => (
            <a
              key={n.href}
              className={`inline-flex min-h-11 items-center hover:text-primary ${i === 5 ? "text-slate-500" : "font-medium text-slate-800"}`}
              href={n.href}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <LeadLink section="header">Domluvit konzultaci</LeadLink>
        </div>
        <button
          ref={toggle}
          aria-label="Otevřít menu"
          aria-haspopup="dialog"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 lg:hidden"
          onClick={() => {
            dialog.current?.showModal();
            document.body.style.overflow = "hidden";
          }}
        >
          <Menu />
        </button>
      </div>
      <dialog
        ref={dialog}
        aria-label="Mobilní navigace"
        onCancel={(e) => {
          e.preventDefault();
          close();
        }}
        className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none bg-white p-6 backdrop:bg-slate-900/30"
      >
        <div className="flex justify-between">
          <span className="text-lg font-semibold">AIKONIC</span>
          <button
            aria-label="Zavřít menu"
            className="flex h-11 w-11 items-center justify-center"
            onClick={close}
          >
            <X />
          </button>
        </div>
        <nav
          aria-label="Mobilní navigace"
          className="mx-auto mt-8 flex max-w-sm flex-col"
        >
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={close}
              className="border-b border-slate-200 py-4 text-xl font-medium"
            >
              {n.label}
            </a>
          ))}
          <div className="mt-6" onClickCapture={close}>
            <LeadLink section="mobile-menu">Domluvit konzultaci</LeadLink>
          </div>
        </nav>
      </dialog>
    </header>
  );
}
