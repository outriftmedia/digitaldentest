import type { Metadata } from "next";
import { client } from "@/sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { EventsClient } from "./EventsClient";

export const metadata: Metadata = {
  title: "Events — Digital Den",
  description: "Past events, roundtables and upcoming gatherings from the Digital Den ecosystem.",
};

const builder = createImageUrlBuilder({ projectId: "0jkfefce", dataset: "production" });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function urlFor(source: any) {
  return builder.image(source).auto("format").url();
}

export type Event = {
  _id: string;
  title: string;
  description?: any[];
  date: string;
  category: "Digital Den Connects" | "Others" | "Upcoming";
  vertical?: string;
  location?: string;
  imageUrl?: string;
};

const FALLBACK_EVENTS: Event[] = [
  { _id: "p1", title: "Digital Den Summit 2024", date: "Oct 2024", category: "Digital Den Connects" },
  { _id: "p2", title: "MTSB US Launch", date: "Jun 2024", category: "Digital Den Connects" },
  { _id: "p3", title: "Startup Readiness Demo Day", date: "Mar 2024", category: "Digital Den Connects" },
  { _id: "r1", title: "Fintech Roundtable", date: "", category: "Others", vertical: "Fintech" },
  { _id: "r2", title: "HealthTech Roundtable", date: "", category: "Others", vertical: "HealthTech" },
  { _id: "r3", title: "Hospitality Roundtable", date: "", category: "Others", vertical: "Hospitality" },
  { _id: "u1", title: "Digital Den Summit 2026", date: "Coming end of 2026", category: "Upcoming" },
];

async function getEvents(): Promise<Event[]> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = await client.fetch<any[]>(
      `*[_type == "event"] | order(date desc) { _id, title, description, date, category, vertical, location, image }`
    );
    if (data.length === 0) return FALLBACK_EVENTS;
    return data.map((e) => ({
      _id: e._id,
      title: e.title,
      description: e.description ?? undefined,
      date: e.date,
      category: e.category,
      vertical: e.vertical,
      location: e.location,
      imageUrl: e.image ? urlFor(e.image) : undefined,
    }));
  } catch {
    return FALLBACK_EVENTS;
  }
}

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <EventsClient events={events} />
      <Footer />
    </div>
  );
}
