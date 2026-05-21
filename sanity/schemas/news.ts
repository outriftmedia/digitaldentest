import { defineField, defineType } from "sanity";

export default defineType({
  name: "news",
  title: "News",
  type: "document",
  fields: [
    defineField({ name: "title", title: "News Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "date", title: "Date", type: "string", validation: (r) => r.required() }),
    defineField({ name: "url", title: "Link (optional)", type: "url" }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
});
