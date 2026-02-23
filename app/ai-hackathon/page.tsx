import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { FadeIn } from "../../components/FadeIn";
import { Button } from "../../components/ui/button";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Intenzivní AI Hackathon | AIKONIC",
  description:
    "Týmová práce na konkrétních AI projektech z auditu. Od nápadu k funkčnímu prototypu v jeden den.",
};

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
  "Vyškolení interní šampioni pro každý projekt",
  "Momentum pro pokračování AI transformace",
];

export default function AIHackathonPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
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
              <h1 className="text-4xl font-semibold leading-tight text-text md:text-5xl lg:text-6xl">
                Intenzivní AI Hackathon
              </h1>
              <p className="mt-6 max-w-2xl text-xl text-slate-600 md:text-2xl">
                Týmová práce na projektech, které potřebujete dotáhnout do cíle.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm md:p-8">
              <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                AI Hackathon navazuje na audit a představuje praktickou fázi
                implementace. Účastníci pracují v týmech na konkrétních AI
                projektech identifikovaných během auditu — od nápadu k funkčnímu
                prototypu v jeden intenzivní den.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Jak to probíhá */}
        <section className="py-12 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <FadeIn className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Jak to probíhá
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-text md:text-4xl">
                Jeden den. Jasný cíl. Měřitelné výstupy.
              </h2>
            </FadeIn>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <FadeIn key={step.title} delay={index * 0.05}>
                  <article className="flex flex-col rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
                    <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-sm font-semibold text-primary">
                      {index + 1}
                    </span>
                    <h3 className="font-semibold text-text">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {step.text}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Výsledek */}
        <section className="py-12 md:py-20">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-gradient-to-br from-primary/5 via-white to-slate-50/80 p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Zap className="h-6 w-6" />
                </span>
                <h2 className="text-2xl font-semibold text-text md:text-3xl">
                  Výsledek
                </h2>
              </div>
              <ul className="mt-6 space-y-3">
                {outcomes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
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
