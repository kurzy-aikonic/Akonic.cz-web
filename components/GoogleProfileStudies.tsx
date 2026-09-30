import { FadeIn } from "./FadeIn";
import { ProfileChartButton } from "./ProfileChartButton";
import { profileStudies } from "../lib/google-profil-studie";

export function GoogleProfileStudies() {
  return (
    <section
      aria-labelledby="studie-heading"
      className="border-t border-slate-200 bg-gradient-to-b from-slate-50/70 via-white to-transparent py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Výsledky z praxe
          </p>
          <h2 id="studie-heading" className="mt-2 text-3xl font-semibold text-text md:text-4xl">
            Co udělá nastavení Google profilu s čísly
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Čtyři provozovny po jednorázové optimalizaci profilu Google Moje Firma. Data jsou z firemního
            profilu za uvedená období, firmy zůstávají anonymní. Bez průběžných aktualizací růst po vrcholu
            zpomalí.
          </p>
        </FadeIn>

        <div className="space-y-6">
          {profileStudies.map((study, index) => (
            <FadeIn key={study.id} delay={index * 0.04}>
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Profil {index + 1}
                  <span className="mx-2 text-slate-300" aria-hidden="true">
                    ·
                  </span>
                  {study.period}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-text md:text-2xl">{study.title}</h3>

                <dl
                  className={`mt-5 grid grid-cols-2 gap-3 ${
                    study.metrics.length > 3 ? "sm:grid-cols-4" : "sm:grid-cols-3"
                  }`}
                >
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="flex flex-col-reverse rounded-2xl bg-slate-50 px-4 py-3">
                      <dt className="text-xs leading-snug text-slate-500">{metric.label}</dt>
                      <dd className="text-2xl font-bold tracking-tight text-text">{metric.value}</dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
                  {study.summary}
                </p>

                <div
                  className={`mt-6 grid gap-4 ${
                    study.charts.length > 1 ? "md:grid-cols-2" : "max-w-3xl"
                  }`}
                >
                  {study.charts.map((chart) => (
                    <ProfileChartButton key={chart.src} {...chart} />
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.12} className="mt-6">
          <aside className="rounded-3xl border border-slate-200 bg-primary/5 p-6 md:p-8">
            <h3 className="text-lg font-semibold text-text md:text-xl">Co z toho plyne pro správu profilu</h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
              Jednorázové nastavení profil rozhýbe: přibudou žádosti o trasu, prokliky na web i hovory.
              Aby křivka po vrcholu neklesala, potřebuje pravidelné příspěvky, odpovědi na recenze a aktuální
              fotky. K tomu slouží měsíční správa profilu.
            </p>
          </aside>
        </FadeIn>
      </div>
    </section>
  );
}
