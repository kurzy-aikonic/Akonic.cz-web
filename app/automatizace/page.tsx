import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { FadeIn } from "../../components/FadeIn";
import { Button } from "../../components/ui/button";
import { ArrowRight, CheckCircle2, Cpu, Workflow } from "lucide-react";
import { pageMetadata, serviceJsonLd, breadcrumbJsonLd } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Automatizace procesů na míru pro firmy",
  description:
    "AI automatizace pro firmy — vlastní agenty a propojení systémů přes n8n a Relay. Rutinu přenecháte strojům, tým se věnuje tomu, co přináší hodnotu.",
  keywords: [
    "AI automatizace pro firmy",
    "automatizace procesů n8n",
    "automatizace na míru",
    "AI agenti pro firmy",
    "AIKONIC",
  ],
  path: "/automatizace",
  ogDescription: "Vlastní AI agenty a propojení systémů — rutinu přenecháme strojům.",
});

const jsonLd = [
  serviceJsonLd({
    name: "Automatizace procesů na míru",
    description: "Vlastní AI agenty a propojení systémů přes n8n a Relay — automatizace opakujících se úkonů.",
    path: "/automatizace",
  }),
  breadcrumbJsonLd([
    { name: "Domů", path: "/" },
    { name: "Automatizace", path: "/automatizace" },
  ]),
];

const stepColors = [
  { card: "bg-primary/5", num: "bg-primary/10 text-primary" },
  { card: "bg-emerald-500/5", num: "bg-emerald-500/10 text-emerald-600" },
  { card: "bg-amber-500/5", num: "bg-amber-500/10 text-amber-600" },
  { card: "bg-violet-500/5", num: "bg-violet-500/10 text-violet-600" },
];

const steps = [
  {
    title: "Mapování procesu",
    text: "Společně identifikujeme opakující se úkony, které zabírají nejvíc času a mají jasně definovaná pravidla — ideální kandidáty na automatizaci.",
  },
  {
    title: "Návrh řešení",
    text: "Navrhneme automatizaci v n8n, Relay nebo přes vlastní AI agenty — podle toho, co nejlépe odpovídá vašim systémům a datům.",
  },
  {
    title: "Nasazení a testování",
    text: "Automatizaci nasadíme a otestujeme na reálných datech. Sledujeme okrajové případy, aby řešení bylo spolehlivé i v provozu.",
  },
  {
    title: "Předání a podpora",
    text: "Tým zaškolíme, jak automatizaci sledovat a upravovat. Po nasazení jsme k dispozici pro drobné úpravy a rozšíření.",
  },
];

const useCases = [
  "Propojení e-mailu, CRM a kalendáře bez manuálního přepisování",
  "Automatické generování a rozesílání nabídek a faktur",
  "Zpracování příchozích dokumentů a jejich zařazení do systému",
  "Pravidelné reporty sestavené a rozeslané bez zásahu člověka",
];

export default function AutomatizacePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content" role="main" className="min-h-screen bg-background">
        <section
          aria-labelledby="automatizace-heading"
          className="relative overflow-hidden border-b border-slate-200 pb-16 pt-28 md:pb-24 md:pt-36"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute right-1/4 top-24 h-64 w-64 rounded-full bg-emerald-300/25 blur-3xl" />
          </div>
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-600 backdrop-blur">
                Služby
              </p>
              <h1
                id="automatizace-heading"
                className="text-3xl font-semibold leading-tight text-text sm:text-4xl md:text-5xl lg:text-6xl"
              >
                Automatizace procesů na míru
              </h1>
              <p className="mt-6 max-w-2xl text-xl text-slate-600 md:text-2xl">
                Vlastní AI agenty a propojení systémů. Rutinu přenecháte strojům, vy se věnujete tomu, co přináší hodnotu.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-12 md:py-16" aria-label="O automatizaci">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-primary/5 p-6 shadow-sm md:p-8">
              <p className="text-base leading-relaxed text-slate-700 md:text-lg">
                <strong className="text-text">Většina firem má desítky opakujících se úkonů</strong>, které nikdo systematicky neřeší — jsou příliš malé na samostatný projekt, ale v součtu stojí hodiny týdně. Postavíme automatizace přes{" "}
                <strong className="text-text">n8n, Relay nebo vlastní AI agenty</strong>, které tuto rutinu převezmou za vás.
              </p>
            </FadeIn>
          </div>
        </section>

        <section
          aria-labelledby="jak-heading"
          className="bg-gradient-to-b from-slate-50/60 via-transparent to-transparent py-16 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <FadeIn className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Jak postupujeme
              </p>
              <h2 id="jak-heading" className="mt-2 text-3xl font-semibold text-text md:text-4xl">
                Od mapování procesu po nasazenou automatizaci.
              </h2>
            </FadeIn>

            <div className="grid gap-6 sm:grid-cols-2">
              {steps.map((step, index) => {
                const colors = stepColors[index % stepColors.length];
                return (
                  <FadeIn key={step.title} delay={index * 0.05}>
                    <article
                      className={`flex h-full flex-col rounded-2xl border border-slate-200 ${colors.card} p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md`}
                    >
                      <span
                        className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl ${colors.num} text-sm font-semibold`}
                      >
                        {index + 1}
                      </span>
                      <h3 className="font-semibold text-text">{step.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{step.text}</p>
                    </article>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20" aria-labelledby="pripady-heading">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-gradient-to-br from-primary/5 via-white to-emerald-500/5 p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3">
                <span className="icon-glow-primary flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Workflow className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 id="pripady-heading" className="text-2xl font-semibold text-text md:text-3xl">
                  Typické případy použití
                </h2>
              </div>
              <ul className="mt-6 space-y-3">
                {useCases.map((item) => (
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
              <Cpu className="mx-auto mb-2 h-5 w-5 text-primary" aria-hidden="true" />
              Nevíte, kde přesně automatizaci nasadit?{" "}
              <Link href="/audit" className="font-semibold text-primary hover:underline">
                Začněte firemním AI auditem →
              </Link>
            </FadeIn>
          </div>
        </section>

        <section className="border-t border-slate-200 py-16 md:py-24" aria-labelledby="cta-heading">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl bg-gradient-to-r from-primary via-blue-600 to-emerald-600 px-6 py-12 text-white shadow-2xl md:px-12">
              <div className="flex flex-col items-stretch gap-6 sm:items-start md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    Další krok
                  </p>
                  <h2 id="cta-heading" className="text-2xl font-semibold md:text-3xl">
                    Probrat váš proces
                  </h2>
                  <p className="mt-2 text-white/80">
                    Popište nám, co chcete automatizovat — odhadneme rozsah a navrhneme řešení. Úvodní konzultace zdarma a nezávazně.
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
