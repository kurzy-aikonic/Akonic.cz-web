import Link from "next/link";
import { ClipboardCheck, Clock, HandCoins, LayoutList, Zap } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { dotovaneKurzy } from "../lib/dotovane-kurzy-data";

const priceItems = [
  {
    icon: ClipboardCheck,
    label: "Doporučujeme začít zde",
    title: "Firemní AI audit",
    price: "od 35 000",
    priceNote: "Kč s DPH",
    includes: ["Analýza procesů a rozhovory s týmem", "Report s prioritami a termíny", "Předávací schůzka"],
    description: "Konkrétní cena podle náročnosti, počtu osob a rozsahu. Nabídku připravíme na míru po úvodní konzultaci.",
    href: "/audit",
    linkLabel: "Více o auditu →",
    recommended: true,
  },
  {
    icon: Clock,
    label: "Nejoblíbenější kurz",
    title: "Vzdělávací kurz AI (1 den)",
    price: "60 000",
    priceNote: "Kč s DPH",
    includes: ["8 hodin, prezenčně nebo online", "Praxe na vašich úkolech", "Osobní AI asistent"],
    description: "Dovednosti a pochopení principů AI v praxi.",
    href: "/#contact",
    linkLabel: "Domluvit termín →",
  },
  {
    icon: LayoutList,
    label: "S realizačním dnem",
    title: "Vzdělávací kurz AI (2 dny)",
    price: "115 000",
    priceNote: "Kč s DPH",
    includes: ["16 hodin, prezenčně nebo online", "Druhý den: týmy dotahují projekty", "Více prostoru pro cvičení"],
    description: "Hlubší náhled a více prostoru pro cvičení.",
    href: "/#contact",
    linkLabel: "Domluvit termín →",
  },
  {
    icon: Zap,
    label: "Na míru",
    title: "AI Hackathon",
    price: "dle domluvy",
    priceNote: "",
    includes: ["Od 4 hodin po libovolný počet dní", "U vás ve firmě nebo jinde", "Facilitace a funkční prototyp"],
    description: "Cena závisí na rozsahu, náročnosti, místu konání a dalších podmínkách. Nabídku sestavíme individuálně po konzultaci.",
    href: "/ai-hackathon",
    linkLabel: "Více o hackathonu →",
  },
];

export function Pricing() {
  return (
    <section id="cenik" className="relative overflow-hidden py-14 md:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50/40 via-transparent to-transparent" />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Ceník
          </p>
          <h2 className="text-3xl font-semibold text-text md:text-4xl">
            Kolik to stojí
          </h2>
          <p className="max-w-2xl text-base text-slate-600">
            Doporučujeme před samotným školením provést{" "}
            <Link href="/audit" className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 transition hover:text-blue-600 hover:decoration-primary">
              firemní AI audit
            </Link>
            , který zmapuje vaše procesy, odhalí konkrétní příležitosti a pomůže vybrat kurzy nebo hackathon přesně podle potřeb vašeho týmu.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {priceItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={0.05 + index * 0.05}>
                <Link
                  href={item.href}
                  className={`group relative flex h-full flex-col gap-4 rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md ${
                    item.recommended
                      ? "border-2 border-primary/50 hover:border-primary/70"
                      : "border-slate-200 hover:border-primary/20"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary/15">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${item.recommended ? "text-primary" : "text-slate-500"}`}>
                      {item.label}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-text md:text-xl">
                    {item.title}
                  </h3>

                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-2xl font-bold text-text md:text-3xl">
                      {item.price}
                    </span>
                    {item.priceNote && (
                      <span className="text-sm text-slate-500">{item.priceNote}</span>
                    )}
                  </div>

                  <ul className="space-y-1.5 text-sm text-slate-600">
                    {item.includes.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-auto inline-flex shrink-0 items-center pt-2 text-sm font-semibold text-primary group-hover:text-blue-600">
                    {item.linkLabel}
                  </span>
                </Link>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn className="mt-8">
          <p className="text-center text-sm text-slate-500">
            Finanční školení a další projekty na míru — cenu sestavíme podle rozsahu po konzultaci.
          </p>
        </FadeIn>

        {/* Dotované kurzy — program Vzdělávání pro firmy */}
        <FadeIn className="mt-16">
          <div className="rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/80 via-white to-primary/5 p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
                  Dotované kurzy
                </p>
                <h3 className="text-2xl font-semibold text-text md:text-3xl">
                  Program „Vzdělávání pro firmy“
                </h3>
                <p className="text-base leading-relaxed text-slate-600">
                  Nově vypsaný dotační titul Úřadu práce ČR podporuje školení zaměstnanců v oblasti IT dovedností — včetně AI.
                  Příspěvek se poskytuje za každou absolvovanou hodinu vzdělávání. S vyřízením dotace vám pomůžeme od žádosti po vyúčtování.
                </p>
              </div>
              <span className="icon-glow-amber flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600">
                <HandCoins className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {dotovaneKurzy.map((item, index) => (
                <FadeIn key={item.title} delay={0.05 + index * 0.05}>
                  <Link
                    href="/dotace-na-skoleni"
                    className={`group flex h-full flex-col gap-4 rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md ${
                      item.featured
                        ? "border-2 border-amber-400/50 hover:border-amber-500/70"
                        : "border-slate-200 hover:border-amber-300/50"
                    }`}
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                      {item.featured ? "Nejrozsáhlejší varianta" : "Střední rozsah"}
                    </span>

                    <h4 className="text-lg font-semibold text-text md:text-xl">
                      {item.title}
                    </h4>

                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="text-2xl font-bold text-text md:text-3xl">
                        {item.price}
                      </span>
                      <span className="text-sm text-slate-500">{item.priceNote}</span>
                    </div>

                    <p className="text-sm font-medium text-slate-700">
                      {item.hours} hodin · {item.duration}
                    </p>

                    <ul className="space-y-1.5 text-sm text-slate-600">
                      {item.includes.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-500" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <p className="text-sm text-slate-500">{item.description}</p>

                    <span className="mt-auto inline-flex shrink-0 items-center pt-2 text-sm font-semibold text-primary group-hover:text-blue-600">
                      Více o dotaci a kurzech →
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>

            <p className="mt-6 text-center text-sm text-slate-500">
              Konkrétní rozsah, obsah i míru dotace nastavíme individuálně podle vaší firmy.{" "}
              <Link
                href="/dotace-na-skoleni"
                className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:text-blue-600"
              >
                Jak funguje program Vzdělávání pro firmy
              </Link>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
