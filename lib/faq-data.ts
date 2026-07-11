/**
 * Jeden zdroj pravdy pro FAQ UI (`components/FAQ.tsx`) i FAQPage JSON-LD (`app/page.tsx`).
 * V samostatném (server-safe) modulu — `FAQ.tsx` má "use client", odkud nelze
 * plná data bezpečně importovat do server komponent (viz aikonic-navrh-uprav-2.md, 3.3).
 */
export const faqs = [
  {
    question: "Je implementace AI bezpečná pro naše data?",
    answer:
      "Ano. Pracujeme podle vašich bezpečnostních standardů a datová pravidla nastavíme na míru.",
  },
  {
    question: "Jak dlouho trvá typický projekt?",
    answer:
      "Implementace obvykle několik týdnů. Přesný rozsah určíme po auditu.",
  },
  {
    question: "Potřebujeme technické znalosti?",
    answer:
      "Ne. Vše srozumitelně vysvětlíme a tým proškolíme.",
  },
  {
    question: "Kolik to stojí?",
    answer:
      "Vzdělávací kurz AI máme v ceníku: 60 000 Kč s DPH (8 hodin) nebo 115 000 Kč s DPH (2 dny, 16 hodin). Firemní AI audit od 35 000 Kč s DPH. Hackathon a finanční školení nabízíme jako individuální projekty — cenu sestavíme na míru podle rozsahu. Úvodní konzultace je zdarma.",
  },
  {
    question: "Jak fungují dotace na AI školení (Jsem v kurzu, Digi pro firmy)?",
    answer:
      "Obě dotace míří na vzdělávání zaměstnanců a mohou pokrýt podstatnou část ceny školení. Nárok a míru podpory posuzujeme individuálně podle velikosti firmy a regionu — na konzultaci vám řekneme, zda a jak se dá dotace využít u vás.",
  },
  {
    question: "Jak velká skupina se školí najednou?",
    answer:
      "Typicky 4–15 lidí, aby zůstal prostor na individuální dotazy a praxi. Pro větší týmy rozdělíme školení do více běhů nebo paralelních skupin.",
  },
  {
    question: "Školíte prezenčně, nebo online?",
    answer:
      "Obojí. Prezenční forma u vás ve firmě nebo v prostorách Aigeluvlomu u Poličky funguje nejlépe pro hackathony a vícedenní programy; jednodenní školení běžně probíhají i online.",
  },
  {
    question: "Řešíte bezpečnost dat a mlčenlivost (NDA)?",
    answer:
      "Ano. Pracujeme podle vašich interních standardů a na vyžádání podepisujeme NDA před tím, než se dostaneme k reálným datům nebo procesům.",
  },
];
