import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { FadeIn } from "../../components/FadeIn";
import { Button } from "../../components/ui/button";
import { ArrowRight, CheckCircle2, ClipboardCheck } from "lucide-react";
import { pageMetadata, serviceJsonLd, breadcrumbJsonLd } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Firemní AI audit",
  description:
    "Systematická analýza procesů a identifikace míst, kde AI přinese měřitelnou hodnotu. Výstup: detailní plán s prioritami a termíny.",
  keywords: ["firemní AI audit", "audit AI", "AI v organizaci", "AI konzultace", "AIKONIC"],
  path: "/audit",
});

const jsonLd = [
  serviceJsonLd({
    name: "Firemní AI audit",
    description:
      "Systematická analýza procesů a identifikace míst, kde AI přinese měřitelnou hodnotu. Výstup: detailní plán s prioritami a termíny.",
    path: "/audit",
    minPrice: 35000,
  }),
  breadcrumbJsonLd([
    { name: "Domů", path: "/" },
    { name: "Firemní AI audit", path: "/audit" },
  ]),
];

const steps = [
  {
    title: "Online dotazník",
    text: "Každý člen týmu vyplní dotazník: úroveň AI znalostí, motivace a pracovní procesy. Získáme přehled o kondici organizace.",
    color: "bg-primary/5",
    numBg: "bg-primary/10 text-primary",
  },
  {
    title: "Hloubkové rozhovory",
    text: "45minutové rozhovory s klíčovými lidmi — reálné bolestivé body, postupy a požadavky jednotlivých rolí.",
    color: "bg-violet-500/5",
    numBg: "bg-violet-500/10 text-violet-600",
  },
  {
    title: "Pozorování v praxi",
    text: "Jeden den u vás v organizaci. Sledujeme, jak lidé skutečně pracují, a mapujeme příležitosti pro automatizaci.",
    color: "bg-amber-500/5",
    numBg: "bg-amber-500/10 text-amber-600",
  },
  {
    title: "Identifikace AI ambasadorů",
    text: "Během procesu vybereme členy týmu s motivací a potenciálem stát se interními AI ambasadory.",
    color: "bg-emerald-500/5",
    numBg: "bg-emerald-500/10 text-emerald-600",
  },
  {
    title: "Detailní report s doporučeními",
    text: "Do 14 dnů obdržíte report: konkrétní AI příležitosti, prioritizace podle dopadu a náročnosti, návrh nástrojů a implementační plán.",
    color: "bg-rose-500/5",
    numBg: "bg-rose-500/10 text-rose-600",
  },
  {
    title: "Předávací schůzka",
    text: "45 minut — projdeme report, zodpovím dotazy a domluvíme další kroky implementace.",
    color: "bg-blue-500/5",
    numBg: "bg-blue-500/10 text-blue-600",
  },
];

const outcomes = [
  "Konkrétní seznam projektů s odhadovanými úsporami času",
  "Identifikovaní AI ambasadoři v týmu",
  "Jasný plán dalších kroků pro AI transformaci",
];

export default function AuditPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content" className="min-h-screen bg-background" role="main">
        {/* Hero */}
        <section aria-labelledby="audit-heading" className="relative overflow-hidden border-b border-slate-200 pb-16 pt-28 md:pb-24 md:pt-36">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute right-1/4 top-24 h-64 w-64 rounded-full bg-violet-400/15 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-amber-300/20 blur-3xl" />
          </div>
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-600 backdrop-blur">
                Služby
              </p>
              <h1 id="audit-heading" className="text-3xl font-semibold leading-tight text-text sm:text-4xl md:text-5xl lg:text-6xl">
                Firemní AI audit
              </h1>
              <p className="mt-6 max-w-2xl text-xl text-slate-600 md:text-2xl">
                Skrytý potenciál vaší organizace. Ne obecné rady — konkrétní plán s prioritami a termíny.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 md:py-16" aria-label="O auditu">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-primary/5 p-6 shadow-sm md:p-8">
              <p className="text-base leading-relaxed text-slate-700 md:text-lg">
                Audit odhaluje, kde může AI přinést měřitelnou hodnotu: systematická analýza procesů, rozhovory a den v praxi. Výstupem je detailní report s doporučeními a implementačním plánem — ne teoretický dokument, ale podklady pro další kroky.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Jak to probíhá */}
        <section aria-labelledby="jak-probiha-heading" className="bg-gradient-to-b from-slate-50/60 via-transparent to-transparent py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <FadeIn className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Jak to probíhá
              </p>
              <h2 id="jak-probiha-heading" className="mt-2 text-3xl font-semibold text-text md:text-4xl">
                Šest kroků k jasnému plánu.
              </h2>
            </FadeIn>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {steps.map((step, index) => (
                <FadeIn key={step.title} delay={index * 0.05}>
                  <article className={`flex h-full flex-col rounded-2xl border border-slate-200 ${step.color} p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md`}>
                    <span className={`mb-3 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${step.numBg} text-sm font-semibold`}>
                      {index + 1}
                    </span>
                    <h3 className="font-semibold text-text">{step.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                      {step.text}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Výsledek */}
        <section aria-labelledby="vysledek-heading" className="py-12 md:py-20">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-gradient-to-br from-primary/5 via-white to-violet-500/5 p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3">
                <span className="icon-glow-primary flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <ClipboardCheck className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 id="vysledek-heading" className="text-2xl font-semibold text-text md:text-3xl">
                  Co získáte
                </h2>
              </div>
              <ul className="mt-6 space-y-3">
                {outcomes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section aria-labelledby="cta-heading" className="border-t border-slate-200 py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl bg-gradient-to-r from-primary via-blue-600 to-violet-600 px-6 py-12 text-white shadow-2xl md:px-12">
              <div className="flex flex-col items-stretch gap-6 sm:items-start md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    Další krok
                  </p>
                  <h2 id="cta-heading" className="text-2xl font-semibold md:text-3xl">
                    Domluvit konzultaci
                  </h2>
                  <p className="mt-2 text-white/80">
                    Napište nám nebo zavolejte — připravíme nabídku na míru.
                  </p>
                </div>
                <Button size="lg" asChild className="min-h-[48px] w-full shrink-0 bg-white text-text hover:bg-white/90 sm:w-auto">
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
