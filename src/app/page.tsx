import { client } from "@/sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import type { PortableTextBlock } from "@sanity/types";
import { HomeClient, type FeaturedStartup, type LandingAboutData } from "./HomeClient";

const imgBuilder = createImageUrlBuilder({ projectId: "0jkfefce", dataset: "production" });

function urlFor(source: SanityImageSource) {
  return imgBuilder.image(source).auto("format").url();
}

type FeaturedStartupDoc = {
  _id: string;
  name: string;
  mtsb?: string;
  url?: string;
  logo?: SanityImageSource;
};

type PersonDoc = {
  _id: string;
  name: string;
  designation?: string;
  linkedin?: string;
  photo?: SanityImageSource;
  type?: string;
};

type AboutDoc = {
  definition?: PortableTextBlock[];
  image?: SanityImageSource;
};

function mapStartup(startup: FeaturedStartupDoc): FeaturedStartup {
  return {
    _id: startup._id,
    name: startup.name,
    mtsb: startup.mtsb,
    url: startup.url,
    logoUrl: startup.logo ? urlFor(startup.logo) : undefined,
  };
}

async function getFeaturedStartups(): Promise<FeaturedStartup[]> {
  const projection = `{ _id, name, mtsb, url, logo }`;
  const featured = await client.fetch<FeaturedStartupDoc[]>(
    `*[_type == "startup" && featured == true] | order(order asc, name asc)[0...4] ${projection}`
  );

  if (featured.length > 0) {
    return featured.map(mapStartup);
  }

  const startups = await client.fetch<FeaturedStartupDoc[]>(
    `*[_type == "startup"] | order(order asc, name asc)[0...4] ${projection}`
  );

  return startups.map(mapStartup);
}

async function getAboutData(): Promise<LandingAboutData> {
  const [aboutDoc, people] = await Promise.all([
    client.fetch<AboutDoc | null>(`*[_type == "about"][0]{ definition, image }`),
    client.fetch<PersonDoc[]>(`*[_type == "person"] | order(order asc, name asc){ _id, name, designation, linkedin, photo, type }`),
  ]);

  return {
    definition: aboutDoc?.definition,
    imageUrl: aboutDoc?.image ? urlFor(aboutDoc.image) : undefined,
    ddTeam: people
      .filter((person) => person.type === "DD Team")
      .map((person) => ({
        _id: person._id,
        name: person.name,
        designation: person.designation,
        linkedin: person.linkedin,
        photoUrl: person.photo ? urlFor(person.photo) : undefined,
      })),
  };
}

async function getLandingData() {
  try {
    const [featuredStartups, aboutData] = await Promise.all([
      getFeaturedStartups(),
      getAboutData(),
    ]);

    return { featuredStartups, aboutData };
  } catch {
    return {
      featuredStartups: [],
      aboutData: { ddTeam: [] },
    };
  }
}

export default async function Home() {
  const { featuredStartups, aboutData } = await getLandingData();

  return <HomeClient featuredStartups={featuredStartups} aboutData={aboutData} />;
}
