import Image from "next/image";
import { Target, TrendingUp, Users, Zap } from "lucide-react";
import { FadeIn } from "./FadeIn";

const stats = [
  {
    icon: Zap,
    text: "AI Hackathony: 2 dny, které změní vaše procesy.",
  },
  {
    icon: TrendingUp,
    text: "Správa financí: 100% přehled a kontrola.",
  },
  {
    icon: Users,
    text: "Osobní přístup: Školíme lidi, ne roboty.",
  },
  {
    icon: Target,
    text: "Rychlá návratnost: Cílíme na okamžité výsledky.",
  },
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center md:px-6">
        <FadeIn className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-xl">
            <Image
              src="/about.jpg"
              alt="AIKONIC tým při práci"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 via-transparent to-transparent" />
          </div>
        </FadeIn>

        <FadeIn className="space-y-6">
          <h2 className="text-3xl font-semibold text-text md:text-4xl">
            Nehrajeme si na vizionáře. Doručujeme výsledky.
          </h2>
          <p className="text-base text-slate-600">
            Svět AI je plný slibů. My se držíme čísel. Spojujeme dravost
            intenzivních AI Hackathonů s precizností finančního řízení. Ať už
            jste firma hledající úspory, nebo jednotlivec, který chce mít své
            finance pod kontrolou – my vám dáme nástroje, ne jen teorii.
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
