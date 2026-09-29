"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "Sumun Latam",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Contenido")
          .items([
            S.listItem()
              .title("Home")
              .id("home")
              .child(
                S.document().schemaType("home").documentId("home").title("Home"),
              ),
            S.divider(),
            ...S.documentTypeListItems().filter((item) => item.getId() !== "home"),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
