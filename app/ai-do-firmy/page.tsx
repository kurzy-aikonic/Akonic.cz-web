import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { FadeIn } from "../../components/FadeIn";
import { Button } from "../../components/ui/button";
import { AiDoFirmyUseCases } from "../../components/AiDoFirmyUseCases";
import {
  ArrowRight,
  Clock,
  Gauge,
  Layers,
  MessageCircleQuestion,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI do firmy — implementace a automatizace | AIKONIC",
  description:
    "Zavedeme AI a automatizaci do vašich procesů: administrativa, obchod, provoz. Konzultace zdarma, první výsledky v krátkém horizontu, spolupráce na míru.",
  keywords: [
    "AI do firmy",
    "firemní AI",
    "automatizace procesů",
    "AI implementace",
    "AIKONIC",
  ],
  alternates: { canonical: "https://aikonic.cz/ai-do-firmy" },
  openGraph: {
    title: "AI do firmy — implementace a automatizace | AIKONIC",
    description:
      "Od auditu bolavých míst po funkční řešení. Úspora času, rychlejší obchod, jednodušší administrativa.",
    url: "https://aikonic.cz/ai-do-firmy",
    siteName: "AIKONIC",
    locale: "cs_CZ",
    type: "website",
  },
};

const painPoints = [
  {
    title: "„Vždycky se to tak dělalo.“",
    text: "Před pár lety nešlo napsat text nebo návrh nástroje za deset minut. Pravidla hry se mění — postupy, které dříve stačily, dnes firmu brzdí.",
  },
  {
    title: "„To je jen pár kliknutí, udělám to ručně.“",
    text: "Často to není pár kliknutí, ale zaběhnutý zvyk. Takové úkony se nasčítají a stojí firmu desítky hodin měsíčně, které by šly přesměrovat jinam.",
  },
  {
    title: "„Myslel jsem, že to měl dělat někdo jiný.“",
    text: "Úkoly ze schůzek nemusí mizet v nejasnostech. S jasným zápisem, přidělením a připomínkou ví každý, co je na něm.",
  },
];

const approachBullets = [
  "Do několika týdnů typicky vidíte první ušetřený čas nebo zrychlení.",
  "Připravíme konkrétní řešení: asistenti, napojení systémů, jednoduché automatizace.",
  "Nejdřív najdeme místa, kde to bolí nejvíc — a tam začneme.",
];

const pillars = [
  {
    title: "Ušetříme vám čas",
    text: "Opakující se práci převezme část procesu za vás — v hodinách měsíčně se to projeví jasně.",
    icon: Clock,
  },
  {
    title: "Zrychlíme obchod",
    text: "Od první poptávky po nabídku a uzavření — méně prostojů a ručního přepisování.",
    icon: Gauge,
  },
  {
    title: "Zjednodušíme provoz",
    text: "Administrativa, reporting a vnitřní komunikace — méně tabulek, více přehledu.",
    icon: Layers,
  },
];

const howWeWork = [
  {
    title: "Stavíme na tom, co už máte",
    text: "Často je jednodušší upravit proces „pod kapotou“ než lámat návyky lidí. Navazujeme na nástroje a zvyky, které u vás fungují.",
  },
  {
    title: "První výsledky brzy",
    text: "Skládáme řešení tak, abyste ho mohli používat dřív, než jinde končí první kolo analýz.",
  },
  {
    title: "Zaměření na návratnost",
    text: "Prioritizujeme oblasti, kde se investice vrátí nejrychleji — konkrétní procesy, ne obecné slidovky.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Konzultace",
    text: "Na úvodní konzultaci zdarma projdeme, kde AI a automatizace u vás dávají smysl a jak by mohla vypadat první spolupráce.",
  },
  {
    num: "02",
    title: "Pilot",
    text: "Nejlepší je začít menším projektem s jasným přínosem — ověříte si styl práce i výsledek bez velkého rizika.",
  },
  {
    num: "03",
    title: "Spolupráce",
    text: "Když si sedneme, domluvíme dlouhodobější plán rozšíření — obvykle po měsících, ne po jedné schůzce.",
  },
];

const tiers = [
  {
    name: "Postupná implementace",
    price: "Individuální cena",
    sub: "Menší firmy a týmy, které chtějí AI zavádět krok za krokem",
    bullets: [
      "Hledání úzkých míst a jejich postupné odstraňování",
      "Zaměření na jednotlivé procesy",
      "Typicky 2–3 automatizované nebo asistované toky měsíčně (po domluvě)",
    ],
    accent: "border-slate-200 bg-white",
  },
  {
    name: "Rychlý náběh",
    price: "Individuální cena",
    sub: "Střední firmy nebo týmy, kde záleží na čase",
    bullets: [
      "Hlubší mapa procesů a provázanější celky",
      "Centrální přehled nebo portál podle potřeby",
      "Vyšší tempo dodávek — více procesů v kratším horizontu",
    ],
    accent: "border-primary/30 bg-primary/5 ring-2 ring-primary/20",
    featured: true,
  },
  {
    name: "Komplexní řešení",
    price: "Na míru",
    sub: "Velké organizace s náročnou architekturou",
    bullets: [
      "Audit struktury procesů a strategie zavedení",
      "Náročnější IT a procesní propojení",
      "Rozsah a tým podle vašeho zadání",
    ],
    accent: "border-slate-200 bg-white",
  },
];

