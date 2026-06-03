import type { Metadata } from "next";
import { client } from "@/sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import type { PortableTextBlock } from "@sanity/types";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About — Digital Den",
  description: "Meet the team behind Digital Den — the venture studio launching Balkan startups into global markets.",
};

const builder = createImageUrlBuilder({ projectId: "0jkfefce", dataset: "production" });
function urlFor(source: SanityImageSource): string {
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
  definition?: PortableTextBlock[];
  imageUrl?: string;
  ddTeam: Person[];
};

type AboutDoc = {
  definition?: PortableTextBlock[];
  image?: SanityImageSource;
};

type PersonDoc = {
  _id: string;
  name: string;
  designation?: string;
  description?: string;
  linkedin?: string;
  photo?: SanityImageSource;
  type?: string;
};

async function getAboutData(): Promise<AboutData> {
  try {
    const [aboutDoc, people] = await Promise.all([
      client.fetch<AboutDoc | null>(`*[_type == "about"][0]{ definition, image }`),
      client.fetch<PersonDoc[]>(`*[_type == "person"] | order(order asc, name asc){ _id, name, designation, description, linkedin, photo, type }`),
    ]);

    return {
      definition: aboutDoc?.definition,
      imageUrl: aboutDoc?.image ? urlFor(aboutDoc.image) : undefined,
      ddTeam: people
        .filter((p) => p.type === "DD Team")
        .map((p) => ({ _id: p._id, name: p.name, designation: p.designation, description: p.description, linkedin: p.linkedin, photoUrl: p.photo ? urlFor(p.photo) : undefined })),
    };
  } catch {
    return { ddTeam: [] };
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
