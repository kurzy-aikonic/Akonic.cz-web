import { FadeIn } from "./FadeIn";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            O nás
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-text md:text-3xl">
            Svět AI je plný slibů. My se držíme čísel.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Pro firmy i jednotlivce. Nástroje, ne teorie — školení a implementace,
            které měříte výsledky.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
