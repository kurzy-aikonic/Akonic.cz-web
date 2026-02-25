import Link from "next/link";
import { ClipboardCheck, Clock, LayoutList, Zap } from "lucide-react";
import { FadeIn } from "./FadeIn";

const pricingCardBg = [
  "bg-primary/5",
  "bg-sky-500/5",
  "bg-indigo-500/5",
  "bg-violet-500/5",
];

const priceItems = [
  {
    icon: ClipboardCheck,
    title: "Firemní AI audit",
    price: "od 30 000",
    priceNote: "Kč s DPH",
    description: "Konkrétní cena podle náročnosti, počtu osob a rozsahu. Nabídku připravíme na míru po úvodní konzultaci.",
    href: "/audit",
    linkLabel: "Více o auditu →",
  },
  {
    icon: Clock,
    title: "Vzdělávací kurz AI (1 den)",
    price: "50 000",
    priceNote: "Kč s DPH",
    description: "8 hodin. Prezenční nebo online. Dovednosti a pochopení principů AI v praxi.",
    href: "/#contact",
    linkLabel: "Domluvit termín →",
  },
  {
    icon: LayoutList,
    title: "Vzdělávací kurz AI (2 dny)",
    price: "90 000",
    priceNote: "Kč s DPH",
    description: "16 hodin. Prezenční nebo online. Hlubší náhled a více prostoru pro cvičení.",
    href: "/#contact",
    linkLabel: "Domluvit termín →",
  },
  {
    icon: Zap,
    title: "AI Hackathon",
    price: "dle domluvy",
    priceNote: "",
    description: "Cena závisí na rozsahu (počet hodin a dní), náročnosti, místu konání (u vás ve firmě nebo jinde), občerstvení a dalších podmínkách. Nabídku sestavíme individuálně po konzultaci.",
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
          <h2 className="text-3xl font-semibold text-text md:text-4xl">
            Ceník
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
            const content = (
              <>
                <div className="flex flex-1 gap-4 min-h-0">
                  <span className="icon-glow-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary/15">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="text-2xl font-bold text-text md:text-3xl">
                        {item.price}
                      </span>
                      {item.priceNote && (
                        <span className="text-sm text-slate-500">{item.priceNote}</span>
                      )}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-text md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
                <span className="mt-4 inline-flex shrink-0 items-center text-sm font-semibold text-primary group-hover:text-blue-600">
                  {item.linkLabel}
                </span>
              </>
            );
            return (
              <FadeIn key={item.title} delay={0.05 + index * 0.05}>
                <Link
                  href={item.href}
                  className={`group flex h-full flex-col rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:border-primary/20 hover:shadow-md ${pricingCardBg[index % pricingCardBg.length]}`}
                >
                  {content}
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
      </div>
    </section>
  );
}
