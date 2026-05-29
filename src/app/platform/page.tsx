// import type { Metadata } from "next";
// import { Nav } from "@/components/site/Nav";
// import { Footer } from "@/components/site/Footer";
// import { Compass, Target, Sparkles, Users, Code, Globe2 } from "lucide-react";

// export const metadata: Metadata = {
//   title: "Platform — How Digital Den Works",
//   description: "Digital Den is a startup launch platform and venture studio supporting founders from idea to global markets.",
// };

// const services = [
//   { icon: Sparkles, title: "Idea Validation", desc: "Sharpen the problem, the audience and the wedge before you build." },
//   { icon: Code, title: "Venture Building", desc: "Hands-on product, brand and go-to-market support from our studio team." },
//   { icon: Users, title: "Mentorship", desc: "Operators and investors from across our 4-continent network." },
//   { icon: Target, title: "Capital Access", desc: "Warm intros to funds, angels and grant programs that match your stage." },
//   { icon: Globe2, title: "Soft Landing", desc: "Programs in the US, Benelux, Western Balkans and Jordan." },
//   { icon: Compass, title: "Strategic Direction", desc: "Long-term planning to scale from local hero to global player." },
// ];

// export default function PlatformPage() {
//   return (
//     <div className="min-h-screen bg-background text-foreground">
//       <Nav />
//       <section className="px-6 md:px-10 pt-40 pb-20 max-w-7xl mx-auto">
//         <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6 block">Platform</span>
//         <h1 className="text-5xl md:text-8xl font-display font-bold uppercase leading-[0.9] tracking-tighter mb-10 max-w-5xl">
//           How <span className="text-stroke-accent">we</span> work.
//         </h1>
//         <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
//           Digital Den is a startup launch platform and venture studio. We work alongside founders — from the first sketch on a whiteboard to scaling internationally.
//         </p>
//       </section>
//       <section className="px-6 md:px-10 py-20 bg-surface">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-12">Services & Support</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {services.map((s) => (
//               <div key={s.title} className="glass-card p-8 hover:border-accent/40 transition-colors">
//                 <s.icon size={28} className="text-accent mb-6" />
//                 <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
//                 <p className="text-sm text-muted-foreground">{s.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <section className="px-6 md:px-10 py-32 max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
//         {[
//           { tag: "Vision", body: "Create, accelerate and soft-land 50 Balkan startups in international markets within 5 years." },
//           { tag: "Mission", body: "Be the most reliable launch platform for ambitious founders from emerging ecosystems." },
//           { tag: "Direction", body: "Programs, capital and partnerships — built to compound across markets and generations of founders." },
//         ].map((b) => (
//           <div key={b.tag}>
//             <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4 block">— {b.tag}</span>
//             <p className="text-2xl md:text-3xl font-display font-bold leading-tight">{b.body}</p>
//           </div>
//         ))}
//       </section>
//       <Footer />
//     </div>
//   );
// }

"use client";
import Link from "next/link";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, Lightbulb, Hammer, CheckCircle2, BarChart3, Plane } from "lucide-react";

const stages = [
  {
    icon: Lightbulb,
    stage: "Idea",
    headline: "We sharpen the wedge.",
    body: "Founders arrive with a hunch. We pressure-test the problem, audience and angle before a single line of code is written.",
    pillars: ["Problem framing", "Market sizing", "Founder fit"],
  },
  {
    icon: Hammer,
    stage: "Build",
    headline: "We build alongside you.",
    body: "Our studio joins as embedded product, design and engineering — turning validated insight into a real product.",
    pillars: ["Product & design", "Engineering pods", "Brand identity"],
  },
  {
    icon: CheckCircle2,
    stage: "Validate",
    headline: "We get the first signal.",
    body: "Programs, pilots and partners help startups meet real customers and unlock the first commercial proof points.",
    pillars: ["Pilots & POCs", "GTM playbooks", "Early traction"],
  },
  {
    icon: BarChart3,
    stage: "Scale",
    headline: "We open the cap table.",
    body: "Warm intros to funds, angels and grants — matched to stage and geography across our 4-continent network.",
    pillars: ["Capital access", "Mentor network", "Operator support"],
  },
  {
    icon: Plane,
    stage: "Global",
    headline: "We launch into new markets.",
    body: "Soft-landing programs in the US, Benelux, Western Balkans and Jordan give startups a runway in each region.",
    pillars: ["Soft landing", "Market entry", "International desks"],
  },
];

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative px-6 md:px-10 pt-40 pb-20 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute -top-20 -right-40 size-[520px] bg-accent/15 blur-[160px] rounded-full pointer-events-none" />
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-6 block">— Platform</span>
        <h1 className="text-5xl md:text-7xl font-display font-bold uppercase leading-[0.95] tracking-tighter mb-10 max-w-4xl">
          The startup<br /><span className="text-stroke-accent">operating system.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Digital Den isn't a list of services. It's one connected journey — programs, mentorship, partnerships, capital and international scaling, all interconnected within a single startup runway.
        </p>
      </section>

      {/* ECOSYSTEM FLOW — vertical timeline */}
      <section className="px-6 md:px-10 py-20 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 flex items-end justify-between gap-6 flex-wrap">
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase max-w-xl leading-[0.95]">
              How startups move through Digital Den.
            </h2>
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">— Ecosystem flow</span>
          </div>

          <div className="relative">
            {/* vertical spine */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent" />

            <div className="space-y-16 md:space-y-24">
              {stages.map((s, i) => (
                <Reveal key={s.stage} delay={i * 0.05}>
                  <div className={`relative grid md:grid-cols-2 gap-8 md:gap-16 items-center ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
                    {/* Spine node */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 size-4 rounded-full bg-background border-2 border-accent shadow-[0_0_24px_var(--color-accent)] z-10" />

                    <div className={`pl-16 md:pl-0 ${i % 2 === 1 ? "md:text-right md:pr-16" : "md:pl-0 md:pr-16"}`}>
                      <div className={`inline-flex items-center gap-3 mb-4 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                        <s.icon size={24} strokeWidth={1.25} className="text-accent" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent">0{i + 1} / {s.stage}</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-display font-bold uppercase leading-[0.95] mb-4">{s.headline}</h3>
                      <p className="text-base text-muted-foreground max-w-md md:inline-block">{s.body}</p>
                    </div>

                    <div className="pl-16 md:pl-0">
                      <div className={`glass-card p-6 rounded-xl space-y-2 max-w-xs ${i % 2 === 1 ? "md:ml-0" : "md:ml-16"}`}>
                        {s.pillars.map((p) => (
                          <div key={p} className="flex items-center gap-3 text-sm">
                            <span className="size-1.5 rounded-full bg-accent" />
                            <span className="font-mono uppercase text-[11px] tracking-widest text-muted-foreground">{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-28 max-w-4xl mx-auto text-center">
        <Reveal>
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-4 block">— Apply</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase leading-[0.95] mb-8">
            Build the next one with us.
          </h2>
          <Link
            href="/apply"
            className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-5 font-bold uppercase tracking-wider rounded-full hover:-translate-y-1 transition-all text-sm shadow-[0_10px_40px_-10px_var(--color-accent)]"
          >
            Apply as Startup
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>
      </section>
      <Footer />
    </div>
  );
}
