"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Rocket,
  Layers,
  Globe2,
  TrendingUp,
} from "lucide-react";
import { PortableText } from "@portabletext/react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { HeroScene } from "@/components/site/HeroScene";
import type { PortableTextBlock } from "@sanity/types";

export type FeaturedStartup = { _id: string; name: string; mtsb?: string; logoUrl?: string; url?: string; };
export type Person = { _id: string; name: string; designation?: string; linkedin?: string; photoUrl?: string; };
export type LandingAboutData = { definition?: PortableTextBlock[]; imageUrl?: string; ddTeam: Person[]; };

const blocks = [
  { icon: Layers, title: "Venture Building", desc: "From idea to launch — we build alongside founders.", to: "/platform", tag: null as string | null, span: "md:col-span-3 md:row-span-2" },
  { icon: Rocket, title: "Programs", desc: "Acceleration tracks across the Balkans, Europe and the US.", to: "/programs", tag: null, span: "md:col-span-2" },
  { icon: Globe2, title: "Global Network", desc: "Partners across 4 continents opening real doors.", to: "/partners", tag: null, span: "md:col-span-2" },
  { icon: TrendingUp, title: "VC", desc: "A fund built for ambitious founders, in development.", to: "/platform", tag: "Coming 2026", span: "md:col-span-3" },
] as const;

const journey = ["Idea", "Build", "Validate", "Scale", "Global"] as const;

const mapRegions = [
  { name: "USA", x: "20%", y: "40%", note: "Market access" },
  { name: "Benelux", x: "46.5%", y: "32%", note: "Partner network" },
  { name: "Western Balkans", x: "50%", y: "40%", note: "Founder base" },
  { name: "Jordan", x: "55.5%", y: "46%", note: "Regional bridge" },
] as const;

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

const news = [
  { date: "30 Nov 2025", tag: "Award", title: "Dr. Knight received the WIPO Award" },
  { date: "16 Nov 2025", tag: "Launch", title: "Launch of the Partners in Transformation Desk WB" },
  { date: "22 Oct 2025", tag: "Event", title: "Digital Den at Luxembourg Venture Days" },
  { date: "08 Oct 2025", tag: "Program", title: "Soft-landing cohort opens for Q1 2026" },
  { date: "20 Sep 2025", tag: "Partnership", title: "New international desk announced in Jordan" },
];

