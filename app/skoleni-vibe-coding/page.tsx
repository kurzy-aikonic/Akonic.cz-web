import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { FadeIn } from "../../components/FadeIn";
import { Button } from "../../components/ui/button";
import { ArrowRight, Bot, CheckCircle2, Code2 } from "lucide-react";
import { pageMetadata, serviceJsonLd, breadcrumbJsonLd } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Školení Vibe coding — Claude Code a Cursor",
  description:
    "Školení Claude Code a Cursor pro vývojáře i začátečníky. Naučíme vás psát a upravovat kód s AI v páru — rychlejší vývoj, méně rutiny, čistší kód.",
  keywords: [
    "školení Claude Code",
    "kurz Cursor",
    "vibe coding školení",
    "AI pro vývojáře",
    "Claude Code kurz",
    "AIKONIC",
  ],
  path: "/skoleni-vibe-coding",
  ogDescription: "Claude Code a Cursor od základů po každodenní použití — pro vývojáře i ty, kdo chtějí s kódem začít.",
});

const jsonLd = [
  serviceJsonLd({
    name: "Školení Vibe coding — Claude Code a Cursor",
    description: "Programování s AI v páru — Claude Code a Cursor od základů po každodenní použití.",
    path: "/skoleni-vibe-coding",
  }),
  breadcrumbJsonLd([
    { name: "Domů", path: "/" },
    { name: "Vibe coding", path: "/skoleni-vibe-coding" },
  ]),
];

const blockColors = [
  { card: "bg-primary/5", num: "bg-primary/10 text-primary" },
  { card: "bg-violet-500/5", num: "bg-violet-500/10 text-violet-600" },
  { card: "bg-amber-500/5", num: "bg-amber-500/10 text-amber-600" },
  { card: "bg-emerald-500/5", num: "bg-emerald-500/10 text-emerald-600" },
];

const blocks = [
  {
    title: "Základy vibe codingu",
    text: "Co to znamená programovat s AI v páru, jak formulovat zadání a jak číst a usměrňovat návrhy, které agent generuje.",
  },
  {
    title: "Claude Code v praxi",
    text: "Práce s repozitářem, plánování větších úprav, refaktoring a debugging s AI agentem přímo v terminálu.",
  },
  {
    title: "Cursor od základů po pokročilé",
    text: "Editor navržený pro AI-first vývoj — kontext, pravidla projektu, agentní režim a rychlé iterace nad vlastním kódem.",
  },
  {
    title: "Vlastní projekt jako cvičení",
    text: "Na reálném úkolu z vaší praxe si vyzkoušíte celý cyklus: zadání, generování, review, úprava a nasazení.",
  },
];

const focusPoints = [
  "Pro vývojáře, kteří chtějí zrychlit každodenní práci",
  "Pro začátečníky, kteří se chtějí naučit stavět s AI vlastní nástroje",
  "Praxe na vašich repozitářích a úkolech, ne na obecných ukázkách",
];

const outcomes = [
  "Nastavené prostředí Claude Code a Cursor připravené k okamžitému použití",
  "Vlastní pravidla a kontext projektu pro efektivnější práci s AI agenty",
  "Zvládnuté základní i pokročilé techniky zadávání a review AI kódu",
  "Osobní plán, jak vibe coding zapojit do dalšího vývoje",
];

