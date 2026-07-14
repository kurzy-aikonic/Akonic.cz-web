import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { FadeIn } from "../../components/FadeIn";
import { Button } from "../../components/ui/button";
import { AiDoFirmyUseCases } from "../../components/AiDoFirmyUseCases";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock,
  Gauge,
  Layers,
  MessageCircleQuestion,
  Sparkles,
} from "lucide-react";
import { pageMetadata, serviceJsonLd, breadcrumbJsonLd } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "AI do firmy — implementace a automatizace",
  description:
    "Zavedeme AI a automatizaci do vašich procesů: administrativa, obchod, provoz. Konzultace zdarma, první výsledky v krátkém horizontu, spolupráce na míru.",
  keywords: [
    "AI do firmy",
    "firemní AI",
    "automatizace procesů",
    "AI implementace",
    "AIKONIC",
  ],
  path: "/ai-do-firmy",
  ogDescription: "Od auditu bolavých míst po funkční řešení. Úspora času, rychlejší obchod, jednodušší administrativa.",
});

const jsonLd = [
  serviceJsonLd({
    name: "AI do firmy — implementace a automatizace",
    description: "Implementace AI a automatizace přímo do firemních procesů — administrativa, obchod, provoz.",
    path: "/ai-do-firmy",
  }),
  breadcrumbJsonLd([
    { name: "Domů", path: "/" },
    { name: "AI do firmy", path: "/ai-do-firmy" },
  ]),
];

const painPoints = [
  {
    title: "„Vždycky se to tak dělalo.“",
    text: "Před pár lety nešlo napsat text nebo návrh nástroje za deset minut. Pravidla hry se mění — postupy, které dříve stačily, dnes firmu brzdí.",
  },
  {
    title: "„To je jen pár kliknutí, udělám to ručně.“",
    text: "Často to není pár kliknutí, ale zaběhnutý zvyk. Takové úkony se nasčítají a stojí firmu desítky hodin měsíčně.",
  },
  {
    title: "„Myslel jsem, že to měl dělat někdo jiný.“",
    text: "Úkoly ze schůzek nemusí mizet v nejasnostech. S jasným zápisem a přidělením ví každý, co je na něm.",
  },
];

const painColors = [
  { card: "bg-primary/5", num: "bg-primary/10 text-primary" },
  { card: "bg-emerald-500/5", num: "bg-emerald-500/10 text-emerald-600" },
  { card: "bg-violet-500/5", num: "bg-violet-500/10 text-violet-600" },
];

const approachBullets = [
  "Do několika týdnů typicky vidíte první ušetřený čas nebo zrychlení.",
  "Konkrétní řešení: asistenti, napojení systémů, jednoduché automatizace.",
  "Nejdřív místa, kde to bolí nejvíc — a tam začneme.",
];

const pillars = [
  {
    title: "Ušetříme vám čas",
    text: "Opakující se práci převezme část procesu za vás — v hodinách měsíčně se to projeví jasně.",
    icon: Clock,
  },
  {
    title: "Zrychlíme obchod",
    text: "Od poptávky po nabídku a uzavření — méně prostojů a ručního přepisování.",
    icon: Gauge,
  },
  {
    title: "Zjednodušíme provoz",
    text: "Administrativa, reporting a komunikace — méně tabulek, víc přehledu.",
    icon: Layers,
  },
];

const pillarColors = [
  { card: "bg-primary/5", num: "bg-primary/10 text-primary" },
  { card: "bg-amber-500/5", num: "bg-amber-500/10 text-amber-600" },
  { card: "bg-emerald-500/5", num: "bg-emerald-500/10 text-emerald-600" },
];

