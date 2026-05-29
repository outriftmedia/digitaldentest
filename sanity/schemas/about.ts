import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "definition",
      title: "Definition / About Text",
      type: "array",
      of: [{ type: "block", styles: [{ title: "Normal", value: "normal" }], marks: { decorators: [{ title: "Bold", value: "strong" }, { title: "Italic", value: "em" }] } }],
    }),
    defineField({ name: "image", title: "About Image", type: "image", options: { hotspot: true } }),
  ],
  preview: { prepare: () => ({ title: "About Page Content" }) },
});
