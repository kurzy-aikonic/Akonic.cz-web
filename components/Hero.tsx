"use client";
import Image from "next/image";
import { LeadLink } from "./cro/LeadLink";
import { track } from "../lib/cro-events";
export function Hero() {
  return (
    <section className="cro-hero">
      <div className="cro-container grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="cro-eyebrow">
            AI pro firmy · školení · automatizace · implementace
          </p>
          <h1 className="mt-5 max-w-3xl text-[2.35rem] font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[4.1rem]">
            AI, která ve vaší firmě skutečně{" "}
            <span className="text-primary">šetří čas.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-700">
            Zjistíme, kde má AI největší smysl, naučíme váš tým pracovat s ní na
            skutečných úkolech a pomůžeme nejlepší řešení dostat do praxe.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
            Od prvního auditu přes firemní školení až po automatizace a AI
            asistenty.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <LeadLink section="hero" event="hero_primary_cta">
              Zjistit možnosti pro naši firmu
            </LeadLink>
            <a
              href="#proces"
              className="cro-button-secondary"
              onClick={() => track("hero_secondary_cta", { section: "hero" })}
            >
              Jak spolupráce funguje ↓
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Úvodní konzultace zdarma · prezenčně po celé ČR i online
          </p>
          <a
            href="#reference"
            className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-slate-700"
          >
            <span className="text-primary" aria-hidden="true">
              ★★★★★
            </span>
            5,0 / 5 · 40 Google recenzí
          </a>
        </div>
        <figure className="relative hidden lg:block">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src="/gallery/ai-skoleni-workshop-05.webp"
              alt="Praktická práce během firemního AI školení"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="absolute bottom-6 left-6 right-6 rounded-xl bg-white p-5 text-sm text-slate-700">
            <span className="mb-1 block font-semibold text-slate-950">
              Skutečné úkoly. Váš tým. Praktická řešení.
            </span>
            Firemní AI školení a implementace v každodenní práci.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
