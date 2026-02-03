import Image from "next/image";
import { FadeIn } from "./FadeIn";

const companies = [
  { name: "Sareza", src: "/logos/sareza.png" },
  { name: "Chachar Catering", src: "/logos/chachar.png" },
  { name: "Demaxie", src: "/logos/demaxie.png" },
];

export function Trust() {
  const looped = [...companies, ...companies, ...companies];

  return (
    <div>
      <FadeIn>
        <div className="flex flex-col gap-2 text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Důvěřují nám inovativní firmy
          </p>
        </div>
      </FadeIn>

      <div className="relative mt-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex gap-6 whitespace-nowrap py-2">
          <div className="flex gap-6 animate-marquee">
            {looped.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex h-14 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white/80 px-6 grayscale transition-all hover:grayscale-0"
              >
                <Image
                  src={company.src}
                  alt={company.name}
                  width={160}
                  height={64}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 22s linear infinite;
        }
      `}</style>
    </div>
  );
}
