import { defineField, defineType } from "sanity";
import { EnvelopeIcon } from "@sanity/icons";

export const newsletter = defineType({
  name: "newsletter",
  title: "Newsletter",
  type: "document",
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: "title",
      title: "Název vydání",
      type: "string",
      validation: (rule) => rule.required().min(3).max(100),
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Datum vydání",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Krátký popis (pro přehled)",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: "coverImage",
      title: "Titulní obrázek",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternativní text",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: "body",
      title: "Obsah",
      type: "portableText",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Štítky",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
        list: [
          { title: "AI novinky", value: "ai-novinky" },
          { title: "Tipy a triky", value: "tipy" },
          { title: "Případové studie", value: "pripadove-studie" },
          { title: "Nástroje", value: "nastroje" },
          { title: "Školení", value: "skoleni" },
        ],
      },
    }),
    defineField({
      name: "seoTitle",
      title: "SEO titulek",
      type: "string",
      description: "Pokud nevyplníte, použije se název vydání.",
      group: "seo",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO popis",
      type: "text",
      rows: 2,
      description: "Pokud nevyplníte, použije se krátký popis.",
      validation: (rule) => rule.max(160),
      group: "seo",
    }),
  ],
  groups: [
    { name: "seo", title: "SEO" },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "publishedAt",
      media: "coverImage",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle
          ? new Date(subtitle).toLocaleDateString("cs-CZ", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
          : "Bez data",
        media,
      };
    },
  },
});
