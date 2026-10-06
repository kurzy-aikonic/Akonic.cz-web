"use client";
import { useEffect, useRef, useState } from "react";
import { interests, track, type Interest } from "../lib/cro-events";
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "mbdalyzl";
export function Contact() {
  const [interest, setInterest] = useState<Interest>(
    "Nevím, potřebuji poradit",
  );
  const [step, setStep] = useState(1);
  const [busy, setBusy] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [subsidy, setSubsidy] = useState({ people: "", topic: "" });
  const started = useRef(false);
  const lock = useRef(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);
  function start() {
    if (!started.current) {
      track("lead_form_started", { section: "contact" });
      started.current = true;
    }
  }
  useEffect(() => {
    function choose(value: string | null) {
      if (interests.includes(value as Interest)) setInterest(value as Interest);
    }
    choose(new URLSearchParams(window.location.search).get("interest"));
    const receive = (e: Event) => {
      const d = (
        e as CustomEvent<{
          interest: Interest;
          people?: string;
          topic?: string;
        }>
      ).detail;
      choose(d.interest);
      setSuccess(false);
      setError("");
      setStep(d.people ? 2 : 1);
      setSubsidy({ people: d.people || "", topic: d.topic || "" });
      if (d.people)
        track("lead_form_step_2", { interest: d.interest, section: "subsidy" });
    };
    window.addEventListener("aikonic-lead", receive);
    return () => window.removeEventListener("aikonic-lead", receive);
  }, []);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    heading.current?.focus({ preventScroll: true });
  }, [step, success]);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (lock.current) return;
    const data = new FormData(e.currentTarget);
    if (String(data.get("_gotcha") || "").trim()) return;
    lock.current = true;
    setBusy(true);
    setError("");
    data.set("interest", interest);
    data.set("_subject", `AIKONIC: ${interest}`);
    if (subsidy.people && interest === "Dotované vzdělávání") {
      data.set("participants", subsidy.people);
      data.set("training_topic", subsidy.topic);
    }
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("send");
      setSuccess(true);
      track("lead_form_submitted", { interest, section: "contact" });
    } catch {
      setError(
        "Zprávu se nepodařilo odeslat. Zkuste to znovu nebo napište na kurzy@aikonic.cz. Vyplněné údaje zůstaly zachované.",
      );
    } finally {
      lock.current = false;
      setBusy(false);
    }
  }
  return (
    <section
      id="contact"
      tabIndex={-1}
      className="cro-section bg-slate-950 text-white"
    >
      <div className="cro-container grid gap-10 lg:grid-cols-2">
        <div>
          <p className="cro-eyebrow !text-blue-300">Nezávazná konzultace</p>
          <h2 className="cro-heading !text-white">
            Co byste chtěli ve firmě změnit?
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-slate-300">
            Nemusíte mít hotové zadání. Popište nám svou situaci a společně
            vybereme další krok.
          </p>
          <div className="mt-6 flex flex-col items-start gap-2">
            <a
              href="mailto:kurzy@aikonic.cz"
              className="inline-flex min-h-11 items-center underline underline-offset-4"
              onClick={() => track("email_click", { section: "contact" })}
            >
              kurzy@aikonic.cz
            </a>
            <a
              href="tel:+420723061013"
              className="inline-flex min-h-11 items-center underline underline-offset-4"
              onClick={() => track("phone_click", { section: "contact" })}
            >
              +420 723 061 013
            </a>
          </div>
          <p className="mt-5 text-sm text-slate-400">
            Heydukova 115, 572 01 Polička · fakturační adresa
          </p>
        </div>
        <div className="rounded-2xl bg-white p-5 text-slate-950 sm:p-8">
          {success ? (
            <div role="status">
              <p className="cro-eyebrow">Zpráva je u nás</p>
              <h3
                ref={heading}
                tabIndex={-1}
                className="mt-4 text-2xl font-semibold"
              >
                Díky. Ozveme se a navrhneme další krok.
              </h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                Projdeme vaše zadání a navážeme na téma{" "}
                {interest.toLocaleLowerCase("cs-CZ")}. Pokud potřebujete něco
                doplnit, napište nám na kurzy@aikonic.cz.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} onFocus={start}>
              <p className="text-sm text-slate-500">Krok {step} ze 2</p>
              <h3
                ref={heading}
                tabIndex={-1}
                className="mb-6 mt-2 text-2xl font-semibold"
              >
                {step === 1
                  ? "Co chcete ve firmě řešit?"
                  : "Kam se vám máme ozvat?"}
              </h3>
              <div hidden={step !== 1}>
                <fieldset>
                  <legend className="sr-only">Oblast zájmu</legend>
                  <div className="grid gap-2">
                    {interests.map((i) => (
                      <label
                        key={i}
                        className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border p-3 ${interest === i ? "border-primary bg-blue-50" : "border-slate-200"}`}
                      >
                        <input
                          type="radio"
                          name="interest-choice"
                          value={i}
                          checked={interest === i}
                          onChange={() => setInterest(i)}
                          className="accent-primary"
                        />
                        {i}
                      </label>
                    ))}
                  </div>
                </fieldset>
                <button
                  type="button"
                  className="cro-button mt-6 w-full"
                  onClick={() => {
                    start();
                    setStep(2);
                    track("lead_form_step_2", { interest, section: "contact" });
                  }}
                >
                  Pokračovat →
                </button>
              </div>
              <div hidden={step !== 2}>
                <p className="mb-4 text-sm text-slate-600">
                  Téma: <strong>{interest}</strong>
                  {subsidy.people && interest === "Dotované vzdělávání" && (
                    <span className="block">
                      {subsidy.people} lidí · {subsidy.topic}
                    </span>
                  )}
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      name: "company",
                      label: "Firma",
                      type: "text",
                      auto: "organization",
                    },
                    {
                      name: "name",
                      label: "Jméno",
                      type: "text",
                      auto: "name",
                    },
                    {
                      name: "email",
                      label: "Firemní e-mail",
                      type: "email",
                      auto: "email",
                    },
                    {
                      name: "phone",
                      label: "Telefon – volitelný",
                      type: "tel",
                      auto: "tel",
                    },
                  ].map((f) => (
                    <div key={f.name}>
                      <label
                        htmlFor={`lead-${f.name}`}
                        className="mb-1 block text-sm font-medium"
                      >
                        {f.label}
                      </label>
                      <input
                        id={`lead-${f.name}`}
                        name={f.name}
                        type={f.type}
                        autoComplete={f.auto}
                        required={step === 2 && f.name !== "phone"}
                        className="cro-input"
                      />
                    </div>
                  ))}
                </div>
                <label
                  htmlFor="lead-message"
                  className="mb-1 mt-4 block text-sm font-medium"
                >
                  Je něco, co bychom měli vědět?{" "}
                  <span className="font-normal text-slate-500">
                    (volitelné)
                  </span>
                </label>
                <textarea
                  id="lead-message"
                  name="message"
                  rows={3}
                  className="cro-input"
                />
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="lead-gotcha">Nevyplňujte toto pole</label>
                  <input
                    id="lead-gotcha"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                {error && (
                  <p
                    role="alert"
                    className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-800"
                  >
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={busy}
                  className="cro-button mt-5 w-full disabled:opacity-60"
                >
                  {busy ? "Odesílám…" : "Domluvit nezávaznou konzultaci"}
                </button>
                <p className="mt-3 text-sm text-slate-600">
                  Bez závazků. Nejdřív zjistíme, jestli a jak vám dokážeme
                  pomoct.
                </p>
                <p className="mt-3 text-xs text-slate-500">
                  Odesláním nám předáte údaje pro vyřízení poptávky.{" "}
                  <a href="/ochrana-udaju" className="underline">
                    Ochrana osobních údajů
                  </a>
                </p>
                <button
                  type="button"
                  className="mt-3 min-h-11 text-sm text-primary"
                  disabled={busy}
                  onClick={() => setStep(1)}
                >
                  ← Změnit téma
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
