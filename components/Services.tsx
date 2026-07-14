import Image from "next/image";
import Link from "next/link";
import { Bot, Check, ClipboardCheck, GraduationCap, MessageSquare, PieChart, Sparkles, Workflow, Cpu } from "lucide-react";
import { FadeIn } from "./FadeIn";

/**
 * 3 produktové pilíře na homepage (viz aikonic-navrh-uprav-2.md, 1.2).
 * Kompletní grid všech 9 služeb je na `/sluzby`.
 */
const pillars = [
  {
    title: "Školení a hackathony",
    description: "Od jednodenní nalejvárny po vícedenní hackathon — vždy s praxí na vašich úkolech.",
    href: "/sluzby",
    image: "/gallery/ai-skoleni-workshop-05.webp",
    icon: GraduationCap,
    benefits: [
      "Jednodenní i dvoudenní AI nalejvárna",
      "Intenzivní hackathon na míru",
      "Praxe na vašich reálných úkolech",
      "Programy pro obchod i vývojáře (vibe coding)",
    ],
    cta: "Vybrat školení →",
  },
  {
    title: "AI audit a implementace",
    description: "Zjistíme, kde AI přinese největší hodnotu, a nasadíme ji přímo do vašich procesů.",
    href: "/audit",
    image: "/gallery/ai-skoleni-lektor-prezentace-01.webp",
    icon: ClipboardCheck,
    benefits: [
      "Systematická analýza procesů",
      "Konkrétní plán s prioritami a termíny",
      "Implementace a automatizace na míru",
      "Úvodní konzultace zdarma",
    ],
    cta: "Zjistit víc o auditu →",
  },
  {
    title: "Finanční vzdělávání",
    description: "Dvoudenní kurz finanční gramotnosti pro firmy i jednotlivce.",
    href: "/financni-gramotnost",
    image: "/gallery/ai-financni-skoleni-01.webp",
    icon: PieChart,
    benefits: [
      "Rozpočet, cashflow a úvěry",
      "Investice a osobní finanční plán",
      "Dvoudenní praktický kurz",
      "Pro firmy i jednotlivce",
    ],
    cta: "Zjistit víc o kurzu →",
  },
];

const trainingTopics = [
  {
    title: "Jazykové modely (LLM)",
    tools: ["ChatGPT", "Gemini", "Claude", "Copilot", "Perplexity"],
    description:
      "Špičkové LLM modely v praxi: promptování, ovládání rozhraní a nasazení tam, kde přinášejí největší hodnotu. Bez zbytečné teorie.",
    icon: MessageSquare,
  },
  {
    title: "Agenti",
    tools: ["Claude Code", "Cursor"],
    description:
      "AI agenti, kteří programují s vámi. Claude Code a Cursor: rychlejší vývoj, čistší kód, méně hodin u obrazovky. Pro vývojáře i týmy.",
    icon: Bot,
  },
  {
    title: "Automatizace",
    tools: ["Relay", "N8N"],
    description:
      "Aplikace, e-maily a procesy propojené bez programování. Relay a N8N nahradí desítky manuálních kroků. Naučíme vás je navrhovat a spouštět.",
    icon: Workflow,
  },
  {
    title: "Vývoj řešení",
    tools: ["weby a aplikace"],
    description:
      "Weby, interní nástroje a aplikace na míru. Od návrhu po nasazení. Vlastní řešení místo slepování hotových produktů.",
    icon: Cpu,
  },
];

const serviceAccent = "bg-primary/10 text-primary";
const iconGlow = "icon-glow-primary";
const trainingCardBg = "bg-slate-50";

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-14 md:py-20">
      <span id="sluzby" className="sr-only" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50/40 via-transparent to-transparent" />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn className="flex flex-col gap-4" animateOnMount>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Možnosti spolupráce
          </p>
          <h2 className="text-3xl font-semibold text-text md:text-4xl">
            Jak s vámi můžeme pracovat
          </h2>
          <p className="max-w-2xl text-base text-slate-600">
            Vyberte si jednu ze tří hlavních cest ke spolupráci. Detailní přehled všech služeb najdete{" "}
            <Link href="/sluzby" className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:text-blue-600">
              na stránce Služby
            </Link>
            .
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <FadeIn key={pillar.title} delay={index * 0.1} animateOnMount className="h-full">
                <Link
                  href={pillar.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                    <div className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-primary shadow-sm">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <h3 className="text-xl font-semibold text-text">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {pillar.description}
                    </p>
                    <ul className="mt-4 space-y-1.5">
                      {pillar.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-sm text-slate-600">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-auto inline-flex min-h-[44px] items-center pt-5 text-sm font-semibold text-primary transition duration-300 group-hover:translate-x-0.5 group-hover:text-blue-700">
                      {pillar.cta}
                    </span>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>

        {/* Připravujeme: AI Kroužek */}
        <FadeIn delay={0.12} className="mt-12">
          <div className="rounded-2xl border-2 border-dashed border-primary/30 bg-white/90 p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex gap-4">
                <span className="icon-glow-primary flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Sparkles className="h-7 w-7" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    Sesterský projekt
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-text md:text-2xl">
                    AI Kroužek pro děti
                  </h3>
                  <p className="mt-3 max-w-xl text-base text-slate-600">
                    Online AI kroužek pro děti 10–17 let — tvoří vlastní hry a aplikace s AI. Vede ho náš lektorský tým.
                  </p>
                  <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Online, jednou za 14 dní
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Vlastní registrace na webu kroužku
                    </li>
                  </ul>
                </div>
              </div>
              <a
                href="https://krouzekumeleinteligence.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex shrink-0 justify-center rounded-xl bg-primary px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-blue-600 w-full md:w-auto min-h-[44px] items-center"
              >
                Přejít na web kroužku →
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Nástroje
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-text md:text-3xl">
            Co školíme
          </h3>
          <p className="mt-2 max-w-2xl text-base text-slate-600">
            Nástroje, které vaše týmy okamžitě zužitkují. Školení na míru vaší úrovni a cílům.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainingTopics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <FadeIn key={topic.title} delay={0.24 + index * 0.05}>
                <article className={`flex h-full flex-col rounded-2xl border border-slate-200 p-6 shadow-sm transition duration-200 hover:border-primary/20 hover:shadow-md ${trainingCardBg}`}>
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${serviceAccent} ${iconGlow}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <h4 className="mt-4 font-semibold text-text">
                    {topic.title}
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {topic.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-md bg-white px-2 py-0.5 text-xs font-medium text-slate-600 shadow-sm ring-1 ring-slate-200/80"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {topic.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