const howWeWork = [
  {
    title: "Stavíme na tom, co už máte",
    text: "Často je jednodušší upravit proces „pod kapotou“ než lámat návyky lidí. Navazujeme na nástroje, které u vás fungují.",
  },
  {
    title: "První výsledky brzy",
    text: "Skládáme řešení tak, abyste ho mohli používat dřív, než jinde končí první kolo analýz.",
  },
  {
    title: "Zaměření na návratnost",
    text: "Prioritizujeme oblasti, kde se investice vrátí nejrychleji — konkrétní procesy, ne obecné prezentace.",
  },
];

const howColors = [
  { card: "bg-violet-500/5", num: "bg-violet-500/10 text-violet-600" },
  { card: "bg-amber-500/5", num: "bg-amber-500/10 text-amber-600" },
  { card: "bg-rose-500/5", num: "bg-rose-500/10 text-rose-600" },
];

const processSteps = [
  {
    title: "Konzultace",
    text: "Úvodní konzultace zdarma — kde AI a automatizace u vás dávají smysl a jak může vypadat první spolupráce.",
  },
  {
    title: "Pilot",
    text: "Začínáme menším projektem s jasným přínosem — ověříte styl práce i výsledek bez velkého rizika.",
  },
  {
    title: "Spolupráce",
    text: "Když si sedneme, domluvíme dlouhodobější plán rozšíření — typicky po měsících společné práce.",
  },
];

const processColors = [
  { card: "bg-primary/5", num: "bg-primary/10 text-primary" },
  { card: "bg-amber-500/5", num: "bg-amber-500/10 text-amber-600" },
  { card: "bg-emerald-500/5", num: "bg-emerald-500/10 text-emerald-600" },
];

const tierCardColors = [
  { card: "bg-primary/5", num: "bg-primary/10 text-primary" },
  { card: "bg-amber-500/5", num: "bg-amber-500/10 text-amber-600" },
  { card: "bg-violet-500/5", num: "bg-violet-500/10 text-violet-600" },
];

const tiers = [
  {
    name: "Postupný vývoj",
    price: "29 999 Kč",
    priceSub: "měsíčně",
    sub: "Menší firmy nebo týmy, které chtějí postupně zavádět AI do firmy",
    bullets: [
      { label: "V ceně", text: "Nalezení úzkých hrdel firmy a jejich automatizace" },
      { label: "Zaměření", text: "Optimalizace jednotlivých procesů" },
      { label: "Rozsah", text: "2–3 automatizované procesy měsíčně" },
    ],
    featured: false,
  },
  {
    name: "Akcelerovaný růst",
    price: "49 999 Kč",
    priceSub: "měsíčně",
    sub: "Střední firmy nebo startupy, pro které je rychlost zásadní",
    bullets: [
      { label: "V ceně", text: "Analýza procesů, centrální firemní portál" },
      { label: "Zaměření", text: "Provázané procesní celky" },
      { label: "Rozsah", text: "4–6 kompletních procesů měsíčně" },
    ],
    featured: true,
  },
  {
    name: "Robustní řešení",
    price: "149 999+ Kč",
    priceSub: "měsíčně",
    sub: "Velké společnosti s komplexními firemními procesy",
    bullets: [
      { label: "V ceně", text: "Audit firemní struktury a implementační strategie" },
      { label: "Zaměření", text: "Komplexní IT architektura" },
      { label: "Rozsah", text: "Individuální" },
    ],
    featured: false,
  },
];

const summaryPoints = [
  "Implementace přímo ve vašich procesech — administrativa, obchod, provoz, data",
  "Transparentní balíčky spolupráce; přesný rozsah doladíme na konzultaci",
];

