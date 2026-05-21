"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Rocket, Layers, Globe2, TrendingUp, Lightbulb, Hammer, CheckCircle2, BarChart3, Plane } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { HeroScene } from "@/components/site/HeroScene";

const blocks = [
  { icon: Layers, title: "Venture Building", desc: "From idea to launch — we build alongside founders.", to: "/platform", soon: false },
  { icon: Rocket, title: "Our Programs", desc: "Acceleration tracks across Balkans, Europe and the US.", to: "/programs", soon: false },
  { icon: Globe2, title: "Global Network", desc: "Partners across 4 continents opening real doors.", to: "/partners", soon: false },
  { icon: TrendingUp, title: "VC", desc: "Coming soon — a fund built for ambitious founders.", to: "/platform", soon: true },
] as const;

const journey = [
  { icon: Lightbulb, label: "Idea" },
  { icon: Hammer, label: "Build" },
  { icon: CheckCircle2, label: "Validate" },
  { icon: BarChart3, label: "Scale" },
  { icon: Plane, label: "Global" },
] as const;

const featuredStartups = [
  { name: "Benefiti", desc: "B2B benefits platform", id: 43 },
  { name: "YachtHe", desc: "Yacht charter marketplace", id: 42 },
  { name: "WhereToPark", desc: "Smart parking discovery", id: 41 },
  { name: "Dr. Knight", desc: "Healthtech / WIPO Award winner", id: 39 },
];

const news = [
  { date: "30 Nov 2025", title: "Dr. Knight received the WIPO Award" },
  { date: "16 Nov 2025", title: "Launch of the Partners in Transformation Desk Western Balkans" },
  { date: "22 Oct 2025", title: "Digital Den at Luxembourg Venture Days" },
];

