"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

const faqs = [
  {
    question: "Je implementace AI bezpečná pro naše data?",
    answer:
      "Ano. Nastavujeme bezpečnostní pravidla a pracujeme s daty tak, aby odpovídala vašim interním standardům.",
  },
  {
    question: "Jak dlouho trvá průměrný projekt?",
    answer:
      "Standardní implementace trvá několik týdnů. Přesný časový rámec určíme po auditu.",
  },
  {
    question: "Musíme mít technické znalosti?",
    answer:
      "Ne. Vše vysvětlujeme srozumitelně a zajišťujeme školení, aby tým uměl AI používat.",
  },
  {
    question: "Kolik to stojí?",
    answer:
      "Každý projekt je na míru, ale úvodní konzultace je zdarma.",
  },
];

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
            Odpovědi na to, co zajímá většinu klientů.
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
                  className="flex w-full items-center justify-between text-left text-base font-semibold text-text"
                >
                  {item.question}
                  <ChevronDown
                    className={`h-5 w-5 transition ${
                      isOpen ? "rotate-180 text-primary" : "text-slate-500"
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-sm text-slate-600">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
