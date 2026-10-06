export function UseCaseSummary() {
  return (
    <section id="pro-koho" className="cro-section bg-slate-50">
      <div className="cro-container">
        <h2 className="cro-heading">Kde AI nejčastěji pomáhá</h2>
        <p className="mt-4 text-slate-600">
          AI pomáháme zavádět do obchodu, administrativy, marketingu, HR i
          managementu.
        </p>
        <ul className="mt-6 flex flex-wrap gap-3">
          {[
            "Příprava nabídek",
            "Práce s dokumenty",
            "Reporting",
            "Interní asistenti",
            "Automatizace rutinních úkolů",
          ].map((x) => (
            <li
              key={x}
              className="rounded-full border border-slate-200 bg-white px-4 py-3 text-sm"
            >
              {x}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
