import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { FadeIn } from "../../components/FadeIn";
import { Button } from "../../components/ui/button";
import { ArrowRight, PieChart, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Kurz finanční gramotnosti ve firmě | AIKONIC",
  description:
    "Dvoudenní školení finanční gramotnosti pro firmy. Rozpočet, úvěry, investice a osobní finanční plán — to, co vám ve škole neřekli.",
  keywords: ["finanční gramotnost", "kurz financí pro firmy", "firemní finance", "školení financí", "AIKONIC"],
  alternates: { canonical: "https://aikonic.cz/financni-gramotnost" },
  openGraph: {
    title: "Kurz finanční gramotnosti ve firmě | AIKONIC",
    description: "Dvoudenní školení finanční gramotnosti. Rozpočet, úvěry, investice a osobní finanční plán.",
    url: "https://aikonic.cz/financni-gramotnost",
    siteName: "AIKONIC",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Finanční gramotnost — AIKONIC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kurz finanční gramotnosti ve firmě | AIKONIC",
    description: "Dvoudenní školení finanční gramotnosti pro firmy.",
    images: ["/og-image.png"],
  },
};

const day1Colors = [
  { card: "bg-emerald-500/5", num: "bg-emerald-500/10 text-emerald-600" },
  { card: "bg-primary/5",     num: "bg-primary/10 text-primary" },
  { card: "bg-amber-500/5",   num: "bg-amber-500/10 text-amber-600" },
  { card: "bg-violet-500/5",  num: "bg-violet-500/10 text-violet-600" },
  { card: "bg-rose-500/5",    num: "bg-rose-500/10 text-rose-600" },
  { card: "bg-blue-500/5",    num: "bg-blue-500/10 text-blue-600" },
];

const day2Colors = [
  { card: "bg-primary/5",     num: "bg-primary/10 text-primary" },
  { card: "bg-amber-500/5",   num: "bg-amber-500/10 text-amber-600" },
  { card: "bg-violet-500/5",  num: "bg-violet-500/10 text-violet-600" },
  { card: "bg-emerald-500/5", num: "bg-emerald-500/10 text-emerald-600" },
  { card: "bg-rose-500/5",    num: "bg-rose-500/10 text-rose-600" },
];

const day1 = [
  { title: "Úvod a osobní finance",        text: "Proč věnovat čas financím a jak plánování mění život." },
  { title: "Princip peněz a historie",     text: "Jak peníze fungují dnes a jak inflace ovlivňuje úspory." },
  { title: "Základy finanční gramotnosti", text: "Rozpočet, jeho sestavení a případová studie úspěšného plánu." },
  { title: "Úvěry a hypotéky",             text: "Typy úvěrů, parametry hypoték a dopad na finanční stabilitu." },
  { title: "Investice a jejich principy",  text: "Strategie, diverzifikace a složený úrok. Rizika a příležitosti." },
  { title: "Volná diskuze",                text: "Dotazy a sdílení zkušeností účastníků." },
];

const day2 = [
  { title: "Pokročilé investiční strategie", text: "Investiční nástroje, případové studie a trendy na trhu." },
  { title: "Pojištění v osobním plánu",      text: "Životní a majetkové pojištění. Příklady z praxe." },
  { title: "Osobní finanční plánování",      text: "Stanovení cílů, rozpočet a investice v praxi." },
  { title: "Praktická cvičení a simulace",   text: "Simulace rozhodnutí, sestavení plánu ve skupinách, zpětná vazba." },
  { title: "Shrnutí a další kroky",          text: "Klíčové poznatky a jak pokračovat na cestě k finanční svobodě." },
];

const outcomes = [
  "Praktické dovednosti: sestavení osobního rozpočtu a investičního plánu",
  "Porozumění úvěrům, hypotékám a pojištění v praxi",
  "Sebejistota při finančních rozhodnutích v osobním i pracovním životě",
];

export default function FinancniGramotnostPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main" className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-200 pb-16 pt-28 md:pb-24 md:pt-36">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="absolute right-1/4 top-24 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-amber-300/20 blur-3xl" />
          </div>
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-600 backdrop-blur">
                Služby
              </p>
              <h1 className="text-3xl font-semibold leading-tight text-text sm:text-4xl md:text-5xl lg:text-6xl">
                Finanční gramotnost pro firmy
              </h1>
              <p className="mt-6 max-w-2xl text-xl text-slate-600 md:text-2xl">
                Základ spokojeného života. A to, co vám ve škole neřekli.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-emerald-500/5 p-6 shadow-sm md:p-8">
              <p className="text-base leading-relaxed text-slate-700 md:text-lg">
                Dvoudenní školení pro vaše lidi: od rozpočtu a úvěrů po investice a pojištění. Praktické principy, případové studie a cvičení. Harmonogram lze přizpůsobit potřebám a zájmům účastníků.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Harmonogram */}
        <section className="bg-gradient-to-b from-emerald-50/40 via-transparent to-transparent py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <FadeIn className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Harmonogram
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-text md:text-4xl">
                Dva dny. Jasná struktura. Měřitelné know-how.
              </h2>
            </FadeIn>

            {/* Den 1 — 6 boxíků, 3 sloupce = 2 řady bez mezer */}
            <FadeIn className="mb-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-xs font-bold text-emerald-600">1</span>
                <h3 className="text-lg font-semibold text-text">Den 1</h3>
              </div>
            </FadeIn>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {day1.map((step, index) => {
                const colors = day1Colors[index];
                return (
                  <FadeIn key={step.title} delay={index * 0.04}>
                    <article className={`flex h-full flex-col rounded-2xl border border-slate-200 ${colors.card} p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md`}>
                      <span className={`mb-3 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${colors.num} text-xs font-bold`}>
                        {index + 1}
                      </span>
                      <h4 className="font-semibold text-text">{step.title}</h4>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{step.text}</p>
                    </article>
                  </FadeIn>
                );
              })}
            </div>

            {/* Den 2 — 5 boxíků, na lg 3+2 (poslední řada zarovnána vlevo) */}
            <FadeIn className="mb-4 mt-10">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">2</span>
                <h3 className="text-lg font-semibold text-text">Den 2</h3>
              </div>
            </FadeIn>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {day2.map((step, index) => {
                const colors = day2Colors[index];
                return (
                  <FadeIn key={step.title} delay={index * 0.04}>
                    <article className={`flex h-full flex-col rounded-2xl border border-slate-200 ${colors.card} p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md`}>
                      <span className={`mb-3 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${colors.num} text-xs font-bold`}>
                        {index + 1}
                      </span>
                      <h4 className="font-semibold text-text">{step.title}</h4>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{step.text}</p>
                    </article>
                  </FadeIn>
                );
              })}
            </div>

            <FadeIn className="mt-8">
              <p className="text-center text-sm text-slate-500">
                Harmonogram lze upravit podle vašich potřeb a zájmů účastníků.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Výsledek */}
        <section className="py-12 md:py-20">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-gradient-to-br from-emerald-500/5 via-white to-primary/5 p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-4">
                <span className="icon-glow-emerald flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600">
                  <PieChart className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="text-xl font-semibold text-text md:text-2xl">
                  Co účastníci získají
                </h2>
              </div>
              <ul className="mt-6 space-y-3">
                {outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
