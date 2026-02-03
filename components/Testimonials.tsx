"use client";

import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { Trust } from "./Trust";

const testimonials = [
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
  return (
    <section id="reference" className="py-16 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:px-6">
        <Trust />

        <FadeIn>
          <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-8 text-white shadow-2xl">
            <p className="text-xl italic leading-relaxed md:text-2xl">
              “Skvělé školení o umělé inteligenci! Lektor byl výborný –
              srozumitelný, inspirativní a plný energie. Praktické ukázky,
              užitečné tipy a spousta nových nápadů. Rozhodně doporučuji!”
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-white/70">
              <span className="font-semibold text-white">Simona Piperková</span>
              <span>Obchodní a Ekonomická ředitelka, Sareza</span>
            </div>
          </div>
        </FadeIn>

        <div>
          <FadeIn className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              A co říkají účastníci našich školení?
            </p>
            <h2 className="text-3xl font-semibold text-text md:text-4xl">
              Průměrné hodnocení 5.0/5 ⭐⭐⭐⭐⭐
            </h2>
          </FadeIn>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={testimonial.name} delay={index * 0.08}>
                <article className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                        G
                      </div>
                      <div className="flex items-center gap-1 text-yellow-400">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className="h-4 w-4 fill-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-slate-500">
                      {testimonial.date}
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-slate-700">
                    {testimonial.text}
                  </p>

                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-10">
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
      </div>
    </section>
  );
}
