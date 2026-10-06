import { editorialArticles, findEditorialArticle } from "../../../lib/editorial-articles";
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
import { BLOG_POST_QUERY, BLOG_POST_SLUGS_QUERY } from "../../../sanity/lib/queries";
import { pageMetadata, breadcrumbJsonLd, articleJsonLd } from "../../../lib/seo";
import { safeHref } from "../../../lib/safe-href";

export const revalidate = 60;
export const dynamicParams = true;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  try {
    const slugs = await client
      .withConfig({ useCdn: false })
      .fetch(BLOG_POST_SLUGS_QUERY);
    return [...new Set([...editorialArticles.map(a => a.slug), ...(slugs ?? []).map((s: {slug:string})=>s.slug)])].map(slug => ({slug}));
  } catch {
    return editorialArticles.map(a=>({slug:a.slug}));
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = findEditorialArticle(slug) ?? await client.fetch(BLOG_POST_QUERY, { slug });
  if (!item) return {};
  return pageMetadata({
    title: item.seoTitle ?? item.title,
    description: item.seoDescription ?? item.excerpt,
    path: `/blog/${slug}`,
  });
}

// Portable Text komponenty — styly odpovídají designu webu (viz app/newsletter/[slug]/page.tsx)
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
    link: ({ value, children }: { value?: { href: string; blank?: boolean }; children?: React.ReactNode }) => {
      const href = safeHref(value?.href);
      if (!href) {
        return <span className="text-primary">{children}</span>;
      }
      const isExternal = /^https?:\/\//i.test(href);
      const openBlank = Boolean(value?.blank) || isExternal;
      return (
        <a
          href={href}
          target={openBlank ? "_blank" : undefined}
          rel={openBlank ? "noopener noreferrer nofollow" : undefined}
          className="text-primary underline decoration-primary/30 underline-offset-2 hover:text-blue-700"
        >
          {children}
        </a>
      );
    },
  },
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const item = findEditorialArticle(slug) ?? await client.fetch(BLOG_POST_QUERY, { slug });

  if (!item) notFound();

  const formattedDate = new Date(item.publishedAt).toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Blog", path: "/blog" },
      { name: item.title, path: `/blog/${slug}` },
    ]),
    articleJsonLd({
      title: item.title,
      description: item.seoDescription ?? item.excerpt,
      path: `/blog/${slug}`,
      publishedAt: item.publishedAt,
      author: item.author,
    }),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content" role="main" className="min-h-screen bg-background">
        <section className="relative overflow-hidden border-b border-slate-200 pb-12 pt-28 md:pb-16 md:pt-36">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          </div>
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <FadeIn>
              <Link
                href="/blog"
                className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Zpět na blog
              </Link>

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

        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <FadeIn>
              <article className="prose-none">
                {item.body && (
                  <PortableText value={item.body} components={ptComponents as Parameters<typeof PortableText>[0]["components"]} />
                )}
                <aside className="mt-10 rounded-2xl bg-blue-50 p-6"><h2 className="text-xl font-semibold">Další krok pro váš tým</h2><p className="mt-3">Prohlédněte si <Link href="/ai-skoleni-pro-firmy" className="text-primary underline">AI školení pro firmy</Link>, jeho formáty a ceny. Pokud potřebujete vybrat vhodné procesy, pomůže <Link href="/audit" className="text-primary underline">firemní AI audit</Link>. Pro realizaci navazuje <Link href="/automatizace" className="text-primary underline">implementace a automatizace</Link>.</p>{slug === "dotace-na-ai-skoleni-pro-firmy" && <p className="mt-3"><Link className="text-primary underline" href="/dotace-na-skoleni#dotacni-kalkulacka">Spočítat možnou dotaci</Link></p>}</aside>
                {findEditorialArticle(slug)?.sources.length ? <aside className="mt-8"><h2 className="text-xl font-semibold">Zdroje a další informace</h2><ul className="mt-3 space-y-3">{findEditorialArticle(slug)!.sources.map(source=><li key={source.url}><a className="text-primary underline" href={source.url} target="_blank" rel="noopener noreferrer">{source.title}</a></li>)}</ul><p className="mt-3 text-sm text-slate-500">Ověřeno 6. října 2026. Podmínky služeb a programů se mohou měnit.</p></aside> : null}
              </article>
            </FadeIn>
          </div>
        </section>

        <section className="border-t border-slate-200 py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn className="rounded-3xl bg-gradient-to-r from-primary via-blue-600 to-violet-600 px-6 py-12 text-white shadow-2xl md:px-12">
              <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    Máte podobný problém?
                  </p>
                  <h2 className="text-2xl font-semibold md:text-3xl">
                    Domluvme si konzultaci
                  </h2>
                  <p className="mt-2 text-white/80">
                    Úvodní konzultace zdarma a nezávazně.
                  </p>
                </div>
                <Button size="lg" asChild className="min-h-[48px] shrink-0 bg-white text-text hover:bg-white/90">
                  <Link href="/#contact">
                    Domluvit 20min konzultaci
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
