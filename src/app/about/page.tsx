import type { Metadata } from "next";
import { client } from "@/sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About — Digital Den",
  description: "Meet the team behind Digital Den — the venture studio launching Balkan startups into global markets.",
};

const builder = createImageUrlBuilder({ projectId: "0jkfefce", dataset: "production" });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function urlFor(source: any): string {
  return builder.image(source).auto("format").url();
}

export type Person = {
  _id: string;
  name: string;
  designation?: string;
  description?: string;
  linkedin?: string;
  photoUrl?: string;
};

export type AboutData = {
  definition?: any[];
  imageUrl?: string;
  ddTeam: Person[];
  advisoryBoard: Person[];
};

async function getAboutData(): Promise<AboutData> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [aboutDoc, people] = await Promise.all([
      client.fetch<any>(`*[_type == "about"][0]{ definition, image }`),
      client.fetch<any[]>(`*[_type == "person"] | order(order asc, name asc){ _id, name, designation, description, linkedin, photo, type }`),
    ]);

    return {
      definition: aboutDoc?.definition,
      imageUrl: aboutDoc?.image ? urlFor(aboutDoc.image) : undefined,
      ddTeam: people
        .filter((p) => p.type === "DD Team")
        .map((p) => ({ _id: p._id, name: p.name, designation: p.designation, description: p.description, linkedin: p.linkedin, photoUrl: p.photo ? urlFor(p.photo) : undefined })),
      advisoryBoard: people
        .filter((p) => p.type === "Advisory Board")
        .map((p) => ({ _id: p._id, name: p.name, designation: p.designation, description: p.description, linkedin: p.linkedin, photoUrl: p.photo ? urlFor(p.photo) : undefined })),
    };
  } catch {
    return { ddTeam: [], advisoryBoard: [] };
  }
}

export default async function AboutPage() {
  const data = await getAboutData();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <AboutClient data={data} />
      <Footer />
    </div>
  );
}
