"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { faqs } from "../lib/faq-data";

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <FadeIn className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Časté dotazy
          </p>
          <h2 className="text-3xl font-semibold text-text md:text-4xl">
            Odpovědi na to, na co se ptáte nejčastěji.
          </h2>
        </FadeIn>

        <div className="mt-10 space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex min-h-[44px] w-full items-center justify-between text-left text-base font-semibold text-text"
                >
                  {item.question}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition ${
                      isOpen ? "rotate-180 text-primary" : "text-slate-500"
                    }`}
                  />
                </button>
                {/*
                  Odpověď je vždy v DOM (grid-template-rows trik) — crawler ji vidí
                  i bez kliknutí. Skryté jen vizuálně přes výšku/opacity (viz 1.4).
                */}
                <div
                  className="grid overflow-hidden transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className={`min-h-0 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
                    <p className="mt-3 text-sm text-slate-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
