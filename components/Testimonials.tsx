"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ExternalLink, Star } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { Trust } from "./Trust";

const testimonials = [
  {
    name: "Simona Piperková",
    role: "Obchodní a Ekonomická ředitelka, Sareza",
    initials: "SP",
    date: "",
    text: "Skvělé školení o umělé inteligenci! Lektor byl výborný – srozumitelný, inspirativní a plný energie. Praktické ukázky, užitečné tipy a spousta nových nápadů. Rozhodně doporučuji!",
  },
  {
    name: "Jaroslav Kovář",
    role: "Jednatel, Sareza Ostrava",
    initials: "JK",
    date: "před 2 týdny",
    text: "Velmi podnětné školení, spousta zajímavých informací.",
  },
  {
    name: "Monika Bohacova",
    role: "Žaluzieee",
    initials: "MB",
    date: "před 1 měsícem",
    text: "Školení bylo velmi přínosné a prakticky zaměřené. Lektor dokázal srozumitelně vysvětlit i složitější principy a ukázal konkrétní příklady z praxe. Oceňuji přehlednost a interaktivitu.",
  },
  {
    name: "Radek Bialek",
    role: "Žaluzieee",
    initials: "RB",
    date: "před 3 týdny",
    text: "Školení probíhalo svižně a otevřelo mi oči v AI světě. Lektor se snažil vžít do fungování naší firmy a radit nám na míru. Super pro nováčky, ale i pro rozšíření obzorů pokročilých.",
  },
];

export function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const t = testimonials[index];

  const goPrev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section id="reference" className="relative overflow-hidden py-14 md:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50/30 via-transparent to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:px-6">
        <Trust />

        <FadeIn>
          <div className="rounded-3xl bg-gradient-to-r from-slate-800 via-violet-900/90 to-slate-800 p-5 text-white shadow-2xl md:p-6">
            {/* Header: Reference + hodnocení */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Reference
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-white md:text-base">
                  Průměrné hodnocení 5.0/5
                </span>
                <div className="flex items-center gap-0.5 text-amber-300">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="icon-glow-amber inline-flex rounded p-0.5">
                      <Star className="h-4 w-4 fill-amber-300" />
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Jeden citát – velký, čitelný */}
            <div className="relative mt-5 min-h-0">
              <blockquote className="text-base leading-relaxed text-white/95 md:text-lg md:leading-relaxed">
                „{t.text}"
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-xs font-semibold text-white">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/70">
                    {t.role}
                    {t.date ? ` · ${t.date}` : ""}
                  </p>
                </div>
              </div>
            </div>

            {/* Posouvání: šipky + tečky */}
            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Předchozí reference"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/90 transition hover:bg-white/10 hover:text-white"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Další reference"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/90 transition hover:bg-white/10 hover:text-white"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center gap-1.5" aria-label="Reference 1 až 4">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Reference ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? "w-6 bg-amber-300" : "w-2 bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="mt-2">
          <Link
            href="https://www.google.com/maps?q=Aikonic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Zobrazit všechny recenze na Google Maps
            <ExternalLink className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
