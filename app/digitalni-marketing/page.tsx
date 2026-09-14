import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { FadeIn } from "../../components/FadeIn";
import { Button } from "../../components/ui/button";
import {
  ArrowRight,
  BarChart3,
  Camera,
  CheckCircle2,
  Globe,
  MapPin,
  Megaphone,
  Share2,
  Video,
} from "lucide-react";
import { pageMetadata, serviceJsonLd, breadcrumbJsonLd } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Digitální marketing a lokální viditelnost",
  description:
    "Google Moje Firma, Reels, weby, Meta a Google Ads a správa sociálních sítí. Digitální služby pro firmy pod AIKONIC — konzultace zdarma.",
  keywords: [
    "digitální marketing",
    "Google Moje Firma",
    "lokální SEO",
    "Reels video",
    "správa sociálních sítí",
    "webové stránky",
    "Google Ads",
    "Meta Ads",
    "AIKONIC",
  ],
  path: "/digitalni-marketing",
  ogDescription:
    "Od Google Moje Firma přes video a web až po kampaně a správu sítí. Konzultace zdarma.",
});

const jsonLd = [
  serviceJsonLd({
    name: "Digitální marketing a lokální viditelnost",
    description:
      "Google Moje Firma, videoprodukce a Reels, weby, placené kampaně a správa sociálních sítí pro firmy.",
    path: "/digitalni-marketing",
  }),
  breadcrumbJsonLd([
    { name: "Domů", path: "/" },
    { name: "Služby", path: "/sluzby" },
    { name: "Digitální marketing", path: "/digitalni-marketing" },
  ]),
];

const serviceBlocks = [
  {
    title: "Balíček START",
    eyebrow: "Rychlý vstup",
    icon: MapPin,
    text: "Kompletní nastavení profilu Google Moje Firma a jedno profesionální Reels video. Vhodné pro provozovny a firmy, které chtějí solidní základ bez rozsáhlého projektu.",
    points: [
      "Nastavení a základní optimalizace Google Moje Firma",
      "Jedno profesionální Reels video",
      "Ideální první krok k digitální prezentaci",
    ],
    accent: {
      card: "border-slate-200 bg-white",
      icon: "bg-primary/10 text-primary icon-glow-primary",
      check: "text-primary",
    },
  },
  {
    title: "Google Moje Firma & lokální SEO",
    eyebrow: "Lokální dohledatelnost",
    icon: MapPin,
    text: "Připravíme a optimalizujeme profil — kategorie, klíčová slova a struktura prezentace. Při dlouhodobé spolupráci zajišťujeme aktualizace, správu recenzí a práci s produktovým portfoliem.",
    points: [
      "Jednorázové vytvoření a optimalizace profilu",
      "Dlouhodobá správa: novinky, recenze, portfolio",
      "Aktuální a konkurenceschopná lokální prezentace",
    ],
    accent: {
      card: "border-slate-200 bg-white",
      icon: "bg-emerald-500/10 text-emerald-600 icon-glow-emerald",
      check: "text-emerald-600",
    },
  },
  {
    title: "Videoprodukce a Reels",
    eyebrow: "Obsah, který zaujme",
    icon: Video,
    text: "Natočíme a sestříháme dynamická videa pro sociální sítě. Nabízíme samostatná Reels pro váš kanál i možnost sdílení v regionálních partnerských sítích — podle dohody a dostupnosti.",
    points: [
      "Profesionální natočení a dynamický střih",
      "Reels pro vlastní sociální sítě",
      "Možnost sdílení v regionálních partnerských sítích",
    ],
    accent: {
      card: "border-slate-200 bg-white",
      icon: "bg-violet-500/10 text-violet-600 icon-glow-violet",
      check: "text-violet-600",
    },
  },
  {
    title: "Webové stránky a digitální kampaně",
    eyebrow: "Web a výkon",
    icon: Globe,
    text: "Navrhneme a vytvoříme moderní web nebo landing page podle rozsahu projektu. Správu placených kampaní na Meta a Google Ads nastavíme a vedeme podle cílů a rozpočtu.",
    points: [
      "Webové stránky a landing page na míru",
      "Správa kampaní Meta Ads a Google Ads",
      "Rozsah a mediální rozpočet podle vašich cílů",
    ],
    accent: {
      card: "border-slate-200 bg-white",
      icon: "bg-blue-600/10 text-blue-600 icon-glow-primary",
      check: "text-blue-600",
    },
  },
  {
    title: "Doplňkové služby",
    eyebrow: "Foto a analytika",
    icon: Camera,
    text: "Profesionální focení provozovny či interiéru. Nastavení analytiky webu nebo e-shopu včetně sledování konverzí a průběžného hlídání metrik.",
    points: [
      "Focení místa a interiéru včetně úprav",
      "Komplexní nastavení analytiky a konverzí",
      "Průběžná správa a hlídání metrik",
    ],
    accent: {
      card: "border-slate-200 bg-white",
      icon: "bg-rose-500/10 text-rose-600 icon-glow-rose",
      check: "text-rose-600",
    },
  },
];

