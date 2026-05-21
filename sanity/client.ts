import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "0jkfefce",
  dataset: "production",
  apiVersion: "2026-01-01",
  useCdn: true,
});