export default function AiDoFirmyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main" className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-200 pb-16 pt-28 md:pb-24 md:pt-36">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute right-1/4 top-24 h-64 w-64 rounded-full bg-violet-400/15 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-emerald-400/15 blur-3xl" />
          </div>
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-600 backdrop-blur">
                Produkt
              </p>
              <h1 className="text-3xl font-semibold leading-tight text-text sm:text-4xl md:text-5xl lg:text-6xl">
                AI do vaší firmy
              </h1>
              <p className="mt-6 max-w-2xl text-xl text-slate-600 md:text-2xl">
                Umělá inteligence a automatizace můžou posunout provoz o úroveň výš. My vám pomůžeme je zapojit tak, aby to dávalo smysl v číslech i v každodenní práci.
              </p>
              <Button asChild size="lg" className="mt-10 min-h-[48px]">
                <Link href="/#contact">
                  Nezávazná konzultace
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </section>

        {/* Pain points */}
        <section className="py-16 md:py-24" aria-labelledby="pain-heading">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <FadeIn>
              <h2 id="pain-heading" className="text-center text-3xl font-semibold text-text md:text-4xl">
                Zní vám ve firmě podobné věty?
              </h2>
            </FadeIn>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {painPoints.map((p, i) => (
                <FadeIn key={p.title} delay={i * 0.08}>
                  <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm">
                    <MessageCircleQuestion
                      className="h-10 w-10 text-primary"
                      aria-hidden="true"
                    />
                    <h3 className="mt-4 text-lg font-semibold text-text">
                      {p.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                      {p.text}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="border-y border-slate-200 bg-slate-50/80 py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <FadeIn>
              <h2 className="text-3xl font-semibold text-text md:text-4xl">
                Jak tomu předcházíme?
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-slate-600">
                <strong className="text-text">Přístup od byznysu, ne od slidů.</strong>{" "}
                Nejdřív kde to bolí a kde se to vyplatí — pak teprve nástroje.
              </p>
              <ul className="mt-8 space-y-3">
                {approachBullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <CheckMini />
                    {b}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {pillars.map((col, i) => {
                const Icon = col.icon;
                return (
                  <FadeIn key={col.title} delay={i * 0.06}>
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 text-xl font-semibold text-text">
                        {col.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">{col.text}</p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <FadeIn>
              <h2 className="text-3xl font-semibold text-text md:text-4xl">
                Jak pracujeme?
              </h2>
            </FadeIn>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {howWeWork.map((w, i) => (
                <FadeIn key={w.title} delay={i * 0.07}>
                  <article className="relative rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/80 p-6 pt-10 shadow-sm">
                    <span className="absolute left-6 top-0 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white shadow-md">
                      {i + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-text">
                      {w.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600">{w.text}</p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section
          className="border-t border-slate-200 bg-white py-16 md:py-24"
          aria-labelledby="usecases-heading"
        >
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <FadeIn>
              <h2 id="usecases-heading" className="text-3xl font-semibold text-text md:text-4xl">
                Co pro vás umíme připravit?
              </h2>
              <p className="mt-4 max-w-2xl text-slate-600">
                Příklady podle oblasti — konkrétní podoba vždy po domluvě s vámi.
              </p>
            </FadeIn>
            <AiDoFirmyUseCases />
          </div>
        </section>

        {/* Process */}
        <section className="border-t border-slate-200 py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <FadeIn>
              <h2 className="text-3xl font-semibold text-text md:text-4xl">
                Jak proces funguje?
              </h2>
            </FadeIn>
            <div className="mt-12 space-y-8">
              {processSteps.map((s, i) => (
                <FadeIn key={s.num} delay={i * 0.05}>
                  <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm md:flex-row md:items-start md:gap-8 md:p-8">
                    <span
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-white"
                      aria-hidden="true"
                    >
                      {s.num}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-text">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-slate-600">{s.text}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Tiers */}
        <section className="border-t border-slate-200 bg-slate-50/80 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <FadeIn>
              <h2 className="text-center text-3xl font-semibold text-text md:text-4xl">
                Typy spolupráce
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
                Přesné podmínky a cenu sestavíme po úvodní konzultaci podle rozsahu a priority.
              </p>
            </FadeIn>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {tiers.map((t, i) => (
                <FadeIn key={t.name} delay={i * 0.08}>
                  <article
                    className={`flex h-full flex-col rounded-3xl border p-6 shadow-sm md:p-8 ${t.accent}`}
                  >
                    {t.featured && (
                      <span className="mb-3 inline-flex w-fit items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                        Častá volba
                      </span>
                    )}
                    <h3 className="text-xl font-semibold text-text">
                      {t.name}
                    </h3>
                    <p className="mt-2 text-2xl font-bold text-primary">
                      {t.price}
                    </p>
                    <p className="mt-2 text-sm text-slate-600">{t.sub}</p>
                    <ul className="mt-6 flex-1 space-y-3">
                      {t.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >
                          <Zap className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl bg-gradient-to-r from-primary via-blue-600 to-violet-600 px-6 py-12 text-center text-white shadow-2xl md:px-12">
              <Target className="mx-auto h-12 w-12 text-white/90" aria-hidden="true" />
              <h2 className="mt-6 text-2xl font-semibold md:text-3xl">
                Chcete to probrat?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-white/85">
                Napište nám, s čím počítáte — ozveme se a domluvíme konzultaci zdarma.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 min-h-[48px] bg-white text-text hover:bg-white/90"
              >
                <Link href="/#contact">
                  Kontaktovat
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function CheckMini() {
  return (
    <span
      className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-primary"
      aria-hidden="true"
    />
  );
}
