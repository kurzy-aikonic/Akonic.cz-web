import { defineArrayMember, defineType } from "sanity";

export const portableText = defineType({
  name: "portableText",
  title: "Obsah",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normální text", value: "normal" },
        { title: "Nadpis H2", value: "h2" },
        { title: "Nadpis H3", value: "h3" },
        { title: "Nadpis H4", value: "h4" },
        { title: "Citát", value: "blockquote" },
      ],
      lists: [
        { title: "Odrážkový seznam", value: "bullet" },
        { title: "Číslovaný seznam", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Tučné", value: "strong" },
          { title: "Kurzíva", value: "em" },
          { title: "Kód", value: "code" },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "Odkaz",
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
                validation: (rule) =>
                  rule.uri({ scheme: ["http", "https", "mailto", "tel"] }),
              },
              {
                name: "blank",
                type: "boolean",
                title: "Otevřít v novém okně",
                initialValue: false,
              },
            ],
          },
        ],
      },
    }),
  ],
});
