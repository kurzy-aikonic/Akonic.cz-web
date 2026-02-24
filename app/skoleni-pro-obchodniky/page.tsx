import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { FadeIn } from "../../components/FadeIn";
import { Button } from "../../components/ui/button";
import { ArrowRight, Briefcase, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Školení AI pro obchodníky | AIKONIC",
  description:
    "AI jako parťák v obchodu. ChatGPT, Fireflies, Notion, Miro — vyšší konverze, rychlejší cyklus, lepší follow-upy.",
};

const blocks = [
  {
    title: "Mindset a role AI v obchodu",
    text: "AI jako každodenní obchodní parťák: příprava na schůzky, follow-upy, argumentace. Diskuse o vašich výzvách a workshop — každý si vytvoří vlastní „AI scénář“ pro praxi.",
  },
  {
    title: "ChatGPT jako obchodní asistent",
    text: "Správné prompty, kontext a tvorba materiálů. ChatGPT pro přípravu jednání, simulaci námitkových rozhovorů a e-maily. Prakticky: tři prompty na míru vašemu produktu. Bonus: PDF s prodejními šablonami.",
  },
  {
    title: "Nástroje, které šetří čas",
    text: "Fireflies — záznam a sumarizace schůzek. Miro — vizualizace strategie a obchodních toků. Notion — playbook, deník a dashboard. Ukázka „jeden den s AI obchodníkem“ a workshop: vlastní AI dashboard v Notionu.",
  },
  {
    title: "Vlastní AI BOOST plán",
    text: "AI mapa přínosů a osobní plán zavádění: Zítra začnu… Do týdne zavedu… Do měsíce vyhodnotím… Sdílení, dotazy a doporučení pro další rozvoj.",
  },
];

const tools = [
  "ChatGPT / Claude / Gemini — simulace, texty, strategie",
  "Fireflies.ai — záznam a analýza schůzek",
  "Notion — playbook, checklisty, AI dashboard",
  "Miro — týmová nástěnka, AI mapa přínosů",
];

const outcomes = [
  "Vyšší konverze, rychlejší obchodní cyklus, lepší follow-upy",
  "Konkrétní dovednosti: prompty, nástroje a vlastní plán od zítřka",
  "Bonusové materiály a šablony pro každodenní použití",
];

export default function SkoleniProObchodnikyPage() {
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
                Školení AI pro obchodníky
              </h1>
              <p className="mt-6 max-w-2xl text-xl text-slate-600 md:text-2xl">
                Nový mindset: AI jako parťák pro každodenní obchod. Měřitelný dopad na konverze, cyklus a follow-upy.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm md:p-8">
              <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                Cílem tohoto intenzivního školení je rychle změnit pohled obchodníků na práci s AI.
                Ukážeme, že nástroje jako ChatGPT, Fireflies nebo Notion nejsou hrozbou, ale pomocníkem, který šetří čas a zlepšuje výsledky.
                Účastníci získají základy práce s AI, uvidí reálné příklady a vytvoří si vlastní plán zavádění do každodenní rutiny.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Program */}
        <section className="py-12 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <FadeIn className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Program
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-text md:text-4xl">
                Čtyři bloky. Praktické dovednosti. Vlastní plán.
              </h2>
            </FadeIn>

            <div className="grid gap-4 sm:grid-cols-2">
              {blocks.map((block, index) => (
                <FadeIn key={block.title} delay={index * 0.05}>
                  <article className="flex flex-col rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
                    <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-sm font-semibold text-primary">
                      {index + 1}
                    </span>
                    <h3 className="font-semibold text-text">{block.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {block.text}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Nástroje */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm md:p-8">
              <h2 className="text-xl font-semibold text-text md:text-2xl">
                Používané nástroje a aktivity
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {tools.map((tool) => (
                  <li key={tool} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {tool}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* Výsledek */}
        <section className="py-12 md:py-20">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-gradient-to-br from-primary/5 via-white to-slate-50/80 p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3">
                <span className="icon-glow-primary flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Briefcase className="h-6 w-6" />
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
