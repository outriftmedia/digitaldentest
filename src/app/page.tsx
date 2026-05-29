// "use client";
// import Link from "next/link";
// import { motion } from "motion/react";
// import { ArrowRight, ArrowUpRight, Rocket, Layers, Globe2, TrendingUp, Lightbulb, Hammer, CheckCircle2, BarChart3, Plane } from "lucide-react";
// import { Nav } from "@/components/site/Nav";
// import { Footer } from "@/components/site/Footer";
// import { HeroScene } from "@/components/site/HeroScene";

// const blocks = [
//   { icon: Layers, title: "Venture Building", desc: "From idea to launch — we build alongside founders.", to: "/platform", soon: false },
//   { icon: Rocket, title: "Our Programs", desc: "Acceleration tracks across Balkans, Europe and the US.", to: "/programs", soon: false },
//   { icon: Globe2, title: "Global Network", desc: "Partners across 4 continents opening real doors.", to: "/partners", soon: false },
//   { icon: TrendingUp, title: "VC", desc: "Coming soon — a fund built for ambitious founders.", to: "/platform", soon: true },
// ] as const;

// const journey = [
//   { icon: Lightbulb, label: "Idea" },
//   { icon: Hammer, label: "Build" },
//   { icon: CheckCircle2, label: "Validate" },
//   { icon: BarChart3, label: "Scale" },
//   { icon: Plane, label: "Global" },
// ] as const;

// const featuredStartups = [
//   { name: "Benefiti", desc: "B2B benefits platform", id: 43 },
//   { name: "YachtHe", desc: "Yacht charter marketplace", id: 42 },
//   { name: "WhereToPark", desc: "Smart parking discovery", id: 41 },
//   { name: "Dr. Knight", desc: "Healthtech / WIPO Award winner", id: 39 },
// ];

// const news = [
//   { date: "30 Nov 2025", title: "Dr. Knight received the WIPO Award" },
//   { date: "16 Nov 2025", title: "Launch of the Partners in Transformation Desk Western Balkans" },
//   { date: "22 Oct 2025", title: "Digital Den at Luxembourg Venture Days" },
// ];

// const regions = [
//   { name: "Western Balkans", x: "52%", y: "40%" },
//   { name: "Benelux", x: "48%", y: "32%" },
//   { name: "Jordan", x: "58%", y: "48%" },
//   { name: "USA", x: "22%", y: "40%" },
// ];

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-background text-foreground">
//       <Nav />

