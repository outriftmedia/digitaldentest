import type { Metadata } from "next";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Compass, Target, Sparkles, Users, Code, Globe2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Platform — How Digital Den Works",
  description: "Digital Den is a startup launch platform and venture studio supporting founders from idea to global markets.",
};

const services = [
  { icon: Sparkles, title: "Idea Validation", desc: "Sharpen the problem, the audience and the wedge before you build." },
  { icon: Code, title: "Venture Building", desc: "Hands-on product, brand and go-to-market support from our studio team." },
  { icon: Users, title: "Mentorship", desc: "Operators and investors from across our 4-continent network." },
  { icon: Target, title: "Capital Access", desc: "Warm intros to funds, angels and grant programs that match your stage." },
  { icon: Globe2, title: "Soft Landing", desc: "Programs in the US, Benelux, Western Balkans and Jordan." },
  { icon: Compass, title: "Strategic Direction", desc: "Long-term planning to scale from local hero to global player." },
];

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <section className="px-6 md:px-10 pt-40 pb-20 max-w-7xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6 block">Platform</span>
        <h1 className="text-5xl md:text-8xl font-display font-bold uppercase leading-[0.9] tracking-tighter mb-10 max-w-5xl">
          How <span className="text-stroke-accent">we</span> work.
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
          Digital Den is a startup launch platform and venture studio. We work alongside founders — from the first sketch on a whiteboard to scaling internationally.
        </p>
      </section>
      <section className="px-6 md:px-10 py-20 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-12">Services & Support</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <div key={s.title} className="glass-card p-8 hover:border-accent/40 transition-colors">
                <s.icon size={28} className="text-accent mb-6" />
                <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 md:px-10 py-32 max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {[
          { tag: "Vision", body: "Create, accelerate and soft-land 50 Balkan startups in international markets within 5 years." },
          { tag: "Mission", body: "Be the most reliable launch platform for ambitious founders from emerging ecosystems." },
          { tag: "Direction", body: "Programs, capital and partnerships — built to compound across markets and generations of founders." },
        ].map((b) => (
          <div key={b.tag}>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4 block">— {b.tag}</span>
            <p className="text-2xl md:text-3xl font-display font-bold leading-tight">{b.body}</p>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}
