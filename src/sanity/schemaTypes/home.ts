import { defineArrayMember, defineField, defineType } from "sanity";

const richText = {
  type: "array" as const,
  of: [
    defineArrayMember({
      type: "block",
      styles: [{ title: "Normal", value: "normal" }],
      lists: [],
      marks: {
        decorators: [{ title: "Negrita", value: "strong" }],
        annotations: [],
      },
    }),
  ],
};

export const home = defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    defineField({
      name: "banner",
      title: "Banner",
      description: "Cada ítem es un slide. Se muestran en este orden.",
      type: "array",
      of: [
        defineArrayMember({
          name: "bannerSlide",
          title: "Slide",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Título",
              description: "Usá negrita para la frase destacada.",
              ...richText,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "text",
              title: "Texto",
              description: "Usá negrita en las palabras que van en bold.",
              ...richText,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "buttonLabel",
              title: "Texto del botón",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "buttonHref",
              title: "Enlace del botón",
              type: "string",
            }),
            defineField({
              name: "image",
              title: "Imagen",
              type: "image",
              options: { hotspot: true },
              fields: [
                defineField({
                  name: "alt",
                  title: "Texto alternativo",
                  type: "string",
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: "buttonLabel",
              media: "image",
            },
            prepare({ title, media }) {
              return {
                title: title || "Slide",
                media,
              };
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Home",
        subtitle: "Banner y contenido de la portada",
      };
    },
  },
});
