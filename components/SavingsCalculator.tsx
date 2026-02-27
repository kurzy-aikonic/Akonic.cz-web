"use client";

import * as React from "react";
import { FadeIn } from "./FadeIn";

interface Department {
  label: string;
  hoursPerWeek: number;   // ušetřené hodiny / osoba / týden
  hourlyRate: number;     // průměrná hodinová sazba (Kč brutto)
  example: string;        // konkrétní příklad úspory
}

const DEPARTMENTS: Department[] = [
  {
    label: "Obchod",
    hoursPerWeek: 4,
    hourlyRate: 280,
    example: "Příprava nabídek, follow-upy, CRM záznamy",
  },
  {
    label: "HR",
    hoursPerWeek: 5,
    hourlyRate: 250,
    example: "Screening životopisů, onboarding dokumenty, interní FAQ",
  },
  {
    label: "Marketing",
    hoursPerWeek: 4,
    hourlyRate: 260,
    example: "Tvorba obsahu, social media, reporty",
  },
  {
    label: "Provoz & logistika",
    hoursPerWeek: 3,
    hourlyRate: 235,
    example: "Reporting, plánování, dokumentace",
  },
  {
    label: "Management",
    hoursPerWeek: 3,
    hourlyRate: 400,
    example: "Shrnutí porad, reporty, e-mailová komunikace",
  },
  {
    label: "Zákaznická podpora",
    hoursPerWeek: 5,
    hourlyRate: 220,
    example: "Odpovědi na dotazy, tickety, knowledge base",
  },
];

function formatKc(value: number): string {
  return new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    maximumFractionDigits: 0,
  }).format(value);
}

function AnimatedNumber({ target }: { target: number }) {
  const [displayed, setDisplayed] = React.useState(0);
  const prevTarget = React.useRef(0);

  React.useEffect(() => {
    const start = prevTarget.current;
    const end = target;
    prevTarget.current = target;
    if (start === end) return;

    const duration = 600;
    const startTime = performance.now();
    let rafId: number;

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.round(start + (end - start) * eased));
      if (progress < 1) rafId = requestAnimationFrame(step);
    }
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target]);

  return <>{displayed.toLocaleString("cs-CZ")}</>;
}

export function SavingsCalculator() {
  const [deptIdx, setDeptIdx] = React.useState(0);
  const [employees, setEmployees] = React.useState(5);

  const dept = DEPARTMENTS[deptIdx];
  const hoursPerYear = dept.hoursPerWeek * 48 * employees;   // 48 pracovních týdnů
  const savingsPerYear = hoursPerYear * dept.hourlyRate;
  const hoursPerWeekTotal = dept.hoursPerWeek * employees;

  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/50 via-transparent to-transparent" />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Kalkulačka
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-text md:text-4xl">
            Kolik ušetříte s AI?
          </h2>
          <p className="mt-3 max-w-xl text-base text-slate-600">
            Odhad vychází z průměrné produktivity AI nástrojů v českých firmách.
            Skutečné výsledky závisí na procesech a zapojení týmu.
          </p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-[1fr,280px] lg:grid-cols-[1fr,auto]">
          {/* Controls */}
          <FadeIn delay={0.08}>
            <div className="rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-sm md:p-8">
              {/* Department selector */}
              <div className="mb-6">
                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Oddělení
                </label>
                <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                  {DEPARTMENTS.map((d, i) => (
                    <button
                      key={d.label}
                      onClick={() => setDeptIdx(i)}
                      aria-pressed={i === deptIdx}
                      className={`min-h-[44px] rounded-xl border px-3 py-2 text-sm font-medium transition ${
                        i === deptIdx
                          ? "border-primary bg-primary text-white shadow-sm"
                          : "border-slate-200 bg-white text-slate-600 hover:border-primary/40 hover:text-primary"
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Employee count */}
              <div>
                <label
                  htmlFor="emp-count"
                  className="mb-3 flex items-center justify-between text-sm font-semibold text-slate-700"
                >
                  <span>Počet zaměstnanců v oddělení</span>
                  <span className="text-lg font-bold text-primary">{employees}</span>
                </label>
                <input
                  id="emp-count"
                  type="range"
                  min={1}
                  max={50}
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-primary"
                />
                <div className="mt-1.5 flex justify-between text-xs text-slate-400">
                  <span>1</span>
                  <span>50</span>
                </div>
              </div>

              {/* Example */}
              <p className="mt-5 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-500">
                <span className="font-medium text-slate-700">Typické úspory: </span>
                {dept.example}
              </p>
            </div>
          </FadeIn>

          {/* Results */}
          <FadeIn delay={0.14} className="flex flex-col gap-4 lg:w-64">
            <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
                Ušetřené hodiny
              </p>
              <p className="mt-2 text-4xl font-bold text-primary">
                <AnimatedNumber target={hoursPerWeekTotal} />
                <span className="ml-1 text-lg font-semibold">h</span>
              </p>
              <p className="mt-1 text-sm text-slate-500">týdně</p>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 text-center shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700/80">
                Úspora nákladů
              </p>
              <p className="mt-2 text-3xl font-bold text-emerald-700">
                {formatKc(savingsPerYear)}
              </p>
              <p className="mt-1 text-sm text-slate-500">ročně</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 text-center shadow-sm">
              <p className="text-xs text-slate-500">
                <span className="font-medium text-slate-700">{hoursPerYear.toLocaleString("cs-CZ")} h</span> ročně ·{" "}
                <span className="font-medium text-slate-700">{dept.hourlyRate} Kč/h</span> průměr
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <p className="mt-6 text-center text-xs text-slate-400">
            Výpočet: {dept.hoursPerWeek} h/os./týden × {employees} os. × 48 týdnů × {dept.hourlyRate} Kč/h průměrná sazba.
            Přesný odhad pro vaši firmu připravíme v rámci{" "}
            <a href="/audit" className="text-primary underline underline-offset-2 hover:text-blue-700">
              firemního AI auditu
            </a>
            .
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
