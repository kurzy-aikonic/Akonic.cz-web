import Link from "next/link";
import { FadeIn } from "./FadeIn";

const steps = [
  {
    title: "Audit a konzultace",
    description: "Zjistíme, kde AI přinese největší hodnotu.",
    href: "/audit",
  },
  {
    title: "Návrh řešení",
    description: "Řešení šité na míru vaším procesům.",
    href: undefined,
  },
  {
    title: "Implementace",
    description: "Nasazení bez zbytečných výpadků.",
    href: undefined,
  },
  {
    title: "Podpora a růst",
    description: "Školení týmu a průběžná optimalizace.",
    href: undefined,
  },
];

const stepStyles = [
  { bg: "bg-primary/25", border: "border-l-4 border-primary", accent: "text-primary", num: "bg-primary/35 text-primary" },
  { bg: "bg-emerald-600/25", border: "border-l-4 border-emerald-600", accent: "text-emerald-800", num: "bg-emerald-600/35 text-emerald-800" },
  { bg: "bg-violet-600/25", border: "border-l-4 border-violet-600", accent: "text-violet-800", num: "bg-violet-600/35 text-violet-800" },
  { bg: "bg-amber-500/30", border: "border-l-4 border-amber-600", accent: "text-amber-800", num: "bg-amber-500/40 text-amber-800" },
];

const stepOffset = ["ml-0", "sm:ml-8 md:ml-16", "sm:ml-16 md:ml-32", "sm:ml-24 md:ml-48"];

export function Process() {
  return (
    <section id="proces" className="relative overflow-hidden py-14 md:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-violet-50/50 via-white to-transparent" />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold text-text md:text-4xl">
            Od auditu k implementaci
          </h2>
          <p className="max-w-2xl text-base text-slate-600">
            Spolupráce v několika krocích — od zjištění příležitostí po nasazení a podporu.
          </p>
        </FadeIn>

        <div className="relative mt-10 flex flex-col gap-1.5">
          {steps.map((step, index) => {
            const style = stepStyles[index];
            return (
              <FadeIn key={step.title} delay={index * 0.05}>
                <div className="flex w-full">
                  <div
                    className={`group relative flex min-h-12 w-full flex-1 items-center gap-4 rounded-lg py-2.5 px-4 shadow-sm transition-all duration-200 hover:translate-x-1.5 hover:shadow-md hover:shadow-slate-300/40 ${style.bg} ${style.border} ${stepOffset[index]}`}
                  >
                    <span className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-sm font-semibold ${style.num}`}>
                      {index + 1}
                    </span>
                    <h3 className="min-w-0 flex-1 truncate text-sm font-semibold text-text">{step.title}</h3>
                    <p className="min-w-0 flex-shrink text-xs text-slate-600 sm:flex-shrink-0 sm:max-w-[12rem] sm:truncate md:max-w-xs">{step.description}</p>
                    {step.href && (
                      <Link
                        href={step.href}
                        className={`shrink-0 text-sm font-semibold ${style.accent} transition hover:opacity-80 active:opacity-80`}
                      >
                        Více o auditu →
                      </Link>
                    )}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
