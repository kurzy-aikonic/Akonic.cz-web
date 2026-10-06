import { LeadLink } from "./LeadLink";
import { SectionHeading } from "./SectionHeading";
import type { Interest } from "../../lib/cro-events";
const problems: {
  title: string;
  text: string;
  cta: string;
  interest: Interest;
}[] = [
  {
    title: "Chceme naučit tým používat AI",
    text: "Lidé AI používají nahodile, každý jinak nebo vůbec.",
    cta: "Firemní školení",
    interest: "AI školení",
  },
  {
    title: "Nevíme, kde AI začít",
    text: "Zmapujeme procesy a najdeme příležitosti s největším dopadem.",
    cta: "AI audit",
    interest: "AI audit",
  },
  {
    title: "Chceme automatizovat konkrétní práci",
    text: "Opakované úkoly, reporting, e-maily, data nebo práce mezi systémy.",
    cta: "Automatizace a implementace",
    interest: "Automatizace",
  },
  {
    title: "Chceme využít dotaci",
    text: "Prověříme vhodný vzdělávací program a pomůžeme s administrativou.",
    cta: "Prověřit možnosti",
    interest: "Dotované vzdělávání",
  },
];
export function ProblemSelector() {
  return (
    <section id="sluzby" className="cro-section">
      <div className="cro-container">
        <SectionHeading
          eyebrow="Jak pomáháme"
          title="Kde vás dnes AI nejvíc brzdí?"
        >
          Nemusíte vědět, jakou službu potřebujete. Začněme tím, co chcete ve
          firmě změnit.
        </SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2">
          {problems.map((p, i) => (
            <article key={p.interest} className="cro-card">
              <span className="text-sm font-medium text-primary">0{i + 1}</span>
              <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
              <p className="mb-5 mt-2 text-slate-600">{p.text}</p>
              <LeadLink
                secondary
                interest={p.interest}
                section="problems"
                event="problem_card_click"
              >
                {p.cta}
              </LeadLink>
            </article>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <p className="text-slate-600">
            Nevíte, která cesta je pro vás správná?
          </p>
          <LeadLink secondary section="problems">
            Probrat to 20 minut s námi
          </LeadLink>
        </div>
      </div>
    </section>
  );
}