const regions = [
  { name: "Western Balkans", x: "52%", y: "40%" },
  { name: "Benelux", x: "48%", y: "32%" },
  { name: "Jordan", x: "58%", y: "48%" },
  { name: "USA", x: "22%", y: "40%" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-28 pb-16 overflow-hidden">
        <div className="absolute top-1/4 -right-20 size-[500px] md:size-[700px] bg-accent/25 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 -left-32 size-[400px] bg-primary/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 md:left-1/2 opacity-40 md:opacity-100">
          <HeroScene />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full pointer-events-none [&_a]:pointer-events-auto [&_button]:pointer-events-auto">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
            — Startup launch platform · venture studio
          </motion.p>
          <h1 className="text-[13vw] md:text-[9.5vw] leading-[0.88] font-display font-bold uppercase tracking-tighter mb-10 max-w-5xl">
            {["Your Gateway", "to Global", "Markets."].map((word, i) => (
              <span key={word} className="block overflow-hidden">
                <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }} className={`inline-block ${i === 1 ? "text-stroke-accent" : ""}`}>
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }} className="flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-5xl">
            <p className="text-lg md:text-2xl text-muted-foreground max-w-xl leading-relaxed">
              We support startups from idea to international scale — through programs, capital and a network spanning four continents.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/apply" className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-6 py-4 font-bold uppercase tracking-wider rounded-sm hover:-translate-y-1 transition-transform text-sm">
                Apply as Startup <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
              </Link>
              <Link href="/apply" className="group inline-flex items-center gap-3 border border-foreground/30 px-6 py-4 font-bold uppercase tracking-wider rounded-sm hover:border-accent hover:text-accent transition-colors text-sm">
                Partner with Us <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 overflow-hidden border-y border-white/5 py-4">
          <div className="animate-marquee items-center gap-12">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex items-center gap-12 pr-12">
                {["Idea", "Build", "Validate", "Scale", "Global", "Capital", "Network"].map((w) => (
                  <span key={w + k} className="flex items-center gap-12 text-3xl md:text-4xl font-display font-bold opacity-20 uppercase whitespace-nowrap">
                    {w}<span className="size-2 bg-accent rounded-full" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS DIGITAL DEN */}
      <section className="px-6 md:px-10 py-32 max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4 block">— 01 / What is Digital Den</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold uppercase leading-[0.95] max-w-3xl">A launch platform for ambitious founders.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {blocks.map((b, i) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: i * 0.08 }}>
              <Link href={b.to} className="group glass-card p-8 h-full flex flex-col justify-between hover:border-accent/60 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden block">
                {b.soon && <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest text-accent bg-accent/10 px-2 py-1 rounded-full">Soon</span>}
                <b.icon size={32} className="text-accent mb-12" />
                <div>
                  <h3 className="font-display text-xl font-bold uppercase mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{b.desc}</p>
                  <ArrowUpRight size={18} className="text-accent group-hover:rotate-45 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STARTUP JOURNEY */}
      <section className="px-6 md:px-10 py-32 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4 block">— 02 / Startup Journey</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase">From idea<br />to global.</h2>
          </div>
          <div className="relative grid grid-cols-2 md:grid-cols-5 gap-6 mb-20">
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            {journey.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative flex flex-col items-center text-center">
                <div className="size-16 rounded-full bg-background border border-accent/40 grid place-items-center mb-4 relative z-10">
                  <s.icon size={22} className="text-accent" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">0{i + 1}</span>
                <span className="font-display text-lg md:text-xl font-bold uppercase">{s.label}</span>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between items-end mb-10">
            <h3 className="text-2xl md:text-3xl font-display font-bold uppercase">Featured startups</h3>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-accent pb-1 text-accent hover:gap-4 transition-all">
              See more <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredStartups.map((s, i) => (
              <motion.a key={s.name} href={`https://digitalden.me/startup/${s.id}`} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="group glass-card p-6 aspect-square flex flex-col justify-between hover:bg-accent hover:text-accent-foreground transition-all duration-500">
                <span className="font-mono text-[10px] opacity-60">0{i + 1}</span>
                <div>
                  <h4 className="font-display text-lg font-bold uppercase">{s.name}</h4>
                  <p className="text-xs opacity-70 mt-1">{s.desc}</p>
                  <ArrowUpRight size={16} className="mt-3 group-hover:rotate-45 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="px-6 md:px-10 py-32 max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4 block">— 03 / Global Presence</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold uppercase">Operating<br />worldwide.</h2>
        </div>
        <div className="relative aspect-[2/1] rounded-2xl overflow-hidden border border-border bg-surface">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(167,139,250,0.4) 1px, transparent 0)", backgroundSize: "20px 20px" }} />
          </div>
          {regions.map((r, i) => (
            <motion.div key={r.name} initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: r.x, top: r.y }}>
              <div className="relative">
                <div className="size-3 rounded-full bg-accent" />
                <div className="absolute inset-0 size-3 rounded-full bg-accent animate-ping" />
                <span className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-mono uppercase tracking-widest bg-background/80 backdrop-blur px-2 py-1 rounded">{r.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEWS */}
      <section className="px-6 md:px-10 py-32 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4 block">— 04 / News</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase">Latest<br />updates.</h2>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {news.map((item, i) => (
              <motion.article key={item.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="grid grid-cols-12 gap-6 py-8 group hover:bg-background/40 transition-colors px-2 -mx-2">
                <div className="col-span-12 md:col-span-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">{item.date}</div>
                <div className="col-span-12 md:col-span-9">
                  <h3 className="text-xl md:text-2xl font-display font-bold group-hover:text-accent transition-colors">{item.title}</h3>
                </div>
                <div className="col-span-12 md:col-span-1 flex md:justify-end items-start">
                  <ArrowUpRight size={24} className="text-accent group-hover:rotate-45 transition-transform" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 md:px-10 py-32 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4 block">— 05 / Get in touch</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold uppercase">Contact us.</h2>
        </div>
        <form className="space-y-4 glass-card p-8 rounded-2xl" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-4">
            <input required placeholder="Full name" className="px-4 py-3 bg-background/60 border border-border rounded-md text-sm focus:outline-none focus:border-accent" />
            <input required type="email" placeholder="Email" className="px-4 py-3 bg-background/60 border border-border rounded-md text-sm focus:outline-none focus:border-accent" />
          </div>
          <select className="w-full px-4 py-3 bg-background/60 border border-border rounded-md text-sm focus:outline-none focus:border-accent">
            <option value="startup">Startup</option>
            <option value="partner">Partner</option>
            <option value="investor">Investor</option>
            <option value="other">Other</option>
          </select>
          <textarea placeholder="Short message (optional)" rows={4} className="w-full px-4 py-3 bg-background/60 border border-border rounded-md text-sm focus:outline-none focus:border-accent" />
          <button type="submit" className="w-full py-4 bg-accent text-accent-foreground rounded-md font-bold uppercase text-xs tracking-widest hover:opacity-90 transition-opacity">
            Send message
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
}
