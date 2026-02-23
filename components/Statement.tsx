import { Target, TrendingUp, Users, Zap } from "lucide-react";
import { FadeIn } from "./FadeIn";

const items = [
  {
    icon: Zap,
    text: "AI Hackathony: 2 dny, které změní procesy.",
  },
  {
    icon: TrendingUp,
    text: "Finance: přehled a kontrola na jednom místě.",
  },
  {
    icon: Users,
    text: "Školíme lidi, ne roboty. Osobní přístup.",
  },
  {
    icon: Target,
    text: "Cílíme na okamžité výsledky a měřitelnou návratnost.",
  },
];

export function Statement() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-gradient-to-b from-white via-slate-50/50 to-white py-14 md:py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Náš přístup
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-text md:text-4xl lg:text-5xl">
              Nehrajeme si na vizionáře. Doručujeme výsledky.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
              Svět AI je plný slibů. My se držíme čísel. AI Hackathony plus
              finanční řízení — pro firmy i jednotlivce. Nástroje, ne teorie.
            </p>
          </FadeIn>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.text} delay={index * 0.06}>
                <div className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white/90 px-5 py-6 text-center shadow-sm transition hover:border-primary/20 hover:shadow-md">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="mt-4 text-sm font-medium leading-snug text-slate-700">
                    {item.text}
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
