import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Trust } from "../components/Trust";
import { ProblemSelector } from "../components/cro/ProblemSelector";
import { DepartmentUseCases } from "../components/cro/DepartmentUseCases";
import { Process } from "../components/Process";
import { CaseStudy, approvedCaseStudy } from "../components/cro/CaseStudy";
import { Testimonials } from "../components/Testimonials";
import { SavingsCalculator } from "../components/SavingsCalculator";
import { SubsidyCTA } from "../components/cro/SubsidyCTA";
import { HomePricing } from "../components/cro/HomePricing";
import { Tools } from "../components/cro/Tools";
import { Gallery } from "../components/Gallery";
import { Team } from "../components/Team";
import { FAQ } from "../components/FAQ";
import { CTA } from "../components/CTA";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { StickyCTA } from "../components/StickyCTA";
import { faqs } from "../lib/faq-data";
import { faqPageJsonLd } from "../lib/seo";
import { getGalleryImages } from "../lib/get-gallery-images";
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
        <Trust />
        <ProblemSelector />
        <DepartmentUseCases />
        <Process />
        <CaseStudy data={approvedCaseStudy} />
        <Testimonials />
        <SavingsCalculator />
        <SubsidyCTA />
        <HomePricing />
        <Tools />
        <Gallery
          images={getGalleryImages().filter(
            (image) => !image.includes("financni"),
          )}
        />
        <Team />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
