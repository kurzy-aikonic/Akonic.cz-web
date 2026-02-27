import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { FadeIn } from "../../../components/FadeIn";
import { Button } from "../../../components/ui/button";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";
import { client } from "../../../sanity/lib/client";
import { NEWSLETTER_QUERY, NEWSLETTER_SLUGS_QUERY } from "../../../sanity/lib/queries";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await client
    .withConfig({ useCdn: false })
    .fetch(NEWSLETTER_SLUGS_QUERY);
  return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = await client.fetch(NEWSLETTER_QUERY, { slug });
  if (!item) return {};
  return {
    title: `${item.seoTitle ?? item.title} | AIKONIC Newsletter`,
    description: item.seoDescription ?? item.excerpt,
    alternates: { canonical: `https://aikonic.cz/newsletter/${slug}` },
    openGraph: {
      title: item.seoTitle ?? item.title,
      description: item.seoDescription ?? item.excerpt,
      url: `https://aikonic.cz/newsletter/${slug}`,
      siteName: "AIKONIC",
      locale: "cs_CZ",
      type: "article",
      publishedTime: item.publishedAt,
    },
  };
}

// Portable Text komponenty — styly odpovídají designu webu
const ptComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-5 text-base leading-relaxed text-slate-700">{children}</p>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="mb-4 mt-10 text-2xl font-semibold text-text">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="mb-3 mt-8 text-xl font-semibold text-text">{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="mb-2 mt-6 text-lg font-semibold text-text">{children}</h4>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="my-6 border-l-4 border-primary/40 pl-5 italic text-slate-600">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="mb-5 space-y-2 pl-5">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="mb-5 list-decimal space-y-2 pl-5">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="flex items-start gap-2 text-slate-700">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="text-slate-700">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-text">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    code: ({ children }: { children?: React.ReactNode }) => (
      <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-primary">
        {children}
      </code>
    ),
    link: ({ value, children }: { value?: { href: string; blank?: boolean }; children?: React.ReactNode }) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
        className="text-primary underline decoration-primary/30 underline-offset-2 hover:text-blue-700"
      >
        {children}
      </a>
    ),
  },
};

export default async function NewsletterDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = await client.fetch(NEWSLETTER_QUERY, { slug });

  if (!item) notFound();

  const formattedDate = new Date(item.publishedAt).toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Navbar />
      <main id="main-content" role="main" className="min-h-screen bg-background">

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-200 pb-12 pt-28 md:pb-16 md:pt-36">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute right-1/4 top-20 h-56 w-56 rounded-full bg-violet-400/15 blur-3xl" />
          </div>
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <FadeIn>
              <Link
                href="/newsletter"
                className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Zpět na archiv
              </Link>

              {/* Datum a štítky */}
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-sm text-slate-500">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  {formattedDate}
                </span>
                {item.tags?.map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl font-semibold leading-tight text-text sm:text-4xl md:text-5xl">
                {item.title}
              </h1>
              {item.excerpt && (
                <p className="mt-5 text-lg leading-relaxed text-slate-600">
                  {item.excerpt}
                </p>
              )}
            </FadeIn>
          </div>
        </section>

        {/* Obsah */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <FadeIn>
              <article className="prose-none">
                {item.body && (
                  <PortableText value={item.body} components={ptComponents as Parameters<typeof PortableText>[0]["components"]} />
                )}
              </article>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-slate-200 py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl bg-gradient-to-r from-primary via-blue-600 to-violet-600 px-6 py-12 text-white shadow-2xl md:px-12">
              <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    Líbilo se vám toto vydání?
                  </p>
                  <h2 className="text-2xl font-semibold md:text-3xl">
                    Odebírejte newsletter
                  </h2>
                  <p className="mt-2 text-white/80">
                    Příští vydání dostanete přímo do e-mailu.
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
