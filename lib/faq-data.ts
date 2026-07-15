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
      "Vzdělávací kurz AI máme v ceníku: 60 000 Kč s DPH (8 hodin) nebo 115 000 Kč s DPH (2 dny, 16 hodin). Firemní AI audit od 35 000 Kč s DPH. Dotované kurzy v programu „Vzdělávání pro firmy“: 50 hodin za 350 000 Kč s DPH nebo 80 hodin za 550 000 Kč s DPH — rozsah nastavíme individuálně. Hackathon a finanční školení nabízíme jako individuální projekty. Úvodní konzultace je zdarma.",
  },
  {
    question: "Jak fungují dotace na AI školení („Vzdělávání pro firmy“)?",
    answer:
      "Program „Vzdělávání pro firmy“ (Úřad práce ČR) podporuje školení zaměstnanců v IT dovednostech — včetně AI. Příspěvek se poskytuje za absolvované hodiny vzdělávání. Nabízíme dotované kurzy 50 hodin (350 000 Kč s DPH) a 80 hodin (550 000 Kč s DPH). S vyřízením dotace vám pomůžeme od žádosti po vyúčtování — nezávazně posoudíme nárok na úvodní konzultaci.",
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
