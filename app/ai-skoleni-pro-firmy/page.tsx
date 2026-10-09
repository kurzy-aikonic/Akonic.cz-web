import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Trust } from "../../components/Trust";
import { Contact } from "../../components/Contact";
import { FAQ } from "../../components/FAQ";
import { Gallery } from "../../components/Gallery";
import { DepartmentUseCases } from "../../components/cro/DepartmentUseCases";
import { Tools } from "../../components/cro/Tools";
import { LeadLink } from "../../components/cro/LeadLink";
import {
  pageMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqPageJsonLd,
} from "../../lib/seo";
import { faqs } from "../../lib/faq-data";
import { getGalleryImages } from "../../lib/get-gallery-images";
import Link from "next/link";
export const metadata = pageMetadata({
  title: "AI školení pro firmy | Prakticky a na míru | AIKONIC",
  description:
    "Praktické AI školení pro firmy na reálných pracovních úkolech. ChatGPT, Copilot, Claude i automatizace. Prezenčně po celé ČR nebo online.",
  path: "/ai-skoleni-pro-firmy",
});
const formats = [
  {
    id: "jeden-den",
    title: "Praktické AI školení",
    duration: "1 den · 8 hodin",
    price: "49 900 Kč",
    text: "Základy práce s AI, prompty a praktická cvičení na úkolech vašeho týmu.",
    cta: "Poptat jednodenní školení",
    href: "/jednodenni-skoleni-ai",
  },
  {
    id: "dva-dny",
    title: "Rozšířené praktické AI školení",
    duration: "2 dny · 16 hodin",
    price: "99 000 Kč",
    text: "Na úvodní školení navazuje realizační den pro vlastní úkoly a projekty.",
    cta: "Poptat dvoudenní školení",
    href: "/dvoudenni-skoleni-ai",
  },
  {
    id: "50-hodin",
    title: "AI kurz pro firmy",
    duration: "50 hodin · Dotovaný kurz",
    price: "299 000 Kč",
    text: "Systematické vzdělávání s možností dotační podpory. Cena za skupinu do 15 osob.",
  },
  {
    id: "80-hodin",
    title: "Rozšířený AI kurz pro firmy",
    duration: "80 hodin · Dotovaný kurz",
    price: "479 000 Kč",
    text: "Více času pro procvičení a vlastní projekty. Možnost dotace; cena za skupinu do 15 osob.",
  },
];
export default function TrainingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbJsonLd([
              { name: "Domů", path: "/" },
              { name: "AI školení pro firmy", path: "/ai-skoleni-pro-firmy" },
            ]),
            serviceJsonLd({
              name: "AI školení pro firmy",
              description:
                "Praktické firemní AI vzdělávání na reálných úkolech.",
              path: "/ai-skoleni-pro-firmy",
              minPrice: 49900,
            }),
            faqPageJsonLd(faqs),
          ]),
        }}
      />
      <Navbar />
      <main id="main-content">
        <section className="cro-hero">
          <div className="cro-container">
            <p className="cro-eyebrow">Firemní AI školení</p>
            <h1 className="cro-heading mt-4 max-w-4xl !text-4xl sm:!text-5xl">
              AI školení pro firmy na skutečných pracovních úkolech
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-slate-700">
              Naučíme váš tým používat AI při práci, kterou skutečně dělá.
            </p>
            <p className="mt-3 max-w-2xl text-slate-600">
              Pracujeme s vašimi procesy, dokumenty a situacemi. Praktické
              příklady přizpůsobíme zkušenostem účastníků.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <LeadLink interest="AI školení" section="training-hero">
                Poptat AI školení
              </LeadLink>
              <a className="cro-button-secondary" href="#formaty">
                Zobrazit formáty a ceny
              </a>
            </div>
          </div>
        </section>
        <div className="cro-container border-y py-6">
          <Trust />
        </div>
        <section className="cro-section">
          <div className="cro-container grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="cro-heading">
                AI školení přizpůsobíme vašemu týmu
              </h2>
              <p className="mt-5 text-slate-600">
                Pracujeme s obchodem, administrativou, managementem,
                marketingem, HR i zákaznickou podporou. Začátečníci získají
                pracovní postupy; pokročilí rozvinou konkrétní použití AI.
              </p>
              <p className="mt-4 text-slate-600">
                Před školením si vyjasníme očekávání, nástroje a bezpečnostní
                pravidla. Tým si vyzkouší práci na podkladech, které může využít
                i po skončení kurzu.
              </p>
            </div>
            <div>
              <h2 className="cro-heading">Co se účastníci naučí</h2>
              <ul className="mt-5 space-y-3 text-slate-700">
                {[
                  "Pracovat s ChatGPT, Copilot a Claude",
                  "Psát jasná zadání a kvalitní prompty",
                  "Zpracovávat dokumenty a data",
                  "Vytvářet vlastní AI asistenty",
                  "Automatizovat rutinní činnosti",
                  "Používat AI bezpečně ve firemním prostředí",
                ].map((x) => (
                  <li key={x}>✓ {x}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section id="formaty" className="cro-section scroll-mt-24 bg-slate-50">
          <div className="cro-container">
            <h2 className="cro-heading">Formáty a ceny AI školení</h2>
            <p className="mt-4 text-slate-600">
              Všechny ceny jsou konečné. AIKONIC není plátcem DPH.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {formats.map((f) => (
                <article
                  key={f.id}
                  id={f.id}
                  className="cro-service-card scroll-mt-24"
                >
                  <span className="cro-eyebrow">{f.duration}</span>
                  <h3>{f.title}</h3>
                  <strong className="text-2xl">{f.price}</strong>
                  <p>{f.text}</p>
                  {f.cta ? (
                    <>
                      <LeadLink
                        section={`training-${f.id}`}
                        interest="AI školení"
                      >
                        {f.cta}
                      </LeadLink>
                      <Link
                        className="text-sm text-primary underline"
                        href={f.href!}
                      >
                        Podrobný program
                      </Link>
                    </>
                  ) : (
                    <Link
                      className="cro-button"
                      href="/dotace-na-skoleni#dotacni-kalkulacka"
                    >
                      Spočítat dotaci
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
        <DepartmentUseCases />
        <Tools />
        <section className="cro-section">
          <div className="cro-container">
            <h2 className="cro-heading">Další formáty</h2>
            <div className="mt-5 flex flex-wrap gap-5">
              {[
                ["AI hackathon", "/ai-hackathon"],
                ["AI pro obchodníky", "/skoleni-pro-obchodniky"],
                ["Vibe coding", "/skoleni-vibe-coding"],
              ].map(([t, h]) => (
                <Link key={h} href={h} className="cro-button-secondary">
                  {t}
                </Link>
              ))}
            </div>
            <p className="mt-6 text-slate-600">
              Potřebujete nejprve vybrat vhodné procesy? Navazuje{" "}
              <Link className="text-primary underline" href="/audit">
                firemní AI audit
              </Link>
              . Pro realizaci konkrétního řešení nabízíme{" "}
              <Link className="text-primary underline" href="/automatizace">
                AI implementaci a automatizace
              </Link>
              .
            </p>
          </div>
        </section>
        <Gallery
          images={getGalleryImages().filter((x) => !x.includes("financni"))}
        />
        <FAQ />
        <Contact initialInterest="AI školení" />
      </main>
      <Footer />
    </>
  );
}
