"use client";
import { useRef, useState } from "react";
import { LeadLink } from "./cro/LeadLink";
import { SectionHeading } from "./cro/SectionHeading";
import { track } from "../lib/cro-events";
export function SavingsCalculator() {
  const [department, setDepartment] = useState("Obchod");
  const [people, setPeople] = useState(5);
  const [hours, setHours] = useState(4);
  const started = useRef(false);
  function start() {
    if (!started.current) {
      started.current = true;
      track("calculator_started", {
        section: "calculator",
        variant: department,
      });
    }
  }
  return (
    <section className="cro-section bg-slate-50" id="kalkulacka">
      <div className="cro-container">
        <SectionHeading
          eyebrow="Potenciál k prověření"
          title="Kolik času tráví váš tým opakovanou prací?"
        >
          Zadejte vlastní odhad rutinní práce. Výsledek ukazuje její rozsah,
          nikoli kolik z ní AI automaticky převezme.
        </SectionHeading>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="cro-card">
            <label htmlFor="roi-department" className="mb-2 block font-medium">
              Oddělení
            </label>
            <select
              id="roi-department"
              value={department}
              onChange={(e) => {
                start();
                setDepartment(e.target.value);
              }}
              className="cro-input"
            >
              {[
                "Obchod",
                "Marketing",
                "HR",
                "Administrativa",
                "Management",
                "Zákaznická podpora",
              ].map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
            <label htmlFor="roi-people" className="mb-2 mt-5 block font-medium">
              Počet lidí: {people}
            </label>
            <input
              id="roi-people"
              type="range"
              min="1"
              max="100"
              value={people}
              onChange={(e) => {
                start();
                setPeople(Number(e.target.value));
              }}
              className="h-11 w-full accent-primary"
            />
            <label htmlFor="roi-hours" className="mb-2 mt-4 block font-medium">
              Rutinní práce týdně na osobu: {hours} h
            </label>
            <input
              id="roi-hours"
              type="range"
              min="0"
              max="40"
              value={hours}
              onChange={(e) => {
                start();
                setHours(Number(e.target.value));
              }}
              className="h-11 w-full accent-primary"
            />
          </div>
          <div className="cro-card flex flex-col justify-center">
            <p className="cro-eyebrow">Potenciál k prověření</p>
            <div
              className="my-6 grid grid-cols-2 gap-4"
              aria-live="polite"
              aria-atomic="true"
            >
              <p>
                <strong className="block text-4xl font-semibold text-primary">
                  {people * hours} h
                </strong>
                <span className="text-sm text-slate-600">
                  rutinní práce týdně
                </span>
              </p>
              <p>
                <strong className="block text-4xl font-semibold text-primary">
                  {(people * hours * 48).toLocaleString("cs-CZ")} h
                </strong>
                <span className="text-sm text-slate-600">
                  za 48 pracovních týdnů
                </span>
              </p>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              Nejde o garantovanou úsporu. Přesný potenciál ověříme na vašich
              konkrétních procesech.
            </p>
            <p className="mb-5 mt-3 text-xs text-slate-500">
              Výpočet: {people} lidí × {hours} h týdně × 48 týdnů. Počáteční
              hodnoty jsou pouze příklad, upravte je podle svého týmu.
            </p>
            <div
              onClick={() =>
                track("calculator_completed", {
                  section: "calculator",
                  interest: "AI audit",
                  variant: department,
                })
              }
            >
              <LeadLink interest="AI audit" section="calculator">
                Chci spočítat potenciál na našich procesech
              </LeadLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
