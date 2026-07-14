import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { PainPoints } from "../components/PainPoints";
import { About } from "../components/About";
import { Team } from "../components/Team";
import { Services } from "../components/Services";
import { Gallery } from "../components/Gallery";
import { Testimonials } from "../components/Testimonials";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";
import { Reveal } from "../components/Reveal";
import { Process } from "../components/Process";
import { Pricing } from "../components/Pricing";
import { StickyCTA } from "../components/StickyCTA";
import { AiTypingDemo } from "../components/AiTypingDemo";
import { SavingsCalculator } from "../components/SavingsCalculator";
import { FAQ } from "../components/FAQ";
import { faqs } from "../lib/faq-data";
import { faqPageJsonLd } from "../lib/seo";
import { getGalleryImages } from "../lib/get-gallery-images";

const jsonLd = [faqPageJsonLd(faqs)];

export default function HomePage() {
  const imageList = getGalleryImages();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      {/*
        Prodejní pořadí sekcí (viz aikonic-navrh-uprav-2.md, 1.1):
        Hero → Pain-points → Services (3 pilíře) → demo → Process →
        Testimonials → kalkulačka → Pricing → Gallery → FAQ → CTA → Contact.
      */}
      <main id="main-content" role="main" className="min-h-0">
        <Hero />
        <Reveal>
          <PainPoints />
        </Reveal>
        <Services />
        <Reveal>
          <AiTypingDemo />
        </Reveal>
        <Reveal>
          <Process />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <SavingsCalculator />
        </Reveal>
        <Reveal>
          <Pricing />
        </Reveal>
        <Reveal>
          <Gallery images={imageList} />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Team />
        </Reveal>
        <Reveal>
          <FAQ />
        </Reveal>
        <CTA />
      </main>
      <Contact />
      <Footer />
      <StickyCTA />
    </>
  );
}
