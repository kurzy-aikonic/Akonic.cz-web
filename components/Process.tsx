export function Process() {
  return (
    <section id="proces" className="cro-section">
      <div className="cro-container">
        <h2 className="cro-heading">Jak spolupráce funguje</h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            [
              "Najdeme příležitosti",
              "Zjistíme, kde AI dává ve firmě největší smysl.",
            ],
            ["Naučíme tým", "Pracujeme s reálnými úkoly a procesy firmy."],
            ["Zavedeme řešení", "Pomůžeme dostat AI do každodenní práce."],
          ].map(([title, text], i) => (
            <li key={title}>
              <span className="text-sm font-semibold text-primary">
                0{i + 1}
              </span>
              <h3 className="mt-3 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-slate-600">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
