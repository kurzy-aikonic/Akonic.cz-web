 "use client";

import * as React from "react";
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
    <section className="relative overflow-hidden pb-12 pt-24 md:pb-20 md:pt-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl md:h-[420px] md:w-[420px]" />
        <div className="absolute right-10 top-24 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-3xl">
          <FadeIn delay={0.05} animateOnMount>
            <p className="mb-4 inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-slate-200 bg-white/70 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-slate-600 backdrop-blur sm:justify-start">
              AI pro firmy — školení a implementace
            </p>
          </FadeIn>
          <FadeIn delay={0.12} animateOnMount>
            <h1 className="text-4xl font-semibold leading-tight text-text md:text-6xl lg:text-7xl">
              Přestaňte pálit peníze za rutinu.
            </h1>
          </FadeIn>
          <FadeIn delay={0.18} animateOnMount>
            <p className="mt-4 text-lg font-medium text-slate-700 md:text-xl">
              Nechte technologie pracovat. Vy vydělávejte.
            </p>
          </FadeIn>
          <FadeIn delay={0.22}>
            <p className="mt-5 max-w-xl text-base text-slate-600 md:text-lg">
              AI Hackathony, automatizace, správa financí. Nejsme jen školitelé —
              stavíme vám efektivitu na míru. Pro firmy i jednotlivce.
            </p>
          </FadeIn>
          <FadeIn delay={0.26}>
            <p className="mt-4 text-base text-slate-600">
              Začněte{" "}
              <Link href="/audit" className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 transition hover:text-blue-600 hover:decoration-primary">
                auditem
              </Link>
              {" "}— zjistíme, kde AI přinese nejvíc.
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
              <MagneticButton className="w-full sm:w-auto">
                <Button size="lg" asChild className="w-full sm:w-auto min-h-[48px]">
                  <Link href="/#contact">Domluvit konzultaci</Link>
                </Button>
              </MagneticButton>
              <MagneticButton className="w-full sm:w-auto">
                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto min-h-[48px]">
                  <Link href="/#sluzby">Jak to funguje</Link>
                </Button>
              </MagneticButton>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
