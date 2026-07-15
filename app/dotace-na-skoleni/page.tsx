import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { FadeIn } from "../../components/FadeIn";
import { Button } from "../../components/ui/button";
import { ArrowRight, CheckCircle2, HandCoins, Users } from "lucide-react";
import { pageMetadata, breadcrumbJsonLd, serviceJsonLd } from "../../lib/seo";
import { DOTACNI_PROGRAM_NAZEV, dotovaneKurzy } from "../../lib/dotovane-kurzy-data";

export const metadata: Metadata = pageMetadata({
  title: "Dotace na AI školení — Vzdělávání pro firmy",
  description:
    "Dotované AI kurzy pro firmy v programu Vzdělávání pro firmy (Úřad práce ČR). 50 hodin za 350 000 Kč nebo 80 hodin za 550 000 Kč s DPH. S vyřízením dotace vám pomůžeme.",
  keywords: [
    "dotace na AI školení",
    "Vzdělávání pro firmy",
    "dotace Úřad práce ČR",
    "dotace na vzdělávání zaměstnanců",
    "AI kurz pro firmy dotace",
    "Jsem v kurzu",
    "Digi pro firmy",
    "AIKONIC",
  ],
  path: "/dotace-na-skoleni",
  ogDescription:
    "Program Vzdělávání pro firmy — dotované AI kurzy 50 a 80 hodin. Vyřízení dotace za vás.",
});

const jsonLd = [
  ...dotovaneKurzy.map((kurz) =>
    serviceJsonLd({
      name: kurz.title,
      description: `${kurz.description} Program ${DOTACNI_PROGRAM_NAZEV}.`,
      path: "/dotace-na-skoleni",
      price: parseInt(kurz.price.replace(/\s/g, ""), 10),
    })
  ),
  breadcrumbJsonLd([
    { name: "Domů", path: "/" },
    { name: "Dotace na školení", path: "/dotace-na-skoleni" },
  ]),
];

const programHighlights = [
  "Příspěvek na jednotku „Vzdělávání“ a na jednotku „Mzdové náklady“ po dobu účasti zaměstnanců",
  "Financování přes jednotkové náklady — konkrétní částka za každou absolvovanou hodinu",
  "Výše příspěvku závisí na počtu dosažených jednotek, ne na skutečně vynaložených nákladech",
  "Příspěvek se vyplácí ex-post po úspěšném ukončení vzdělávání a předložení dokumentů",
  "Režim veřejné podpory de minimis (Úřad práce ČR)",
];

const eligibleApplicants = [
  "Obchodní korporace (společnosti a družstva)",
  "Státní podniky",
  "OSVČ se zaměstnanci",
  "OSVČ — fyzické osoby podnikající bez zaměstnanců",
  "Právnické osoby zřízené zvláštním zákonem vykonávající podnikatelskou činnost",
];

const targetGroup = [
  "Zaměstnanci",
  "Fyzické osoby podnikající (OSVČ)",
];

const otherPrograms = [
  {
    title: "Jsem v kurzu",
    text: "Národní program na rekvalifikace a profesní vzdělávání zaměstnanců i OSVČ. Cílí na rozvoj digitálních dovedností — AI školení do něj typicky spadá.",
  },
  {
    title: "Digi pro firmy",
    text: "Program zaměřený na digitalizaci malých a středních podniků, včetně vzdělávání týmu v nových technologiích a AI nástrojích.",
  },
];

const steps = [
  "Na nezávazné konzultaci posoudíme, zda a jak můžete program využít — podle velikosti firmy, počtu zaměstnanců a plánovaného rozsahu.",
  "Navrhneme kurz (50 nebo 80 hodin) a připravíme obsah tak, aby splňoval podmínky dotace i vaše firemní cíle.",
  "Pomůžeme s administrativou žádosti — podklady, formuláře i komunikaci s úřadem. Vy se soustředíte na byznys.",
  "Po schválení realizujeme školení a dodáme dokumentaci potřebnou k vyúčtování příspěvku.",
];

