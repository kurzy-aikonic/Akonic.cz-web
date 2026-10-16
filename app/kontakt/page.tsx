import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Contact } from "../../components/Contact";
import { pageMetadata, breadcrumbJsonLd } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Kontakt",
  description:
    "Napište na kurzy@aikonic.cz nebo zavolejte na +420 723 061 013. Fakturační adresa Heydukova 115, Polička.",
  path: "/kontakt",
});

const channels = [
  {
    label: "E-mail",
    value: "kurzy@aikonic.cz",
    href: "mailto:kurzy@aikonic.cz",
  },
  {
    label: "Telefon",
    value: "+420 723 061 013",
    href: "tel:+420723061013",
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Domů", path: "/" },
              { name: "Kontakt", path: "/kontakt" },
            ]),
          ),
        }}
      />
      <Navbar />
      <main id="main-content">
        <section className="cro-hero">
          <div className="cro-container">
            <p className="cro-eyebrow">Kontakt</p>
            <h1 className="cro-heading">Napište nám nebo zavolejte</h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-600">
              Připravíme nabídku na míru. Úvodní konzultace je zdarma a nezávazně.
            </p>
          </div>
        </section>

        <section className="cro-section border-t border-slate-200" aria-labelledby="udaje-heading">
          <div className="cro-container grid gap-8 lg:grid-cols-2">
            <div>
              <h2 id="udaje-heading" className="text-2xl font-semibold text-slate-950">
                Kontaktní údaje
              </h2>
              <ul className="mt-5 space-y-3 text-slate-700">
                {channels.map((item) => (
                  <li key={item.href}>
                    <span className="block text-sm font-semibold text-slate-500">{item.label}</span>
                    <a className="text-lg font-semibold text-primary underline" href={item.href}>
                      {item.value}
                    </a>
                  </li>
                ))}
                <li>
                  <span className="block text-sm font-semibold text-slate-500">Fakturační adresa</span>
                  <span className="text-lg text-slate-950">Heydukova 115, 572 01 Polička</span>
                </li>
              </ul>
            </div>
            <div className="cro-card">
              <h2 className="text-2xl font-semibold text-slate-950">Firma</h2>
              <p className="mt-4 text-slate-700">Aikonic training s.r.o.</p>
              <p className="mt-2 text-slate-700">IČO 24472590. Nejsme plátci DPH.</p>
              <p className="mt-2 text-slate-600">
                Kontaktní osoba je Ing. Radek Aigel.
              </p>
              <ul className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
                <li>
                  <Link
                    href="https://www.linkedin.com/company/108064244/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/profile.php?id=61581039984128"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/aikonic_training/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
