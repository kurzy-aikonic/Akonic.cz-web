import Link from "next/link";
import { Bot, Briefcase, ClipboardCheck, Code2, Cpu, MessageSquare, PieChart, Sparkles, Workflow, Zap } from "lucide-react";
import { FadeIn } from "./FadeIn";

const services = [
  {
    title: "Intenzivní AI Hackathon",
    description:
      "Od 4 hodin po libovolný počet dní — rozsah vždy na domluvu. Žádná teorie, jen intenzivní praxe a práce s AI. Tým naučíme ovládat nástroje a vyřešíme reálné firemní úkoly.",
    icon: Zap,
  },
  {
    title: "Finanční řízení a plánování",
    description:
      "Kontrola nad cashflow a majetkem. Pro firmy i jednotlivce. Systémy, které hlídají peníze za vás.",
    icon: PieChart,
  },
  {
    title: "Automatizace na míru",
    description:
      "Vlastní AI agenty a propojení systémů. Rutinu přenecháme strojům; vy se věnujete tomu, co přináší hodnotu.",
    icon: Cpu,
  },
  {
    title: "Firemní AI audit",
    description:
      "Systematická analýza procesů a identifikace míst, kde AI přinese měřitelnou hodnotu. Výstup: plán s prioritami a termíny.",
    icon: ClipboardCheck,
  },
  {
    title: "Školení AI pro obchodníky",
    description:
      "AI jako parťák v obchodu. ChatGPT, Fireflies, Notion, Miro — vyšší konverze, rychlejší cyklus, lepší follow-upy. Vlastní plán od zítřka.",
    icon: Briefcase,
  },
  {
    title: "Školení Vibe coding — Claude Code, Cursor",
    description:
      "Programování s AI v páru. Naučíme vás Claude Code a Cursor od základů po každodenní použití: rychlejší vývoj, méně rutiny, čistší kód. Pro vývojáře i ty, kdo chtějí s kódem začít.",
    icon: Code2,
  },
];

const trainingTopics = [
  {
    title: "AI LLM modely",
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

const serviceAccents = [
  "bg-primary/10 text-primary",
  "bg-emerald-500/10 text-emerald-600",
  "bg-violet-500/10 text-violet-600",
  "bg-amber-500/10 text-amber-600",
  "bg-rose-500/10 text-rose-600",
];

const iconGlow = [
  "icon-glow-primary",
  "icon-glow-emerald",
  "icon-glow-violet",
  "icon-glow-amber",
  "icon-glow-rose",
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-14 md:py-20">
      <span id="sluzby" className="sr-only" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50/40 via-transparent to-transparent" />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn className="flex flex-col gap-4" animateOnMount>
          <h2 className="text-3xl font-semibold text-text md:text-4xl">
            Možnosti spolupráce
          </h2>
          <p className="max-w-2xl text-base text-slate-600">
            Vzdělávání, automatizace a finance. Řešení, která platí od prvního dne.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={index * 0.08} animateOnMount>
                <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm transition duration-200 hover:border-primary/20 hover:shadow-md">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${serviceAccents[index % serviceAccents.length]} ${iconGlow[index % iconGlow.length]}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-text">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                  <Link
                    href={
                      service.title === "Intenzivní AI Hackathon"
                        ? "/ai-hackathon"
                        : service.title === "Finanční řízení a plánování"
                          ? "/financni-gramotnost"
                          : service.title === "Firemní AI audit"
                            ? "/audit"
                            : service.title === "Školení AI pro obchodníky"
                              ? "/skoleni-pro-obchodniky"
                              : "/#contact"
                    }
                    className="mt-4 inline-flex min-h-[44px] items-center py-2 text-sm font-semibold text-primary transition hover:text-blue-700 active:opacity-80"
                  >
                    Více info →
                  </Link>
                </article>
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
                    Připravujeme
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-text md:text-2xl">
                    AI Kroužek pro děti
                  </h3>
                  <p className="mt-3 max-w-xl text-base text-slate-600">
                    Baví vaše děti technologie a AI? Dáme jim bezpečný prostor, kde se to naučí používat s hlavou. Otevíráme online třídu — pravidelně jednou týdně. Přihlaste dítě a my vás budeme informovat o startu.
                  </p>
                  <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Online 1× týdně, pravidelné lekce
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Přihlášení dítěte přes kontaktní formulář
                    </li>
                  </ul>
                </div>
              </div>
              <Link
                href="/#contact"
                className="flex shrink-0 justify-center rounded-xl bg-primary px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-blue-600 w-full md:w-auto min-h-[44px] items-center"
              >
                Chci nahlásit dítě
              </Link>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-12">
          <h3 className="text-2xl font-semibold text-text md:text-3xl">
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
                <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm transition duration-200 hover:border-primary/20 hover:shadow-md">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${serviceAccents[index % serviceAccents.length]} ${iconGlow[index % iconGlow.length]}`}>
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
