import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Trust } from "../components/Trust";
import { MainServices } from "../components/cro/MainServices";
import { UseCaseSummary } from "../components/cro/UseCaseSummary";
import { HomeSubsidy } from "../components/cro/HomeSubsidy";
import { Process } from "../components/Process";
import { Testimonials } from "../components/Testimonials";
import { Team } from "../components/Team";
import { FAQ } from "../components/FAQ";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { faqs } from "../lib/faq-data";
import { faqPageJsonLd } from "../lib/seo";
import calculatorHtml from "../lib/calculators/subsidy-html.json";
export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageJsonLd(faqs)),
        }}
      />
      <Navbar />
      <main id="main-content">
        <Hero />
        <div className="cro-container border-y border-slate-200 py-6">
          <Trust />
        </div>
        <MainServices />
        <UseCaseSummary />
        <Process />
        <Testimonials compact />
        <HomeSubsidy
          html={calculatorHtml.replace(
            "__FORMSPREE_ID__",
            process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "mbdalyzl",
          )}
        />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
