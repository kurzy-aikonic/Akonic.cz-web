import { SectionHeading } from "./SectionHeading";
export function Tools() {
  return (
    <section className="cro-section border-y border-slate-200">
      <div className="cro-container">
        <SectionHeading
          eyebrow="Nástroje"
          title="Pracujeme s nástroji, které dávají smysl právě vám."
        >
          Nevybíráme nástroje podle trendu. Vycházíme z vašeho prostředí,
          licencí, bezpečnosti a pracovních úkolů.
        </SectionHeading>
        <ul className="flex flex-wrap gap-3">
          {[
            "ChatGPT",
            "Microsoft Copilot",
            "Gemini",
            "Claude",
            "Perplexity",
            "n8n",
            "Cursor",
          ].map((t) => (
            <li
              key={t}
              className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium"
            >
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-slate-600">
          ChatGPT pro firmy i Microsoft Copilot pro firmy vybíráme podle
          konkrétního použití.
        </p>
      </div>
    </section>
  );
}
