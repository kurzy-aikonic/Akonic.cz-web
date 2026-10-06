import Image from "next/image";
import { LeadLink } from "./LeadLink";
export type CaseStudyData = {
  client: string;
  logo: string;
  situation: string;
  work: string[];
  outputs: string[];
  nextStep: string;
  photo?: string;
};
// TODO: Doplnit schválenou realizaci včetně ověřených výstupů. Bez podkladů se sekce nezobrazuje.
export const approvedCaseStudy: CaseStudyData | null = null;
export function CaseStudy({ data }: { data: CaseStudyData | null }) {
  if (!data) return null;
  return (
    <section className="cro-section bg-slate-50">
      <div className="cro-container">
        <p className="cro-eyebrow">Z praxe</p>
        <Image src={data.logo} alt={data.client} width={160} height={64} />
        <h2 className="cro-heading">{data.client}</h2>
        <h3 className="mt-6 font-semibold">Výchozí situace</h3>
        <p className="mt-2">{data.situation}</p>
        <div className="my-6 grid gap-6 md:grid-cols-2">
          {[
            ["Co jsme řešili", data.work],
            ["Co vzniklo", data.outputs],
          ].map(([title, items]) => (
            <div key={String(title)}>
              <h3 className="font-semibold">{title}</h3>
              <ul className="mt-2 list-inside list-disc">
                {(items as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <h3 className="font-semibold">Další krok</h3>
        <p className="mb-6">{data.nextStep}</p>
        {data.photo && (
          <Image
            src={data.photo}
            alt={`Realizace pro ${data.client}`}
            width={1000}
            height={600}
            className="mb-6 rounded-xl"
          />
        )}
        <LeadLink interest="AI audit" section="case-study">
          Chci podobně zmapovat naši firmu
        </LeadLink>
      </div>
    </section>
  );
}
