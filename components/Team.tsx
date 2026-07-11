import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { FadeIn } from "./FadeIn";

/**
 * Obecná struktura sekce lektorů — jména, fotky a bio doplníme, jak budou k dispozici.
 * Do té doby jsou karty popsané rolí a specializací, ne fiktivními jmény.
 */
const lecturers = [
  {
    role: "Hlavní lektor",
    focus: "AI školení a hackathony",
    bio: "Vede firemní AI školení a hackathony po celé ČR — od úvodního workshopu až po realizaci konkrétních projektů.",
    photo: null as string | null,
  },
  {
    role: "Lektor",
    focus: "Firemní AI audit a implementace",
    bio: "Specializuje se na audit procesů a nasazení AI nástrojů do reálného firemního provozu.",
    photo: null as string | null,
  },
  {
    role: "Lektorka",
    focus: "Finanční gramotnost",
    bio: "Připravuje a vede kurzy finanční gramotnosti pro firmy i jednotlivce se zaměřením na praktické dovednosti.",
    photo: null as string | null,
  },
];

export function Team() {
  return (
    <section id="lektori" className="relative py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Lektoři
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-text md:text-4xl">
            Kdo vás bude školit
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Za každým školením stojí konkrétní lidé s praxí — ne anonymní tým.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lecturers.map((lecturer, index) => (
            <FadeIn key={lecturer.focus} delay={index * 0.08}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-white/80 p-6 text-center shadow-sm transition hover:border-primary/20 hover:shadow-md">
                <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-primary/10 text-primary">
                  {lecturer.photo ? (
                    <Image
                      src={lecturer.photo}
                      alt={`${lecturer.role} — ${lecturer.focus}`}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <GraduationCap className="h-8 w-8" aria-hidden="true" />
                  )}
                </div>
                <p className="mt-4 text-base font-semibold text-text">
                  {lecturer.role}
                </p>
                <p className="text-sm font-medium text-primary">{lecturer.focus}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {lecturer.bio}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
