import { LeadLink } from "./cro/LeadLink";
export function CTA() {
  return (
    <section className="cro-section bg-slate-50">
      <div className="cro-container">
        <h2 className="cro-heading max-w-3xl">
          Začněme tím, co dává smysl právě u vás.
        </h2>
        <p className="my-5 max-w-2xl text-lg leading-relaxed text-slate-600">
          Během úvodní konzultace projdeme vaši situaci, cíle a možnosti. Pokud
          AI nepřinese dostatečnou hodnotu, řekneme vám to.
        </p>
        <LeadLink section="final-cta">Domluvit nezávaznou konzultaci</LeadLink>
        <p className="mt-3 text-sm text-slate-600">Úvodní konzultace zdarma</p>
      </div>
    </section>
  );
}
