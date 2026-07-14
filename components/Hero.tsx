"use client";

import * as React from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import { Button } from "./ui/button";
import { FadeIn } from "./FadeIn";
import { MagneticButton } from "./MagneticButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-12 pt-24 md:pb-20 md:pt-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl md:h-[420px] md:w-[420px]" />
        <div className="absolute right-10 top-24 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
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
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-snug text-slate-700 md:text-xl">
            Stovky proškolených hodin po celé ČR — od úvodního workshopu po AI hackathon.
            Pomůžeme i s{" "}
            <Link href="/dotace-na-skoleni" className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:text-blue-600">
              dotacemi Jsem v kurzu a Digi pro firmy
            </Link>
            .
          </p>
        </FadeIn>

        <FadeIn delay={0.24} animateOnMount>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
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

        <FadeIn delay={0.3} animateOnMount>
          <Link
            href="/#reference"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-700 backdrop-blur transition hover:border-primary/30 hover:bg-white"
          >
            <span className="flex items-center gap-0.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400" />
              ))}
            </span>
            <span className="font-semibold text-text">5.0 na Google</span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-600">40 recenzí klientů</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
