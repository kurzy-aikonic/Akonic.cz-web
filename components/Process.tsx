import { SectionHeading } from "./cro/SectionHeading";
const steps = [
  ["Zjistíme, kde začít", "Audit, rozhovory s týmem nebo úvodní diagnostika."],
  [
    "Vybereme příležitosti",
    "Určíme úkoly a procesy, kde dává AI největší smysl.",
  ],
  [
    "Naučíme lidi a vytvoříme řešení",
    "Praktické školení, workshop, hackathon nebo pilot automatizace.",
  ],
  [
    "Dostaneme změnu do praxe",
    "Implementace, AI ambasadoři a další rozvoj podle potřeby.",
  ],
];
export function Process() {
  return (
    <section id="proces" className="cro-section">
      <div className="cro-container">
        <SectionHeading
          eyebrow="Jak spolupráce funguje"
          title="Od prvního nápadu k AI, kterou lidé opravdu používají."
        />
        <ol className="grid gap-6 md:grid-cols-4">
          {steps.map(([title, text], i) => (
            <li key={title} className="border-t-2 border-primary/25 pt-5">
              <span className="text-3xl font-semibold text-primary">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
