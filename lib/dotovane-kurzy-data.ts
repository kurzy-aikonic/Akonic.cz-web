/**
 * Dotované AI kurzy v rámci programu „Vzdělávání pro firmy“ (Úřad práce ČR).
 * Sdílený zdroj pro ceník na homepage a landing /dotace-na-skoleni.
 */
export const DOTACNI_PROGRAM_NAZEV = "Vzdělávání pro firmy";

export const dotovaneKurzy = [
  {
    title: "AI kurz pro firmy — 50 hodin",
    duration: "6,5 dne",
    hours: 50,
    price: "350 000",
    priceNote: "Kč s DPH",
    includes: [
      "50 hodin prezenčního vzdělávání v oblasti IT a AI",
      "Program na míru podle potřeb vaší firmy",
      "Vhodné pro čerpání dotace „Vzdělávání pro firmy“",
      "Individuální nastavení rozsahu a obsahu u každého klienta",
    ],
    description:
      "Intenzivní program pro týmy, které chtějí AI zavést do praxe systematicky — od nástrojů po automatizaci a projekty.",
    featured: false,
  },
  {
    title: "AI kurz pro firmy — 80 hodin",
    duration: "10 dní",
    hours: 80,
    price: "550 000",
    priceNote: "Kč s DPH",
    includes: [
      "80 hodin prezenčního vzdělávání v oblasti IT a AI",
      "Hlubší pokrytí: školení, workshopy i realizační fáze",
      "Vhodné pro čerpání dotace „Vzdělávání pro firmy“",
      "Individuální nastavení rozsahu a obsahu u každého klienta",
    ],
    description:
      "Nejrozsáhlejší varianta — více prostoru pro praxi na vašich projektech, týmovou spolupráci a dlouhodobé zapojení AI do firmy.",
    featured: true,
  },
] as const;
