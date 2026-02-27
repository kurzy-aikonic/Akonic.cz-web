import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

export default defineConfig({
  name: "aikonic",
  title: "AIKONIC — Správa obsahu",
  basePath: "/studio",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "960ksck8",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: "2025-02-01" }),
  ],

  schema: {
    types: schemaTypes,
  },
});
