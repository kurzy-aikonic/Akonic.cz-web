"use client";
import { useEffect, useRef, useState } from "react";
import { interests, track, type Interest } from "../lib/cro-events";
const labels: Record<Interest, string> = {
  "AI školení": "Poptat AI školení",
  "AI audit": "Poptat AI audit",
  Automatizace: "Probrat AI řešení",
  "Dotované vzdělávání": "Ověřit možnosti dotace",
  "Nevím, potřebuji poradit": "Domluvit 20min konzultaci",
};
export function Contact({
  initialInterest = "Nevím, potřebuji poradit",
}: {
  initialInterest?: Interest;
}) {
  const [interest, setInterest] = useState<Interest>(initialInterest);
  const [busy, setBusy] = useState(false),
    [success, setSuccess] = useState(false),
    [error, setError] = useState("");
  const lock = useRef(false),
    started = useRef(false);
  const subsidy = useRef({ people: "", topic: "" });
  useEffect(() => {
    const choose = (value: string | null) => {
      if (interests.includes(value as Interest)) setInterest(value as Interest);
    };
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
      subsidy.current = { people: d.people || "", topic: d.topic || "" };
      setSuccess(false);
      setError("");
    };
    window.addEventListener("aikonic-lead", receive);
    return () => window.removeEventListener("aikonic-lead", receive);
  }, []);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (lock.current) return;
    const data = new FormData(e.currentTarget);
    if (String(data.get("_gotcha") || "").trim()) return;
    data.set("interest", interest);
    data.set("_subject", `AIKONIC: ${interest}`);
    if (interest === "Dotované vzdělávání" && subsidy.current.people) {
      data.set("participants", subsidy.current.people);
      data.set("training_topic", subsidy.current.topic);
    }
    lock.current = true;
    setBusy(true);
    setError("");
    try {
      const response = await fetch(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "mbdalyzl"}`,
        { method: "POST", body: data, headers: { Accept: "application/json" } },
      );
      if (!response.ok) throw Error("send");
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
      <div className="cro-container grid gap-8 lg:grid-cols-2">
        <div>
          <p className="cro-eyebrow !text-blue-300">Nezávazná konzultace</p>
          <h2 className="cro-heading mt-3 !text-white">
            Pojďme zjistit, kde vám AI může reálně pomoci
          </h2>
          <p className="mt-5 max-w-md text-slate-300">
            20 minut bez závazků. Probereme vaše cíle, současné procesy a
            možnosti dalšího postupu.
          </p>
          <div className="mt-5 flex flex-col items-start">
            <a
              className="min-h-11 underline"
              href="mailto:kurzy@aikonic.cz"
              onClick={() => track("email_click", { section: "contact" })}
            >
              kurzy@aikonic.cz
            </a>
            <a
              className="min-h-11 underline"
              href="tel:+420723061013"
              onClick={() => track("phone_click", { section: "contact" })}
            >
              +420 723 061 013
            </a>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-5 text-slate-950 sm:p-8">
          {success ? (
            <p role="status" className="text-xl font-semibold">
              Díky. Ozveme se a navrhneme další krok.
            </p>
          ) : (
            <form
              onSubmit={submit}
              onFocus={() => {
                if (!started.current) {
                  track("lead_form_started", { section: "contact" });
                  started.current = true;
                }
              }}
            >
              <p className="mb-4 text-sm text-slate-500">
                {interest === "Nevím, potřebuji poradit"
                  ? "Napište nám o své firmě."
                  : `Téma: ${interest}`}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { name: "name", label: "Jméno", type: "text", auto: "name" },
                  {
                    name: "company",
                    label: "Firma",
                    type: "text",
                    auto: "organization",
                  },
                  {
                    name: "email",
                    label: "Firemní e-mail",
                    type: "email",
                    auto: "email",
                  },
                  {
                    name: "phone",
                    label: "Telefon – nepovinný",
                    type: "tel",
                    auto: "tel",
                  },
                ].map((f) => (
                  <div key={f.name}>
                    <label
                      className="mb-1 block text-sm font-medium"
                      htmlFor={`lead-${f.name}`}
                    >
                      {f.label}
                    </label>
                    <input
                      id={`lead-${f.name}`}
                      name={f.name}
                      type={f.type}
                      autoComplete={f.auto}
                      required={f.name !== "phone"}
                      className="cro-input"
                    />
                  </div>
                ))}
              </div>
              <label
                htmlFor="lead-message"
                className="mb-1 mt-4 block text-sm font-medium"
              >
                Krátká zpráva – nepovinná
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
                <p role="alert" className="mt-3 text-sm text-red-700">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={busy}
                className="cro-button mt-4 w-full disabled:opacity-60"
              >
                {busy ? "Odesílám…" : labels[interest]}
              </button>
              <p className="mt-3 text-xs text-slate-500">
                Údaje použijeme pro vyřízení poptávky.{" "}
                <a href="/ochrana-udaju" className="underline">
                  Ochrana osobních údajů
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
