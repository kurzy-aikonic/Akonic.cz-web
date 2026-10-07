"use client";
import Link from "next/link";
import { LeadLink } from "./cro/LeadLink";
import { track } from "../lib/cro-events";
export function Hero() {
  return (
    <section className="cro-hero">
      <div className="cro-container">
        <div className="max-w-4xl">
          <p className="cro-eyebrow">Praktické zavádění AI do firem</p>
          <h1 className="mt-5 max-w-3xl text-[2.35rem] font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[4.1rem]">
            AI, která ve vaší firmě skutečně{" "}
            <span className="text-primary">šetří čas</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700">
            Pomáháme firmám najít praktické využití AI, naučit týmy s ní
            pracovat a zavést konkrétní řešení do každodenní praxe.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <LeadLink section="hero" event="hero_primary_cta">
              Domluvit 20min konzultaci
            </LeadLink>
            <Link
              href="/ai-skoleni-pro-firmy"
              className="cro-button-secondary"
              onClick={() => track("hero_secondary_cta", { section: "hero" })}
            >
              AI školení pro firmy
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            20 minut bez závazků · prezenčně po celé ČR i online
          </p>
        </div>
      </div>
    </section>
  );
}
