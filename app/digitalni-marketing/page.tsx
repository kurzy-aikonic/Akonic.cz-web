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
  Share2,
  Video,
} from "lucide-react";
import { pageMetadata, serviceJsonLd, breadcrumbJsonLd } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Digitální marketing a lokální viditelnost",
  description:
    "Ceník digitálního marketingu: balíček START 13 900 Kč, Google Moje Firma, Reels od 4 900 Kč, weby a kampaně. Ceny jsou konečné — nejsme plátci DPH.",
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
    "Balíček START 13 900 Kč, Reels od 4 900 Kč, správa profilu 6 900 Kč měsíčně. Ceny jsou konečné.",
});

const jsonLd = [
  serviceJsonLd({
    name: "Digitální marketing a lokální viditelnost",
    description:
      "Google Moje Firma, videoprodukce a Reels, weby, placené kampaně a správa sociálních sítí. Balíček START od 13 900 Kč.",
    path: "/digitalni-marketing",
    minPrice: 4900,
  }),
  breadcrumbJsonLd([
    { name: "Domů", path: "/" },
    { name: "Služby", path: "/sluzby" },
    { name: "Digitální marketing", path: "/digitalni-marketing" },
  ]),
];

const highlights = [
  { label: "Vstupní balíček", price: "13 900 Kč" },
  { label: "Reels video", price: "od 4 900 Kč" },
  { label: "Správa profilu", price: "6 900 Kč / měs." },
];

const catalog = [
  {
    title: "Google Moje Firma a lokální SEO",
    eyebrow: "Dohledatelnost",
    icon: MapPin,
    iconClass: "bg-emerald-500/10 text-emerald-600 icon-glow-emerald",
    items: [
      {
        title: "Nastavení a optimalizace profilu",
        text: "Kompletní vytvoření a vyplnění profilu, kategorie, klíčová slova, služby a produkty, fotogalerie a propojení s webem.",
        price: "6 900 Kč",
        note: "flexibilně 5 900–8 900 Kč",
      },
      {
        title: "Dlouhodobá správa profilu",
        text: "Pravidelné novinky a příspěvky, odpovědi na recenze, aktualizace portfolia a otevírací doby. Vázáno na minimálně 3 měsíce.",
        price: "6 900 Kč",
        note: "měsíčně",
      },
    ],
  },
  {
    title: "Videoprodukce a Reels",
    eyebrow: "Obsah pro okolí",
    icon: Video,
    iconClass: "bg-violet-500/10 text-violet-600 icon-glow-violet",
    items: [
      {
        title: "Reels — Olomoucká spojka",
        text: "Profesionální natočení, sestříhání a sdílení v regionální síti Olomoucká spojka.",
        price: "9 500 Kč",
        note: "jednorázově",
      },
      {
        title: "Reels — Co v Přerově",
        text: "Profesionální natočení, sestříhání a sdílení v regionální síti Co v Přerově.",
        price: "9 500 Kč",
        note: "jednorázově",
      },
      {
        title: "Samostatné Reels video",
        text: "Natočení a dynamický střih pro vaše vlastní sociální sítě, bez distribuce v regionální síti.",
        price: "4 900 Kč",
        note: "jednorázově",
      },
    ],
  },
  {
    title: "Webové stránky a digitální kampaně",
    eyebrow: "Web a výkon",
    icon: Globe,
    iconClass: "bg-blue-600/10 text-blue-600 icon-glow-primary",
    items: [
      {
        title: "Tvorba webu nebo landing page",
        text: "Moderní web podle složitosti projektu — texty, struktura, mobilní zobrazení, rychlost a formuláře.",
        price: "19 900–39 000 Kč",
        note: "dle rozsahu",
      },
      {
        title: "Správa kampaní Meta / Google Ads",
        text: "Nastavení, správa a průběžná optimalizace. Cena platí pro jednu platformu a mediální rozpočet do 20 000 Kč měsíčně. Rozpočet se hradí zvlášť.",
        price: "od 4 900 Kč",
        note: "měsíčně + rozpočet",
      },
    ],
  },
  {
    title: "Doplňkové služby",
    eyebrow: "Foto a měření",
    icon: Camera,
    iconClass: "bg-rose-500/10 text-rose-600 icon-glow-rose",
    items: [
      {
        title: "Profesionální nafocení místa",
        text: "Focení provozovny nebo interiéru a úprava fotek. Cena podle velikosti prostoru a počtu záběrů.",
        price: "4 900–8 900 Kč",
        note: "jednorázově",
      },
      {
        title: "Nastavení a správa metrik",
        text: "Analytika a konverze webu nebo e-shopu, následné hlídání čísel a pravidelný report.",
        price: "od 5 900 Kč",
        note: "nastavení · správa od 2 900 Kč / měs.",
      },
    ],
  },
];

