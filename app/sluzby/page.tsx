import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { FadeIn } from "../../components/FadeIn";
import { Button } from "../../components/ui/button";
import { ArrowRight, ClipboardCheck, Cpu, PieChart, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Služby pro firmy | AIKONIC",
  description:
    "Firemní AI audit, AI Hackathon, finanční gramotnost a automatizace na míru. Začněte auditem — pak vyberete konkrétní kroky.",
  keywords: ["AI služby pro firmy", "firemní AI audit", "AI hackathon", "automatizace", "AI školení", "AIKONIC"],
  alternates: { canonical: "https://aikonic.cz/sluzby" },
  openGraph: {
    title: "Služby pro firmy | AIKONIC",
    description: "Firemní AI audit, hackathon, finanční gramotnost a automatizace na míru.",
    url: "https://aikonic.cz/sluzby",
    siteName: "AIKONIC",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Služby AIKONIC pro firmy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Služby pro firmy | AIKONIC",
    description: "Firemní AI audit, hackathon, finanční gramotnost a automatizace na míru.",
    images: ["/og-image.png"],
  },
};

const services = [
  {
    title: "Firemní AI audit",
    description: "Systematická analýza procesů a identifikace míst, kde AI přinese měřitelnou hodnotu. Výstup: plán s prioritami a termíny.",
    href: "/audit",
    icon: ClipboardCheck,
  },
  {
    title: "Intenzivní AI Hackathon",
    description: "Od 4 hodin po libovolný počet dní, na domluvu. Žádná teorie — intenzivní praxe a práce s AI.",
    href: "/ai-hackathon",
    icon: Zap,
  },
  {
    title: "Finanční gramotnost pro firmy",
    description: "Dvoudenní školení: rozpočet, úvěry, investice a pojištění. Praktické principy a cvičení na míru.",
    href: "/financni-gramotnost",
    icon: PieChart,
  },
  {
    title: "Automatizace na míru",
    description: "Vlastní AI agenty a propojení systémů. Rutinu přenecháme strojům; vy se věnujete tomu, co přináší hodnotu.",
    href: "/#contact",
    icon: Cpu,
  },
];

export default function SluzbyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main" className="min-h-screen bg-background">
        <section className="relative overflow-hidden border-b border-slate-200 pb-16 pt-28 md:pb-24 md:pt-36">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
          </div>
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn>
              <h1 className="text-3xl font-semibold leading-tight text-text sm:text-4xl md:text-5xl lg:text-6xl">
                Služby pro firmy
              </h1>
              <p className="mt-6 max-w-2xl text-xl text-slate-600 md:text-2xl">
                Začněte auditem — zjistíme, kde AI přinese nejvíc. Na jeho základě pak vyberete konkrétní kroky.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <FadeIn key={service.title} delay={index * 0.06}>
                    <Link
                      href={service.href}
                      className="group flex flex-col rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-lg md:p-8"
                    >
                      <span className="icon-glow-primary flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary/15">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h2 className="mt-5 text-xl font-semibold text-text group-hover:text-primary md:text-2xl">
                        {service.title}
                      </h2>
                      <p className="mt-3 flex-1 text-sm text-slate-600">
                        {service.description}
                      </p>
                      <span className="mt-5 inline-flex items-center text-sm font-semibold text-primary">
                        Více informací
                        <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl bg-gradient-to-r from-primary via-blue-600 to-indigo-600 px-6 py-12 text-white shadow-xl md:px-12">
              <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold md:text-3xl">
                    Další krok: domluvit konzultaci
                  </h2>
                  <p className="mt-2 text-white/90">
                    Napište nám nebo zavolejte — připravíme nabídku na míru.
                  </p>
                </div>
                <Button size="lg" asChild className="bg-white text-text hover:bg-white/90">
                  <Link href="/#contact">
                    Domluvit konzultaci
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
