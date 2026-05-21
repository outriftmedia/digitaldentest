import { defineField, defineType } from "sanity";

export default defineType({
  name: "partner",
  title: "Partners",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Partner Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "url", title: "Website URL", type: "url" }),
    defineField({
      name: "category", title: "Category", type: "string",
      options: { list: ["Local", "Regional", "International"] },
      validation: (r) => r.required(),
    }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
});
