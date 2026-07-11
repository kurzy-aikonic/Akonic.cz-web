import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { FadeIn } from "../../components/FadeIn";
import { Button } from "../../components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  MapPin,
  Users,
  Home,
  Tent,
  CalendarDays,
  Target,
  ExternalLink,
} from "lucide-react";
import { pageMetadata, serviceJsonLd, breadcrumbJsonLd } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Intenzivní AI Hackathon",
  description:
    "Firemní AI hackathon od 4 hodin po několik dní. Intenzivní praxe, reálné prototypy a jedinečné prostředí historického statku Aigeluvlom u Poličky — kapacita až 80 osob.",
  keywords: [
    "AI hackathon",
    "firemní hackathon",
    "AI workshop",
    "AI praxe",
    "hackathon Polička",
    "Aigeluvlom",
    "firemní akce s ubytováním",
    "AIKONIC",
  ],
  path: "/ai-hackathon",
  ogDescription: "Hackathony od 4 hodin po libovolný počet dní. Intenzivní praxe s AI — historický statek u Poličky.",
});

const jsonLd = [
  serviceJsonLd({
    name: "Intenzivní AI Hackathon",
    description: "Firemní AI hackathon od 4 hodin po několik dní na statku Aigeluvlom u Poličky.",
    path: "/ai-hackathon",
  }),
  breadcrumbJsonLd([
    { name: "Domů", path: "/" },
    { name: "AI Hackathon", path: "/ai-hackathon" },
  ]),
];

const stepColors = [
  { card: "bg-primary/5",     num: "bg-primary/10 text-primary" },
  { card: "bg-amber-500/5",   num: "bg-amber-500/10 text-amber-600" },
  { card: "bg-emerald-500/5", num: "bg-emerald-500/10 text-emerald-600" },
  { card: "bg-violet-500/5",  num: "bg-violet-500/10 text-violet-600" },
  { card: "bg-rose-500/5",    num: "bg-rose-500/10 text-rose-600" },
  { card: "bg-blue-500/5",    num: "bg-blue-500/10 text-blue-600" },
  { card: "bg-amber-500/5",   num: "bg-amber-500/10 text-amber-600" },
  { card: "bg-primary/5",     num: "bg-primary/10 text-primary" },
];

const steps = [
  {
    title: "Rozdělení do týmů",
    text: "Podle auditu a dovedností sestavíme týmy 4–6 lidí pokrývající techniku, procesy i uživatelský pohled.",
  },
  {
    title: "Definice projektů",
    text: "Každý tým vybere projekt z auditu a stanoví cíl na den: od wireframů po fungující prototyp.",
  },
  {
    title: "Facilitovaná implementace",
    text: "Průběžná podpora všem týmům, pomoc s technickými problémy a udržení fokusu na dosažitelných cílech.",
  },
  {
    title: "Praktické ukázky",
    text: "Jak podobné výzvy řešily jiné firmy, jaké nástroje použít a jak překonat typické překážky.",
  },
  {
    title: "Hodinové kontrolní body",
    text: "Týmy sdílejí pokrok, problémy a nápady. Často vznikají synergie mezi projekty.",
  },
  {
    title: "Testování s uživateli",
    text: "Odpoledne týmy testují řešení s kolegy, kteří nástroje budou používat, a vylepšují je podle zpětné vazby.",
  },
  {
    title: "Dokončení a dokumentace",
    text: "Závěr dne: dokončení projektů, stručná dokumentace a plán udržitelnosti řešení.",
  },
  {
    title: "Demo a evaluace",
    text: "Prezentace týmů, společná evaluace dosažených výsledků a plán dalších kroků pro každý projekt.",
  },
];

const outcomes = [
  "2–4 funkční prototypy nebo první verze AI řešení",
  "Detailní implementační plány",
  "Vyškolení interní ambasadoři pro každý projekt",
  "Momentum pro pokračování AI transformace",
];

const venueFeatures = [
  {
    icon: CalendarDays,
    label: "Termíny",
    value: "Květen – září",
    color: "bg-amber-500/10 text-amber-600",
    glow: "icon-glow-amber",
  },
  {
    icon: Users,
    label: "Kapacita",
    value: "Až 80 osob",
    color: "bg-primary/10 text-primary",
    glow: "icon-glow-primary",
  },
  {
    icon: Home,
    label: "Ubytování",
    value: "12 osob v apartmánech",
    color: "bg-emerald-500/10 text-emerald-600",
    glow: "icon-glow-emerald",
  },
  {
    icon: Tent,
    label: "Outdoor",
    value: "Místo pro stany a karavany",
    color: "bg-violet-500/10 text-violet-600",
    glow: "icon-glow-violet",
  },
  {
    icon: Target,
    label: "Zábava",
    value: "Paintball na místě",
    color: "bg-rose-500/10 text-rose-600",
    glow: "icon-glow-rose",
  },
  {
    icon: MapPin,
    label: "Lokalita",
    value: "Na kraji Poličky",
    color: "bg-blue-500/10 text-blue-600",
    glow: "icon-glow-primary",
  },
];

