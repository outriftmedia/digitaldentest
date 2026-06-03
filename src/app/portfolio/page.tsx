import type { Metadata } from "next";
import { client } from "@/sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PortfolioClient } from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio — Digital Den Startups",
  description: "Startups from the Digital Den network — from validation to global scale.",
};

const builder = createImageUrlBuilder({ projectId: "0jkfefce", dataset: "production" });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function urlFor(source: any): string {
  return builder.image(source).auto("format").url();
}

export type TeamMember = {
  name: string;
  designation?: string;
  imageUrl?: string;
};

export type Startup = {
  _id: string;
  name: string;
  teamSize?: number;
  url?: string;
  mtsb?: string;
  description?: any[];
  coverImageUrl?: string;
  logoUrl?: string;
  teamMembers?: TeamMember[];
};

async function getStartups(): Promise<Startup[]> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = await client.fetch<any[]>(
      `*[_type == "startup"] | order(order asc, name asc) {
        _id, name, url, mtsb, description,
        coverImage, logo,
        teamMembers[]{ name, designation, image },
        "teamSize": count(teamMembers)
      }`
    );
    return data.map((s) => ({
      _id: s._id,
      name: s.name,
      teamSize: s.teamSize ?? undefined,
      url: s.url,
      mtsb: s.mtsb,
      description: s.description,
      coverImageUrl: s.coverImage ? urlFor(s.coverImage) : undefined,
      logoUrl: s.logo ? urlFor(s.logo) : undefined,
      teamMembers: s.teamMembers?.map((m: any) => ({
        name: m.name,
        designation: m.designation,
        imageUrl: m.image ? urlFor(m.image) : undefined,
      })),
    }));
  } catch {
    return [];
  }
}

export default async function PortfolioPage() {
  const startups = await getStartups();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <PortfolioClient startups={startups} />
      <Footer />
    </div>
  );
}
