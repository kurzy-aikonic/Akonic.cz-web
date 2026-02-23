import { Target, TrendingUp, Users, Zap } from "lucide-react";
import { FadeIn } from "./FadeIn";

const stats = [
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

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn className="max-w-3xl space-y-6">
          <h2 className="text-3xl font-semibold text-text md:text-4xl">
            Nehrajeme si na vizionáře. Doručujeme výsledky.
          </h2>
          <p className="text-base text-slate-600">
            Svět AI je plný slibů. My se držíme čísel. AI Hackathony plus finanční řízení — pro firmy i jednotlivce. Nástroje, ne teorie.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={`${stat.text}-${index}`}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-4 shadow-sm"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-sm text-slate-700">{stat.text}</p>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
