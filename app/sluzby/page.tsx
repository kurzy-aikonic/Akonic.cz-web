import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { MainServices } from "../../components/cro/MainServices";
import { Contact } from "../../components/Contact";
import { pageMetadata, breadcrumbJsonLd } from "../../lib/seo";
export const metadata = pageMetadata({
  title: "AI služby pro firmy — školení, audit a automatizace",
  description:
    "Naučíme tým používat AI, najdeme vhodné procesy a zavedeme řešení. Školení od 49 900 Kč, audit od 35 000 Kč. Možnost dotační podpory.",
  path: "/sluzby",
});
const groups = [
  {
    title: "Financování vzdělávání",
    id: "dotace",
    links: [
      [
        "Dotace na AI školení",
        "/dotace-na-skoleni",
        "Ověřte podmínky podpory a spočítejte orientační náklady.",
      ],
    ],
  },
  {
    title: "Další formáty",
    id: "dalsi-formaty",
    links: [
      [
        "AI hackathon",
        "/ai-hackathon",
        "Týmová práce na konkrétním prototypu.",
      ],
      [
        "AI pro obchodníky",
        "/skoleni-pro-obchodniky",
        "Příprava nabídek, schůzek a následné komunikace.",
      ],
      ["Vibe coding", "/skoleni-vibe-coding", "Praktický vývoj s AI nástroji."],
    ],
  },
  {
    title: "Ostatní programy",
    id: "ostatni-programy",
    links: [
      [
        "Finanční gramotnost",
        "/financni-gramotnost",
        "Praktické vzdělávání v osobních financích.",
      ],
      [
        "Digitální marketing",
        "/digitalni-marketing",
        "Lokální viditelnost, obsah a firemní prezentace.",
      ],
    ],
  },
];
export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Domů", path: "/" },
              { name: "Služby", path: "/sluzby" },
            ]),
          ),
        }}
      />
      <Navbar />
      <main id="main-content">
        <section className="cro-section pt-32">
          <div className="cro-container">
            <p className="cro-eyebrow">AI pro firmy</p>
            <h1 className="cro-heading mt-3">
              Od školení k nasazení AI do praxe
            </h1>
            <p className="cro-copy mt-5 max-w-2xl">
              Naučíme váš tým používat AI, najdeme vhodné procesy a pomůžeme
              zavést konkrétní řešení. Začít můžete tím, co vaše firma právě
              potřebuje.
            </p>
          </div>
        </section>
        <MainServices />
        {groups.map((group) => (
          <section
            key={group.id}
            id={group.id}
            className="cro-section border-t border-slate-200"
          >
            <div className="cro-container">
              <h2 className="cro-heading">{group.title}</h2>
              <div className="mt-7 grid gap-5 md:grid-cols-3">
                {group.links.map(([title, href, description]) => (
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
        ))}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
