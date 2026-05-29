import { defineField, defineType } from "sanity";

export default defineType({
  name: "partner",
  title: "Partners",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Partner Name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      description: "Upload the partner logo (white/transparent version recommended for dark backgrounds).",
    }),
    defineField({ name: "url", title: "Website URL", type: "url" }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["Local", "Regional", "International"] },
      validation: (r) => r.required(),
    }),
    defineField({ name: "order", title: "Display Order", type: "number", description: "Lower numbers appear first." }),
  ],
  orderings: [
    { title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "name", subtitle: "category", media: "logo" },
  },
});
