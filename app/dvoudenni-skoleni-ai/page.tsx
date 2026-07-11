import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { FadeIn } from "../../components/FadeIn";
import { Button } from "../../components/ui/button";
import {
  ArrowRight,
  CalendarRange,
  CheckCircle2,
  Users,
} from "lucide-react";
import { pageMetadata, serviceJsonLd, breadcrumbJsonLd } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Dvoudenní školení — AI nalejvárna a realizační den",
  description:
    "Dva dny: celodenní AI bootcamp s praxí na vašich úkolech a druhý den týmová práce na konkrétních projektech až k prototypu. Ideálně po firemním auditu.",
  keywords: [
    "dvoudenní školení AI",
    "firemní AI bootcamp",
    "AI školení pro firmy",
    "realizační workshop AI",
    "AIKONIC",
  ],
  path: "/dvoudenni-skoleni-ai",
  ogDescription: "Den první: teorie v praxi, asistenti a automatizace. Den druhý: týmy dotahují vybrané projekty k funkčnímu výsledku.",
});

const jsonLd = [
  serviceJsonLd({
    name: "Dvoudenní školení — AI nalejvárna a realizační den",
    description: "Dva dny: AI bootcamp a realizační den, kdy týmy dotahují konkrétní projekty k prototypu.",
    path: "/dvoudenni-skoleni-ai",
    price: 115000,
  }),
  breadcrumbJsonLd([
    { name: "Domů", path: "/" },
    { name: "Dvoudenní školení AI", path: "/dvoudenni-skoleni-ai" },
  ]),
];

const day1Colors = [
  { card: "bg-primary/5", num: "bg-primary/10 text-primary" },
  { card: "bg-violet-500/5", num: "bg-violet-500/10 text-violet-600" },
  { card: "bg-amber-500/5", num: "bg-amber-500/10 text-amber-600" },
  { card: "bg-emerald-500/5", num: "bg-emerald-500/10 text-emerald-600" },
  { card: "bg-rose-500/5", num: "bg-rose-500/10 text-rose-600" },
  { card: "bg-blue-500/5", num: "bg-blue-500/10 text-blue-600" },
];

const day1Blocks = [
  {
    title: "AI bez mlžení",
    text: "Přehled současného stavu technologií — ne jako přednáška, ale s okamžitým vyzkoušením nástrojů. Pochopíte, jak AI reaguje na zadání a jak s ní efektivně komunikovat.",
  },
  {
    title: "Promptování, které drží",
    text: "Celý blok stavění zadání od principů po pokročilé techniky pro přesné výsledky. Desítky krátkých cvičení na úkolech z vaší praxe.",
  },
  {
    title: "Práce s vašimi daty",
    text: "Napojení na skutečná úložiště, dokumenty a procesy. Učíme se pracovat s vašimi materiály, ne s generickými ukázkami.",
  },
  {
    title: "Postupná automatizace",
    text: "Krok za krokem první jednoduché automatizace opakujících se úkolů — hned vidíte, kde AI šetří čas.",
  },
  {
    title: "Váš první AI asistent",
    text: "Každý účastník si během dne nastaví asistenta sladěného s rolí a běžnými úkoly — připraveného k okamžitému použití.",
  },
  {
    title: "Testování a osobní plán",
    text: "Závěr dne: ověření řešení na reálných úkolech a plán, jak v AI pokračovat v následujících týdnech.",
  },
];

const day2Colors = [
  { card: "bg-primary/5", num: "bg-primary/10 text-primary" },
  { card: "bg-amber-500/5", num: "bg-amber-500/10 text-amber-600" },
  { card: "bg-violet-500/5", num: "bg-violet-500/10 text-violet-600" },
  { card: "bg-emerald-500/5", num: "bg-emerald-500/10 text-emerald-600" },
  { card: "bg-rose-500/5", num: "bg-rose-500/10 text-rose-600" },
  { card: "bg-blue-500/5", num: "bg-blue-500/10 text-blue-600" },
  { card: "bg-cyan-500/5", num: "bg-cyan-600/10 text-cyan-700" },
  { card: "bg-slate-100", num: "bg-slate-200 text-slate-700" },
];