const steps = [
  {
    title: "Konzultace",
    text: "Probereme vaši firmu, cíle a současnou digitální prezentaci. Společně určíme, kde má smysl začít.",
  },
  {
    title: "Návrh",
    text: "Připravíme doporučenou kombinaci služeb — od rychlého startu po dlouhodobou péči — bez zbytečné složitosti.",
  },
  {
    title: "Realizace",
    text: "Nastavíme profil, připravíme obsah, web nebo kampaně. Komunikujeme přímo a dodržujeme domluvené termíny.",
  },
  {
    title: "Péče a reporting",
    text: "U dlouhodobé spolupráce průběžně aktualizujeme, sledujeme výsledky a navrhujeme další kroky.",
  },
];

const stepColors = [
  { card: "bg-primary/5", num: "bg-primary/10 text-primary" },
  { card: "bg-emerald-500/5", num: "bg-emerald-500/10 text-emerald-600" },
  { card: "bg-amber-500/5", num: "bg-amber-500/10 text-amber-600" },
  { card: "bg-violet-500/5", num: "bg-violet-500/10 text-violet-600" },
];

const faqItems = [
  {
    q: "Pro koho jsou digitální služby určené?",
    a: "Pro firmy a provozovny, které chtějí být lépe dohledatelné online, působit důvěryhodně a získávat zákazníky — od lokálních podniků po firmy s širším dosahem.",
  },
  {
    q: "Musíme objednat všechny služby najednou?",
    a: "Ne. Můžete začít balíčkem START nebo jednou službou a postupně rozšiřovat. Navrhneme kombinaci podle vašich priorit a kapacity.",
  },
  {
    q: "Jak dlouho trvá start spolupráce?",
    a: "Po úvodní konzultaci obvykle připravíme návrh a můžeme začít v řádu dnů až týdnů — podle rozsahu (např. nastavení profilu vs. web).",
  },
  {
    q: "Lze digitální marketing kombinovat s AI školením?",
    a: "Ano. Digitální služby jsou samostatná vertikála AIKONIC. Pokud dává smysl propojit je se školením AI nebo automatizací, rádi to navrhneme jako celek.",
  },
];