export default function AiDoFirmyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content" role="main" className="min-h-screen bg-background">
        {/* Hero */}
        <section
          aria-labelledby="ai-firma-heading"
          className="relative overflow-hidden border-b border-slate-200 pb-16 pt-28 md:pb-24 md:pt-36"
        >
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
              <h1
                id="ai-firma-heading"
                className="text-3xl font-semibold leading-tight text-text sm:text-4xl md:text-5xl lg:text-6xl"
              >
                AI do vaší firmy
              </h1>
              <p className="mt-6 max-w-2xl text-xl text-slate-600 md:text-2xl">
                AI a automatizace v provozu — tak, aby to dávalo smysl v číslech i v každodenní práci. Od první úspory času po dlouhodobou spolupráci.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 md:py-16" aria-label="O službě">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-primary/5 p-6 shadow-sm md:p-8">
              <p className="text-base leading-relaxed text-slate-700 md:text-lg">
                Neprodáváme obecné prezentace o AI. Společně najdeme, kde vás procesy nejvíc brzdí, a navrhneme řešení, která lidé skutečně používají — asistenti, napojení systémů, automatizace. Úvodní konzultace je zdarma.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Známé situace */}
        <section
          aria-labelledby="pain-heading"
          className="bg-gradient-to-b from-slate-50/60 via-transparent to-transparent py-16 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <FadeIn className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Známé situace
              </p>
              <h2 id="pain-heading" className="mt-2 text-3xl font-semibold text-text md:text-4xl">
                Zní vám ve firmě podobné věty?
              </h2>
            </FadeIn>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {painPoints.map((p, i) => {
                const c = painColors[i];
                return (
                  <FadeIn key={p.title} delay={i * 0.05}>
                    <article
                      className={`flex h-full flex-col rounded-2xl border border-slate-200 ${c.card} p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md`}
                    >
                      <span
                        className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl ${c.num}`}
                      >
                        <MessageCircleQuestion className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="font-semibold text-text">{p.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{p.text}</p>
                    </article>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Přístup + pilíře */}
        <section className="py-12 md:py-16" aria-labelledby="approach-heading">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-violet-500/5 p-6 shadow-sm md:p-8">
              <h2 id="approach-heading" className="text-xl font-semibold text-text md:text-2xl">
                Jak tomu předcházíme
              </h2>
              <p className="mt-2 text-sm text-slate-600 md:text-base">
                <strong className="text-text">Od byznysu, ne od slidů.</strong> Nejdřív kde to bolí a kde se to vyplatí — pak nástroje.
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {approachBullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        <section className="bg-gradient-to-b from-slate-50/60 via-transparent to-transparent py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <FadeIn className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Přínos
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-text md:text-4xl">
                Na co se soustředíme
              </h2>
            </FadeIn>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pillars.map((col, i) => {
                const Icon = col.icon;
                const c = pillarColors[i];
                return (
                  <FadeIn key={col.title} delay={i * 0.05}>
                    <article
                      className={`flex h-full flex-col rounded-2xl border border-slate-200 ${c.card} p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md`}
                    >
                      <span className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl ${c.num}`}>
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="font-semibold text-text">{col.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{col.text}</p>
                    </article>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Jak pracujeme */}
        <section className="py-16 md:py-24" aria-labelledby="how-heading">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <FadeIn className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Metoda
              </p>
              <h2 id="how-heading" className="mt-2 text-3xl font-semibold text-text md:text-4xl">
                Jak pracujeme
              </h2>
            </FadeIn>
            <div className="grid gap-6 md:grid-cols-3">
              {howWeWork.map((w, i) => {
                const c = howColors[i];
                return (
                  <FadeIn key={w.title} delay={i * 0.05}>
                    <article
                      className={`flex h-full flex-col rounded-2xl border border-slate-200 ${c.card} p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md`}
                    >
                      <span
                        className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl text-sm font-semibold ${c.num}`}
                      >
                        {i + 1}
                      </span>
                      <h3 className="font-semibold text-text">{w.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{w.text}</p>
                    </article>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section
          className="border-t border-slate-200 bg-gradient-to-b from-slate-50/40 to-transparent py-16 md:py-24"
          aria-labelledby="usecases-heading"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <FadeIn className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Nabídka
              </p>
              <h2 id="usecases-heading" className="mt-2 text-3xl font-semibold text-text md:text-4xl">
                Co pro vás umíme připravit?
              </h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                Šest oblastí — od strategie přes marketing a obchod až po provoz a data. Rozbalte položku; rozsah vždy doladíme na konzultaci.
              </p>
            </FadeIn>
            <AiDoFirmyUseCases />
          </div>
        </section>

        {/* Proces */}
        <section className="py-16 md:py-24" aria-labelledby="process-heading">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <FadeIn className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Spolupráce
              </p>
              <h2 id="process-heading" className="mt-2 text-3xl font-semibold text-text md:text-4xl">
                Jak proces funguje
              </h2>
            </FadeIn>
            <div className="grid gap-6 md:grid-cols-3">
              {processSteps.map((s, i) => {
                const c = processColors[i];
                return (
                  <FadeIn key={s.title} delay={i * 0.05}>
                    <article
                      className={`flex h-full flex-col rounded-2xl border border-slate-200 ${c.card} p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md`}
                    >
                      <span
                        className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl text-sm font-semibold ${c.num}`}
                      >
                        {i + 1}
                      </span>
                      <h3 className="font-semibold text-text">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
                    </article>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Shrnutí před cenami */}
        <section className="py-12 md:py-16" aria-label="Shrnutí">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-gradient-to-br from-primary/5 via-white to-violet-500/5 p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3">
                <span className="icon-glow-primary flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Building2 className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="text-2xl font-semibold text-text md:text-3xl">
                  Stručně o službě
                </h2>
              </div>
              <ul className="mt-6 space-y-3">
                {summaryPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* Ceník */}
        <section
          className="border-t border-slate-200 bg-gradient-to-b from-slate-50/60 via-transparent to-transparent py-16 md:py-24"
          aria-labelledby="tiers-heading"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <FadeIn className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Investice
              </p>
              <h2 id="tiers-heading" className="mt-2 text-3xl font-semibold text-text md:text-4xl">
                Typy spolupráce
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-slate-600">
                Přesné podmínky doladíme po úvodní konzultaci podle rozsahu a priority.
              </p>
            </FadeIn>
            <div className="grid gap-6 lg:grid-cols-3">
              {tiers.map((t, i) => {
                const c = tierCardColors[i];
                return (
                  <FadeIn key={t.name} delay={i * 0.06}>
                    <article
                      className={`flex h-full flex-col rounded-2xl border border-slate-200 ${c.card} p-6 shadow-sm transition hover:shadow-md md:p-8 ${t.featured ? "ring-2 ring-primary/25 lg:scale-[1.02]" : ""}`}
                    >
                      {t.featured && (
                        <span className="mb-3 inline-flex w-fit items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                          Častá volba
                        </span>
                      )}
                      <h3 className="text-xl font-semibold text-text">{t.name}</h3>
                      <p className="mt-2 text-2xl font-bold text-primary">
                        {t.price}
                        <span className="ml-1 text-base font-normal text-slate-600">{t.priceSub}</span>
                      </p>
                      <p className="mt-2 text-sm text-slate-600">{t.sub}</p>
                      <ul className="mt-6 flex-1 space-y-3 border-t border-slate-200/80 pt-6">
                        {t.bullets.map((b) => (
                          <li key={b.label} className="text-sm">
                            <span className="font-semibold text-text">{b.label}:</span>{" "}
                            <span className="text-slate-700">{b.text}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA — stejný vzor jako audit */}
        <section className="border-t border-slate-200 py-16 md:py-24" aria-labelledby="cta-heading">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl bg-gradient-to-r from-primary via-blue-600 to-violet-600 px-6 py-12 text-white shadow-2xl md:px-12">
              <div className="flex flex-col items-stretch gap-6 sm:items-start md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    Další krok
                  </p>
                  <h2 id="cta-heading" className="text-2xl font-semibold md:text-3xl">
                    Nezávazná konzultace
                  </h2>
                  <p className="mt-2 text-white/80">
                    Napište nám, s čím počítáte — ozveme se a projdeme první možnosti.
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
