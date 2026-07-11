import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { FadeIn } from "../../components/FadeIn";
import { Button } from "../../components/ui/button";
import { ArrowRight, CheckCircle2, HandCoins } from "lucide-react";
import { pageMetadata, breadcrumbJsonLd } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Dotace na AI školení — Jsem v kurzu a Digi pro firmy",
  description:
    "AI školení s podporou z dotačních programů Jsem v kurzu a Digi pro firmy. Poradíme, na co máte nárok, a s vyřízením vám pomůžeme.",
  keywords: [
    "dotace na AI školení",
    "Jsem v kurzu",
    "Digi pro firmy",
    "dotace na vzdělávání zaměstnanců",
    "AIKONIC",
  ],
  path: "/dotace-na-skoleni",
  ogDescription: "AI školení s podporou z dotačních programů Jsem v kurzu a Digi pro firmy.",
});

const jsonLd = [
  breadcrumbJsonLd([
    { name: "Domů", path: "/" },
    { name: "Dotace na školení", path: "/dotace-na-skoleni" },
  ]),
];

const programs = [
  {
    title: "Jsem v kurzu",
    text: "Národní dotační program na rekvalifikace a profesní vzdělávání zaměstnanců i OSVČ. Cílí na rozvoj digitálních a dalších klíčových dovedností — AI školení do něj typicky spadá.",
  },
  {
    title: "Digi pro firmy",
    text: "Program zaměřený na digitalizaci malých a středních podniků, včetně vzdělávání týmu v nových technologiích a AI nástrojích.",
  },
];

const steps = [
  "Probereme váš záměr a orientačně posoudíme, zda a do kterého programu školení zapadá.",
  "Připravíme podklady a nabídku školení tak, aby odpovídaly podmínkám dotace.",
  "Pomůžeme s administrativou žádosti — vy se soustředíte na svůj byznys.",
  "Po schválení realizujeme školení a dodáme podklady potřebné k vyúčtování dotace.",
];

const faqItems = [
  {
    q: "Kdo má na dotaci nárok?",
    a: "Nárok se posuzuje podle velikosti firmy, oboru a konkrétního programu. Řekneme vám to na základě krátké konzultace — nezávazně a zdarma.",
  },
  {
    q: "Kolik dotace pokryje?",
    a: "Míra podpory se liší program od programu a podle aktuálních podmínek výzvy. Konkrétní číslo pro vaši firmu spočítáme při konzultaci.",
  },
  {
    q: "Musíme si vyřizování dělat sami?",
    a: "Ne. Administrativu kolem žádosti s vámi probereme a pomůžeme ji zvládnout tak, aby vás zbytečně nezatěžovala.",
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
                Financování
              </p>
              <h1
                id="dotace-heading"
                className="text-3xl font-semibold leading-tight text-text sm:text-4xl md:text-5xl lg:text-6xl"
              >
                Dotace na AI školení
              </h1>
              <p className="mt-6 max-w-2xl text-xl text-slate-600 md:text-2xl">
                AI vzdělávání s podporou z programů Jsem v kurzu a Digi pro firmy. Poradíme, na co máte nárok, a s vyřízením vám pomůžeme.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-12 md:py-16" aria-label="O dotacích">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-primary/5 p-6 shadow-sm md:p-8">
              <p className="text-base leading-relaxed text-slate-700 md:text-lg">
                <strong className="text-text">AI školení nemusí jít celé z vašeho rozpočtu.</strong> Programy{" "}
                <strong className="text-text">Jsem v kurzu</strong> a <strong className="text-text">Digi pro firmy</strong> podporují vzdělávání zaměstnanců v digitálních dovednostech — AI školení do nich typicky spadá. Nárok a míru podpory posuzujeme individuálně na úvodní konzultaci.
              </p>
            </FadeIn>
          </div>
        </section>

        <section
          aria-labelledby="programy-heading"
          className="bg-gradient-to-b from-slate-50/60 via-transparent to-transparent py-16 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <FadeIn className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Programy
              </p>
              <h2 id="programy-heading" className="mt-2 text-3xl font-semibold text-text md:text-4xl">
                Se kterými dotacemi pomáháme
              </h2>
            </FadeIn>

            <div className="grid gap-6 sm:grid-cols-2">
              {programs.map((program, index) => (
                <FadeIn key={program.title} delay={index * 0.06}>
                  <article className={`flex h-full flex-col rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${index === 0 ? "bg-primary/5" : "bg-amber-500/5"}`}>
                    <h3 className="text-lg font-semibold text-text">{program.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{program.text}</p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20" aria-labelledby="postup-heading">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-gradient-to-br from-primary/5 via-white to-amber-500/5 p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3">
                <span className="icon-glow-primary flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <HandCoins className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 id="postup-heading" className="text-2xl font-semibold text-text md:text-3xl">
                  Jak postupujeme
                </h2>
              </div>
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
                    Napište nám o vaší firmě a plánovaném školení — nezávazně posoudíme možnosti dotace. Úvodní konzultace zdarma.
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
