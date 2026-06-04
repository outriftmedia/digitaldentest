import Link from "next/link";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArrowUpRight } from "lucide-react";
import ProgramCard from "@/components/programs/ProgramCard";
import { client } from "@/sanity/client";

type Status = "Open" | "Ongoing" | "Closed";
type Program = {
  code: string;
  title: string;
  desc: string;
  status: Status;
  region: string;
  cohorts: string;
  icon: string; // key for client-side icon map
  span?: string;
};

// Fallback data used if Sanity is unavailable
const FALLBACK_PROGRAMS: Program[] = [
  { code: "01", title: "Startup Readiness Program", desc: "Idea-to-investable journey for early-stage Balkan founders.", status: "Open", region: "Western Balkans", cohorts: "Cohort #6", icon: "Rocket", span: "md:col-span-2" },
  { code: "02", title: "MTSB Europe", desc: "Market-readiness and soft-landing in Benelux and broader EU.", status: "Open", region: "Benelux · EU", cohorts: "Cohort #3", icon: "Globe2" },
  { code: "03", title: "MTSB US Program", desc: "Soft-landing in Denver, Maine, Phoenix and partner US hubs.", status: "Ongoing", region: "USA", cohorts: "Cohort #2", icon: "Flag" },
  { code: "04", title: "Jordan", desc: "Cross-border collaboration with the Jordanian innovation ecosystem.", status: "Ongoing", region: "Jordan · MENA", cohorts: "Pilot", icon: "MapIcon" },
  { code: "05", title: "EU Projects", desc: "Co-funded initiatives across Western Balkans innovation programs.", status: "Closed", region: "EU", cohorts: "Archive", icon: "Building2" },
  { code: "06", title: "Local Projects", desc: "Community, education and ecosystem-building in Montenegro.", status: "Closed", region: "Montenegro", cohorts: "Archive", icon: "Users" },
];

const badge: Record<Status, string> = {
  Open: "bg-accent text-accent-foreground",
  Ongoing: "bg-foreground/10 text-foreground border border-border",
  Closed: "bg-transparent text-muted-foreground border border-border",
};

const dot: Record<Status, string> = {
  Open: "bg-accent shadow-[0_0_12px_var(--color-accent)]",
  Ongoing: "bg-foreground",
  Closed: "bg-muted-foreground/40",
};

// ProgramCard moved to a client component at src/components/programs/ProgramCard.tsx

export default async function ProgramsPage() {
  // Fetch programs from Sanity; keep fallback if anything goes wrong
  let programs: Program[] = FALLBACK_PROGRAMS;
  try {
    const data = await client.fetch(`*[_type == "program"] | order(order asc) { title, description, status, order }`);
    if (Array.isArray(data) && data.length > 0) {
      programs = data.map((d: any, idx: number) => ({
        code: d.order ? String(d.order).padStart(2, "0") : String(idx + 1).padStart(2, "0"),
        title: d.title || "Untitled program",
        desc: d.description || "",
        status: (d.status as Status) || "Closed",
        region: d.region || "TBD",
        cohorts: d.cohorts || "TBD",
        icon: d.iconKey || "Rocket",
      } as Program));
    }
  } catch (err) {
    // keep fallback
    console.warn("Failed to fetch programs from Sanity, using fallback", err);
  }

  const counts = {
    Open: programs.filter((p) => p.status === "Open").length,
    Ongoing: programs.filter((p) => p.status === "Ongoing").length,
    Closed: programs.filter((p) => p.status === "Closed").length,
  };

  return (
    <div className="min-h-screen bg-transparent text-foreground relative">
      <Nav />

      <section className="relative px-6 md:px-10 pt-40 pb-16 max-w-7xl mx-auto overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-gradient-primary opacity-5 pointer-events-none" />
        <div className="relative z-10">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6 block">Programs</span>
          <h1 className="text-5xl md:text-8xl font-display font-bold uppercase leading-[0.9] tracking-tighter mb-10">Build · Validate · Scale.</h1>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
            <Stat value={`${counts.Open}`} label="Open now" tone="accent" />
            <Stat value={`${counts.Ongoing}`} label="Ongoing" />
            <Stat value={`${counts.Closed}`} label="Archive" />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[280px] gap-4">
          {programs.map((p, i) => (
            <ProgramCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Stat({ value, label, tone }: { value: string; label: string; tone?: "accent" }) {
  return (
    <div className={`border-l-2 pl-4 ${tone === "accent" ? "border-accent" : "border-border"}`}>
      <div className="font-display text-4xl md:text-5xl font-bold tracking-tighter">{value}</div>
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{label}</div>
    </div>
  );
}
