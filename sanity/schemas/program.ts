import { defineField, defineType } from "sanity";

export default defineType({
  name: "program",
  title: "Programs",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Program Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "status", title: "Status", type: "string",
      options: { list: ["Open", "Ongoing", "Closed"] },
      validation: (r) => r.required(),
    }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
});
