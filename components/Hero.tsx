 "use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { FadeIn } from "./FadeIn";
import { MagneticButton } from "./MagneticButton";


export function Hero() {
  const words = ["Procesy", "Finance", "Týmy", "Budoucnost"];
  const [activeWord, setActiveWord] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative overflow-hidden pb-16 pt-20 md:pb-24 md:pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl md:h-[420px] md:w-[420px]" />
        <div className="absolute right-10 top-24 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl" />
      </div>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div>
          <FadeIn delay={0.05}>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-600 backdrop-blur">
              Implementace AI pro firmy
            </p>
          </FadeIn>
          <FadeIn delay={0.12}>
            <h1 className="text-4xl font-semibold leading-tight text-text md:text-6xl lg:text-7xl">
              Přestaňte pálit peníze za rutinu.
            </h1>
          </FadeIn>
          <FadeIn delay={0.18}>
            <p className="mt-4 text-lg font-medium text-slate-700 md:text-xl">
              Nechte technologie pracovat, vy začněte vydělávat.
            </p>
          </FadeIn>
          <FadeIn delay={0.22}>
            <p className="mt-5 max-w-xl text-base text-slate-600 md:text-lg">
              Od intenzivních dvoudenních AI Hackathonů po chytrou správu
              financí. Nejsme jen školitelé – jsme architekti vaší efektivity.
              Pomůžeme firmám i jednotlivcům získat náskok.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Automatizujeme vaše:{" "}
              <span className="text-primary">{words[activeWord]}</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.34}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <MagneticButton className="inline-flex">
                <Button size="lg" asChild>
                  <Link href="/#contact">Chci zastavit plýtvání</Link>
                </Button>
              </MagneticButton>
              <MagneticButton className="inline-flex">
                <Button size="lg" variant="outline" asChild>
                  <Link href="/#services">Jak to funguje?</Link>
                </Button>
              </MagneticButton>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.18} className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/40 bg-white/70 shadow-2xl backdrop-blur">
            <Image
              src="/hero-bg.jpg"
              alt="Abstraktní technologické pozadí"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/60 to-slate-900/90 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-primary/20" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
