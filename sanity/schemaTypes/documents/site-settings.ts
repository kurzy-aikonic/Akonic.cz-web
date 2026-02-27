import { defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Nastavení webu",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "siteName",
      title: "Název webu",
      type: "string",
      initialValue: "AIKONIC",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "siteDescription",
      title: "Popis webu (SEO)",
      type: "text",
      rows: 2,
      validation: (rule) => rule.max(160),
    }),
    defineField({
      name: "contactEmail",
      title: "Kontaktní e-mail",
      type: "string",
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: "contactPhone",
      title: "Telefon",
      type: "string",
    }),
    defineField({
      name: "socialLinks",
      title: "Sociální sítě",
      type: "object",
      fields: [
        defineField({ name: "linkedin", title: "LinkedIn URL", type: "url" }),
        defineField({ name: "instagram", title: "Instagram URL", type: "url" }),
        defineField({ name: "facebook", title: "Facebook URL", type: "url" }),
        defineField({ name: "youtube", title: "YouTube URL", type: "url" }),
      ],
    }),
    defineField({
      name: "footerTagline",
      title: "Tagline v patičce",
      type: "string",
      initialValue: "Pomáháme firmám zavádět AI do praxe.",
    }),
    defineField({
      name: "cookieConsentText",
      title: "Text cookie lišty",
      type: "text",
      rows: 2,
    }),
  ],
  preview: {
    prepare() {
      return { title: "Nastavení webu" };
    },
  },
});
