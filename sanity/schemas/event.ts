import { defineField, defineType } from "sanity";

export default defineType({
  name: "event",
  title: "Events",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Event Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block", styles: [{ title: "Normal", value: "normal" }], marks: { decorators: [{ title: "Bold", value: "strong" }, { title: "Italic", value: "em" }] } }],
    }),
    defineField({ name: "date", title: "Date", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "image",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      description: "Event photo or banner image.",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["Digital Den Connects", "Others", "Upcoming"] },
      validation: (r) => r.required(),
    }),
    defineField({ name: "vertical", title: "Vertical (for roundtables)", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
  ],
  preview: {
    select: { title: "title", subtitle: "date", media: "image" },
  },
});
