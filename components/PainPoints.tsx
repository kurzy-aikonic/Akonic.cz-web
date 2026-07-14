import { ArrowRight, ShieldCheck, Sparkles, Target } from "lucide-react";
import { FadeIn } from "./FadeIn";

const painPoints = [
  {
    problem: "Tým používá ChatGPT, ale každý jinak a bez pravidel.",
    solution: "Nastavíme jednotné postupy a bezpečnostní rámec.",
    icon: ShieldCheck,
  },
  {
    problem: "Slyšíte o AI všude, ale nevíte, kde u vás začít.",
    solution: "Audit najde 3–5 míst s největší návratností.",
    icon: Target,
  },
  {
    problem: "Školení už jste měli — a nic se nezměnilo.",
    solution: "Náš formát končí funkčním prototypem, ne prezentací.",
    icon: Sparkles,
  },
  {
    problem: "Řešíte bezpečnost dat a compliance.",
    solution: "Pracujeme podle vašich standardů, klidně s NDA.",
    icon: ArrowRight,
  },
];

export function PainPoints() {
  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn className="flex flex-col gap-4" animateOnMount>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Typické situace
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold text-text md:text-4xl">
            Čtyři nejčastější překážky, které brzdí nasazení AI ve firmě
          </h2>
          <p className="max-w-2xl text-base text-slate-600">
            Každá má konkrétní řešení — a vždy začínáme tam, kde vás to aktuálně nejvíc bolí.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.problem} delay={index * 0.06} animateOnMount className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <p className="text-sm font-medium leading-snug text-slate-500">
                    „{item.problem}"
                  </p>
                  <p className="mt-auto text-base font-semibold leading-snug text-text">
                    {item.solution}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
