"use client";
import { motion } from "motion/react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

const startups = [
  { name: "Benefiti", desc: "B2B benefits and rewards platform.", team: "5", stage: "Scale", url: "https://digitalden.me/startup/43" },
  { name: "YachtHe", desc: "Yacht charter marketplace.", team: "4", stage: "Validate", url: "https://digitalden.me/startup/42" },
  { name: "WhereToPark", desc: "Smart parking discovery for cities.", team: "3", stage: "Build", url: "https://digitalden.me/startup/41" },
  { name: "SanyView", desc: "Tourism intelligence platform.", team: "4", stage: "Validate", url: "https://digitalden.me/startup/40" },
  { name: "Pet Travel Advisor", desc: "Travel planning for pet owners.", team: "2", stage: "Build", url: "https://digitalden.me/startup/39" },
  { name: "Dr. Knight", desc: "Healthtech, WIPO Award winner.", team: "6", stage: "Global", url: "https://digitalden.me/startup/39" },
];

const stageColor: Record<string, string> = {
  Idea: "text-muted-foreground",
  Build: "text-accent",
  Validate: "text-accent",
  Scale: "text-accent",
  Global: "text-accent",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <section className="px-6 md:px-10 pt-40 pb-16 max-w-7xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6 block">Portfolio</span>
        <h1 className="text-5xl md:text-8xl font-display font-bold uppercase leading-[0.9] tracking-tighter mb-10">
          Startups<br />we back.
        </h1>
      </section>
      <section className="px-6 md:px-10 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {startups.map((s, i) => (
            <motion.a key={s.name} href={s.url} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group glass-card p-8 flex flex-col justify-between min-h-[260px] hover:border-accent/60 hover:-translate-y-1 transition-all duration-500">
              <div className="flex items-start justify-between mb-6">
                <div className="size-12 rounded-lg bg-gradient-primary grid place-items-center text-lg font-display font-bold">
                  {s.name[0]}
                </div>
                <ArrowUpRight size={18} className="text-accent group-hover:rotate-45 transition-transform" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold uppercase mb-1">{s.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                <div className="flex gap-4 text-[10px] uppercase tracking-widest font-mono">
                  <span className="text-muted-foreground">Team · {s.team}</span>
                  <span className={stageColor[s.stage] ?? "text-muted-foreground"}>Stage · {s.stage}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
