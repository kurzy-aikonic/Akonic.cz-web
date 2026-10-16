import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { pageMetadata, breadcrumbJsonLd } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "O nás",
  description:
    "Aikonic training s.r.o. pomáhá firmám se školením AI, auditem a automatizací. Sídlo v Poličce, výuka po celé ČR i online.",
  path: "/o-nas",
});

const services = [
  ["AI školení pro firmy", "/ai-skoleni-pro-firmy", "Praktická výuka na úkolech vašeho týmu."],
  ["AI nalejvárna", "/jednodenni-skoleni-ai", "Jednodenní školení v šesti blocích."],
  ["Firemní AI audit", "/audit", "Najdeme procesy, kde AI šetří čas."],
  ["Automatizace", "/automatizace", "Navrhneme a zavedeme konkrétní řešení."],
  ["AI hackathon", "/ai-hackathon", "Intenzivní práce na prototypu, od 4 hodin."],
  ["Dotace na školení", "/dotace-na-skoleni", "Ověříme podmínky podpory pro vaši firmu."],
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Domů", path: "/" },
              { name: "O nás", path: "/o-nas" },
            ]),
          ),
        }}
      />
      <Navbar />
      <main id="main-content">
        <section className="cro-hero">
          <div className="cro-container">
            <p className="cro-eyebrow">O nás</p>
            <h1 className="cro-heading">AI školení a automatizace pro firmy</h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-600">
              Pomáháme firmám najít praktické využití AI, naučit týmy a zavést řešení do každodenní práce.
            </p>
          </div>
        </section>

        <section className="cro-section border-t border-slate-200" aria-labelledby="firma-heading">
          <div className="cro-container grid gap-8 lg:grid-cols-2">
            <div>
              <h2 id="firma-heading" className="text-2xl font-semibold text-slate-950">
                Kdo jsme
              </h2>
              <p className="mt-4 text-slate-600">
                Aikonic training s.r.o. vystupuje pod značkou AIKONIC.
              </p>
              <p className="mt-3 text-slate-600">
                Sídlo a fakturační adresa je Heydukova 115, 572 01 Polička. IČO 24472590. Nejsme plátci DPH.
              </p>
              <p className="mt-3 text-slate-600">
                Společnost je zapsaná v obchodním rejstříku.
              </p>
            </div>
            <dl className="cro-card grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-semibold text-slate-500">Obchodní firma</dt>
                <dd className="mt-1 text-slate-950">Aikonic training s.r.o.</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-slate-500">Značka</dt>
                <dd className="mt-1 text-slate-950">AIKONIC</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-slate-500">IČO</dt>
                <dd className="mt-1 text-slate-950">24472590</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-slate-500">DPH</dt>
                <dd className="mt-1 text-slate-950">Nejsme plátci DPH</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="cro-section border-t border-slate-200" aria-labelledby="sluzby-heading">
          <div className="cro-container">
            <h2 id="sluzby-heading" className="text-2xl font-semibold text-slate-950">
              S čím pomáháme
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              Školíme prezenčně po celé ČR i online. Obvykle pracujeme se 4–15 lidmi.
            </p>
            <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map(([title, href, description]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-2xl border border-slate-200 p-6 hover:border-blue-500"
                >
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-slate-600">{description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="cro-section border-t border-slate-200" aria-labelledby="nastroje-heading">
          <div className="cro-container grid gap-8 lg:grid-cols-2">
            <div>
              <h2 id="nastroje-heading" className="text-2xl font-semibold text-slate-950">
                Nástroje vybíráme podle práce
              </h2>
              <p className="mt-4 text-slate-600">
                Pracujeme s ChatGPT, Microsoft Copilot, Gemini, Claude, Perplexity, n8n a Cursor.
              </p>
              <p className="mt-3 text-slate-600">
                Nevybíráme nástroje podle trendu. Vybíráme je podle vašich licencí, dat a úkolů.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-slate-950">Kdo s vámi mluví</h2>
              <p className="mt-4 text-slate-600">
                Kontaktní osoba je Ing. Radek Aigel.
              </p>
              <p className="mt-3 text-slate-600">
                Úvodní konzultace trvá 20 minut. Je zdarma a nezávazně.
              </p>
              <p className="mt-3 text-slate-600">
                <Link href="/#about" className="font-semibold text-primary underline">
                  Kdo vás bude školit
                </Link>
              </p>
              <Link href="/kontakt" className="cro-button mt-6">
                Napsat nám
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200">
          <div className="cro-container py-8 text-sm text-slate-500">
            Sesterský projekt:{" "}
            <a
              href="https://krouzekumeleinteligence.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              AI Kroužek pro děti
            </a>
            . AI hackathon pořádáme na statku Aigeluvlom u Poličky.
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
