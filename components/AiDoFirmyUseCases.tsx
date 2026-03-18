"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

/** Flow: od strategie → marketing → obchod → administrativa/HR → provoz → data & finance.
 *  Texty inspirované strukturou konkurenčních landingů, vlastní formulace. */

const categories = [
  {
    id: "strategy",
    label: "Strategie a školení",
    accent: "bg-primary/10 text-primary",
    cardBg: "bg-primary/5",
    cases: [
      {
        title: "AI strategie a zavedení do provozu",
        benefit:
          "Jasná vize, kde AI dává smysl — od analýzy procesů až po výběr a nasazení konkrétních nástrojů.",
        steps: [
          "Zhodnotíme současný stav a procesy ve firmě.",
          "Navrhneme priority a oblasti s největším dopadem.",
          "Vybereme vhodné nástroje a nastavíme první kroky implementace.",
        ],
      },
      {
        title: "Školení a workshopy pro tým",
        benefit:
          "Lidé přestanou AI „zkoušet náhodně“ — budou vědět, jak s ní pracovat na reálných úkolech.",
        steps: [
          "Základy AI a velkých jazykových modelů v srozumitelné podobě.",
          "Promptování: jak zadávat úkoly tak, aby výstupy byly použitelné.",
          "Práce s nástroji (ChatGPT, Claude, Midjourney a další podle vašeho kontextu).",
          "Praktické úlohy z vaší firmy, ne generické příklady.",
        ],
      },
      {
        title: "Konzultace pro management",
        benefit:
          "Vedení dostane přehled o příležitostech, rizicích a směru — ne jen seznam buzzwordů.",
        steps: [
          "Kde má AI u vás největší potenciál a kde ne.",
          "Odhad návratnosti a bezpečné využití v souladu s interními pravidly.",
          "Návrh roadmapy digitální transformace v rozumných krocích.",
        ],
      },
    ],
  },
  {
    id: "marketing",
    label: "Marketing a obsah",
    accent: "bg-amber-500/10 text-amber-600",
    cardBg: "bg-amber-500/5",
    cases: [
      {
        title: "Marketing s AI od A do Z",
        benefit:
          "Nastavíme a zautomatizujeme část marketingu — od obsahu po práci s daty.",
        steps: [
          "Projdeme stávající marketingové aktivity a kanály.",
          "Navrhneme, kde AI ušetří čas a kde je potřeba člověk.",
          "Nastavíme konkrétní nástroje a postupy pro váš tým.",
          "Zaškolíme lidi, aby workflow drželi i po našem odchodu.",
        ],
      },
      {
        title: "Obsah a komunikace",
        benefit:
          "Rychlejší příprava textů a vizuálů bez ztráty tónu značky.",
        steps: [
          "Příspěvky a plány pro sociální sítě (LinkedIn, Meta, další podle potřeby).",
          "Blogy, tiskové zprávy, newslettery a e-mailové kampaně.",
          "Scénáře a osnovy pro videa nebo podcasty — vy dolaďte finální podobu.",
        ],
      },
      {
        title: "Kampaně pod kontrolou",
        benefit:
          "Méně hádání, víc dat — víte, co zafungovalo a kam investovat další korunu.",
        steps: [
          "Analýza výkonu kampaní a návrhy na zlepšení.",
          "Automatizovanější reporting výsledků pro tým nebo vedení.",
          "Sledování trendů a konkurence jako podklad pro rozhodnutí.",
        ],
      },
    ],
  },
  {
    id: "sales",
    label: "Obchod a zákazník",
    accent: "bg-emerald-500/10 text-emerald-600",
    cardBg: "bg-emerald-500/5",
    cases: [
      {
        title: "Obchodní pipeline a nabídky",
        benefit:
          "Kratší cesta od zájmu klienta po podpis — méně zapomenutých follow-upů.",
        steps: [
          "Sjednocení leadů z e-mailu, webu a CRM na jedno místo.",
          "Připomínky a návrhy dalších kroků pro obchodníky.",
          "Šablony a první návrhy nabídek z briefu — finální slovo má člověk.",
        ],
      },
      {
        title: "Chatbot a zákaznická podpora",
        benefit:
          "Část dotazů vyřídí asistent 24/7 — tým se soustředí na složitější případy.",
        steps: [
          "Projdeme nejčastější dotazy zákazníků a kanály komunikace.",
          "Navrhneme dialog a tón komunikace v souladu s vaší značkou.",
          "Technické nasazení na web nebo vybraný kanál.",
          "Průběžné vylepšování podle reálných konverzací.",
        ],
      },
      {
        title: "Prodej chytřeji",
        benefit:
          "Lepší prioritizace příležitostí a personalizace nabídky tam, kde to dává smysl.",
        steps: [
          "Skóring leadů a podpora rozhodování obchodníka.",
          "Návrhy na personalizaci nabídky v reálném čase (tam, kde máte data).",
        ],
      },
    ],
  },
  {
    id: "admin-hr",
    label: "Administrativa a HR",
    accent: "bg-violet-500/10 text-violet-600",
    cardBg: "bg-violet-500/5",
    cases: [
      {
        title: "Onboarding nového člověka",
        benefit:
          "Méně papírování u každého nástupu a méně oprav kvůli překlepům.",
        steps: [
          "Jeden vstupní formulář se základními údaji.",
          "Automatická příprava smluv, předávacích dokumentů, NDA a podobně.",
          "Výstup k tisku nebo elektronickému podpisu.",
        ],
      },
      {
        title: "Faktury a dokumenty",
        benefit:
          "Účetnictví dostane strukturovaná data místo ručního přepisování.",
        steps: [
          "Příjem faktury e-mailem nebo ze schránky.",
          "Čtení a předání do účetního systému.",
          "Notifikace účetní — kontrola, ne přepis od nuly.",
        ],
      },
      {
        title: "Složky klientů a smlouvy",
        benefit:
          "Před uzavřením zakázky víte, že nic nechybí; smlouvu máte během chvilky.",
        steps: [
          "Kontrola složky projektu nebo klienta proti checklistu.",
          "Upozornění na chybějící podklady (NDA, přílohy, podpisy).",
          "Krátký formulář → doplnění z registrů → smlouva k podpisu.",
        ],
      },
      {
        title: "HR a nábor",
        benefit:
          "Modernější nábor a péče o lidi bez zbytečné administrativy.",
        steps: [
          "Podpora při prvním výběru z životopisů podle vašich kritérií.",
          "Asistenti u nástupu a školení — méně opakující se komunikace.",
          "Anonymizované přehledy spokojenosti nebo fluktuace tam, kde dává smysl.",
        ],
      },
    ],
  },
  {
    id: "operations",
    label: "Provoz a řešení na míru",
    accent: "bg-rose-500/10 text-rose-600",
    cardBg: "bg-rose-500/5",
    cases: [
      {
        title: "Optimalizace procesů pomocí AI",
        benefit:
          "Rutinu přesuneme tam, kde ji stroj zvládne spolehlivě — vy řešíte důležité věci.",
        steps: [
          "Audit vybraných procesů a identifikace opakující se práce.",
          "Návrh automatizace nebo asistenta s měřitelným přínosem.",
          "Nasazení, školení a jednoduchá údržba.",
        ],
      },
      {
        title: "Vlastní AI řešení",
        benefit:
          "Chatbot, interní asistent nebo napojení na vaše systémy — podle zadání.",
        steps: [
          "Vývoj asistentů a chatbotů na míru.",
          "Integrace do stávajících aplikací (API, e-mail, exporty).",
          "Automatizace reportingu a práce s daty tam, kde to dává smysl.",
        ],
      },
      {
        title: "Výroba, logistika, sklad",
        benefit:
          "Tam, kde máte data a opakující se rozhodování, může AI pomoct plánovat a hlídat kvalitu.",
        steps: [
          "Prediktivní údržba nebo plánování podle historických dat.",
          "Optimalizace zásob a tras podle vašeho kontextu.",
          "Kontrola kvality s využitím obrazových dat tam, kde to řešíte.",
        ],
      },
      {
        title: "Úkoly ze schůzek a reporting",
        benefit:
          "Méně nejasností „kdo to měl udělat“ a méně ručních tabulek pro vedení.",
        steps: [
          "Shrnutí schůzky, návrh úkolů a termínů.",
          "Propojení s nástrojem na úkoly, který už používáte.",
          "Reporting a přehledy z jednoho zdroje pravdy.",
        ],
      },
    ],
  },
  {
    id: "data-finance",
    label: "Data, finance a vývoj",
    accent: "bg-sky-500/10 text-sky-700",
    cardBg: "bg-sky-500/5",
    cases: [
      {
        title: "Data a analytika",
        benefit:
          "Lepší rozhodování podle čísel, ne podle pocitu.",
        steps: [
          "Prediktivní modely a jednoduché forecasty tam, kde máte data.",
          "Segmentace zákazníků nebo trhu jako podklad pro marketing a obchod.",
          "Přehledy a dashboardy, které tým skutečně používá.",
        ],
      },
      {
        title: "Finance a controlling",
        benefit:
          "Méně manuální práce u dokumentů a větší jistota u rizik.",
        steps: [
          "Automatizace zpracování faktur a dokladů (soulad s vaším účetnictvím).",
          "Hlídání anomálií a podpora finančního plánování.",
        ],
      },
      {
        title: "Právo, GDPR a bezpečné použití AI",
        benefit:
          "Používáte AI tak, aby vás to v budoucnu nebolelo u auditu ani u zákazníka.",
        steps: [
          "Kontrola souladu používaných nástrojů s vašimi povinnostmi.",
          "Návrh interních pravidel pro práci s AI a osobními údaji.",
          "Konzultace k autorskému právu a citlivým datům v kontextu AI.",
        ],
      },
      {
        title: "Vývoj softwaru s AI",
        benefit:
          "Rychlejší dodávky a čitelnější kód s podporou moderních asistentů.",
        steps: [
          "Zavedení AI nástrojů pro psaní a refaktoring kódu.",
          "Automatizace testů a hledání chyb tam, kde dává smysl.",
          "Lepší dokumentace a údržba existujících systémů.",
        ],
      },
    ],
  },
];

