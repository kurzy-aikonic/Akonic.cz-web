"use client";
import Image from "next/image";
import { useState } from "react";

const companies = [
  { name: "Sareza", src: "/logos/sareza.png" },
  { name: "Chachar Catering", src: "/logos/chachar.png" },
  { name: "Demaxie", src: "/logos/demaxie.png" },
];

export function Trust() {
  const [paused, setPaused] = useState(false);
  return (
    <div className="client-logos" aria-label="Naši klienti">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-slate-600">Důvěřují nám firmy z praxe · Školíme po celé ČR</p>
        <button type="button" aria-pressed={paused} onClick={() => setPaused(!paused)} className="client-logos-toggle min-h-11 rounded-full border border-slate-200 px-4 text-sm text-slate-600 hover:bg-slate-50">
          {paused ? "Spustit pohyb log" : "Pozastavit pohyb log"}
        </button>
      </div>
      <div className="client-logos-window overflow-hidden">
        <div className="client-logos-track" style={{ animationPlayState: paused ? "paused" : undefined }}>
          {[0, 1, 2, 3].map((copy) => (
            <div key={copy} className="client-logos-group" aria-hidden={copy > 0 ? true : undefined}>
              {companies.map((company) => (
                <div key={company.src} className="flex h-24 w-52 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6">
                  <Image src={company.src} alt={copy === 0 ? company.name : ""} width={160} height={64} sizes="160px" className="h-16 w-40 object-contain" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
