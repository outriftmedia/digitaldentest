"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative px-6 md:px-10 pt-24 pb-10 border-t border-border overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[700px] bg-accent/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative grid grid-cols-1 md:grid-cols-12 gap-12 max-w-7xl mx-auto">
        {/* Mission + headline */}
        <div className="md:col-span-7">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-6 block">— Manifesto</span>
          <h2 className="text-[12vw] md:text-[6.5vw] font-display font-bold leading-[0.88] uppercase tracking-tighter mb-8">
            Let's <br />build the next one.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-md mb-10">
            We exist to launch Balkan-born startups into global markets — through programs, capital and a network spanning four continents.
          </p>

          {/* Newsletter capture */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-stretch max-w-md border border-border rounded-full overflow-hidden focus-within:border-accent transition-colors"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 px-5 py-3 bg-transparent text-sm focus:outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              className="group flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Subscribe
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        {/* Contact + nav */}
        <div className="md:col-span-5 flex flex-col md:items-end">
          <div className="space-y-3 md:text-right mb-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground block">— Get in touch</span>
            <a href="mailto:office@digitalden.me" className="text-xl md:text-3xl font-display font-bold hover:text-accent transition-colors block">
              office@digitalden.me
            </a>
            <p className="text-muted-foreground uppercase tracking-widest text-[10px] font-mono">
              Podgorica, Montenegro · Available globally
            </p>
          </div>

          <Link
            href="/apply"
            className="group inline-flex items-center gap-3 bg-foreground text-background px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors mb-10"
          >
            Are you a founder?
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.25em] font-mono md:justify-end">
            <Link href="/platform" className="hover:text-accent transition-colors">Platform</Link>
            <Link href="/programs" className="hover:text-accent transition-colors">Programs</Link>
            <Link href="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link>
            <Link href="/partners" className="hover:text-accent transition-colors">Partners</Link>
            <Link href="/events" className="hover:text-accent transition-colors">Events</Link>
            <Link href="/apply" className="hover:text-accent transition-colors">Apply</Link>
          </div>

          <div className="flex gap-3 mt-8">
            <a href="https://www.linkedin.com/company/digital-den-me/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="size-10 grid place-items-center rounded-full border border-border hover:border-accent hover:text-accent transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://www.instagram.com/digitalden.me/" target="_blank" rel="noreferrer" aria-label="Instagram" className="size-10 grid place-items-center rounded-full border border-border hover:border-accent hover:text-accent transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://x.com/digitalden_me" target="_blank" rel="noreferrer" aria-label="X / Twitter" className="size-10 grid place-items-center rounded-full border border-border hover:border-accent hover:text-accent transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.facebook.com/digitalden.me" target="_blank" rel="noreferrer" aria-label="Facebook" className="size-10 grid place-items-center rounded-full border border-border hover:border-accent hover:text-accent transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="relative mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] uppercase tracking-widest text-muted-foreground font-mono max-w-7xl mx-auto">
        <span>© 2026 Digital Den</span>
        <span className="hidden md:block">Idea · Build · Validate · Scale · Global</span>
        <span>v.2026.2</span>
      </div>
    </footer>
  );
}