export default function DigitalniMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content" role="main" className="min-h-screen bg-background">
        <section
          aria-labelledby="digital-heading"
          className="relative overflow-hidden border-b border-slate-200 pb-16 pt-28 md:pb-24 md:pt-36"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute right-1/4 top-24 h-64 w-64 rounded-full bg-violet-300/20 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-amber-300/15 blur-3xl" />
          </div>
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-600 backdrop-blur">
                Nová vertikála
              </p>
              <h1
                id="digital-heading"
                className="text-3xl font-semibold leading-tight text-text sm:text-4xl md:text-5xl lg:text-6xl"
              >
                Digitální marketing a lokální viditelnost
              </h1>
              <p className="mt-6 max-w-2xl text-xl text-slate-600 md:text-2xl">
                Pomáháme firmám být dohledatelné online, působit důvěryhodně a získávat nové zákazníky — od
                profilu Google Moje Firma přes video obsah až po weby, kampaně a správu sociálních sítí.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-12 md:py-16" aria-label="O digitálním marketingu">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-primary/5 p-6 shadow-sm md:p-8">
              <p className="text-base leading-relaxed text-slate-700 md:text-lg">
                <strong className="text-text">Dobře nastavená digitální přítomnost</strong> zkracuje cestu od
                prvního hledání k objednávce. Služby navrhujeme jako celek: lokální viditelnost, obsah, web a
                kampaně spolu — ne jako izolované úkoly. Konkrétní rozsah nastavíme individuálně podle vaší
                firmy.
              </p>
            </FadeIn>
          </div>
        </section>

        <section
          aria-labelledby="sluzby-digital-heading"
          className="bg-gradient-to-b from-slate-50/60 via-transparent to-transparent py-16 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <FadeIn className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Nabídka</p>
              <h2 id="sluzby-digital-heading" className="mt-2 text-3xl font-semibold text-text md:text-4xl">
                Co pro vás zajistíme
              </h2>
              <p className="mt-4 max-w-2xl text-base text-slate-600">
                Od rychlého startu po dlouhodobou péči. Ceny sestavíme na míru po konzultaci — na webu je
                neuvádíme.
              </p>
            </FadeIn>

            <div className="grid gap-6 lg:grid-cols-2">
              {serviceBlocks.map((block, index) => {
                const Icon = block.icon;
                return (
                  <FadeIn key={block.title} delay={index * 0.05}>
                    <article
                      className={`flex h-full flex-col rounded-2xl border p-6 shadow-sm md:p-8 ${block.accent.card}`}
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${block.accent.icon}`}
                        >
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                            {block.eyebrow}
                          </p>
                          <h3 className="mt-1 text-xl font-semibold text-text md:text-2xl">{block.title}</h3>
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">{block.text}</p>
                      <ul className="mt-5 space-y-2 text-sm text-slate-600">
                        {block.points.map((point) => (
                          <li key={point} className="flex items-start gap-2">
                            <CheckCircle2
                              className={`mt-0.5 h-4 w-4 shrink-0 ${block.accent.check}`}
                              aria-hidden="true"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </FadeIn>
                );
              })}
            </div>

            {/* Stěžejní služba — správa sítí */}
            <FadeIn delay={0.2} className="mt-6">
              <article className="rounded-3xl border-2 border-primary/25 bg-gradient-to-br from-primary/5 via-white to-violet-500/5 p-6 shadow-sm md:p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      Stěžejní služba
                    </p>
                    <div className="mt-3 flex items-start gap-4">
                      <span className="icon-glow-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Share2 className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-text md:text-2xl">
                          Správa sociálních sítí
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-slate-600">
                          Komplexní správa na míru — obsah, publikování a péče o kanály podle rozsahu a
                          priorit. Cílem je konzistentní prezentace značky a měřitelný přínos, ne jen
                          příspěvky do feedu.
                        </p>
                        <ul className="mt-5 space-y-2 text-sm text-slate-600">
                          {[
                            "Obsah a publikování podle domluveného rozsahu",
                            "Péče o kanály a komunikaci se sledujícími",
                            "Individuální nastavení podle specifik vaší firmy",
                          ].map((point) => (
                            <li key={point} className="flex items-start gap-2">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <span className="hidden shrink-0 items-center justify-center md:flex">
                    <Megaphone className="h-10 w-10 text-primary/40" aria-hidden="true" />
                  </span>
                </div>
              </article>
            </FadeIn>
          </div>
        </section>

        <section aria-labelledby="jak-heading" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <FadeIn className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Postup</p>
              <h2 id="jak-heading" className="mt-2 text-3xl font-semibold text-text md:text-4xl">
                Jak probíhá spolupráce
              </h2>
            </FadeIn>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <FadeIn key={step.title} delay={index * 0.06}>
                  <article className={`flex h-full flex-col rounded-2xl border border-slate-200 p-6 ${stepColors[index].card}`}>
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold ${stepColors[index].num}`}
                    >
                      {index + 1}
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-text">{step.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{step.text}</p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-slate-50/60 via-transparent to-transparent py-12 md:py-16" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">FAQ</p>
              <h2 id="faq-heading" className="mt-2 text-3xl font-semibold text-text md:text-4xl">
                Časté dotazy
              </h2>
            </FadeIn>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <FadeIn key={item.q} delay={index * 0.04}>
                  <details className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:shadow-md md:p-6">
                    <summary className="cursor-pointer list-none text-base font-semibold text-text marker:content-none [&::-webkit-details-marker]:hidden">
                      <span className="flex items-start justify-between gap-4">
                        {item.q}
                        <span className="mt-0.5 text-slate-400 transition group-open:rotate-45" aria-hidden="true">
                          +
                        </span>
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">{item.a}</p>
                  </details>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl bg-gradient-to-r from-primary via-blue-600 to-violet-600 px-6 py-12 text-white shadow-2xl md:px-12">
              <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    <BarChart3 className="h-3.5 w-3.5" aria-hidden="true" />
                    Další krok
                  </p>
                  <h2 className="text-2xl font-semibold md:text-3xl">Navrhneme vhodnou kombinaci služeb</h2>
                  <p className="mt-2 text-white/80">
                    Napište nám o vaší firmě a cílech. Úvodní konzultace je zdarma a nezávazná.
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
