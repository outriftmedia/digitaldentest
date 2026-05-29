import { defineField, defineType } from "sanity";

export default defineType({
  name: "person",
  title: "People",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Full Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "designation", title: "Designation / Role", type: "string" }),
    defineField({ name: "photo", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "linkedin", title: "LinkedIn URL", type: "url" }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: { list: ["DD Team", "Advisory Board"] },
      validation: (r) => r.required(),
    }),
    defineField({ name: "description", title: "Bio / Description", type: "text", rows: 3, description: "Used for Advisory Board members." }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  preview: { select: { title: "name", subtitle: "designation", media: "photo" } },
});
