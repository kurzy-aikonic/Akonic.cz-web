import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { Trust } from "./Trust";

const testimonials = [
  {
    name: "Simona Piperková",
    role: "Obchodní a Ekonomická ředitelka, Sareza",
    initials: "SP",
    text: "Skvělé školení o umělé inteligenci! Lektor byl výborný – srozumitelný, inspirativní a plný energie. Praktické ukázky, užitečné tipy a spousta nových nápadů. Rozhodně doporučuji!",
  },
  {
    name: "Jaroslav Kovář",
    role: "Jednatel, Sareza Ostrava",
    initials: "JK",
    text: "Velmi podnětné školení, spousta zajímavých informací.",
  },
  {
    name: "Monika Bohacova",
    role: "Žaluzie Bohacova",
    initials: "MB",
    text: "Školení bylo velmi přínosné a prakticky zaměřené. Lektor dokázal srozumitelně vysvětlit i složitější principy a ukázal konkrétní příklady z praxe. Oceňuji přehlednost a interaktivitu.",
  },
  {
    name: "Radek Bialek",
    role: "Žaluzie Bohacova",
    initials: "RB",
    text: "Školení probíhalo svižně a otevřelo mi oči v AI světě. Lektor se snažil vžít do fungování naší firmy a radit nám na míru. Super pro nováčky, ale i pro rozšíření obzorů pokročilých.",
  },
];

const cardBg = ["bg-primary/5", "bg-emerald-500/5", "bg-violet-500/5", "bg-amber-500/5"];

export function Testimonials() {
  return (
    <section id="reference" className="relative overflow-hidden py-14 md:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50/30 via-transparent to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:px-6">
        <Trust />

        <div>
          <FadeIn className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Reference
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-text md:text-4xl">
                Co říkají klienti
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-text md:text-base">
                Průměrné hodnocení 5.0/5
              </span>
              <div className="flex items-center gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400" />
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Grid 2×2 — všechny recenze viditelné hned, i pro SEO (viz aikonic-navrh-uprav-2.md, 1.3) */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {testimonials.map((t, index) => (
              <FadeIn key={t.name} delay={index * 0.06} className="h-full">
                <div className={`flex h-full flex-col rounded-2xl border border-slate-200 p-6 shadow-sm ${cardBg[index % cardBg.length]}`}>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-700 md:text-base">
                    „{t.text}"
                  </blockquote>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      {t.initials}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-text">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-6">
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
