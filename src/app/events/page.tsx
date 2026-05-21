"use client";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Calendar, Users } from "lucide-react";

const past = [
  { title: "Digital Den Summit 2024", date: "Oct 2024", desc: "Annual gathering of founders, partners and investors in Podgorica." },
  { title: "MTSB US Launch", date: "Jun 2024", desc: "Inaugural cohort launch in Denver with US ecosystem partners." },
  { title: "Startup Readiness Demo Day", date: "Mar 2024", desc: "Top cohort startups pitched to a regional investor panel." },
];

const roundtables = [
  { vertical: "Fintech", desc: "Quarterly closed-door sessions for founders and operators in fintech." },
  { vertical: "HealthTech", desc: "Mini community connecting healthtech founders with clinicians and regulators." },
  { vertical: "Hospitality", desc: "Travel and hospitality founders sharing operational learnings." },
];

const upcoming = [
  { title: "Digital Den Summit 2026", date: "Coming end of 2026", desc: "Our flagship event returns — preparations are underway." },
];

const tabs = ["Past", "Roundtables", "Upcoming"] as const;
type Tab = (typeof tabs)[number];

export default function EventsPage() {
  const [tab, setTab] = useState<Tab>("Past");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <section className="px-6 md:px-10 pt-40 pb-12 max-w-7xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6 block">Events</span>
        <h1 className="text-5xl md:text-8xl font-display font-bold uppercase leading-[0.9] tracking-tighter mb-10">
          Where the<br />ecosystem meets.
        </h1>
        <div className="flex flex-wrap gap-2 border-b border-border">
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`px-5 py-3 text-xs font-bold uppercase tracking-widest transition-colors border-b-2 -mb-px ${tab === t ? "border-accent text-accent" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
              {t}
            </button>
          ))}
        </div>
      </section>
      <section className="px-6 md:px-10 pb-24 max-w-7xl mx-auto">
        {tab === "Past" && (
          <div className="grid md:grid-cols-3 gap-4">
            {past.map((e) => (
              <article key={e.title} className="glass-card p-8 hover:border-accent/40 transition-colors">
                <Calendar size={20} className="text-accent mb-6" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{e.date}</span>
                <h3 className="font-display text-xl font-bold mt-2 mb-2">{e.title}</h3>
                <p className="text-sm text-muted-foreground">{e.desc}</p>
              </article>
            ))}
          </div>
        )}
        {tab === "Roundtables" && (
          <div className="grid md:grid-cols-3 gap-4">
            {roundtables.map((r) => (
              <article key={r.vertical} className="glass-card p-8 hover:border-accent/40 transition-colors">
                <Users size={22} className="text-accent mb-6" />
                <h3 className="font-display text-2xl font-bold uppercase mb-2">{r.vertical}</h3>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </article>
            ))}
          </div>
        )}
        {tab === "Upcoming" && (
          <div className="grid md:grid-cols-2 gap-4">
            {upcoming.map((e) => (
              <article key={e.title} className="glass-card p-10 hover:border-accent/40 transition-colors">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">{e.date}</span>
                <h3 className="font-display text-3xl font-bold mt-3 mb-3">{e.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{e.desc}</p>
              </article>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}
