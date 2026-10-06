import { SectionHeading } from "./SectionHeading";
import { LeadLink } from "./LeadLink";
import type { Interest } from "../../lib/cro-events";
const plans: {
  title: string;
  price: string;
  note: string;
  points: string[];
  interest: Interest;
  href: string;
}[] = [
  {
    title: "AI audit",
    price: "od 35 000 Kč",
    note: "s DPH",
    points: [
      "Analýza procesů a rozhovory s týmem",
      "Report s prioritami a termíny",
      "Předávací schůzka",
    ],
    interest: "AI audit",
    href: "/audit",
  },
  {
    title: "Firemní AI workshop",
    price: "49 900 Kč",
    note: "s DPH · 1 den / 8 hodin",
    points: [
      "AI školení pro firmy na skutečných úkolech",
      "Prezenčně nebo online",
      "Praxe pro váš tým",
    ],
    interest: "AI školení",
    href: "/jednodenni-skoleni-ai",
  },
  {
    title: "Program na míru",
    price: "Individuálně",
    note: "podle rozsahu spolupráce",
    points: [
      "Vzdělávání a praktické use cases",
      "Automatizace a AI implementace",
      "Dlouhodobá adopce podle potřeby",
    ],
    interest: "Nevím, potřebuji poradit",
    href: "/ai-do-firmy",
  },
];
export function HomePricing() {
  return (
    <section id="cenik" className="cro-section">
      <div className="cro-container">
        <SectionHeading
          eyebrow="Možnosti spolupráce"
          title="Rozsah podle potřeb. Cena předem."
        >
          Správný další krok vybereme společně. Schválené ceny kurzů a
          podrobnosti najdete na stránkách služeb.
        </SectionHeading>
        <div className="grid gap-4 lg:grid-cols-3">
          {plans.map((p, i) => (
            <article
              key={p.title}
              className={`cro-card flex flex-col ${i === 0 ? "border-primary" : ""}`}
            >
              <p className="cro-eyebrow">
                {i === 0
                  ? "Když hledáte, kde začít"
                  : i === 1
                    ? "Pro váš tým"
                    : "Od pilotu k praxi"}
              </p>
              <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
              <p className="mt-5 text-3xl font-semibold">{p.price}</p>
              <p className="mt-1 text-sm text-slate-500">{p.note}</p>
              <ul className="my-6 space-y-3 text-sm text-slate-600">
                {p.points.map((t) => (
                  <li key={t}>✓ {t}</li>
                ))}
              </ul>
              <LeadLink
                className="mt-auto"
                section="pricing"
                event="pricing_cta"
                interest={p.interest}
              >
                Zjistit možnosti pro naši firmu
              </LeadLink>
              <a
                className="mt-3 inline-flex min-h-11 items-center text-sm text-primary underline underline-offset-4"
                href={p.href}
              >
                Obsah a podmínky →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
