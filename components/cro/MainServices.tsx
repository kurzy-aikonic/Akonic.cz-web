import Link from "next/link";
import { LeadLink } from "./LeadLink";
export function MainServices() {
  return (
    <section id="sluzby" className="cro-section">
      <div className="cro-container">
        <p className="cro-eyebrow">Tři cesty k praktickému využití AI</p>
        <h2 className="cro-heading mt-3">
          Naučit tým. Najít příležitosti. Zavést řešení.
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <article className="cro-service-card">
            <h3>AI školení pro firmy</h3>
            <p>
              Praktické AI vzdělávání postavené na reálných úkolech vašeho týmu.
            </p>
            <strong>od 49 900 Kč</strong>
            <Link href="/ai-skoleni-pro-firmy" className="cro-button-secondary">
              Zjistit více o AI školení
            </Link>
          </article>
          <article className="cro-service-card">
            <h3>Firemní AI audit</h3>
            <p>
              Najdeme procesy, kde může AI přinést největší úsporu času a
              nákladů.
            </p>
            <strong>od 35 000 Kč</strong>
            <Link href="/audit" className="cro-button-secondary">
              Zjistit více o AI auditu
            </Link>
          </article>
          <article className="cro-service-card">
            <h3>AI implementace a automatizace</h3>
            <p>Navrhneme a zavedeme konkrétní AI řešení do vašich procesů.</p>
            <Link
              href="/automatizace"
              className="text-sm text-primary underline"
            >
              Jak probíhá implementace
            </Link>
            <LeadLink interest="Automatizace" section="services">
              Probrat AI řešení
            </LeadLink>
          </article>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          Ceny jsou konečné. Nejsme plátci DPH.
        </p>
      </div>
    </section>
  );
}
