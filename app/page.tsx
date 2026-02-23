import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
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
import fs from "fs";
import path from "path";

const galleryExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function getGalleryImages() {
  const galleryDir = path.join(process.cwd(), "public", "gallery");
  const files = fs.readdirSync(galleryDir);

  return files
    .filter((file) => galleryExtensions.has(path.extname(file).toLowerCase()))
    .map((file) => `/gallery/${encodeURIComponent(file)}`);
}

export default function HomePage() {
  const imageList = getGalleryImages();

  return (
    <>
      <Navbar />
      <main id="main-content" role="main" className="min-h-0">
        <Hero />
        <Services />
        <Reveal>
          <Process />
        </Reveal>
        <Reveal>
          <Pricing />
        </Reveal>
        <Reveal>
          <Gallery images={imageList} />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <CTA />
        <Reveal>
          <About />
        </Reveal>
      </main>
      <Contact />
      <Footer />
      <StickyCTA />
    </>
  );
}
