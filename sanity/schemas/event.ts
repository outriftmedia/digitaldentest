import { defineField, defineType } from "sanity";

export default defineType({
  name: "event",
  title: "Events",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Event Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "string" }),
    defineField({ name: "date", title: "Date", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "category", title: "Category", type: "string",
      options: { list: ["Past", "Roundtables", "Upcoming"] },
      validation: (r) => r.required(),
    }),
    defineField({ name: "vertical", title: "Vertical (for roundtables)", type: "string" }),
  ],
});
