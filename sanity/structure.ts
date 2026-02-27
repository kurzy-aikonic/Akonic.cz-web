import type { StructureResolver } from "sanity/structure";
import { EnvelopeIcon, CogIcon } from "@sanity/icons";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("AIKONIC — Obsah")
    .items([
      // Newsletter
      S.listItem()
        .title("Newslettery")
        .icon(EnvelopeIcon)
        .child(
          S.documentTypeList("newsletter")
            .title("Vydání newsletteru")
            .defaultOrdering([{ field: "publishedAt", direction: "desc" }])
        ),

      S.divider(),

      // Singleton: Nastavení webu
      S.listItem()
        .title("Nastavení webu")
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("Nastavení webu")
        ),
    ]);