export function HomeClient({
  featuredStartups,
  aboutData,
}: {
  featuredStartups: FeaturedStartup[];
  aboutData: LandingAboutData;
}) {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO — calmer, more central, smaller headline */}
      <section
        ref={heroRef}
        className="relative min-h-[92vh] flex flex-col justify-center px-6 md:px-10 pt-32 pb-24 overflow-hidden"
      >
  <div className="absolute top-1/4 -right-32 size-[520px] md:size-[680px] bg-accent/20 blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 -left-32 size-[400px] bg-primary/15 blur-[160px] rounded-full pointer-events-none" />

        <motion.div style={{ y: heroY }} className="absolute inset-0 md:left-1/3 opacity-50 md:opacity-100">
          <HeroScene />
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto w-full pointer-events-none [&_a]:pointer-events-auto [&_button]:pointer-events-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-accent mb-8 flex items-center gap-3"
          >
            <span className="size-1.5 rounded-full bg-accent animate-pulse" />
            Startup launch platform · venture studio
          </motion.p>

          {/* Smaller, more breathable headline */}
          <h1 className="text-[8.8vw] md:text-[5.35vw] leading-[0.98] font-display font-bold uppercase mb-10 max-w-4xl">
            {["Your Gateway", "to Global", "Markets."].map((word, i) => (
              <span key={word} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className={`inline-block ${i === 1 ? "text-stroke-accent" : ""}`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="grid md:grid-cols-12 gap-7 items-end max-w-4xl"
          >
            <p className="md:col-span-6 text-sm md:text-base text-muted-foreground max-w-sm leading-relaxed">
              We help founders move from idea to international scale through programs, capital access and a global network.
            </p>
            <div className="md:col-span-6 flex flex-col sm:flex-row gap-3 md:justify-end">
              <Link
                href="/apply"
                className="group inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-6 py-4 font-bold uppercase tracking-wider rounded-sm hover:-translate-y-1 transition-all duration-300 text-xs shadow-[0_10px_40px_-10px_var(--color-accent)] hover:shadow-[0_20px_60px_-10px_var(--color-accent)]"
              >
                Apply as Startup
                <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
              </Link>
              <Link
                href="/apply"
                className="group inline-flex items-center justify-center gap-3 border border-foreground/30 px-6 py-4 font-bold uppercase tracking-wider rounded-sm hover:border-accent hover:text-accent hover:-translate-y-1 transition-all duration-300 text-xs backdrop-blur"
              >
                Partner with Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Dynamic ticker strip */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-y border-white/5 py-4 bg-background/40 backdrop-blur-sm">
          <div className="animate-marquee items-center gap-12">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex items-center gap-12 pr-12">
                {["Idea", "Build", "Validate", "Scale", "Global", "Capital", "Network", "Mentorship", "Soft Landing"].map((w) => (
                  <span key={w + k} className="flex items-center gap-10 text-xl md:text-2xl font-display font-bold uppercase whitespace-nowrap text-foreground/35">
                    {w}
                    <span className="size-1.5 bg-accent rounded-full" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT — pulled into the landing page */}
      <motion.section
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="px-6 md:px-10 py-20 md:py-24 max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start mb-16">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-6 block">— 01 / About Digital Den</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold uppercase leading-tight mb-4 enter-fade-up">
              Rub<br />the Hub.
            </h2>
            {aboutData.definition ? (
              <div className="text-sm md:text-base text-muted-foreground leading-relaxed [&_strong]:text-foreground [&_strong]:font-bold [&_em]:italic [&_p]:mb-4 last:[&_p]:mb-0">
                <PortableText value={aboutData.definition} />
              </div>
            ) : (
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Digital Den is a startup launch platform and venture studio for founders entering international markets.
              </p>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-4/3 rounded-xl overflow-hidden border border-border bg-surface"
          >
            {aboutData.imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={aboutData.imageUrl} alt="Digital Den" className="w-full h-full object-cover" />
            ) : (
              <div className="absolute inset-0 bg-gradient-primary grid place-items-center">
                <span className="font-display text-4xl md:text-6xl font-bold uppercase text-background/80">Digital Den</span>
              </div>
            )}
            <div className="absolute inset-0 bg-linear-to-t from-background/30 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {aboutData.ddTeam.length > 0 && (
          <div>
            <div className="mb-10">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-4 block">— DD Team</span>
              <h3 className="text-xl md:text-2xl font-display font-bold uppercase enter-fade-up">People behind Digital Den.</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {aboutData.ddTeam.map((person, i) => (
                <LandingTeamCard key={person._id} person={person} index={i} />
              ))}
            </div>
          </div>
        )}
      </motion.section>

      {/* WHAT IS DIGITAL DEN — 2x2 staggered bento */}
      <section className="px-6 md:px-10 py-20 md:py-24 max-w-7xl mx-auto">
        <div className="md:grid md:grid-cols-12 md:gap-12 items-start mb-12">
          <div className="md:col-span-6 mb-8 md:mb-0">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-6 block">— 02 / The Ecosystem</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold uppercase leading-tight enter-fade-up mb-6">
              A launch platform for ambitious founders.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-prose leading-relaxed">
              Programs, venture building, partnerships and capital — structured so founders can scale from local to global with clarity and momentum.
            </p>
          </div>

          <div className="md:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-5 md:auto-rows-[190px] gap-4">
              {blocks.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={b.span}
                >
                  <Link
                    href={b.to}
                    className="group glass-card p-8 h-full flex flex-col justify-between hover:border-accent/60 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden"
                  >
                    {b.tag && (
                      <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest text-accent border border-accent/40 px-2.5 py-1 rounded-full">
                        {b.tag}
                      </span>
                    )}
                    <b.icon size={24} strokeWidth={1.25} className="text-accent transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1" />
                    <div>
                      <h3 className="font-display text-lg md:text-xl font-bold uppercase mb-2 group-hover:text-accent transition-colors">{b.title}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground mb-5 max-w-xs">{b.desc}</p>
                      <ArrowUpRight size={18} className="text-accent group-hover:rotate-45 transition-transform" />
                    </div>
                    <div className="absolute -bottom-20 -right-20 size-48 bg-accent/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STARTUP JOURNEY — fluid curved trajectory */}
      <section className="px-6 md:px-10 py-20 md:py-24 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-4 block">— 03 / Startup Journey</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold uppercase enter-fade-up">From idea to global.</h2>
          </div>

          <div className="relative h-45 md:h-57.5 mb-16">
            {/* Curved trajectory line */}
            <svg
              viewBox="0 0 1000 200"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              <defs>
                <linearGradient id="ddJourney" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="var(--color-accent)" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 0,150 C 200,150 250,40 500,90 C 750,140 800,20 1000,30"
                fill="none"
                stroke="url(#ddJourney)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              />
            </svg>
            {/* Floating stage labels along the curve */}
            <div className="absolute inset-0 grid grid-cols-5">
              {journey.map((s, i) => {
                const offsets = [70, 35, 55, 75, 5];
                return (
                  <motion.div
                    key={s}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex flex-col items-center justify-start"
                    style={{ paddingTop: `${offsets[i]}%` }}
                  >
                    <div className="size-3 rounded-full bg-accent shadow-[0_0_24px_var(--color-accent)] mb-3" />
                    <span className="font-display text-sm md:text-xl font-bold uppercase">{s}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Selected Ventures */}
          <div className="flex justify-between items-end mb-8 gap-6 flex-wrap">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-3 block">— Selected Ventures</span>
              <h3 className="text-xl md:text-2xl font-display font-bold uppercase enter-fade-up">Portfolio highlights</h3>
            </div>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-accent pb-1 text-accent hover:gap-4 transition-all"
            >
              Portfolio <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredStartups.map((s, i) => (
              <motion.a
                key={s._id}
                href={s.url ?? "/portfolio"}
                target={s.url ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group relative glass-card overflow-hidden hover:border-accent/60 transition-all duration-500 hover-lift flex flex-col"
              >
                {/* Logo area */}
                <div className="h-32 bg-white flex items-center justify-center p-4 shrink-0">
                  {s.logoUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={s.logoUrl} alt={s.name} className="w-full h-full object-contain" />
                  ) : (
                    <div className="size-12 rounded-xl bg-gradient-primary grid place-items-center text-lg font-display font-bold">
                      {s.name[0]}
                    </div>
                  )}
                </div>
                <div className="p-4 flex items-start justify-between gap-2">
                  <div>
                    <h4 className="font-display text-sm font-bold uppercase leading-tight group-hover:text-accent transition-colors">{s.name}</h4>
                    {s.mtsb && <p className="font-mono text-[9px] uppercase tracking-widest text-accent mt-1">{s.mtsb}</p>}
                  </div>
                  <ArrowUpRight size={13} className="text-accent shrink-0 group-hover:rotate-45 transition-transform mt-0.5" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE — real outline + highlighted regions */}
      <section className="px-6 md:px-10 py-20 md:py-24 max-w-7xl mx-auto">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 max-w-2xl"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-4 block">— 04 / Global Presence</span>
          <h2 className="text-2xl md:text-3xl font-display font-bold uppercase leading-tight enter-fade-up">Operating worldwide.</h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl clamp-2">
            Four regions connected through one founder network.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-2/1 rounded-xl overflow-hidden bg-black border border-border"
        >
          {/* World map image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/worldmap.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-75 pointer-events-none select-none"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/25 pointer-events-none" />

          {/* selection buttons removed — markers are decorative white dots */}

          {mapRegions.map((r, i) => {
            return (
            <motion.div
              key={r.name}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: r.x, top: r.y }}
            >
              <div className="relative">
                  {/* simple white dot marker */}
                  <div className="size-2.5 rounded-full bg-white transition-none" />
                  {/* country label */}
                  <span className="absolute left-[110%] top-1/2 -translate-y-1/2 ml-2 text-[10px] font-mono text-white whitespace-nowrap">
                    {r.name}
                  </span>
                </div>
            </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* NEWS — horizontal carousel */}
      <NewsCarousel />

      {/* FINAL CTA — narrower form */}
      <motion.section
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="px-6 md:px-10 py-20 md:py-24 max-w-xl mx-auto"
      >
        <div className="text-center mb-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-4 block">— 06 / Get in touch</span>
          <h2 className="text-2xl md:text-3xl font-display font-bold uppercase enter-fade-up">Let&apos;s talk.</h2>
          <p className="text-muted-foreground mt-4 text-sm max-w-sm mx-auto">
            Founder, partner or investor, send us a short note.
          </p>
        </div>
        <form className="space-y-4 glass-card p-6 md:p-8 rounded-2xl" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-3">
            <input required placeholder="Full name" className="px-4 py-3 bg-background/60 border border-border rounded-md text-sm focus:outline-none focus:border-accent focus:bg-background transition-all" />
            <input required type="email" placeholder="Email" className="px-4 py-3 bg-background/60 border border-border rounded-md text-sm focus:outline-none focus:border-accent focus:bg-background transition-all" />
          </div>
          <select className="w-full px-4 py-3 bg-background/60 border border-border rounded-md text-sm focus:outline-none focus:border-accent transition-all">
            <option value="startup">I am a Startup</option>
            <option value="partner">I am a Partner</option>
            <option value="investor">I am an Investor</option>
            <option value="other">Other</option>
          </select>
          <textarea placeholder="Short message (optional)" rows={3} className="w-full px-4 py-3 bg-background/60 border border-border rounded-md text-sm focus:outline-none focus:border-accent transition-all" />
          <button type="submit" className="w-full py-4 bg-accent text-accent-foreground rounded-md font-bold uppercase text-xs tracking-widest hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_var(--color-accent)] transition-all">
            Send message
          </button>
        </form>
      </motion.section>

      <Footer />
    </div>
  );
}

function LandingTeamCard({ person, index = 0 }: { person: Person; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className="relative aspect-3/4 overflow-hidden rounded-xl mb-4 bg-surface border border-border group-hover:border-accent/50 transition-colors duration-500">
        {person.photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={person.photoUrl} alt={person.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <div className="w-full h-full bg-gradient-primary grid place-items-center text-4xl font-display font-bold">
            {person.name[0]}
          </div>
        )}
        {person.linkedin && (
          <a
            href={person.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`${person.name} LinkedIn`}
            className="absolute bottom-3 right-3 size-9 grid place-items-center rounded-full bg-background/80 backdrop-blur border border-border text-muted-foreground hover:border-accent hover:text-accent transition-all opacity-0 group-hover:opacity-100 duration-300"
          >
            <ArrowUpRight size={14} />
          </a>
        )}
      </div>
      <h4 className="font-display font-bold uppercase text-base leading-tight group-hover:text-accent transition-colors">
        {person.name}
      </h4>
      {person.designation && (
        <p className="font-mono text-[10px] uppercase tracking-widest text-accent mt-1">
          {person.designation}
        </p>
      )}
    </motion.div>
  );
}

function NewsCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const scrollBy = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section className="py-28 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-14 flex justify-between items-end gap-6 flex-wrap">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-3 block">— 05 / News</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase">Latest updates.</h2>
        </div>
        <div className="flex gap-2">
          <button onClick={() => scrollBy(-1)} aria-label="Previous" className="size-11 grid place-items-center rounded-full border border-border hover:border-accent hover:text-accent transition-colors">
            <ArrowRight size={16} className="rotate-180" />
          </button>
          <button onClick={() => scrollBy(1)} aria-label="Next" className="size-11 grid place-items-center rounded-full border border-border hover:border-accent hover:text-accent transition-colors">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
      <div
        ref={scrollerRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 md:px-10 pb-6 scrollbar-none"
        style={{ scrollbarWidth: "none" }}
        aria-busy={hovered ? "false" : "false"}
      >
        {news.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="snap-start shrink-0 w-[80vw] md:w-90 glass-card p-7 rounded-xl group hover:border-accent/60 hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between min-h-55"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent border border-accent/40 px-2 py-1 rounded-full">{item.tag}</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{item.date}</span>
            </div>
            <div>
              <h3 className="text-xl font-display font-bold leading-tight group-hover:text-accent transition-colors">{item.title}</h3>
              <ArrowUpRight size={20} className="mt-4 text-accent group-hover:rotate-45 transition-transform" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