//       {/* HERO */}
//       <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-28 pb-16 overflow-hidden">
//         <div className="absolute top-1/4 -right-20 size-[500px] md:size-[700px] bg-accent/25 blur-[160px] rounded-full pointer-events-none" />
//         <div className="absolute bottom-0 -left-32 size-[400px] bg-primary/15 blur-[140px] rounded-full pointer-events-none" />
//         <div className="absolute inset-0 md:left-1/2 opacity-40 md:opacity-100">
//           <HeroScene />
//         </div>
//         <div className="relative z-10 max-w-7xl mx-auto w-full pointer-events-none [&_a]:pointer-events-auto [&_button]:pointer-events-auto">
//           <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
//             — Startup launch platform · venture studio
//           </motion.p>
//           <h1 className="text-[13vw] md:text-[9.5vw] leading-[0.88] font-display font-bold uppercase tracking-tighter mb-10 max-w-5xl">
//             {["Your Gateway", "to Global", "Markets."].map((word, i) => (
//               <span key={word} className="block overflow-hidden">
//                 <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }} className={`inline-block ${i === 1 ? "text-stroke-accent" : ""}`}>
//                   {word}
//                 </motion.span>
//               </span>
//             ))}
//           </h1>
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }} className="flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-5xl">
//             <p className="text-lg md:text-2xl text-muted-foreground max-w-xl leading-relaxed">
//               We support startups from idea to international scale — through programs, capital and a network spanning four continents.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-3">
//               <Link href="/apply" className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-6 py-4 font-bold uppercase tracking-wider rounded-sm hover:-translate-y-1 transition-transform text-sm">
//                 Apply as Startup <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
//               </Link>
//               <Link href="/apply" className="group inline-flex items-center gap-3 border border-foreground/30 px-6 py-4 font-bold uppercase tracking-wider rounded-sm hover:border-accent hover:text-accent transition-colors text-sm">
//                 Partner with Us <ArrowRight size={18} />
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//         <div className="absolute bottom-8 left-0 right-0 overflow-hidden border-y border-white/5 py-4">
//           <div className="animate-marquee items-center gap-12">
//             {Array.from({ length: 2 }).map((_, k) => (
//               <div key={k} className="flex items-center gap-12 pr-12">
//                 {["Idea", "Build", "Validate", "Scale", "Global", "Capital", "Network"].map((w) => (
//                   <span key={w + k} className="flex items-center gap-12 text-3xl md:text-4xl font-display font-bold opacity-20 uppercase whitespace-nowrap">
//                     {w}<span className="size-2 bg-accent rounded-full" />
//                   </span>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* WHAT IS DIGITAL DEN */}
//       <section className="px-6 md:px-10 py-32 max-w-7xl mx-auto">
//         <div className="mb-16">
//           <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4 block">— 01 / What is Digital Den</span>
//           <h2 className="text-5xl md:text-7xl font-display font-bold uppercase leading-[0.95] max-w-3xl">A launch platform for ambitious founders.</h2>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {blocks.map((b, i) => (
//             <motion.div key={b.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: i * 0.08 }}>
//               <Link href={b.to} className="group glass-card p-8 h-full flex flex-col justify-between hover:border-accent/60 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden block">
//                 {b.soon && <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest text-accent bg-accent/10 px-2 py-1 rounded-full">Soon</span>}
//                 <b.icon size={32} className="text-accent mb-12" />
//                 <div>
//                   <h3 className="font-display text-xl font-bold uppercase mb-2">{b.title}</h3>
//                   <p className="text-sm text-muted-foreground mb-6">{b.desc}</p>
//                   <ArrowUpRight size={18} className="text-accent group-hover:rotate-45 transition-transform" />
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* STARTUP JOURNEY */}
//       <section className="px-6 md:px-10 py-32 bg-surface">
//         <div className="max-w-7xl mx-auto">
//           <div className="mb-16">
//             <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4 block">— 02 / Startup Journey</span>
//             <h2 className="text-5xl md:text-7xl font-display font-bold uppercase">From idea<br />to global.</h2>
//           </div>
//           <div className="relative grid grid-cols-2 md:grid-cols-5 gap-6 mb-20">
//             <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
//             {journey.map((s, i) => (
//               <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative flex flex-col items-center text-center">
//                 <div className="size-16 rounded-full bg-background border border-accent/40 grid place-items-center mb-4 relative z-10">
//                   <s.icon size={22} className="text-accent" />
//                 </div>
//                 <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">0{i + 1}</span>
//                 <span className="font-display text-lg md:text-xl font-bold uppercase">{s.label}</span>
//               </motion.div>
//             ))}
//           </div>
//           <div className="flex justify-between items-end mb-10">
//             <h3 className="text-2xl md:text-3xl font-display font-bold uppercase">Featured startups</h3>
//             <Link href="/portfolio" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-accent pb-1 text-accent hover:gap-4 transition-all">
//               See more <ArrowRight size={14} />
//             </Link>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {featuredStartups.map((s, i) => (
//               <motion.a key={s.name} href={`https://digitalden.me/startup/${s.id}`} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="group glass-card p-6 aspect-square flex flex-col justify-between hover:bg-accent hover:text-accent-foreground transition-all duration-500">
//                 <span className="font-mono text-[10px] opacity-60">0{i + 1}</span>
//                 <div>
//                   <h4 className="font-display text-lg font-bold uppercase">{s.name}</h4>
//                   <p className="text-xs opacity-70 mt-1">{s.desc}</p>
//                   <ArrowUpRight size={16} className="mt-3 group-hover:rotate-45 transition-transform" />
//                 </div>
//               </motion.a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* GLOBAL PRESENCE */}
//       <section className="px-6 md:px-10 py-32 max-w-7xl mx-auto">
//         <div className="mb-16">
//           <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4 block">— 03 / Global Presence</span>
//           <h2 className="text-5xl md:text-7xl font-display font-bold uppercase">Operating<br />worldwide.</h2>
//         </div>
//         <div className="relative aspect-[2/1] rounded-2xl overflow-hidden border border-border bg-surface">
//           <div className="absolute inset-0 opacity-30">
//             <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(167,139,250,0.4) 1px, transparent 0)", backgroundSize: "20px 20px" }} />
//           </div>
//           {regions.map((r, i) => (
//             <motion.div key={r.name} initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: r.x, top: r.y }}>
//               <div className="relative">
//                 <div className="size-3 rounded-full bg-accent" />
//                 <div className="absolute inset-0 size-3 rounded-full bg-accent animate-ping" />
//                 <span className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-mono uppercase tracking-widest bg-background/80 backdrop-blur px-2 py-1 rounded">{r.name}</span>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* NEWS */}
//       <section className="px-6 md:px-10 py-32 bg-surface">
//         <div className="max-w-7xl mx-auto">
//           <div className="mb-16">
//             <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4 block">— 04 / News</span>
//             <h2 className="text-5xl md:text-7xl font-display font-bold uppercase">Latest<br />updates.</h2>
//           </div>
//           <div className="divide-y divide-border border-y border-border">
//             {news.map((item, i) => (
//               <motion.article key={item.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="grid grid-cols-12 gap-6 py-8 group hover:bg-background/40 transition-colors px-2 -mx-2">
//                 <div className="col-span-12 md:col-span-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">{item.date}</div>
//                 <div className="col-span-12 md:col-span-9">
//                   <h3 className="text-xl md:text-2xl font-display font-bold group-hover:text-accent transition-colors">{item.title}</h3>
//                 </div>
//                 <div className="col-span-12 md:col-span-1 flex md:justify-end items-start">
//                   <ArrowUpRight size={24} className="text-accent group-hover:rotate-45 transition-transform" />
//                 </div>
//               </motion.article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CONTACT */}
//       <section className="px-6 md:px-10 py-32 max-w-4xl mx-auto">
//         <div className="text-center mb-12">
//           <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4 block">— 05 / Get in touch</span>
//           <h2 className="text-5xl md:text-7xl font-display font-bold uppercase">Contact us.</h2>
//         </div>
//         <form className="space-y-4 glass-card p-8 rounded-2xl" onSubmit={(e) => e.preventDefault()}>
//           <div className="grid md:grid-cols-2 gap-4">
//             <input required placeholder="Full name" className="px-4 py-3 bg-background/60 border border-border rounded-md text-sm focus:outline-none focus:border-accent" />
//             <input required type="email" placeholder="Email" className="px-4 py-3 bg-background/60 border border-border rounded-md text-sm focus:outline-none focus:border-accent" />
//           </div>
//           <select className="w-full px-4 py-3 bg-background/60 border border-border rounded-md text-sm focus:outline-none focus:border-accent">
//             <option value="startup">Startup</option>
//             <option value="partner">Partner</option>
//             <option value="investor">Investor</option>
//             <option value="other">Other</option>
//           </select>
//           <textarea placeholder="Short message (optional)" rows={4} className="w-full px-4 py-3 bg-background/60 border border-border rounded-md text-sm focus:outline-none focus:border-accent" />
//           <button type="submit" className="w-full py-4 bg-accent text-accent-foreground rounded-md font-bold uppercase text-xs tracking-widest hover:opacity-90 transition-opacity">
//             Send message
//           </button>
//         </form>
//       </section>