const steps = [
  {
    title: "Konzultace zdarma",
    text: "Projdeme váš profil, web a konkurenci v okolí. Řekneme, co má největší dopad jako první.",
  },
  {
    title: "Nabídka na míru",
    text: "Vyberete z ceníku jen to, co má smysl teď. Konečnou cenu u rozsahů potvrdíme před zahájením.",
  },
  {
    title: "Realizace",
    text: "Nastavení, focení, natočení a spuštění v domluveném termínu. Jeden kontakt, jedna faktura.",
  },
  {
    title: "Vyhodnocení",
    text: "Čísla po 30 a 90 dnech — telefonáty, navigace a poptávky. Pak rozhodneme o dalším kroku.",
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
    q: "Jsou ceny s DPH?",
    a: "Ne. Nejsme plátci DPH, uvedené ceny jsou konečné a nic se k nim nepřičítá. U placených kampaní se mediální rozpočet hradí zvlášť a do ceny správy nevstupuje.",
  },
  {
    q: "Jak se ceny fakturují?",
    a: "Jednorázová služba se fakturuje po předání výstupu. Měsíční služba na začátku období, s výpovědí na konci sjednaného období. U rozsahu (od–do) potvrdíme konečnou cenu v nabídce před zahájením.",
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
              <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                {highlights.map((item) => (
                  <li
                    key={item.label}
                    className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 backdrop-blur"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-text">{item.price}</p>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        <section className="py-12 md:py-16" aria-label="O digitálním marketingu">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl border border-slate-200 bg-primary/5 p-6 shadow-sm md:p-8">
              <p className="text-base leading-relaxed text-slate-700 md:text-lg">
                <strong className="text-text">Nezačínáme velkým projektem.</strong> Doporučujeme vstupní
                balíček START — nastavení profilu a jedno profesionální video — a až podle prvních čísel
                řešíme, kam investovat dál. Ceny jsou konečné, nejsme plátci DPH.
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
                Ceník 2026. Ceny jsou konečné — nejsme plátci DPH. U rozsahů potvrdíme částku v nabídce před
                zahájením práce.
              </p>
            </FadeIn>

            <FadeIn>
              <article className="rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-white to-sky-50 p-6 shadow-sm md:p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-2xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      Doporučený start
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-text md:text-3xl">Balíček START</h3>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">
                      Jednorázové nastavení a optimalizace profilu Google Moje Firma a jedno profesionální
                      Reels video v regionální síti. Vše, co potřebujete, abyste byli k nalezení a k vidění.
                    </p>
                    <ul className="mt-5 space-y-2 text-sm text-slate-600">
                      {[
                        "Kompletní nastavení profilu Google Moje Firma",
                        "1× profesionální Reels v regionální síti",
                        "Vhodný první krok před dlouhodobou správou",
                      ].map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="shrink-0 rounded-2xl border border-primary/20 bg-white px-6 py-5 text-left lg:text-right">
                    <p className="text-sm text-slate-400 line-through">16 400 Kč</p>
                    <p className="mt-1 text-3xl font-bold text-text md:text-4xl">13 900 Kč</p>
                    <p className="mt-1 text-sm font-medium text-emerald-700">Ušetříte 2 500 Kč</p>
                  </div>
                </div>
              </article>
            </FadeIn>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {catalog.map((group, index) => {
                const Icon = group.icon;
                return (
                  <FadeIn key={group.title} delay={index * 0.05}>
                    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                      <div className="flex items-start gap-4">
                        <span
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${group.iconClass}`}
                        >
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                            {group.eyebrow}
                          </p>
                          <h3 className="mt-1 text-xl font-semibold text-text md:text-2xl">{group.title}</h3>
                        </div>
                      </div>
                      <ul className="mt-6 space-y-5">
                        {group.items.map((item) => (
                          <li
                            key={item.title}
                            className="flex flex-col gap-2 border-t border-slate-100 pt-5 first:border-0 first:pt-0 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
                          >
                            <div>
                              <p className="font-semibold text-text">{item.title}</p>
                              <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
                            </div>
                            <div className="shrink-0 sm:text-right">
                              <p className="text-lg font-bold text-text">{item.price}</p>
                              <p className="text-xs text-slate-500">{item.note}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </FadeIn>
                );
              })}
            </div>

            <FadeIn delay={0.15} className="mt-6">
              <article className="rounded-3xl border-2 border-primary/25 bg-gradient-to-br from-primary/5 via-white to-violet-500/5 p-6 shadow-sm md:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      Stěžejní služba
                    </p>
                    <div className="mt-3 flex items-start gap-4">
                      <span className="icon-glow-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Share2 className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-text md:text-2xl">Správa sociálních sítí</h3>
                        <p className="mt-3 text-base leading-relaxed text-slate-600">
                          Obsahový plán, tvorba příspěvků, komunikace s publikem a reporting. Rozsah i cenu
                          sestavíme po krátké konzultaci podle vašich kanálů a priorit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 rounded-2xl border border-primary/15 bg-white px-6 py-5">
                    <p className="text-lg font-bold text-text">Individuálně</p>
                    <p className="text-xs text-slate-500">dohodou po konzultaci</p>
                  </div>
                </div>
              </article>
            </FadeIn>

            <FadeIn delay={0.2} className="mt-6">
              <aside className="rounded-3xl border border-emerald-200/80 bg-emerald-50/60 p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
                  Doporučená kombinace pro provozovnu
                </p>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-700">
                  Balíček START v prvním měsíci, od druhého měsíce dlouhodobá správa profilu (6 900 Kč) a jedno
                  samostatné Reels měsíčně (4 900 Kč).
                </p>
                <p className="mt-4 text-lg font-semibold text-text">
                  Rozjezd 13 900 Kč, dále 11 800 Kč měsíčně.
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Po třech měsících vyhodnotíme čísla a navrhneme další krok. Při dlouhodobé spolupráci
                  nabízíme výhodnější podmínky.
                </p>
              </aside>
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