const faqItems = [
  {
    q: "Co je program „Vzdělávání pro firmy“?",
    a: "Dotační titul Úřadu práce ČR zaměřený na podporu zaměstnavatelů a OSVČ při školení nebo rekvalifikaci stávajících zaměstnanců. Příspěvek se poskytuje za absolvované hodiny vzdělávání v oblasti IT dovedností — včetně AI.",
  },
  {
    q: "Kolik stojí dotované AI kurzy?",
    a: "Nabízíme dva rozsahy: 50 hodin (6,5 dne) za 350 000 Kč s DPH a 80 hodin (10 dní) za 550 000 Kč s DPH. Konkrétní obsah a rozsah nastavíme individuálně podle potřeb vaší firmy.",
  },
  {
    q: "Kdo má na dotaci nárok?",
    a: "Obchodní korporace, státní podniky, OSVČ se zaměstnanci i bez nich a další právnické osoby vykonávající podnikatelskou činnost. Cílovou skupinou jsou zaměstnanci a fyzické osoby podnikající.",
  },
  {
    q: "Musíme si vyřizování dělat sami?",
    a: "Ne. S administrativou žádosti i vyúčtováním vám pomůžeme — od přípravy podkladů po komunikaci s úřadem. Naším cílem je, aby vás proces co nejméně zatížil.",
  },
  {
    q: "Spadá AI školení do podporovaných oblastí?",
    a: "Ano. Program podporuje vzdělávání v oblasti IT dovedností — rozvoj digitálních kompetencí, práce se softwarem, počítači a IT sítěmi. Firemní AI školení do této oblasti spadá.",
  },
];

