import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-6 md:px-10 py-16 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-6">
          <h2 className="text-[14vw] md:text-[8vw] font-display font-bold leading-[0.85] uppercase tracking-tighter mb-8">
            Let's <br />Connect
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md">
            Your gateway to global markets — supporting startups from idea to international scale.
          </p>
          <div className="flex gap-4 mt-8">
            <a href="https://www.linkedin.com/company/digital-den-me/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="size-10 grid place-items-center rounded-full border border-border hover:border-accent hover:text-accent transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://www.instagram.com/digitalden.me/" target="_blank" rel="noreferrer" aria-label="Instagram" className="size-10 grid place-items-center rounded-full border border-border hover:border-accent hover:text-accent transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://x.com/digitalden_me" target="_blank" rel="noreferrer" aria-label="X / Twitter" className="size-10 grid place-items-center rounded-full border border-border hover:border-accent hover:text-accent transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.facebook.com/digitalden.me" target="_blank" rel="noreferrer" aria-label="Facebook" className="size-10 grid place-items-center rounded-full border border-border hover:border-accent hover:text-accent transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>
        <div className="md:col-span-6 flex flex-col md:items-end justify-end">
          <div className="space-y-3 md:text-right mb-12">
            <a href="mailto:office@digitalden.me" className="text-2xl md:text-4xl font-display hover:text-accent transition-colors block">
              office@digitalden.me
            </a>
            <p className="text-muted-foreground uppercase tracking-widest text-xs">
              Podgorica, Montenegro · Available globally
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-[10px] uppercase tracking-[0.25em] font-medium md:justify-end">
            <Link href="/platform" className="hover:text-accent">Platform</Link>
            <Link href="/programs" className="hover:text-accent">Programs</Link>
            <Link href="/portfolio" className="hover:text-accent">Portfolio</Link>
            <Link href="/partners" className="hover:text-accent">Partners</Link>
            <Link href="/events" className="hover:text-accent">Events</Link>
            <Link href="/apply" className="hover:text-accent">Apply</Link>
          </div>
        </div>
      </div>
      <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
        <span>© 2026 Digital Den</span>
        <span>Idea · Build · Validate · Scale · Global</span>
        <span>Built by <a href="#" className="hover:text-accent transition-colors">Outrift Media</a></span>
      </div>
    </footer>
  );
}
