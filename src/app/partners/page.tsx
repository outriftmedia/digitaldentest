import type { Metadata } from "next";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Partners — Digital Den",
  description: "Local, regional and international partners powering the Digital Den ecosystem.",
};

const groups: { title: string; partners: { name: string; url: string }[] }[] = [
  {
    title: "Local",
    partners: [
      { name: "EPIcentar", url: "#" },
      { name: "UN1QUELY", url: "#" },
      { name: "Amplitudo", url: "#" },
      { name: "NTP Crne Gore", url: "#" },
      { name: "Univerzitet Donja Gorica", url: "#" },
      { name: "Tehnopolis", url: "#" },
    ],
  },
  {
    title: "Regional",
    partners: [
      { name: "Foundation 787", url: "#" },
      { name: "Founder Institute Serbia", url: "#" },
      { name: "Western Balkans Startup Alliance", url: "#" },
      { name: "Impact Foundation", url: "#" },
      { name: "Comeunity Incubator", url: "#" },
      { name: "EIT RIS Hub Montenegro", url: "#" },
    ],
  },
  {
    title: "International",
    partners: [
      { name: "Maine Center for Entrepreneurs", url: "#" },
      { name: "Denver Economic Development", url: "#" },
      { name: "University of Denver", url: "#" },
      { name: "University of Maine", url: "#" },
      { name: "CU Boulder", url: "#" },
      { name: "Thunderbird ASU", url: "#" },
      { name: "Roux Institute", url: "#" },
      { name: "Maine Technology Institute", url: "#" },
      { name: "Greater Phoenix Economic Council", url: "#" },
      { name: "Mediatech Ventures", url: "#" },
      { name: "Vigan Group", url: "#" },
      { name: "Arizona State University", url: "#" },
      { name: "PwC", url: "#" },
    ],
  },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <section className="px-6 md:px-10 pt-40 pb-16 max-w-7xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6 block">Partners</span>
        <h1 className="text-5xl md:text-8xl font-display font-bold uppercase leading-[0.9] tracking-tighter mb-10">
          A network<br />without borders.
        </h1>
      </section>
      <section className="px-6 md:px-10 pb-24 max-w-7xl mx-auto space-y-20">
        {groups.map((g) => (
          <div key={g.title}>
            <div className="flex items-baseline gap-4 mb-8">
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase">{g.title}</h2>
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{g.partners.length} partners</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {g.partners.map((p) => (
                <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="group glass-card p-6 min-h-[120px] flex items-center justify-between hover:border-accent/60 hover:-translate-y-1 transition-all">
                  <span className="font-display font-bold uppercase text-sm md:text-base leading-tight">{p.name}</span>
                  <ArrowUpRight size={16} className="text-accent group-hover:rotate-45 transition-transform shrink-0 ml-3" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}