const day2Blocks = [
  {
    title: "Týmy podle auditu a rolí",
    text: "Skupiny po 4–6 lidech sestavíme tak, aby pokryly technické, procesní i uživatelské stránky — vycházíme z výsledků auditu a z toho, kdo co umí.",
  },
  {
    title: "Jasný cíl na jeden den",
    text: "Každý tým si vybere jeden konkrétní projekt z priorit (typicky z auditního plánu) a definuje, co chce do večera dosáhnout — od návrhu až po fungující prototyp.",
  },
  {
    title: "Průběžná podpora",
    text: "Během celého dne jsme u vás: řešíme technické záseky, navrhujeme alternativy a držíme týmy u dosažitelných milníků.",
  },
  {
    title: "Inspirace z praxe",
    text: "Průběžně ukazujeme, jak podobné úkoly řeší jiné firmy, které nástroje dávají smysl a jak obejít typické překážky.",
  },
  {
    title: "Pravidelné sdílení pokroku",
    text: "Každou hodinu krátké setkání všech týmů: co je hotové, kde to drhne, co by pomohlo. Často vznikají synergie mezi projekty.",
  },
  {
    title: "Testování s budoucími uživateli",
    text: "Odpoledne týmy nechají vyzkoušet řešení kolegům, kteří je budou opravdu používat — a doladí je podle zpětné vazby.",
  },
  {
    title: "Dokončení a dokumentace",
    text: "Závěr věnujeme doladění výstupů, stručné dokumentaci a nástinu udržitelnosti — aby po školení něco zůstalo v provozu.",
  },
  {
    title: "Prezentace a další kroky",
    text: "Každý tým představí výsledek, společně zhodnotíme, co vzniklo, a domluvíme konkrétní navazující kroky u jednotlivých projektů.",
  },
];

const day1Outcomes = [
  "Vyřešené minimálně dva reálné problémy s pomocí AI během dne",
  "Funkční osobní AI asistent u každého účastníka",
  "Přehled nástrojů a postupů k okamžitému použití",
  "Konkrétní plán, jak v AI pokračovat v dalších týdnech",
];

const day2Outcomes = [
  "Prototypy nebo první verze několika vybraných řešení (typicky 2–4 projekty)",
  "Implementační plány a jasné vlastníky u každého projektu",
  "Interní „šampioni“, kteří znají svůj kus řešení",
  "Momentum a domluvené kroky pro pokračování transformace",
];

const flowNote = [
  "Druhý den nejlépe navazuje na firemní AI audit — týmy pak pracují na projektech, které už máte prioritizované.",
  "Stačí vám jen první den? Nabízíme i samostatné jednodenní školení — stejný formát AI nalejvárny.",
];

export default function DvoudenniSkoleniAiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content" role="main" className="min-h-screen bg-background">
        <section
          aria-labelledby="dvoudenni-heading"
          className="relative overflow-hidden border-b border-slate-200 pb-16 pt-28 md:pb-24 md:pt-36"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute right-1/4 top-24 h-64 w-64 rounded-full bg-amber-300/25 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-violet-400/15 blur-3xl" />
          </div>
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-600 backdrop-blur">
                Služby
              </p>
              <h1
                id="dvoudenni-heading"
                className="text-3xl font-semibold leading-tight text-text sm:text-4xl md:text-5xl lg:text-6xl"
              >
                Dvoudenní školení
              </h1>
              <p className="mt-6 max-w-2xl text-xl text-slate-600 md:text-2xl">
                <strong className="font-semibold text-text">Den první — AI nalejvárna:</strong> celodenní bootcamp, kde z teorie děláme praxi a položíme základy návyku pracovat s AI.{" "}
                <strong className="font-semibold text-text">Den druhý — realizační den:</strong> týmy společně dotahují konkrétní projekty až k funkčnímu výstupu.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-12 md:py-16" aria-label="Přehled programu">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-primary/5 p-6 shadow-sm md:p-8">
              <p className="text-base leading-relaxed text-slate-700 md:text-lg">
                Z firmy neuděláte „AI-first“ organizaci jen přednáškou — potřebujete překlopit věci do praxe. Proto první den kombinujeme inspiraci s prací na vašich úkolech; druhý den navazuje týmově: lidé, kteří už chápou nástroje, společně dokončují vybrané projekty. Program lze sladit s vaším auditem tak, aby druhý den šel rovnou na to, co máte v plánu jako první.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-12 md:py-16" aria-label="Tok programu">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-violet-500/5 p-6 shadow-sm md:p-8">
              <h2 className="text-xl font-semibold text-text md:text-2xl">
                Jak to do sebe zapadá
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-600 md:text-base">
                {flowNote.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-slate-600">
                <Link href="/jednodenni-skoleni-ai" className="font-semibold text-primary hover:underline">
                  Jednodenní varianta — AI nalejvárna →
                </Link>
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Den 1 */}
        <section
          aria-labelledby="den1-heading"
          className="bg-gradient-to-b from-slate-50/60 via-transparent to-transparent py-16 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <FadeIn className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Den první
              </p>
              <h2 id="den1-heading" className="mt-2 text-3xl font-semibold text-text md:text-4xl">
                Interaktivní AI nalejvárna
              </h2>
              <p className="mt-4 max-w-3xl text-slate-600">
                Intenzivní celodenní program: inspirativní ukázky současných možností a současně práce na vašich konkrétních projektech. Účastníci odcházejí s nastavenými nástroji a znalostmi, které mohou hned použít.
              </p>
            </FadeIn>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {day1Blocks.map((block, index) => {
                const colors = day1Colors[index % day1Colors.length];
                return (
                  <FadeIn key={block.title} delay={index * 0.04}>
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

        <section className="py-12 md:py-16" aria-labelledby="den1-vysledek">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-gradient-to-br from-primary/5 via-white to-amber-500/5 p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3">
                <span className="icon-glow-primary flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <CalendarRange className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 id="den1-vysledek" className="text-2xl font-semibold text-text md:text-3xl">
                  Po prvním dni
                </h2>
              </div>
              <ul className="mt-6 space-y-3">
                {day1Outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* Den 2 */}
        <section
          aria-labelledby="den2-heading"
          className="border-t border-slate-200 bg-gradient-to-b from-slate-50/40 to-transparent py-16 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <FadeIn className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Den druhý
              </p>
              <h2 id="den2-heading" className="mt-2 text-3xl font-semibold text-text md:text-4xl">
                Realizační den — týmy na konkrétních projektech
              </h2>
              <p className="mt-4 max-w-3xl text-slate-600">
                Praktická fáze po auditu (nebo po prvním dni školení): účastníci pracují ve skupinách celý den na realizaci vybraných projektů. Cílem je dovést je od nápadu až k použitelnému prototypu nebo první verzi — s průběžnou facilitací a jasným závěrem.
              </p>
            </FadeIn>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {day2Blocks.map((block, index) => {
                const colors = day2Colors[index % day2Colors.length];
                return (
                  <FadeIn key={block.title} delay={index * 0.03}>
                    <article
                      className={`flex h-full flex-col rounded-2xl border border-slate-200 ${colors.card} p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md lg:col-span-1`}
                    >
                      <span
                        className={`mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg ${colors.num} text-xs font-semibold`}
                      >
                        {index + 1}
                      </span>
                      <h3 className="text-sm font-semibold text-text md:text-base">{block.title}</h3>
                      <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600 md:text-sm">{block.text}</p>
                    </article>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20" aria-labelledby="den2-vysledek">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-gradient-to-br from-violet-500/5 via-white to-emerald-500/5 p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3">
                <span className="icon-glow-violet flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-600">
                  <Users className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 id="den2-vysledek" className="text-2xl font-semibold text-text md:text-3xl">
                  Po druhém dni
                </h2>
              </div>
              <ul className="mt-6 space-y-3">
                {day2Outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-600" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
                    Domluvit dvoudenní termín
                  </h2>
                  <p className="mt-2 text-white/80">
                    Napište počet účastníků, zda máte hotový audit a preferované termíny — připravíme nabídku na míru.
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