//       <Footer />
//     </div>
//   );
// }
"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Rocket,
  Layers,
  Globe2,
  TrendingUp,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { HeroScene } from "@/components/site/HeroScene";
import { client } from "@/sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

const imgBuilder = createImageUrlBuilder({ projectId: "0jkfefce", dataset: "production" });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function urlFor(source: any) { return imgBuilder.image(source).auto("format").url(); }

type FeaturedStartup = { _id: string; name: string; mtsb?: string; logoUrl?: string; url?: string; };

const blocks = [
  { icon: Layers, title: "Venture Building", desc: "From idea to launch — we build alongside founders.", to: "/platform", tag: null as string | null, span: "md:col-span-3 md:row-span-2" },
  { icon: Rocket, title: "Programs", desc: "Acceleration tracks across the Balkans, Europe and the US.", to: "/programs", tag: null, span: "md:col-span-2" },
  { icon: Globe2, title: "Global Network", desc: "Partners across 4 continents opening real doors.", to: "/partners", tag: null, span: "md:col-span-2" },
  { icon: TrendingUp, title: "VC", desc: "A fund built for ambitious founders, in development.", to: "/platform", tag: "Coming 2026", span: "md:col-span-3" },
] as const;

const journey = ["Idea", "Build", "Validate", "Scale", "Global"] as const;


