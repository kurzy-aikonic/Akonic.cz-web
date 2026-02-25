import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { FadeIn } from "../../components/FadeIn";
import { Button } from "../../components/ui/button";
import { ArrowRight, Calendar, PieChart } from "lucide-react";

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

const day1 = [
  { title: "Úvod a osobní finance", text: "Proč věnovat čas financím a jak plánování mění život." },
  { title: "Princip peněz a historie", text: "Jak peníze fungují dnes a jak inflace ovlivňuje úspory." },
  { title: "Základy finanční gramotnosti", text: "Rozpočet, jeho sestavení a případová studie úspěšného plánu." },
  { title: "Úvěry a hypotéky", text: "Typy úvěrů, parametry hypoték a dopad na finanční stabilitu." },
  { title: "Investice a jejich principy", text: "Strategie, diverzifikace a složený úrok. Rizika a příležitosti." },
  { title: "Volná diskuze", text: "Dotazy a sdílení zkušeností účastníků." },
];

const day2 = [
  { title: "Pokročilé investiční strategie", text: "Investiční nástroje, případové studie a trendy na trhu." },
  { title: "Pojištění v osobním plánu", text: "Životní a majetkové pojištění. Příklady z praxe." },
  { title: "Osobní finanční plánování", text: "Stanovení cílů, rozpočet a investice v praxi." },
  { title: "Praktická cvičení a simulace", text: "Simulace rozhodnutí, sestavení plánu ve skupinách, zpětná vazba." },
  { title: "Shrnutí a další kroky", text: "Klíčové poznatky a jak pokračovat na cestě k finanční svobodě." },
];

export default function FinancniGramotnostPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main" className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-200 pb-16 pt-28 md:pb-24 md:pt-36">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
          </div>
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
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
            <FadeIn className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm md:p-8">
              <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                Dvoudenní školení pro vaše lidi: od rozpočtu a úvěrů po investice a pojištění. Praktické principy, případové studie a cvičení. Harmonogram lze přizpůsobit potřebám a zájmům účastníků.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Harmonogram */}
        <section className="py-12 md:py-20">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <FadeIn className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Harmonogram
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-text md:text-4xl">
                Dva dny. Jasná struktura. Měřitelné know-how.
              </h2>
            </FadeIn>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Den 1 */}
              <FadeIn delay={0.05}>
                <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-sm md:rounded-3xl">
                  <div className="flex items-center gap-4 border-b border-slate-200 bg-slate-50/80 px-6 py-5">
                    <span className="icon-glow-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Calendar className="h-6 w-6" />
                    </span>
                    <h3 className="text-xl font-semibold text-text">Den 1</h3>
                  </div>
                  <ul className="divide-y divide-slate-100 p-6">
                    {day1.map((block) => (
                      <li key={block.title} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <div className="min-w-0">
                          <p className="font-medium text-text">{block.title}</p>
                          <p className="mt-1 text-sm leading-relaxed text-slate-600">{block.text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>

              {/* Den 2 */}
              <FadeIn delay={0.1}>
                <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-sm md:rounded-3xl">
                  <div className="flex items-center gap-4 border-b border-slate-200 bg-slate-50/80 px-6 py-5">
                    <span className="icon-glow-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <PieChart className="h-6 w-6" />
                    </span>
                    <h3 className="text-xl font-semibold text-text">Den 2</h3>
                  </div>
                  <ul className="divide-y divide-slate-100 p-6">
                    {day2.map((block) => (
                      <li key={block.title} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <div className="min-w-0">
                          <p className="font-medium text-text">{block.title}</p>
                          <p className="mt-1 text-sm leading-relaxed text-slate-600">{block.text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            </div>

            <FadeIn className="mt-8">
              <p className="text-center text-sm text-slate-500">
                Harmonogram lze upravit podle vašich potřeb a zájmů účastníků.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-slate-200 py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl bg-gradient-to-r from-primary via-blue-600 to-indigo-600 px-6 py-12 text-white shadow-xl md:px-12">
              <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold md:text-3xl">
                    Další krok: domluvit konzultaci
                  </h2>
                  <p className="mt-2 text-white/90">
                    Napište nám nebo zavolejte — připravíme nabídku na míru.
                  </p>
                </div>
                <Button size="lg" asChild className="bg-white text-text hover:bg-white/90">
                  <Link href="/#contact">
                    Domluvit konzultaci
                    <ArrowRight className="ml-2 h-4 w-4" />
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
