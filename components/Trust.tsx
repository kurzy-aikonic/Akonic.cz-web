import { FadeIn } from "./FadeIn";

const companies = ["Sareza", "Chachar Catering", "Demaxie"];

/**
 * Statický řádek — u 3 firem by marquee jen opakoval stejná jména (viz
 * aikonic-navrh-uprav-2.md, 1.3). Marquee dává smysl až od ~6 log.
 * TODO: nahradit textové badge reálnými logy (public/logos/*.png), jakmile budou k dispozici.
 */
export function Trust() {
  return (
    <div>
      <FadeIn>
        <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 md:text-left">
          Školili jsme mimo jiné
        </p>
      </FadeIn>

      <FadeIn delay={0.06}>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:justify-start">
          {companies.map((name) => (
            <div
              key={name}
              className="flex h-14 items-center justify-center rounded-full border border-slate-200 bg-white/80 px-6 text-sm font-semibold text-slate-600"
            >
              {name}
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