const news = [
  { date: "30 Nov 2025", tag: "Award", title: "Dr. Knight received the WIPO Award" },
  { date: "16 Nov 2025", tag: "Launch", title: "Launch of the Partners in Transformation Desk WB" },
  { date: "22 Oct 2025", tag: "Event", title: "Digital Den at Luxembourg Venture Days" },
  { date: "08 Oct 2025", tag: "Program", title: "Soft-landing cohort opens for Q1 2026" },
  { date: "20 Sep 2025", tag: "Partnership", title: "New international desk announced in Jordan" },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const [featuredStartups, setFeaturedStartups] = useState<FeaturedStartup[]>([]);
  useEffect(() => {
    client.fetch<any[]>(
      `*[_type == "startup" && featured == true] | order(order asc) { _id, name, mtsb, url, logo }`
    ).then((data) => {
      setFeaturedStartups(data.map((s) => ({
        _id: s._id,
        name: s.name,
        mtsb: s.mtsb,
        url: s.url,
        logoUrl: s.logo ? urlFor(s.logo) : undefined,
      })));
    }).catch(() => {});
  }, []);

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
          <h1 className="text-[10vw] md:text-[6.2vw] leading-[0.95] font-display font-bold uppercase tracking-tighter mb-12 max-w-5xl">
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
            className="grid md:grid-cols-12 gap-8 items-end max-w-5xl"
          >
            <p className="md:col-span-6 text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
              We support startups from idea to international scale — through programs, capital and a network spanning four continents.
            </p>
            <div className="md:col-span-6 flex flex-col sm:flex-row gap-3 md:justify-end">
              <Link
                href="/apply"
                className="group inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-7 py-5 font-bold uppercase tracking-wider rounded-sm hover:-translate-y-1 transition-all duration-300 text-sm shadow-[0_10px_40px_-10px_var(--color-accent)] hover:shadow-[0_20px_60px_-10px_var(--color-accent)]"
              >
                Apply as Startup
                <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
              </Link>
              <Link
                href="/apply"
                className="group inline-flex items-center justify-center gap-3 border border-foreground/30 px-7 py-5 font-bold uppercase tracking-wider rounded-sm hover:border-accent hover:text-accent hover:-translate-y-1 transition-all duration-300 text-sm backdrop-blur"
              >
                Partner with Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Dynamic ticker strip */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-y border-white/5 py-5 bg-background/40 backdrop-blur-sm">
          <div className="animate-marquee items-center gap-12">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex items-center gap-12 pr-12">
                {["Idea", "Build", "Validate", "Scale", "Global", "Capital", "Network", "Mentorship", "Soft Landing"].map((w) => (
                  <span key={w + k} className="flex items-center gap-12 text-2xl md:text-3xl font-display font-bold uppercase whitespace-nowrap text-foreground/40">
                    {w}
                    <span className="size-1.5 bg-accent rounded-full" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS DIGITAL DEN — 2x2 staggered bento */}
      <section className="px-6 md:px-10 py-28 max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-4 block">— 01 / The Ecosystem</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase leading-[0.95]">
            A launch platform for ambitious founders.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 md:auto-rows-[220px] gap-4">
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
                className="group glass-card p-8 h-full flex flex-col justify-between hover:border-accent/60 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden block"
              >
                {b.tag && (
                  <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest text-accent border border-accent/40 px-2.5 py-1 rounded-full">
                    {b.tag}
                  </span>
                )}
                <b.icon size={28} strokeWidth={1.25} className="text-accent transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1" />
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold uppercase mb-2 group-hover:text-accent transition-colors">{b.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 max-w-xs">{b.desc}</p>
                  <ArrowUpRight size={18} className="text-accent group-hover:rotate-45 transition-transform" />
                </div>
                <div className="absolute -bottom-20 -right-20 size-48 bg-accent/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STARTUP JOURNEY — fluid curved trajectory */}
      <section className="px-6 md:px-10 py-28 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-4 block">— 02 / Startup Journey</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase whitespace-nowrap">From idea to global.</h2>
          </div>

          <div className="relative h-[200px] md:h-[260px] mb-24">
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
                    <span className="font-display text-base md:text-2xl font-bold uppercase tracking-tight">{s}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Selected Ventures */}
          <div className="flex justify-between items-end mb-10 gap-6 flex-wrap">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-3 block">— Selected Ventures</span>
              <h3 className="text-3xl md:text-4xl font-display font-bold uppercase">Portfolio highlights</h3>
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
                transition={{ duration: 0.5, delay: i * 0.07 }}
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
      <section className="px-6 md:px-10 py-28 max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-4 block">— 03 / Global Presence</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase leading-[0.95]">Operating worldwide.</h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl">
            Four operational regions, one ecosystem — Western Balkans, Benelux, USA and Jordan.
          </p>
        </div>

        <div className="relative aspect-[2/1] rounded-2xl overflow-hidden bg-surface">
          {/* World map image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/worldmap.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none select-none"
          />

          {/* Region pin overlays for label clarity */}
          {[
            { name: "USA", x: "22%", y: "40%" },
            { name: "Benelux", x: "48.5%", y: "32%" },
            { name: "Western Balkans", x: "52%", y: "40%" },
            { name: "Jordan", x: "57.5%", y: "46%" },
          ].map((r, i) => (
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
                <div className="size-2.5 rounded-full bg-accent shadow-[0_0_20px_var(--color-accent)]" />
                <div className="absolute inset-0 size-2.5 rounded-full bg-accent animate-ping" />
                <span className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] font-mono uppercase tracking-widest bg-background/80 backdrop-blur px-2 py-1 rounded border border-border">
                  {r.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEWS — horizontal carousel */}
      <NewsCarousel />

      {/* FINAL CTA — narrower form */}
      <section className="px-6 md:px-10 py-28 max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-4 block">— 05 / Get in touch</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase">Let's talk.</h2>
          <p className="text-muted-foreground mt-4 text-sm md:text-base max-w-md mx-auto">
            Whether you're a founder, partner or investor — we read every message.
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
      </section>

      <Footer />
    </div>
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
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-3 block">— 04 / News</span>
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
            className="snap-start shrink-0 w-[80vw] md:w-[360px] glass-card p-7 rounded-xl group hover:border-accent/60 hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between min-h-[220px]"
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
