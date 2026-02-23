import Link from "next/link";
import { Bot, Briefcase, ClipboardCheck, Cpu, MessageSquare, PieChart, Sparkles, Workflow, Zap } from "lucide-react";
import { FadeIn } from "./FadeIn";

const services = [
  {
    title: "Intenzivní AI Hackathon",
    description:
      "Dva dny u vás. Žádná teorie navíc — tým naučíme ovládat AI a během školení vyřešíme reálné firemní úkoly.",
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
    title: "Audit AI příležitostí",
    description:
      "Systematická analýza procesů a identifikace míst, kde AI přinese měřitelnou hodnotu. Výstup: plán s prioritami a termíny.",
    icon: ClipboardCheck,
  },
  {
    title: "4h online školení pro obchodníky",
    description:
      "AI jako parťák v obchodu. ChatGPT, Fireflies, Notion, Miro — vyšší konverze, rychlejší cyklus, lepší follow-upy. Vlastní plán od zítřka.",
    icon: Briefcase,
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
      "AI asistenti, kteří programují s vámi. Claude Code a Cursor: rychlejší vývoj, čistší kód, méně hodin u obrazovky. Pro vývojáře i týmy.",
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

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <span id="sluzby" className="sr-only" />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold text-text md:text-4xl">
            Co pro vás děláme
          </h2>
          <p className="max-w-2xl text-base text-slate-600">
            Vzdělávání, automatizace a finance. Řešení, která platí od prvního dne.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                      href={
                      service.title === "Intenzivní AI Hackathon"
                        ? "/ai-hackathon"
                        : service.title === "Finanční řízení a plánování"
                          ? "/financni-gramotnost"
                          : service.title === "Audit AI příležitostí"
                            ? "/audit"
                            : service.title === "4h online školení pro obchodníky"
                              ? "/skoleni-pro-obchodniky"
                              : "/#contact"
                    }
                      className="mt-5 inline-flex items-center text-sm font-semibold text-primary transition hover:text-blue-700"
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
          <div className="rounded-3xl border-2 border-dashed border-primary/30 bg-gradient-to-br from-primary/5 to-white p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
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

        <FadeIn delay={0.2} className="mt-16">
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
                <article className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/50 p-5 transition hover:border-primary/20 hover:bg-white/80 hover:shadow-md">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
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
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
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