export function AiDoFirmyUseCases() {
  const [activeTab, setActiveTab] = React.useState(categories[0].id);
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const cat = categories.find((c) => c.id === activeTab)!;

  React.useEffect(() => {
    setOpenIndex(0);
  }, [activeTab]);

  return (
    <div className="mt-10">
      <p className="mb-4 text-sm text-slate-600 md:text-base">
        Od strategie a školení přes marketing a obchod až po administrativu, HR, provoz a data — vyberte oblast a rozbalte konkrétní nabídku.
      </p>
      <div
        className="flex flex-wrap gap-2 border-b border-slate-200 pb-4"
        role="tablist"
        aria-label="Oblasti řešení"
      >
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={activeTab === c.id}
            onClick={() => setActiveTab(c.id)}
            className={`min-h-[44px] rounded-full px-3 py-2 text-left text-xs font-semibold transition sm:px-4 sm:text-sm ${
              activeTab === c.id
                ? "bg-primary text-white shadow-sm"
                : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-3" role="tabpanel">
        {cat.cases.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <FadeIn key={item.title} delay={i * 0.02}>
              <div
                className={`rounded-2xl border border-slate-200 ${cat.cardBg} overflow-hidden transition hover:border-slate-300`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`usecase-${cat.id}-${i}`}
                  id={`usecase-btn-${cat.id}-${i}`}
                >
                  <span className="font-semibold text-text">{item.title}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-500 transition ${isOpen ? "rotate-180 text-primary" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`usecase-${cat.id}-${i}`}
                      role="region"
                      aria-labelledby={`usecase-btn-${cat.id}-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-slate-200/80 bg-white/60 px-5 pb-5 pt-3">
                        <p className={`rounded-lg px-3 py-2 text-sm font-medium ${cat.accent}`}>
                          {item.benefit}
                        </p>
                        <ul className="mt-4 space-y-2.5 pl-1">
                          {item.steps.map((step, j) => (
                            <li key={j} className="flex gap-3 text-sm text-slate-700">
                              <span
                                className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${cat.accent}`}
                                aria-hidden="true"
                              >
                                {j + 1}
                              </span>
                              <span className="pt-0.5 leading-relaxed">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
