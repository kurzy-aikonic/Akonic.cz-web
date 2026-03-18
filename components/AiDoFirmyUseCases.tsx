"use client";

import * as React from "react";
import { FadeIn } from "./FadeIn";

const categories = [
  {
    id: "admin",
    label: "Administrativa",
    cases: [
      {
        title: "Onboarding nového kolegy",
        benefit:
          "Méně času na papírování u každého nástupu a méně chyb v dokumentech.",
        steps: [
          "Vyplníte jeden vstupní formulář se základními údaji.",
          "Systém připraví smluvní podklady, předávací dokumenty a šablony k podpisu.",
          "Materiály jsou připravené k tisku nebo k elektronickému podpisu.",
        ],
      },
      {
        title: "Příjem a třídění faktur",
        benefit:
          "Úspora času u každé přijaté faktury — podle objemu i desítky hodin měsíčně.",
        steps: [
          "Faktura dorazí e-mailem nebo do schránky.",
          "Řešení přečte údaje a předá je do vašeho účetního systému.",
          "Účetní dostane upozornění a může jen zkontrolovat.",
        ],
      },
      {
        title: "Kontrola úplnosti dokumentace",
        benefit:
          "Méně doplňování u klienta, méně stresu před uzavřením zakázky.",
        steps: [
          "Projde se složka projektu nebo klienta proti checklistu.",
          "Chybějící podklady (NDA, přílohy, podpisy) se vyznačí.",
          "Zodpovědná osoba dostane přehled, co doplnit.",
        ],
      },
      {
        title: "Rychlá příprava smlouvy",
        benefit:
          "Kratší čekání na smlouvu a přehledné uložení verzí.",
        steps: [
          "Krátký formulář s parametry smlouvy.",
          "Doplnění údajů z veřejných registrů podle vašeho nastavení.",
          "Výstup k tisku nebo rovnou na elektronický podpis.",
        ],
      },
    ],
  },
  {
    id: "sales",
    label: "Obchod a marketing",
    cases: [
      {
        title: "Obchodní pipeline",
        benefit: "Kratší cesta od poptávky po uzavřenou zakázku.",
        steps: [
          "Sjednocení leadů z e-mailu, formulářů a CRM.",
          "Připomenutí follow-upů a návrh dalšího kroku.",
          "Přehled pro obchodníka bez ručního kopírování.",
        ],
      },
      {
        title: "Návrhy a nabídky",
        benefit: "Rychlejší reakce na klienta s konzistentním obsahem.",
        steps: [
          "Šablony a proměnné podle segmentu.",
          "Generování prvního návrhu z briefu nebo schůzky.",
          "Kontrola člověkem před odesláním.",
        ],
      },
    ],
  },
  {
    id: "provoz",
    label: "Provozní procesy",
    cases: [
      {
        title: "Opakující se provozní úkoly",
        benefit: "Méně ruční práce u rutiny, která se opakuje každý den nebo týden.",
        steps: [
          "Zmapování kroků u vás v terénu.",
          "Návrh automatizace nebo asistenta.",
          "Nasazení a školení lidí, kteří to budou používat.",
        ],
      },
      {
        title: "Propojení systémů",
        benefit: "Data tečou bez přepisování mezi aplikacemi.",
        steps: [
          "Které systémy spolu mají mluvit.",
          "Bezpečné napojení (API, e-mail, exporty).",
          "Monitoring a jednoduchá údržba.",
        ],
      },
    ],
  },
  {
    id: "mgmt",
    label: "Management a řízení",
    cases: [
      {
        title: "Úkoly ze schůzek",
        benefit: "Méně „myslel jsem, že to vezme někdo jiný“.",
        steps: [
          "Záznam nebo shrnutí schůzky.",
          "Návrh úkolů, termínů a odpovědností.",
          "Propojení s vaším nástrojem na úkoly (pokud ho máte).",
        ],
      },
      {
        title: "Reporting a přehledy",
        benefit: "Méně ruční skládání tabulek pro vedení.",
        steps: [
          "Jednotný zdroj pravdy pro čísla, která potřebujete.",
          "Automatické aktualizace podle domluvené frekvence.",
          "Výstup ve formě, na kterou jste zvyklí.",
        ],
      },
    ],
  },
];

export function AiDoFirmyUseCases() {
  const [active, setActive] = React.useState(categories[0].id);
  const cat = categories.find((c) => c.id === active)!;

  return (
    <div className="mt-10">
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
            aria-selected={active === c.id}
            onClick={() => setActive(c.id)}
            className={`min-h-[44px] rounded-full px-4 py-2 text-sm font-semibold transition ${
              active === c.id
                ? "bg-primary text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-8" role="tabpanel">
        {cat.cases.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.05}>
            <article className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm md:p-8">
              <h3 className="text-xl font-semibold text-text">{item.title}</h3>
              <p className="mt-2 text-sm font-medium text-primary">
                Přínos: {item.benefit}
              </p>
              <ol className="mt-6 space-y-4">
                {item.steps.map((step, j) => (
                  <li key={j} className="flex gap-4">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary"
                      aria-hidden="true"
                    >
                      {j + 1}
                    </span>
                    <span className="pt-1 text-slate-700">{step}</span>
                  </li>
                ))}
              </ol>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
