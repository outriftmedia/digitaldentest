"use client";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Mail, MapPin } from "lucide-react";

export default function ApplyPage() {
  const [done, setDone] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <section className="px-6 md:px-10 pt-40 pb-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6 block">Apply / Contact</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold uppercase leading-[0.9] tracking-tighter mb-8">Let's talk.</h1>
          <p className="text-lg text-muted-foreground max-w-md mb-10">
            Tell us who you are and what you're building. We'll route your message to the right person on our team.
          </p>
          <div className="space-y-4 text-sm">
            <a href="mailto:office@digitalden.me" className="flex items-center gap-3 hover:text-accent transition-colors">
              <Mail size={16} className="text-accent" /> office@digitalden.me
            </a>
            <p className="flex items-center gap-3 text-muted-foreground">
              <MapPin size={16} className="text-accent" /> Podgorica, Montenegro
            </p>
          </div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="glass-card p-8 rounded-2xl space-y-4 h-fit">
          {done ? (
            <div className="py-12 text-center">
              <h3 className="font-display text-2xl font-bold mb-2 text-accent">Thanks — message received.</h3>
              <p className="text-sm text-muted-foreground">We'll be in touch shortly.</p>
            </div>
          ) : (
            <>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Full name</label>
                <input required className="w-full px-4 py-3 bg-background/60 border border-border rounded-md text-sm focus:outline-none focus:border-accent" />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Email</label>
                <input required type="email" className="w-full px-4 py-3 bg-background/60 border border-border rounded-md text-sm focus:outline-none focus:border-accent" />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2 block">I am a</label>
                <select className="w-full px-4 py-3 bg-background/60 border border-border rounded-md text-sm focus:outline-none focus:border-accent">
                  <option value="startup">Startup</option>
                  <option value="partner">Partner</option>
                  <option value="investor">Investor</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Short message (optional)</label>
                <textarea rows={5} className="w-full px-4 py-3 bg-background/60 border border-border rounded-md text-sm focus:outline-none focus:border-accent" />
              </div>
              <label className="flex items-start gap-3 text-xs text-muted-foreground">
                <input type="checkbox" required className="mt-0.5 accent-[var(--color-accent)]" />
                <span>I agree to the processing of my data per the GDPR / Terms & Conditions.</span>
              </label>
              <button type="submit" className="w-full py-4 bg-accent text-accent-foreground rounded-md font-bold uppercase text-xs tracking-widest hover:opacity-90 transition-opacity">
                Submit
              </button>
            </>
          )}
        </form>
      </section>
      <Footer />
    </div>
  );
}
