import articles from "./editorial-articles.json";
export const editorialArticles = articles.map((article) => ({
  ...article,
  _id: `editorial-${article.slug}`,
  author: "AIKONIC",
  tags: ["AI pro firmy"],
  seoTitle: article.title,
  seoDescription: article.excerpt,
  body: article.sections.flatMap((section, i) => [
    {
      _type: "block",
      _key: `h-${i}`,
      style: "h2",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: `h-${i}-text`,
          text: section.heading,
          marks: [],
        },
      ],
    },
    ...section.paragraphs.map((text, j) => ({
      _type: "block",
      _key: `p-${i}-${j}`,
      style: "normal",
      markDefs: [],
      children: [{ _type: "span", _key: `p-${i}-${j}-text`, text, marks: [] }],
    })),
  ]),
}));
export const findEditorialArticle = (slug: string) =>
  editorialArticles.find((article) => article.slug === slug);
