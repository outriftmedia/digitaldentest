import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Programs — Digital Den",
  description: "Active and previous programs: Startup Readiness, MTSB Europe, MTSB US, Jordan, EU and local projects.",
};

type Status = "Open" | "Ongoing" | "Closed";

const programs: { title: string; desc: string; status: Status }[] = [
  { title: "Startup Readiness Program", desc: "Idea-to-investable journey for early-stage Balkan founders.", status: "Open" },
  { title: "MTSB Europe", desc: "Market-readiness and soft-landing in Benelux and broader EU.", status: "Open" },
  { title: "MTSB US Program", desc: "Soft-landing in Denver, Maine, Phoenix and partner US hubs.", status: "Ongoing" },
  { title: "Jordan", desc: "Cross-border collaboration with the Jordanian innovation ecosystem.", status: "Ongoing" },
  { title: "EU Projects", desc: "Co-funded initiatives across Western Balkans innovation programs.", status: "Closed" },
  { title: "Local Projects", desc: "Community, education and ecosystem-building in Montenegro.", status: "Closed" },
];

const badge: Record<Status, string> = {
  Open: "bg-accent text-accent-foreground",
  Ongoing: "bg-foreground/10 text-foreground border border-border",
  Closed: "bg-transparent text-muted-foreground border border-border",
};

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <section className="px-6 md:px-10 pt-40 pb-16 max-w-7xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6 block">Programs</span>
        <h1 className="text-5xl md:text-8xl font-display font-bold uppercase leading-[0.9] tracking-tighter mb-10">
          Build · Validate · Scale.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
          One consistent structure across every Digital Den program — see what's open, what's ongoing, and what's already shipped.
        </p>
      </section>
      <section className="px-6 md:px-10 pb-24 max-w-7xl mx-auto">
        <div className="divide-y divide-border border-y border-border">
          {programs.map((p) => (
            <article key={p.title} className="grid grid-cols-12 gap-6 py-8 items-center group hover:bg-surface/60 px-2 -mx-2 transition-colors">
              <div className="col-span-12 md:col-span-2">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${badge[p.status]}`}>{p.status}</span>
              </div>
              <div className="col-span-12 md:col-span-7">
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
              <div className="col-span-12 md:col-span-3 flex md:justify-end">
                {p.status === "Open" ? (
                  <Link href="/apply" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-sm text-xs font-bold uppercase tracking-widest hover:-translate-y-0.5 transition-transform">
                    Apply <ArrowUpRight size={14} />
                  </Link>
                ) : (
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Details soon</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
