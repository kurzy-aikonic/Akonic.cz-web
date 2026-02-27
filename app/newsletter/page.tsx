import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { FadeIn } from "../../components/FadeIn";
import { Button } from "../../components/ui/button";
import { ArrowRight, MailOpen } from "lucide-react";
import { client } from "../../sanity/lib/client";
import { NEWSLETTERS_QUERY } from "../../sanity/lib/queries";

export const metadata: Metadata = {
  title: "Newsletter | AIKONIC",
  description:
    "Přečtěte si archiv našich newsletterů — tipy na AI nástroje, případové studie a novinky ze světa umělé inteligence pro firmy.",
  keywords: ["AI newsletter", "AI tipy", "umělá inteligence firmy", "AIKONIC newsletter"],
  alternates: { canonical: "https://aikonic.cz/newsletter" },
  openGraph: {
    title: "Newsletter | AIKONIC",
    description: "Archiv newsletterů — AI tipy, novinky a případové studie.",
    url: "https://aikonic.cz/newsletter",
    siteName: "AIKONIC",
    locale: "cs_CZ",
    type: "website",
  },
};

export const revalidate = 60;

type NewsletterItem = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  tags?: string[];
  coverImage?: { asset?: { _id: string; url: string }; alt?: string };
};

export default async function NewsletterPage() {
  const newsletters: NewsletterItem[] = await client.fetch(NEWSLETTERS_QUERY);

  return (
    <>
      <Navbar />
      <main id="main-content" role="main" className="min-h-screen bg-background">

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-200 pb-16 pt-28 md:pb-24 md:pt-36">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute right-1/4 top-24 h-64 w-64 rounded-full bg-violet-400/15 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-amber-300/20 blur-3xl" />
          </div>
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-600 backdrop-blur">
                Archiv
              </p>
              <h1 className="text-3xl font-semibold leading-tight text-text sm:text-4xl md:text-5xl lg:text-6xl">
                Newsletter
              </h1>
              <p className="mt-6 max-w-2xl text-xl text-slate-600 md:text-2xl">
                Tipy na AI nástroje, případové studie a novinky ze světa umělé inteligence — přímo do vaší schránky.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="min-h-[48px]">
                  <Link href="/#newsletter">
                    Přihlásit se k odběru
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Seznam vydání */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            {newsletters.length === 0 ? (
              <FadeIn>
                <div className="flex flex-col items-center gap-4 rounded-3xl border border-slate-200 bg-primary/5 py-20 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <MailOpen className="h-8 w-8" aria-hidden="true" />
                  </span>
                  <h2 className="text-xl font-semibold text-text">
                    První vydání brzy
                  </h2>
                  <p className="max-w-sm text-slate-600">
                    Zatím zde nic není. Přihlaste se k odběru a buďte první, kdo dostane nové vydání.
                  </p>
                  <Button asChild className="mt-2 min-h-[44px]">
                    <Link href="/#newsletter">Přihlásit se k odběru</Link>
                  </Button>
                </div>
              </FadeIn>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {newsletters.map((item, index) => (
                  <FadeIn key={item._id} delay={index * 0.05}>
                    <Link
                      href={`/newsletter/${item.slug}`}
                      className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
                    >
                      {/* Datum a štítky */}
                      <div className="mb-4 flex flex-wrap items-center gap-2">
                        <span className="text-xs text-slate-500">
                          {new Date(item.publishedAt).toLocaleDateString("cs-CZ", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                        {item.tags?.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h2 className="text-lg font-semibold leading-snug text-text transition group-hover:text-primary">
                        {item.title}
                      </h2>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                        {item.excerpt}
                      </p>
                      <span className="mt-5 inline-flex items-center text-sm font-semibold text-primary">
                        Číst vydání
                        <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA — přihlásit se */}
        <section className="border-t border-slate-200 py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl bg-gradient-to-r from-primary via-blue-600 to-violet-600 px-6 py-12 text-white shadow-2xl md:px-12">
              <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    Zůstaňte v obraze
                  </p>
                  <h2 className="text-2xl font-semibold md:text-3xl">
                    Odebírejte newsletter
                  </h2>
                  <p className="mt-2 text-white/80">
                    AI tipy, novinky a případové studie — jednou za čas, bez spamu.
                  </p>
                </div>
                <Button size="lg" asChild className="min-h-[48px] shrink-0 bg-white text-text hover:bg-white/90">
                  <Link href="/#newsletter">
                    Přihlásit se
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
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