export default function AIHackathonPage() {
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
            <div className="absolute left-1/4 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-300/25 blur-3xl" />
            <div className="absolute right-1/4 top-24 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-violet-400/15 blur-3xl" />
          </div>
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-600 backdrop-blur">
                Služby
              </p>
              <h1 className="text-3xl font-semibold leading-tight text-text sm:text-4xl md:text-5xl lg:text-6xl">
                Intenzivní AI Hackathon
              </h1>
              <p className="mt-6 max-w-2xl text-xl text-slate-600 md:text-2xl">
                Od 4 hodin po několik dní — rozsah vždy na domluvu. Žádná teorie, jen intenzivní praxe a práce s AI.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-amber-500/5 p-6 shadow-sm md:p-8">
              <p className="text-base leading-relaxed text-slate-700 md:text-lg">
                Hackathony pořádáme od 4 hodin až po libovolný počet dní — konkrétní rozsah vždy domluvíme podle vašich cílů a možností. Nejde o teorii: jde o intenzivní praxi. Účastníci pracují v týmech na reálných AI projektech, ovládají nástroje v akci a odnášejí si řešení, která mohou hned používat.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Jak to probíhá */}
        <section className="bg-gradient-to-b from-amber-50/40 via-transparent to-transparent py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <FadeIn className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Jak to probíhá
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-text md:text-4xl">
                Jasný cíl. Intenzivní praxe. Měřitelné výstupy.
              </h2>
            </FadeIn>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => {
                const colors = stepColors[index % stepColors.length];
                return (
                  <FadeIn key={step.title} delay={index * 0.05}>
                    <article className={`flex h-full flex-col rounded-2xl border border-slate-200 ${colors.card} p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md`}>
                      <span className={`mb-4 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${colors.num} text-sm font-semibold`}>
                        {index + 1}
                      </span>
                      <h3 className="font-semibold text-text">{step.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                        {step.text}
                      </p>
                    </article>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Výsledek */}
        <section className="py-12 md:py-20">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-gradient-to-br from-amber-500/5 via-white to-primary/5 p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-4">
                <span className="icon-glow-amber flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600">
                  <Zap className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="text-xl font-semibold text-text md:text-2xl">
                  Co tým odnese
                </h2>
              </div>
              <ul className="mt-6 space-y-3">
                {outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* Místo konání — Aigeluvlom */}
        <section className="border-y border-slate-200 bg-gradient-to-b from-slate-50/60 via-transparent to-transparent py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <FadeIn className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Místo konání
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-text md:text-4xl">
                Aigeluvlom — 300 let starý statek u Poličky
              </h2>
              <p className="mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
                Hackathony od května do září pořádáme v jedinečném prostředí historického statku
                na kraji Poličky. Krásná příroda, klid a prostor pro soustředěnou práci i týmové
                stmelení — vše na jednom místě.
              </p>
            </FadeIn>

            {/* Feature karty */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {venueFeatures.map((f, index) => {
                const Icon = f.icon;
                return (
                  <FadeIn key={f.label} delay={index * 0.05}>
                    <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                      <span className={`${f.glow} ${f.color} flex h-11 w-11 shrink-0 items-center justify-center rounded-xl`}>
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                          {f.label}
                        </p>
                        <p className="mt-0.5 font-semibold text-text">{f.value}</p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

            {/* Detailní popis + odkazy */}
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {/* Statek */}
              <FadeIn delay={0.05}>
                <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-amber-500/5 p-6 shadow-sm md:p-8">
                  <div className="flex items-center gap-3">
                    <span className="icon-glow-amber flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                      <Home className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-semibold text-text">Aigeluvlom.cz</h3>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                    Historický statek starý přes 300 let nabízí autentické prostředí daleko od
                    kancelářského shonu. Velká sálová místnost pro workshopy, venkovní terasa
                    pro přestávky a příroda kolem — ideální kombinace pro soustředěnou práci
                    i neformální diskuze.
                  </p>
                  <Link
                    href="https://www.aigeluvlom.cz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 transition hover:text-amber-700"
                  >
                    Navštívit Aigeluvlom.cz
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </FadeIn>

              {/* Paintball */}
              <FadeIn delay={0.1}>
                <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-rose-500/5 p-6 shadow-sm md:p-8">
                  <div className="flex items-center gap-3">
                    <span className="icon-glow-rose flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-500/10 text-rose-600">
                      <Target className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-semibold text-text">Paintball Polička</h3>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                    Po intenzivním dni s AI si tým zaslouží odreagování. Přímo u statku je
                    k dispozici paintball — skvělý způsob, jak stmelit tým, odbourat stres
                    a zakončit hackathon s úsměvem. Ideální doplněk vícedenních akcí.
                  </p>
                  <Link
                    href="https://www.paintballpolicka.cz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-rose-600 transition hover:text-rose-700"
                  >
                    Navštívit PaintballPolicka.cz
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Sezónní badge */}
            <FadeIn className="mt-8">
              <div className="flex flex-wrap items-center justify-center gap-3">
                {["Květen", "Červen", "Červenec", "Srpen", "Září"].map((month) => (
                  <span
                    key={month}
                    className="rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-700"
                  >
                    {month}
                  </span>
                ))}
                <span className="ml-1 text-sm text-slate-500">— dostupné termíny</span>
              </div>
            </FadeIn>
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
                    Rezervovat termín hackathonu
                  </h2>
                  <p className="mt-2 text-white/80">
                    Napište nám — domluvíme termín, rozsah i místo konání na míru vašemu týmu.
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
