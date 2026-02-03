import { FadeIn } from "./FadeIn";

const steps = [
  {
    title: "Konzultace & Audit",
    description: "Zjistíme, kde vám AI ušetří peníze.",
  },
  {
    title: "Návrh řešení",
    description: "Design na míru vašim procesům.",
  },
  {
    title: "Implementace",
    description: "Rychlé nasazení bez výpadků.",
  },
  {
    title: "Podpora & Růst",
    description: "Školení týmu a optimalizace.",
  },
];

export function Process() {
  return (
    <section id="proces" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Jak probíhá spolupráce
          </p>
          <h2 className="text-3xl font-semibold text-text md:text-4xl">
            Jasný proces. Měřitelné výsledky.
          </h2>
        </FadeIn>

        <div className="relative mt-10 grid gap-6 md:grid-cols-4">
          <div className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-slate-200 md:left-0 md:top-1/2 md:h-px md:w-full md:-translate-y-1/2" />
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm"
            >
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-text">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
