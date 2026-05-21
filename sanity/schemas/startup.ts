import { defineField, defineType } from "sanity";

export default defineType({
  name: "startup",
  title: "Portfolio Startups",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Startup Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "string", validation: (r) => r.required() }),
    defineField({ name: "team", title: "Team Size", type: "string" }),
    defineField({
      name: "stage", title: "Stage", type: "string",
      options: { list: ["Idea", "Build", "Validate", "Scale", "Global"] },
    }),
    defineField({ name: "url", title: "External URL", type: "url" }),
    defineField({ name: "featured", title: "Show on homepage?", type: "boolean" }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
});
