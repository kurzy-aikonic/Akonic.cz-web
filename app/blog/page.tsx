import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { FadeIn } from "../../components/FadeIn";
import { client } from "../../sanity/lib/client";
import { BLOG_POSTS_QUERY } from "../../sanity/lib/queries";
import { pageMetadata, breadcrumbJsonLd } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Články o firemním AI vzdělávání — dotace na školení, AI hackathony, praktické tipy pro nasazení AI ve firmě.",
  path: "/blog",
  keywords: ["AI blog", "firemní AI školení blog", "AI hackathon", "dotace na AI školení"],
});

export const revalidate = 60;

const jsonLd = [breadcrumbJsonLd([{ name: "Blog", path: "/blog" }])];

type BlogListItem = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  tags?: string[];
};

export default async function BlogPage() {
  const posts: BlogListItem[] = await client.fetch(BLOG_POSTS_QUERY);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content" role="main" className="min-h-screen bg-background">
        <section className="relative overflow-hidden border-b border-slate-200 pb-16 pt-28 md:pb-24 md:pt-36">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          </div>
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <FadeIn>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-600 backdrop-blur">
                Blog
              </p>
              <h1 className="text-3xl font-semibold leading-tight text-text sm:text-4xl md:text-5xl lg:text-6xl">
                Firemní AI v praxi
              </h1>
              <p className="mt-6 max-w-2xl text-xl text-slate-600 md:text-2xl">
                Dotace, hackathony a praktické tipy pro nasazení AI ve firmě — bez teorie navíc.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            {posts.length === 0 ? (
              <FadeIn>
                <div className="flex flex-col items-center gap-4 rounded-3xl border border-slate-200 bg-primary/5 py-20 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Newspaper className="h-8 w-8" aria-hidden="true" />
                  </span>
                  <h2 className="text-xl font-semibold text-text">
                    První článek brzy
                  </h2>
                  <p className="max-w-sm text-slate-600">
                    Připravujeme první články o AI školeních, dotacích a hackathonech. Mrkněte zatím na{" "}
                    <Link href="/newsletter" className="font-semibold text-primary underline decoration-primary/30 underline-offset-2">
                      newsletter
                    </Link>
                    .
                  </p>
                </div>
              </FadeIn>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((item, index) => (
                  <FadeIn key={item._id} delay={index * 0.05}>
                    <Link
                      href={`/blog/${item.slug}`}
                      className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
                    >
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
                        Číst článek
                        <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
