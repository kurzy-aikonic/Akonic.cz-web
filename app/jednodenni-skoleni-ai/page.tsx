import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { FadeIn } from "../../components/FadeIn";
import { Button } from "../../components/ui/button";
import { ArrowRight, CalendarDays, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Jednodenní školení — AI nalejvárna | AIKONIC",
  description:
    "Celodenní AI bootcamp: od teorie k praxi, promptování, vaše data, automatizace a osobní asistent. Intenzivní program pro týmy, které chtějí AI opravdu používat.",
  keywords: [
    "jednodenní školení AI",
    "AI bootcamp",
    "firemní školení AI",
    "promptování školení",
    "AIKONIC",
  ],
  alternates: { canonical: "https://aikonic.cz/jednodenni-skoleni-ai" },
  openGraph: {
    title: "Jednodenní školení — AI nalejvárna | AIKONIC",
    description:
      "Interaktivní celodenní program: praxe na vašich úkolech, asistent na míru, první automatizace.",
    url: "https://aikonic.cz/jednodenni-skoleni-ai",
    siteName: "AIKONIC",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Jednodenní školení AI — AIKONIC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jednodenní školení — AI nalejvárna | AIKONIC",
    description: "Celodenní AI bootcamp s praxí na vašich projektech.",
    images: ["/og-image.png"],
  },
};

const blockColors = [
  { card: "bg-primary/5", num: "bg-primary/10 text-primary" },
  { card: "bg-violet-500/5", num: "bg-violet-500/10 text-violet-600" },
  { card: "bg-amber-500/5", num: "bg-amber-500/10 text-amber-600" },
  { card: "bg-emerald-500/5", num: "bg-emerald-500/10 text-emerald-600" },
  { card: "bg-rose-500/5", num: "bg-rose-500/10 text-rose-600" },
  { card: "bg-blue-500/5", num: "bg-blue-500/10 text-blue-600" },
];

const blocks = [
  {
    title: "AI bez mlžení",
    text: "Stručný přehled toho, kde se technologie dnes pohybuje — bez hodin teorie. Hned si vyzkoušíte základní nástroje a pochopíte, jak s AI komunikovat tak, aby rozuměla vašemu záměru.",
  },
  {
    title: "Promptování, které drží",
    text: "Celý blok věnovaný zadávání úkolů: od jednoduchých pravidel po techniky pro přesné a opakovatelné výsledky. Desítky krátkých cvičení na úkolech z vaší praxe.",
  },
  {
    title: "Vaše dokumenty a úložiště",
    text: "Napojíme práci s AI na vaše reálné podklady — soubory, struktury, procesy. Ne obecné ukázky, ale materiály, se kterými denně pracujete.",
  },
  {
    title: "První automatizace",
    text: "Krok za krokem sestavíte jednoduché automatizace opakujících se úkonů. Uvidíte, kde AI šetří čas a kde je potřeba lidský dohled.",
  },
  {
    title: "Osobní AI asistent",
    text: "Každý účastník si během dne nastaví vlastního asistenta sladěného s rolí a typickými úkoly — s jasným návazkem po školení.",
  },
  {
    title: "Ověření a plán",
    text: "Závěr dne: otestujete řešení na skutečných úkolech a odnesete si konkrétní plán, jak s AI pokračovat v následujících týdnech.",
  },
];

const focusPoints = [
  "Krátké vstupy, maximum praxe na vašich projektech a úkolech",
  "Nastavení nástrojů a postupů použitelných hned následující pracovní den",
  "Skupinový formát s prostorem pro dotazy a individuální práci",
];

const outcomes = [
  "Alespoň dva konkrétní pracovní problémy vyřešené během dne s pomocí AI",
  "Funkční osobní AI asistent u každého účastníka",
  "Přehled nástrojů a postupů připravený k okamžitému použití",
  "Osobní plán, jak v AI pokračovat po školení",
];

export default function JednodenniSkoleniAiPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main" className="min-h-screen bg-background">
        {/* Hero — stejný vzor jako audit / školení pro obchodníky */}
        <section
          aria-labelledby="jednodenni-heading"
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
                id="jednodenni-heading"
                className="text-3xl font-semibold leading-tight text-text sm:text-4xl md:text-5xl lg:text-6xl"
              >
                Jednodenní školení — AI nalejvárna
              </h1>
              <p className="mt-6 max-w-2xl text-xl text-slate-600 md:text-2xl">
                Celodenní interaktivní bootcamp: z teorie rovnou do praxe, první návyky a nástroje, které použijete hned druhý den.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Intro — stejný box jako audit / obchodníci */}
        <section className="py-12 md:py-16" aria-label="O programu">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-primary/5 p-6 shadow-sm md:p-8">
              <p className="text-base leading-relaxed text-slate-700 md:text-lg">
                <strong className="text-text">Jedním dnem nestanete „AI-first“ firmou</strong> — ale můžete výrazně zkrátit cestu k tomu, aby lidé AI skutečně používali. Program{" "}
                <strong className="text-text">AI nalejvárna</strong> kombinuje srozumitelné vstupy s prací na vašich reálných úkolech. Účastníci odcházejí s nastavenými nástroji a jasným plánem pro další týdny.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Program — stejná sekce jako „Program“ u obchodníků / mřížka jako audit */}
        <section
          aria-labelledby="program-heading"
          className="bg-gradient-to-b from-slate-50/60 via-transparent to-transparent py-16 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <FadeIn className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Program dne
              </p>
              <h2 id="program-heading" className="mt-2 text-3xl font-semibold text-text md:text-4xl">
                Šest bloků. Praxe na vašich úkolech. Asistent a plán domů.
              </h2>
            </FadeIn>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

        {/* Doplňující box — jako „Používané nástroje“ u obchodníků (violet) */}
        <section className="py-12 md:py-16" aria-label="Zaměření dne">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-violet-500/5 p-6 shadow-sm md:p-8">
              <h2 className="text-xl font-semibold text-text md:text-2xl">
                Zaměření celého dne
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

        {/* Výsledek — stejný vzor jako „Co obchodníci získají“ / audit */}
        <section className="py-12 md:py-20" aria-labelledby="vysledek-heading">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-gradient-to-br from-primary/5 via-white to-amber-500/5 p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3">
                <span className="icon-glow-primary flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <CalendarDays className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 id="vysledek-heading" className="text-2xl font-semibold text-text md:text-3xl">
                  Co si účastníci odnášejí
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
              Chcete navázat druhým dnem — týmová práce na projektech až k prototypu?{" "}
              <Link href="/dvoudenni-skoleni-ai" className="font-semibold text-primary hover:underline">
                Dvoudenní program →
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* CTA — stejný layout jako audit / obchodníci */}
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
                    Napište nám počet účastníků a preferovaný termín — připravíme nabídku na míru.
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
