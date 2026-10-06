import Image from "next/image";
export function Trust() {
  return (
    <section aria-label="Klienti" className="border-y border-slate-200 py-6">
      <div className="cro-container flex flex-col items-center justify-between gap-5 md:flex-row">
        <p className="text-sm font-medium text-slate-600">
          Důvěřují nám týmy z firem
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {[
            { name: "Sareza", src: "sareza" },
            { name: "Chachar Catering", src: "chachar" },
            { name: "Demaxie", src: "demaxie" },
          ].map((c) => (
            <Image
              key={c.src}
              src={`/logos/${c.src}.png`}
              alt={c.name}
              width={160}
              height={64}
              sizes="120px"
              className="h-11 w-28 object-contain grayscale"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
