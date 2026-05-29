import { defineField, defineType, defineArrayMember } from "sanity";

export default defineType({
  name: "startup",
  title: "Portfolio Startups",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Startup Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "logo", title: "Logo", type: "image", options: { hotspot: true } }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block", styles: [{ title: "Normal", value: "normal" }], marks: { decorators: [{ title: "Bold", value: "strong" }, { title: "Italic", value: "em" }] } }],
    }),
    defineField({ name: "url", title: "External URL", type: "url" }),
    defineField({ name: "mtsb", title: "MTSB Program (e.g. MTSB I, MTSB IV)", type: "string" }),
    defineField({
      name: "teamMembers",
      title: "Team Members",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
            defineField({ name: "designation", title: "Designation / Role", type: "string" }),
            defineField({ name: "image", title: "Photo", type: "image", options: { hotspot: true } }),
          ],
          preview: { select: { title: "name", subtitle: "designation", media: "image" } },
        }),
      ],
    }),
    defineField({ name: "featured", title: "Show on homepage?", type: "boolean" }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
  preview: { select: { title: "name", subtitle: "stage", media: "coverImage" } },
});