export default function SkoleniVibeCodingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content" role="main" className="min-h-screen bg-background">
        <section
          aria-labelledby="vibe-heading"
          className="relative overflow-hidden border-b border-slate-200 pb-16 pt-28 md:pb-24 md:pt-36"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute right-1/4 top-24 h-64 w-64 rounded-full bg-violet-300/25 blur-3xl" />
          </div>
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-600 backdrop-blur">
                Služby
              </p>
              <h1
                id="vibe-heading"
                className="text-3xl font-semibold leading-tight text-text sm:text-4xl md:text-5xl lg:text-6xl"
              >
                Školení Vibe coding — Claude Code a Cursor
              </h1>
              <p className="mt-6 max-w-2xl text-xl text-slate-600 md:text-2xl">
                Programování s AI v páru. Naučíme vás Claude Code a Cursor od základů po každodenní použití — pro vývojáře i ty, kdo chtějí s kódem začít.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-12 md:py-16" aria-label="O školení">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-primary/5 p-6 shadow-sm md:p-8">
              <p className="text-base leading-relaxed text-slate-700 md:text-lg">
                <strong className="text-text">AI agenti dnes umí psát a upravovat kód rychleji, než stihnete napsat zadání</strong> — pokud víte, jak s nimi pracovat. Školení{" "}
                <strong className="text-text">Vibe coding</strong> vás naučí Claude Code a Cursor v praxi: od prvního promptu po produktivní každodenní workflow na vašich vlastních projektech.
              </p>
            </FadeIn>
          </div>
        </section>

        <section
          aria-labelledby="program-heading"
          className="bg-gradient-to-b from-slate-50/60 via-transparent to-transparent py-16 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <FadeIn className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Program školení
              </p>
              <h2 id="program-heading" className="mt-2 text-3xl font-semibold text-text md:text-4xl">
                Čtyři bloky. Od základů po práci na vlastním projektu.
              </h2>
            </FadeIn>

            <div className="grid gap-6 sm:grid-cols-2">
              {blocks.map((block, index) => {
                const colors = blockColors[index % blockColors.length];
                return (
                  <FadeIn key={block.title} delay={index * 0.05}>
                    <article
                      className={`flex h-full flex-col rounded-2xl border border-slate-200 ${colors.card} p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md`}
                    >
                      <span
                        className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl ${colors.num} text-sm font-semibold`}
                      >
                        {index + 1}
                      </span>
                      <h3 className="font-semibold text-text">{block.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{block.text}</p>
                    </article>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16" aria-label="Pro koho je školení">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-violet-500/5 p-6 shadow-sm md:p-8">
              <h2 className="text-xl font-semibold text-text md:text-2xl">
                Pro koho je školení
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {focusPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        <section className="py-12 md:py-20" aria-labelledby="vysledek-heading">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-gradient-to-br from-primary/5 via-white to-violet-500/5 p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3">
                <span className="icon-glow-primary flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Code2 className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 id="vysledek-heading" className="text-2xl font-semibold text-text md:text-3xl">
                  Co si odnesete
                </h2>
              </div>
              <ul className="mt-6 space-y-3">
                {outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        <section className="py-10 md:py-12" aria-label="Související">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-center text-sm text-slate-600 md:p-6">
              <Bot className="mx-auto mb-2 h-5 w-5 text-primary" aria-hidden="true" />
              Chcete kromě kódu i další AI nástroje pro celý tým?{" "}
              <Link href="/jednodenni-skoleni-ai" className="font-semibold text-primary hover:underline">
                Jednodenní AI nalejvárna →
              </Link>
            </FadeIn>
          </div>
        </section>

        <section className="border-t border-slate-200 py-16 md:py-24" aria-labelledby="cta-heading">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl bg-gradient-to-r from-primary via-blue-600 to-violet-600 px-6 py-12 text-white shadow-2xl md:px-12">
              <div className="flex flex-col items-stretch gap-6 sm:items-start md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    Další krok
                  </p>
                  <h2 id="cta-heading" className="text-2xl font-semibold md:text-3xl">
                    Domluvit termín
                  </h2>
                  <p className="mt-2 text-white/80">
                    Napište nám počet účastníků a jejich úroveň — připravíme program na míru. Úvodní konzultace zdarma a nezávazně.
                  </p>
                </div>
                <Button
                  size="lg"
                  asChild
                  className="min-h-[48px] w-full shrink-0 bg-white text-text hover:bg-white/90 sm:w-auto"
                >
                  <Link href="/#contact" className="inline-flex min-h-[48px] items-center justify-center">
                    Kontaktovat nás
                    <ArrowRight className="ml-2 h-4 w-4 shrink-0" aria-hidden="true" />
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
