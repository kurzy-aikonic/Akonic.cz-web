 "use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { FadeIn } from "./FadeIn";
import { MagneticButton } from "./MagneticButton";
import { HeroGameWidget } from "./HeroGameWidget";


export function Hero() {
  const words = ["Kurzy", "Hackathony", "Audit", "Finance"];
  const [activeWord, setActiveWord] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative overflow-hidden pb-12 pt-24 md:pb-20 md:pt-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl md:h-[420px] md:w-[420px]" />
        <div className="absolute right-10 top-24 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute bottom-20 left-1/4 h-40 w-40 rounded-full bg-amber-300/25 blur-3xl" />
        <div className="absolute right-1/3 top-1/2 h-56 w-56 rounded-full bg-violet-400/15 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr,auto] lg:gap-12">
          <div className="min-w-0">
            <FadeIn delay={0.05} animateOnMount>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-slate-600 backdrop-blur">
                Školíme AI ve firmách
              </p>
            </FadeIn>
            <FadeIn delay={0.12} animateOnMount>
              <h1 className="text-3xl font-semibold leading-tight text-text sm:text-4xl md:text-6xl lg:text-7xl">
                Firemní AI vzdělávání na míru.
              </h1>
            </FadeIn>
            <FadeIn delay={0.18} animateOnMount>
              <div className="mt-4 space-y-3 text-lg text-slate-700 md:text-xl">
                <p className="font-medium leading-snug">
                  Od úvodních workshopů po inovační hackathony.
                </p>
                <p className="leading-snug">
                  Začněte{" "}
                  <Link href="/audit" className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 transition hover:text-blue-600 hover:decoration-primary">
                    auditem
                  </Link>
                  {" "}a nastavíme školení přesně podle potřeb vašeho týmu.
                </p>
                <p className="italic text-slate-600">
                  Ráději rovnou konkrétní téma?
                </p>
                <p className="font-medium text-slate-800">
                  Vyberte si{" "}
                  <Link href="/#sluzby" className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 transition hover:text-blue-600 hover:decoration-primary">
                    kurz z nabídky
                  </Link>
                  .
                </p>
                <p className="mt-4 border-t border-slate-200/70 pt-4 text-base leading-snug text-slate-600 md:text-lg">
                  Pomůžeme s dotacemi na školení — vyřizujeme projekty v programech Jsem v kurzu a Digi pro firmy. Za námi jsou stovky proškolených hodin a účastníků, spolupracujeme s lektory, kteří školili v korporátech i ve středních a velkých firmách.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* HeroGameWidget — pouze na lg+ */}
          <FadeIn delay={0.15} animateOnMount className="hidden lg:block lg:row-span-2 lg:mt-10 lg:self-start">
            <HeroGameWidget />
          </FadeIn>

          <div className="min-w-0">
            <FadeIn delay={0.28} animateOnMount>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Nabízíme:{" "}
                <span className="text-primary">{words[activeWord]}</span>
              </p>
            </FadeIn>
            <FadeIn delay={0.34} animateOnMount>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <MagneticButton className="w-full sm:w-auto">
                  <Button size="lg" asChild className="w-full min-h-[52px] sm:w-auto">
                    <Link href="/#contact">Domluvit konzultaci</Link>
                  </Button>
                </MagneticButton>
                <MagneticButton className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" asChild className="w-full min-h-[52px] sm:w-auto">
                    <Link href="/#sluzby">Vybrat kurz</Link>
                  </Button>
                </MagneticButton>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
