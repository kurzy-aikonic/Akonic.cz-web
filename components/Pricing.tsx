import Link from "next/link";
import { ClipboardCheck, Clock, LayoutList } from "lucide-react";
import { FadeIn } from "./FadeIn";

const variants = [
  {
    price: "45 000",
    unit: "s DPH",
    duration: "8 hodin",
    format: "Prezenční / online",
  },
  {
    price: "85 000",
    unit: "s DPH",
    duration: "2 dny, 16 hodin",
    format: "Prezenční / online",
  },
];

export function Pricing() {
  return (
    <section id="cenik" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold text-text md:text-4xl">
            Ceník
          </h2>
          <p className="max-w-2xl text-base text-slate-600">
            Školení, které skutečně něco změní, stavíme na{" "}
            <Link href="/audit" className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 transition hover:text-blue-600 hover:decoration-primary">
              prvotním auditu
            </Link>
            . Ten přesně
            zmapuje vaše potřeby a nastaví, jak bude vzdělávání u vás probíhat.
            Na jeho základě pak vyberete konkrétní kurzy podle ceníku níže.
          </p>
        </FadeIn>

        {/* Audit */}
        <FadeIn delay={0.06} className="mt-10">
          <Link
            href="/audit"
            className="group flex flex-col rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:border-primary/20 hover:shadow-md sm:flex-row sm:items-center sm:justify-between md:p-8"
          >
            <div className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary/15">
                <ClipboardCheck className="h-6 w-6" />
              </span>
              <div>
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-2xl font-bold text-text md:text-3xl">
                    od 25 000
                  </span>
                  <span className="text-sm text-slate-500">Kč s DPH</span>
                </div>
                <h3 className="mt-2 text-xl font-semibold text-text md:text-2xl">
                  Audit AI příležitostí
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Konkrétní cena podle náročnosti, počtu osob a rozsahu. Nabídku připravíme na míru po úvodní konzultaci.
                </p>
              </div>
            </div>
            <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary sm:mt-0 group-hover:text-blue-600">
              Více o auditu →
            </span>
          </Link>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-10">
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm md:p-8">
            <h3 className="text-xl font-semibold text-text md:text-2xl">
              Vzdělávací kurz zaměřený na dovednosti a pochopení principů AI
            </h3>
            <p className="mt-2 text-sm font-medium text-slate-500">
              Vyberte variantu kurzu
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {variants.map((variant, index) => (
                <FadeIn key={variant.duration} delay={0.12 + index * 0.06}>
                  <article className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition hover:border-primary/30 hover:shadow-md">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-text md:text-4xl">
                        {variant.price}
                      </span>
                      <span className="text-sm text-slate-500">
                        Kč {variant.unit}
                      </span>
                    </div>
                    <ul className="mt-5 space-y-3 text-sm text-slate-600">
                      <li className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Clock className="h-4 w-4" />
                        </span>
                        {variant.duration}
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <LayoutList className="h-4 w-4" />
                        </span>
                        {variant.format}
                      </li>
                    </ul>
                    <Link
                      href="/#contact"
                      className="mt-6 inline-flex min-h-[44px] items-center py-2 text-sm font-semibold text-primary transition hover:text-blue-700 active:opacity-80"
                    >
                      Domluvit termín →
                    </Link>
                  </article>
                </FadeIn>
              ))}
            </div>
            <p className="mt-6 border-t border-slate-200 pt-6 text-center text-sm text-slate-600">
              Hackathon a finanční školení nabízíme jako individuální projekty — cenu sestavíme podle rozsahu po konzultaci.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
