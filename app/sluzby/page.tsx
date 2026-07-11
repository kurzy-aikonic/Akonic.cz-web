import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { FadeIn } from "../../components/FadeIn";
import { Button } from "../../components/ui/button";
import { ArrowRight, Briefcase, Building2, CalendarDays, CalendarRange, ClipboardCheck, Code2, Cpu, PieChart, Zap } from "lucide-react";
import { pageMetadata, breadcrumbJsonLd } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Služby pro firmy",
  description:
    "Firemní AI audit, AI Hackathon, finanční gramotnost a automatizace na míru. Začněte auditem — pak vyberete konkrétní kroky.",
  keywords: ["AI služby pro firmy", "firemní AI audit", "AI hackathon", "automatizace", "AI školení", "AIKONIC"],
  path: "/sluzby",
  ogDescription: "Firemní AI audit, hackathon, finanční gramotnost a automatizace na míru.",
});

const jsonLd = [
  breadcrumbJsonLd([
    { name: "Domů", path: "/" },
    { name: "Služby", path: "/sluzby" },
  ]),
];

const services = [
  {
    title: "AI do firmy",
    description:
      "Implementace AI a automatizace v administrativě, obchodu a provozu. Konzultace zdarma, pilot, dlouhodobá spolupráce.",
    href: "/ai-do-firmy",
    icon: Building2,
    cardBg: "bg-primary/5",
    iconBg: "bg-primary/10 text-primary",
    iconGlow: "icon-glow-primary",
    hoverBorder: "hover:border-primary/25",
  },
  {
    title: "Jednodenní školení — AI nalejvárna",
    description:
      "Celodenní bootcamp: promptování, vaše data, automatizace, osobní asistent. Praxe na reálných úkolech.",
    href: "/jednodenni-skoleni-ai",
    icon: CalendarDays,
    cardBg: "bg-emerald-500/5",
    iconBg: "bg-emerald-500/10 text-emerald-600",
    iconGlow: "icon-glow-emerald",
    hoverBorder: "hover:border-emerald-400/30",
  },
  {
    title: "Dvoudenní školení — nalejvárna a realizační den",
    description:
      "Den první: AI nalejvárna. Den druhý: týmy dotahují projekty z auditu k prototypu — facilitace, testování, závěrečné prezentace.",
    href: "/dvoudenni-skoleni-ai",
    icon: CalendarRange,
    cardBg: "bg-violet-500/5",
    iconBg: "bg-violet-500/10 text-violet-600",
    iconGlow: "icon-glow-violet",
    hoverBorder: "hover:border-violet-400/30",
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
    title: "Automatizace na míru",
    description: "Vlastní AI agenty a propojení systémů. Rutinu přenecháme strojům; vy se věnujete tomu, co přináší hodnotu.",
    href: "/automatizace",
    icon: Cpu,
    cardBg: "bg-rose-500/5",
    iconBg: "bg-rose-500/10 text-rose-600",
    iconGlow: "icon-glow-rose",
    hoverBorder: "hover:border-rose-400/30",
  },
  {
    title: "Firemní AI audit",
    description: "Systematická analýza procesů a identifikace míst, kde AI přinese měřitelnou hodnotu. Výstup: plán s prioritami a termíny.",
    href: "/audit",
    icon: ClipboardCheck,
    cardBg: "bg-primary/5",
    iconBg: "bg-primary/10 text-primary",
    iconGlow: "icon-glow-primary",
    hoverBorder: "hover:border-primary/25",
  },
  {
    title: "Školení AI pro obchodníky",
    description: "AI jako parťák v obchodu. ChatGPT, Fireflies, Notion, Miro — vyšší konverze, rychlejší cyklus, lepší follow-upy.",
    href: "/skoleni-pro-obchodniky",
    icon: Briefcase,
    cardBg: "bg-blue-600/5",
    iconBg: "bg-blue-600/10 text-blue-600",
    iconGlow: "icon-glow-primary",
    hoverBorder: "hover:border-blue-500/30",
  },
  {
    title: "Školení Vibe coding — Claude Code, Cursor",
    description: "Programování s AI v páru. Claude Code a Cursor od základů po každodenní použití: rychlejší vývoj, méně rutiny, čistší kód.",
    href: "/skoleni-vibe-coding",
    icon: Code2,
    cardBg: "bg-violet-500/5",
    iconBg: "bg-violet-500/10 text-violet-600",
    iconGlow: "icon-glow-violet",
    hoverBorder: "hover:border-violet-400/30",
  },
  {
    title: "Kurz finanční gramotnosti ve firmě",
    description: "Dvoudenní školení: rozpočet, úvěry, investice a pojištění. Praktické principy a cvičení na míru.",
    href: "/financni-gramotnost",
    icon: PieChart,
    cardBg: "bg-emerald-500/5",
    iconBg: "bg-emerald-500/10 text-emerald-600",
    iconGlow: "icon-glow-emerald",
    hoverBorder: "hover:border-emerald-400/30",
  },
];

export default function SluzbyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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

        {/* Karty služeb — stejný pořad a flow jako Možnosti spolupráce na homepage */}
        <section className="py-16 md:py-24" aria-labelledby="sluzby-karty-heading">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 id="sluzby-karty-heading" className="sr-only">
              Přehled služeb
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <FadeIn key={service.title} delay={index * 0.05} className="h-full">
                    <Link
                      href={service.href}
                      className={`group relative flex h-full min-h-[180px] flex-col overflow-hidden rounded-2xl border border-slate-200 p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 ${service.cardBg} ${service.hoverBorder} hover:shadow-xl md:p-8`}
                    >
                      <span className="card-shimmer" aria-hidden="true" />
                      <span className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${service.iconGlow} ${service.iconBg}`}>
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <h3 className="relative z-10 mt-5 text-xl font-semibold text-text md:text-2xl">
                        {service.title}
                      </h3>
                      <p className="relative z-10 mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                        {service.description}
                      </p>
                      <span className="relative z-10 mt-5 inline-flex items-center text-sm font-semibold text-primary transition duration-300 group-hover:translate-x-0.5">
                        Více informací
                        <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
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
