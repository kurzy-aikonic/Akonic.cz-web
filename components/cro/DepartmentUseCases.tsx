"use client";
import { useRef, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { LeadLink } from "./LeadLink";
import { track } from "../../lib/cro-events";
const departments = [
  {
    name: "Obchod",
    cases: [
      [
        "Před schůzkou",
        "AI připraví informace o klientovi a podklady k jednání.",
      ],
      [
        "Po schůzce",
        "Z poznámek vytvoří zápis, CRM shrnutí a návrh follow-upu.",
      ],
      [
        "Nabídky",
        "Pomůže připravit první verzi nabídky z podkladů a předchozí komunikace.",
      ],
    ],
  },
  {
    name: "Marketing",
    cases: [
      [
        "Obsah",
        "Z briefu připraví první návrh textu a varianty pro různé kanály.",
      ],
      ["Rešerše", "Utřídí dostupné podklady o trhu a otázky zákazníků."],
      [
        "Reporty",
        "Pomůže shrnout výsledky kampaní a připravit komentář pro tým.",
      ],
    ],
  },
  {
    name: "HR",
    cases: [
      [
        "Nábor",
        "Pomůže sestavit inzerát a otázky pro pohovor podle požadavků role.",
      ],
      [
        "Onboarding",
        "Připraví osnovu prvních týdnů a přehled interních podkladů.",
      ],
      [
        "Dokumenty",
        "Shrne dlouhé dokumenty do přehledných podkladů pro zaměstnance.",
      ],
    ],
  },
  {
    name: "Administrativa",
    cases: [
      ["E-maily", "Připraví návrhy odpovědí z dostupných podkladů."],
      [
        "Zápisy a dokumenty",
        "Utřídí poznámky z porady a porovná verze dokumentů.",
      ],
      ["Tabulky a reporty", "Pomůže s opakovanými přehledy a kontrolou dat."],
    ],
  },
  {
    name: "Management",
    cases: [
      ["Reporty", "Shrne podklady z oddělení a označí otázky k doplnění."],
      [
        "Rozhodování",
        "Pomůže připravit varianty a jejich předpoklady pro další posouzení.",
      ],
      ["Rešerše", "Zpracuje dostupné zdroje do přehledu s odkazy pro ověření."],
    ],
  },
  {
    name: "Zákaznická podpora",
    cases: [
      [
        "Odpovědi",
        "Navrhne odpověď podle schválených informací a historie požadavku.",
      ],
      [
        "Interní znalosti",
        "Pomůže kolegům najít relevantní návod nebo postup.",
      ],
      [
        "Zpětná vazba",
        "Roztřídí opakující se témata a připraví souhrn pro tým.",
      ],
    ],
  },
];
export function DepartmentUseCases() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  function select(i: number, focus = false) {
    setActive(i);
    track("usecase_tab_change", {
      section: "usecases",
      variant: departments[i].name,
    });
    if (focus) refs.current[i]?.focus();
  }
  return (
    <section id="pro-koho" className="cro-section bg-slate-50">
      <div className="cro-container">
        <SectionHeading
          eyebrow="AI v každodenní práci"
          title="Co může AI změnit právě ve vašem týmu"
        >
          Konkrétní pracovní situace. Výstupy vždy kontroluje člověk, který zná
          váš kontext.
        </SectionHeading>
        <div
          role="tablist"
          aria-label="Oddělení firmy"
          className="mb-6 flex flex-wrap gap-2"
        >
          {departments.map((d, i) => (
            <button
              key={d.name}
              ref={(el) => {
                refs.current[i] = el;
              }}
              id={`department-${i}`}
              role="tab"
              aria-selected={active === i}
              aria-controls={`cases-${i}`}
              tabIndex={active === i ? 0 : -1}
              className={`cro-tab ${active === i ? "cro-tab-active" : ""}`}
              onClick={() => select(i)}
              onKeyDown={(e) => {
                let n = i;
                if (e.key === "ArrowRight") n = (i + 1) % departments.length;
                else if (e.key === "ArrowLeft")
                  n = (i + departments.length - 1) % departments.length;
                else if (e.key === "Home") n = 0;
                else if (e.key === "End") n = departments.length - 1;
                else return;
                e.preventDefault();
                select(n, true);
              }}
            >
              {d.name}
            </button>
          ))}
        </div>
        {departments.map((d, i) => (
          <div
            key={d.name}
            id={`cases-${i}`}
            role="tabpanel"
            aria-labelledby={`department-${i}`}
            hidden={active !== i}
            tabIndex={0}
          >
            <div className="grid gap-4 md:grid-cols-3">
              {d.cases.map(([title, text]) => (
                <article key={title} className="cro-card">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
        <div className="mt-6">
          <LeadLink interest="AI audit" section="usecases">
            Najít příležitosti v naší firmě
          </LeadLink>
        </div>
      </div>
    </section>
  );
}
