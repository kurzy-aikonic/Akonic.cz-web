import fs from "node:fs";
import path from "node:path";
import { isArticlePublished } from "./blog-date";

export type BlogSource = { title: string; url: string };

export type BlogSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
};

export type BlogArticleFile = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  tags?: string[];
  image?: string;
  imageAlt?: string;
  sources?: BlogSource[];
  sourceNote?: string;
  sort?: number;
  sections: BlogSection[];
};

type Span = {
  _type: "span";
  _key: string;
  text: string;
  marks: string[];
};

type MarkDef = { _type: "link"; _key: string; href: string };

type PortableBlock = {
  _type: "block";
  _key: string;
  style: "normal" | "h2";
  markDefs: MarkDef[];
  children: Span[];
  listItem?: "bullet";
  level?: number;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function richText(text: string, keyPrefix: string): { children: Span[]; markDefs: MarkDef[] } {
  const children: Span[] = [];
  const markDefs: MarkDef[] = [];
  const pattern = /\*\*([^*]+)\*\*|\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;
  let last = 0;
  let index = 0;
  for (const match of text.matchAll(pattern)) {
    const start = match.index ?? 0;
    if (start > last) {
      children.push({
        _type: "span",
        _key: `${keyPrefix}-t-${index}`,
        text: text.slice(last, start),
        marks: [],
      });
      index += 1;
    }
    if (match[1] != null) {
      children.push({
        _type: "span",
        _key: `${keyPrefix}-b-${index}`,
        text: match[1],
        marks: ["strong"],
      });
    } else {
      const linkKey = `${keyPrefix}-a-${index}`;
      markDefs.push({ _type: "link", _key: linkKey, href: match[2] ? match[3] : "" });
      children.push({
        _type: "span",
        _key: `${keyPrefix}-s-${index}`,
        text: match[2],
        marks: [linkKey],
      });
    }
    index += 1;
    last = start + match[0].length;
  }
  if (last < text.length || children.length === 0) {
    children.push({
      _type: "span",
      _key: `${keyPrefix}-t-${index}`,
      text: text.slice(last),
      marks: [],
    });
  }
  return { children, markDefs };
}

function loadArticleFile(filename: string): BlogArticleFile {
  const filePath = path.join(BLOG_DIR, filename);
  let article: BlogArticleFile;
  try {
    article = JSON.parse(fs.readFileSync(filePath, "utf8")) as BlogArticleFile;
  } catch (error) {
    throw new Error(`Článek ${filename} nejde načíst: ${(error as Error).message}`);
  }
  const missing = ["slug", "title", "excerpt", "publishedAt", "sections"].filter(
    (key) => article[key as keyof BlogArticleFile] == null,
  );
  if (missing.length || !/^\d{4}-\d{2}-\d{2}/.test(article.publishedAt ?? "")) {
    throw new Error(
      `Článek ${filename} nemá povinná pole slug, title, excerpt, publishedAt (RRRR-MM-DD) a sections.`,
    );
  }
  return article;
}

function toPortableText(article: BlogArticleFile): PortableBlock[] {
  return article.sections.flatMap((section, sectionIndex) => {
    const blocks: PortableBlock[] = [];
    if (section.heading) {
      blocks.push({
        _type: "block",
        _key: `h-${sectionIndex}`,
        style: "h2",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: `h-${sectionIndex}-text`,
            text: section.heading,
            marks: [],
          },
        ],
      });
    }
    (section.paragraphs ?? []).forEach((text, paragraphIndex) => {
      const { children, markDefs } = richText(text, `p-${sectionIndex}-${paragraphIndex}`);
      blocks.push({
        _type: "block",
        _key: `p-${sectionIndex}-${paragraphIndex}`,
        style: "normal",
        markDefs,
        children,
      });
    });
    (section.list ?? []).forEach((text, itemIndex) => {
      const { children, markDefs } = richText(text, `li-${sectionIndex}-${itemIndex}`);
      blocks.push({
        _type: "block",
        _key: `li-${sectionIndex}-${itemIndex}`,
        style: "normal",
        listItem: "bullet",
        level: 1,
        markDefs,
        children,
      });
    });
    return blocks;
  });
}

function readArticles() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((name) => name.endsWith(".json"))
    .map(loadArticleFile)
    .sort(
      (a, b) =>
        b.publishedAt.localeCompare(a.publishedAt) || (a.sort ?? 999) - (b.sort ?? 999),
    )
    .map((article) => ({
      ...article,
      _id: `editorial-${article.slug}`,
      author: "AIKONIC",
      tags: article.tags?.length ? article.tags : ["AI pro firmy"],
      seoTitle: article.title,
      seoDescription: article.excerpt,
      body: toPortableText(article),
    }));
}

export const editorialArticles = readArticles();

export function visibleEditorialArticles(today?: string) {
  return editorialArticles.filter((article) =>
    isArticlePublished(article.publishedAt, today),
  );
}

export const findEditorialArticle = (slug: string) =>
  editorialArticles.find((article) => article.slug === slug);

export function findVisibleEditorialArticle(slug: string) {
  const article = findEditorialArticle(slug);
  if (!article || !isArticlePublished(article.publishedAt)) return undefined;
  return article;
}