export default function DotaceNaSkoleniPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content" role="main" className="min-h-screen bg-background">
        <section
          aria-labelledby="dotace-heading"
          className="relative overflow-hidden border-b border-slate-200 pb-16 pt-28 md:pb-24 md:pt-36"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute right-1/4 top-24 h-64 w-64 rounded-full bg-amber-300/25 blur-3xl" />
          </div>
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-600 backdrop-blur">
                Dotované kurzy
              </p>
              <h1
                id="dotace-heading"
                className="text-3xl font-semibold leading-tight text-text sm:text-4xl md:text-5xl lg:text-6xl"
              >
                Dotace na AI školení
              </h1>
              <p className="mt-6 max-w-2xl text-xl text-slate-600 md:text-2xl">
                Program <strong className="font-semibold text-text">„{DOTACNI_PROGRAM_NAZEV}"</strong> umožňuje
                čerpat příspěvek na školení zaměstnanců v IT — včetně AI. S vyřízením vám pomůžeme od žádosti po vyúčtování.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-12 md:py-16" aria-label="O programu">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-primary/5 p-6 shadow-sm md:p-8">
              <p className="text-base leading-relaxed text-slate-700 md:text-lg">
                <strong className="text-text">AI školení nemusí jít celé z vašeho rozpočtu.</strong> Projekt{" "}
                <strong className="text-text">{DOTACNI_PROGRAM_NAZEV}</strong> je zaměřen na podporu zaměstnavatelů
                a OSVČ při školení či rekvalifikaci stávajících zaměstnanců. Zaměstnavatelé mohou čerpat příspěvek
                na vzdělávání i mzdové náklady po dobu účasti zaměstnanců na vzdělávací aktivitě.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Ceník dotovaných kurzů */}
        <section
          aria-labelledby="cenik-dotace-heading"
          className="bg-gradient-to-b from-amber-50/40 via-transparent to-transparent py-16 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <FadeIn className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Aktuální nabídka
              </p>
              <h2 id="cenik-dotace-heading" className="mt-2 text-3xl font-semibold text-text md:text-4xl">
                Dotované AI kurzy pro firmy
              </h2>
              <p className="mt-4 max-w-2xl text-base text-slate-600">
                Dva rozsahy přizpůsobené podmínkám programu {DOTACNI_PROGRAM_NAZEV}. Obsah, termíny i počet účastníků
                nastavíme individuálně u každé firmy.
              </p>
            </FadeIn>

            <div className="grid gap-6 sm:grid-cols-2">
              {dotovaneKurzy.map((kurz, index) => (
                <FadeIn key={kurz.title} delay={index * 0.06}>
                  <article
                    className={`flex h-full flex-col rounded-2xl border p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:p-8 ${
                      kurz.featured
                        ? "border-2 border-amber-400/50 bg-amber-50/30"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                      {kurz.featured ? "Nejrozsáhlejší varianta" : "Střední rozsah"}
                    </span>
                    <h3 className="mt-3 text-xl font-semibold text-text md:text-2xl">{kurz.title}</h3>
                    <div className="mt-4 flex flex-wrap items-baseline gap-2">
                      <span className="text-3xl font-bold text-text">{kurz.price}</span>
                      <span className="text-sm text-slate-500">{kurz.priceNote}</span>
                    </div>
                    <p className="mt-2 text-sm font-medium text-slate-700">
                      {kurz.hours} hodin · {kurz.duration}
                    </p>
                    <ul className="mt-5 flex-1 space-y-2 text-sm text-slate-600">
                      {kurz.includes.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm text-slate-500">{kurz.description}</p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Zaměření projektu */}
        <section className="py-12 md:py-16" aria-labelledby="zamereni-heading">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-violet-500/5 p-6 shadow-sm md:p-8">
              <h2 id="zamereni-heading" className="text-xl font-semibold text-text md:text-2xl">
                Zaměření projektu
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                Program podporuje vzdělávání v oblasti <strong className="text-text">IT dovedností</strong> — rozvoj
                digitálních kompetencí, práce se softwarem, počítači a IT sítěmi. Firemní AI školení do této oblasti
                spadá.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm text-slate-600">
                {programHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* Pro koho */}
        <section
          aria-labelledby="pro-koho-heading"
          className="bg-gradient-to-b from-slate-50/60 via-transparent to-transparent py-16 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <FadeIn className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Nárok na dotaci
              </p>
              <h2 id="pro-koho-heading" className="mt-2 text-3xl font-semibold text-text md:text-4xl">
                Pro koho je program určený
              </h2>
            </FadeIn>

            <div className="grid gap-6 md:grid-cols-2">
              <FadeIn>
                <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Users className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-semibold text-text">Cílová skupina</h3>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {targetGroup.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>

              <FadeIn delay={0.06}>
                <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                      <HandCoins className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-semibold text-text">Kdo se může účastnit</h3>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {eligibleApplicants.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Jak postupujeme */}
        <section className="py-12 md:py-20" aria-labelledby="postup-heading">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-gradient-to-br from-primary/5 via-white to-amber-500/5 p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3">
                <span className="icon-glow-primary flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <HandCoins className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 id="postup-heading" className="text-2xl font-semibold text-text md:text-3xl">
                  Vyřízení dotace bez starostí
                </h2>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                Administrativa kolem dotace bývá složitá — my ji zvládneme za vás. Od posouzení nároku přes přípravu
                žádosti až po dokumentaci po skončení školení.
              </p>
              <ul className="mt-6 space-y-3">
                {steps.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* Další programy */}
        <section
          aria-labelledby="dalsi-programy-heading"
          className="border-t border-slate-200 bg-gradient-to-b from-slate-50/40 to-transparent py-16 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <FadeIn className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Další možnosti
              </p>
              <h2 id="dalsi-programy-heading" className="mt-2 text-3xl font-semibold text-text md:text-4xl">
                I další dotační programy
              </h2>
              <p className="mt-4 max-w-2xl text-base text-slate-600">
                Kromě programu {DOTACNI_PROGRAM_NAZEV} pomáháme i s dalšími tituly pro vzdělávání zaměstnanců v digitálních dovednostech.
              </p>
            </FadeIn>

            <div className="grid gap-6 sm:grid-cols-2">
              {otherPrograms.map((program, index) => (
                <FadeIn key={program.title} delay={index * 0.06}>
                  <article
                    className={`flex h-full flex-col rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                      index === 0 ? "bg-primary/5" : "bg-amber-500/5"
                    }`}
                  >
                    <h3 className="text-lg font-semibold text-text">{program.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{program.text}</p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="mb-8">
              <h2 id="faq-heading" className="text-2xl font-semibold text-text md:text-3xl">
                Časté dotazy k dotacím
              </h2>
            </FadeIn>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <FadeIn key={item.q}>
                  <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm">
                    <h3 className="text-base font-semibold text-text">{item.q}</h3>
                    <p className="mt-2 text-sm text-slate-600">{item.a}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 py-16 md:py-24" aria-labelledby="cta-heading">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl bg-gradient-to-r from-primary via-blue-600 to-amber-500 px-6 py-12 text-white shadow-2xl md:px-12">
              <div className="flex flex-col items-stretch gap-6 sm:items-start md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    Další krok
                  </p>
                  <h2 id="cta-heading" className="text-2xl font-semibold md:text-3xl">
                    Zjistit, na co máte nárok
                  </h2>
                  <p className="mt-2 text-white/80">
                    Napište nám o vaší firmě a plánovaném školení — nezávazně posoudíme možnosti dotace a navrhneme
                    vhodný rozsah kurzu. Úvodní konzultace zdarma.
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
