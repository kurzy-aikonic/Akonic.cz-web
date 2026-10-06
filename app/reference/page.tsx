import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Testimonials } from "../../components/Testimonials";
import { Trust } from "../../components/Trust";
import { Contact } from "../../components/Contact";
import { pageMetadata, breadcrumbJsonLd } from "../../lib/seo";
export const metadata = pageMetadata({
  title: "Reference klientů | AI školení a spolupráce",
  description:
    "Zkušenosti účastníků s praktickým AI školením od AIKONIC. Reference firem a zpětná vazba z reálných školení.",
  path: "/reference",
});
export default function ReferencesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbJsonLd([
                { name: "Domů", path: "/" },
                { name: "Reference", path: "/reference" },
              ]),
            ),
          }}
        />
        <section className="cro-hero">
          <div className="cro-container">
            <h1 className="cro-heading">Reference z firemních AI školení</h1>
            <p className="mt-5 text-slate-600">
              Zkušenosti lidí, kteří s námi vyzkoušeli AI na pracovních úkolech.
            </p>
          </div>
        </section>
        <div className="cro-container">
          <Trust />
        </div>
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
