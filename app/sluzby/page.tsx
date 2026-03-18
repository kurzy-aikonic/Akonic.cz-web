import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { FadeIn } from "../../components/FadeIn";
import { Button } from "../../components/ui/button";
import { ArrowRight, Building2, CalendarDays, CalendarRange, ClipboardCheck, Cpu, PieChart, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Služby pro firmy | AIKONIC",
  description:
    "Firemní AI audit, AI Hackathon, finanční gramotnost a automatizace na míru. Začněte auditem — pak vyberete konkrétní kroky.",
  keywords: ["AI služby pro firmy", "firemní AI audit", "AI hackathon", "automatizace", "AI školení", "AIKONIC"],
  alternates: { canonical: "https://aikonic.cz/sluzby" },
  openGraph: {
    title: "Služby pro firmy | AIKONIC",
    description: "Firemní AI audit, hackathon, finanční gramotnost a automatizace na míru.",
    url: "https://aikonic.cz/sluzby",
    siteName: "AIKONIC",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Služby AIKONIC pro firmy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Služby pro firmy | AIKONIC",
    description: "Firemní AI audit, hackathon, finanční gramotnost a automatizace na míru.",
    images: ["/og-image.png"],
  },
};

const services = [
  {
    title: "AI do firmy",
    description:
      "Implementace AI a automatizace v administrativě, obchodu a provozu. Konzultace zdarma, pilot, dlouhodobá spolupráce.",
    href: "/ai-do-firmy",
    icon: Building2,
    cardBg: "bg-blue-600/5",
    iconBg: "bg-blue-600/10 text-blue-600",
    iconGlow: "icon-glow-primary",
    hoverBorder: "hover:border-blue-500/30",
  },
  {
    title: "Firemní AI audit",
    description: "Systematická analýza procesů a identifikace míst, kde AI přinese měřitelnou hodnotu. Výstup: plán s prioritami a termíny.",
    href: "/audit",
    icon: ClipboardCheck,
    cardBg: "bg-primary/5",
    iconBg: "bg-primary/10 text-primary",
    iconGlow: "icon-glow-primary",
    hoverBorder: "hover:border-primary/20",
  },
  {
    title: "Jednodenní školení — AI nalejvárna",
    description:
      "Celodenní bootcamp: promptování, vaše data, automatizace, osobní asistent. Praxe na reálných úkolech.",
    href: "/jednodenni-skoleni-ai",
    icon: CalendarDays,
    cardBg: "bg-cyan-500/5",
    iconBg: "bg-cyan-600/10 text-cyan-700",
    iconGlow: "icon-glow-primary",
    hoverBorder: "hover:border-cyan-500/30",
  },
  {
    title: "Dvoudenní školení — nalejvárna a realizační den",
    description:
      "Den první: AI nalejvárna. Den druhý: týmy dotahují projekty z auditu k prototypu — facilitace, testování, závěrečné prezentace.",
    href: "/dvoudenni-skoleni-ai",
    icon: CalendarRange,
    cardBg: "bg-indigo-500/5",
    iconBg: "bg-indigo-600/10 text-indigo-700",
    iconGlow: "icon-glow-violet",
    hoverBorder: "hover:border-indigo-400/30",
  },
  {
    title: "Intenzivní AI Hackathon",
    description: "Od 4 hodin po libovolný počet dní, na domluvu. Žádná teorie — intenzivní praxe a práce s AI.",
    href: "/ai-hackathon",
    icon: Zap,
    cardBg: "bg-amber-500/5",
    iconBg: "bg-amber-500/10 text-amber-600",
    iconGlow: "icon-glow-amber",
    hoverBorder: "hover:border-amber-400/30",
  },
  {
    title: "Finanční gramotnost pro firmy",
    description: "Dvoudenní školení: rozpočet, úvěry, investice a pojištění. Praktické principy a cvičení na míru.",
    href: "/financni-gramotnost",
    icon: PieChart,
    cardBg: "bg-emerald-500/5",
    iconBg: "bg-emerald-500/10 text-emerald-600",
    iconGlow: "icon-glow-emerald",
    hoverBorder: "hover:border-emerald-400/30",
  },
  {
    title: "Automatizace na míru",
    description: "Vlastní AI agenty a propojení systémů. Rutinu přenecháme strojům; vy se věnujete tomu, co přináší hodnotu.",
    href: "/#contact",
    icon: Cpu,
    cardBg: "bg-violet-500/5",
    iconBg: "bg-violet-500/10 text-violet-600",
    iconGlow: "icon-glow-violet",
    hoverBorder: "hover:border-violet-400/30",
  },
];

export default function SluzbyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main" className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-200 pb-16 pt-28 md:pb-24 md:pt-36">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute right-1/4 top-24 h-64 w-64 rounded-full bg-violet-400/15 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-amber-300/20 blur-3xl" />
          </div>
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-600 backdrop-blur">
                Co nabízíme
              </p>
              <h1 className="text-3xl font-semibold leading-tight text-text sm:text-4xl md:text-5xl lg:text-6xl">
                Služby pro firmy
              </h1>
              <p className="mt-6 max-w-2xl text-xl text-slate-600 md:text-2xl">
                Začněte auditem — zjistíme, kde AI přinese nejvíc. Na jeho základě pak vyberete konkrétní kroky.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Karty služeb */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <FadeIn key={service.title} delay={index * 0.06} className="h-full">
                    <Link
                      href={service.href}
                      className={`group flex h-full flex-col rounded-3xl border border-slate-200 ${service.cardBg} p-6 shadow-sm transition hover:-translate-y-1 ${service.hoverBorder} hover:shadow-lg md:p-8`}
                    >
                      <span className={`${service.iconGlow} ${service.iconBg} flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-200 group-hover:scale-110`}>
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <h2 className="mt-5 text-xl font-semibold text-text md:text-2xl">
                        {service.title}
                      </h2>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                        {service.description}
                      </p>
                      <span className="mt-5 inline-flex items-center text-sm font-semibold text-primary">
                        Více informací
                        <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </Link>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-slate-200 py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl bg-gradient-to-r from-primary via-blue-600 to-violet-600 px-6 py-12 text-white shadow-2xl md:px-12">
              <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    Další krok
                  </p>
                  <h2 className="text-2xl font-semibold md:text-3xl">
                    Domluvit konzultaci
                  </h2>
                  <p className="mt-2 text-white/80">
                    Napište nám nebo zavolejte — připravíme nabídku na míru.
                  </p>
                </div>
                <Button size="lg" asChild className="min-h-[48px] shrink-0 bg-white text-text hover:bg-white/90">
                  <Link href="/#contact">
                    Kontaktovat nás
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
