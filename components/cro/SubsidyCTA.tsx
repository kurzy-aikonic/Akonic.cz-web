"use client";
import { useRef, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { track } from "../../lib/cro-events";
export function SubsidyCTA() {
  const [step, setStep] = useState(0);
  const [people, setPeople] = useState("1–15");
  const [topic, setTopic] = useState("Nevíme");
  const heading = useRef<HTMLHeadingElement>(null);
  function next() {
    if (step === 0) {
      track("subsidy_cta", {
        section: "subsidy",
        interest: "Dotované vzdělávání",
      });
      setStep(1);
      requestAnimationFrame(() => heading.current?.focus());
    } else if (step === 1) {
      setStep(2);
      requestAnimationFrame(() => heading.current?.focus());
    } else {
      window.dispatchEvent(
        new CustomEvent("aikonic-lead", {
          detail: { interest: "Dotované vzdělávání", people, topic },
        }),
      );
      const contact = document.getElementById("contact");
      contact?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
      contact?.focus({ preventScroll: true });
    }
  }
  return (
    <section id="dotace" className="cro-section bg-blue-50">
      <div className="cro-container grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <SectionHeading
            eyebrow="Vzdělávání pro firmy"
            title="AI vzdělávání nemusíte financovat jen z vlastního rozpočtu."
          >
            U vybraných vzdělávacích programů lze využít podporu z projektu
            Vzdělávání pro firmy. Prověříme vhodnost programu, nastavíme rozsah
            školení a pomůžeme s administrativou.
          </SectionHeading>
          <p className="text-sm text-slate-600">
            Možnost podpory závisí na aktuálních podmínkách a konkrétní firmě.
            Nárok ani výši dotace předem negarantujeme.
          </p>
          <a
            href="/dotace-na-skoleni"
            className="mt-3 inline-flex min-h-11 items-center font-medium text-primary underline underline-offset-4"
          >
            Jak dotace funguje →
          </a>
        </div>
        <div className="cro-card self-center">
          {step === 0 ? (
            <>
              <p className="cro-eyebrow">Krátké posouzení</p>
              <h3 className="mt-3 text-2xl font-semibold">
                Najdeme vhodný rozsah pro váš tým.
              </h3>
              <p className="my-4 text-slate-600">
                Dvě krátké otázky a kontakt. Konkrétní podmínky ověříme
                společně.
              </p>
            </>
          ) : (
            <>
              <p className="text-sm text-slate-500">Otázka {step} ze 2</p>
              <h3
                ref={heading}
                tabIndex={-1}
                className="mb-4 mt-2 text-xl font-semibold"
              >
                {step === 1
                  ? "Kolik lidí chcete školit?"
                  : "Co chcete rozvíjet?"}
              </h3>
              <fieldset>
                <legend className="sr-only">
                  {step === 1 ? "Počet lidí" : "Téma vzdělávání"}
                </legend>
                {(step === 1
                  ? ["1–15", "16–30", "31–50", "50+"]
                  : [
                      "Základy práce s AI",
                      "AI pro konkrétní oddělení",
                      "Automatizace",
                      "Pokročilá práce / agenti",
                      "Nevíme",
                    ]
                ).map((v) => (
                  <label
                    key={v}
                    className="flex min-h-11 cursor-pointer items-center gap-3"
                  >
                    <input
                      type="radio"
                      name={`subsidy-${step}`}
                      checked={(step === 1 ? people : topic) === v}
                      onChange={() => (step === 1 ? setPeople(v) : setTopic(v))}
                      className="accent-primary"
                    />
                    {v}
                  </label>
                ))}
              </fieldset>
            </>
          )}
          <button onClick={next} className="cro-button mt-4 w-full">
            {step === 0
              ? "Prověřit možnosti pro naši firmu"
              : step === 1
                ? "Pokračovat →"
                : "Kam vám můžeme poslat návrh?"}
          </button>
          {step > 0 && (
            <button
              className="mt-2 min-h-11 text-sm text-primary"
              onClick={() => setStep(step - 1)}
            >
              ← Zpět
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
