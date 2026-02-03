import Link from "next/link";
import { Cpu, PieChart, Zap } from "lucide-react";
import { FadeIn } from "./FadeIn";

const services = [
  {
    title: "Intenzivní AI Hackathon",
    description:
      "Dvoudenní 'nalejvárna' přímo u vás. Žádná nudná teorie. Váš tým naučíme ovládat AI nástroje a rovnou během školení vyřešíme reálné firemní problémy.",
    icon: Zap,
  },
  {
    title: "Finanční Řízení & Plánování",
    description:
      "Pro firmy i jednotlivce. Získejte absolutní kontrolu nad cashflow a majetkem. Zavádíme moderní systémy, které hlídají peníze za vás.",
    icon: PieChart,
  },
  {
    title: "Automatizace na míru",
    description:
      "Zbavíme vás rutiny. Vyvíjíme vlastní AI agenty a propojujeme vaše stávající systémy. Co může dělat stroj, to už člověk dělat nebude.",
    icon: Cpu,
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <span id="sluzby" className="sr-only" />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold text-text md:text-4xl">
            Co pro vás můžeme udělat
          </h2>
          <p className="max-w-2xl text-base text-slate-600">
            Od intenzivního vzdělávání po řízení vašich financí. Praktická
            řešení, která fungují hned.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <FadeIn key={service.title} delay={index * 0.08}>
                <article className="group rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-text">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    {service.description}
                  </p>
                  <Link
                    href="/#contact"
                    className="mt-5 inline-flex items-center text-sm font-semibold text-primary transition hover:text-blue-700"
                  >
                    Více info →
                  </Link>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
