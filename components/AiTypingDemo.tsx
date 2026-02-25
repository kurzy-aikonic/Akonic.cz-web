"use client";

import * as React from "react";
import { FadeIn } from "./FadeIn";

const QA = [
  {
    q: "Jak AI pomůže mému obchodnímu týmu?",
    a: "Automatizuje follow-upy, připraví nabídky za minuty a analyzuje záznamy ze schůzek. Obchodníci se soustředí na vztahy — rutinu přenechají AI.",
  },
  {
    q: "Jaké jazykové modely školíte?",
    a: "ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google) i Copilot (Microsoft). Každý má jiné silné stránky — naučíme vás vybrat ten správný pro každý úkol.",
  },
  {
    q: "Co je vibe coding a k čemu je?",
    a: "Vibe coding je způsob tvorby aplikací pomocí AI — popisujete, co chcete, a AI píše kód za vás. Cursor, GitHub Copilot nebo Replit Agent zvládnou prototyp za hodiny bez znalosti programování.",
  },
  {
    q: "Jak AI konkrétně pomůže obchodníkovi?",
    a: "Fireflies.ai přepíše a shrne každou schůzku. ChatGPT připraví personalizovaný follow-up e-mail. Notion AI udržuje CRM poznámky aktuální. Obchodník ušetří 2–3 hodiny denně.",
  },
  {
    q: "Kolik hodin týdně ušetří AI v HR?",
    a: "Průměrně 6–12 hodin týdně na screening životopisů, onboarding dokumenty a interní FAQ. Výsledek z auditu ukáže přesné číslo pro váš tým.",
  },
  {
    q: "Musíme umět programovat?",
    a: "Ne. Školíme práci s ChatGPT, Notion AI, Fireflies a dalšími nástroji bez jediného řádku kódu. Výsledky od prvního dne.",
  },
  {
    q: "Jak AI pomůže s tvorbou obsahu a marketingem?",
    a: "ChatGPT nebo Claude napíše texty na web, sociální sítě i newslettery. Midjourney nebo DALL-E vytvoří vizuály. Celý obsah, který dříve zabral den, zvládnete za hodinu.",
  },
  {
    q: "Jak dlouho trvá AI hackathon?",
    a: "Od 4 hodin po libovolný počet dní — vždy na domluvu. Tým odchází s funkčním prototypem, ne jen prezentací.",
  },
  {
    q: "Jak AI pomůže projektovému manažerovi?",
    a: "Notion AI nebo ClickUp AI automaticky generuje zápisy z meetingů, rozpisuje úkoly a hlídá termíny. PM má vždy přehled — bez manuálního zapisování.",
  },
  {
    q: "Jaký je rozdíl mezi ChatGPT a Claudem?",
    a: "ChatGPT vyniká v kreativitě a práci s kódem. Claude zpracuje delší dokumenty a drží kontext lépe v dlouhých konverzacích. Pro analýzu smluv nebo reportů je Claude často přesnější.",
  },
];

const TYPING_SPEED = 22;
const PAUSE_BEFORE_ANSWER = 500;
const PAUSE_AFTER_ANSWER = 3200;
const FADE_DURATION = 350; // ms

export function AiTypingDemo() {
  const [qIdx, setQIdx] = React.useState(0);
  const [aText, setAText] = React.useState("");
  // "entering" = fade in Q, "typing" = typing A, "done" = pause, "leaving" = fade out
  const [phase, setPhase] = React.useState<"entering" | "typing" | "done" | "leaving">("entering");
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = React.useRef<number>(0);

  const clearTimers = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    cancelAnimationFrame(rafRef.current);
  };

  React.useEffect(() => {
    let cancelled = false;
    setAText("");
    setPhase("entering");

    // After fade-in of question, start typing answer
    timerRef.current = setTimeout(() => {
      if (cancelled) return;
      setPhase("typing");

      const answer = QA[qIdx].a;
      let i = 0;

      timerRef.current = setTimeout(() => {
        if (cancelled) return;

        function typeNext() {
          if (cancelled) return;
          if (i <= answer.length) {
            setAText(answer.slice(0, i));
            i++;
            timerRef.current = setTimeout(typeNext, TYPING_SPEED);
          } else {
            if (cancelled) return;
            setPhase("done");
            timerRef.current = setTimeout(() => {
              if (cancelled) return;
              setPhase("leaving");
              timerRef.current = setTimeout(() => {
                if (cancelled) return;
                setQIdx((prev) => (prev + 1) % QA.length);
              }, FADE_DURATION);
            }, PAUSE_AFTER_ANSWER);
          }
        }
        typeNext();
      }, PAUSE_BEFORE_ANSWER);
    }, FADE_DURATION + 100);

    return () => {
      cancelled = true;
      clearTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qIdx]);

  const isVisible = phase !== "leaving";
  const { q } = QA[qIdx];
  const showCursor = phase === "typing";

  return (
    <section className="relative overflow-hidden border-y border-slate-200/60 bg-slate-900 py-10 md:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.10),_transparent_65%)]" />
      <div className="relative mx-auto max-w-3xl px-4 md:px-6">
        <FadeIn>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            AI v praxi — ukázka
          </p>

          {/* Fixed-height card — no layout shifts */}
          <div className="rounded-2xl border border-slate-700/60 bg-slate-800/80 shadow-xl backdrop-blur">
            <div
              className="p-5 md:p-7 transition-opacity duration-300"
              style={{ opacity: isVisible ? 1 : 0 }}
            >
              {/* Question — shown in full, no typing */}
              <div className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 rounded-md bg-slate-700 px-2 py-0.5 text-xs font-mono font-semibold text-slate-400">
                  VY
                </span>
                <p className="font-medium text-white leading-snug">{q}</p>
              </div>

              {/* Divider */}
              <div className="my-4 border-t border-slate-700/50" />

              {/* Answer — fixed min-height so card never jumps */}
              <div className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 rounded-md bg-primary/20 px-2 py-0.5 text-xs font-mono font-semibold text-primary">
                  AI
                </span>
                <p
                  className="min-h-[5.5em] text-sm leading-relaxed text-slate-300"
                  aria-live="polite"
                >
                  {aText}
                  {showCursor && (
                    <span className="ml-0.5 inline-block h-[1em] w-0.5 animate-pulse bg-primary align-middle" />
                  )}
                  {!showCursor && phase === "entering" && (
                    <span className="ml-0.5 inline-block h-[1em] w-0.5 animate-pulse bg-slate-600 align-middle" />
                  )}
                </p>
              </div>

              {/* Progress dots */}
              <div className="mt-5 flex items-center justify-end gap-1.5">
                {QA.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === qIdx
                        ? "w-4 bg-primary"
                        : "w-1.5 bg-slate-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-slate-600">
            Ukázkové odpovědi · Skutečné výsledky závisí na vašem kontextu
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
