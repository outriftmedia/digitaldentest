"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/platform", label: "Platform" },
  { href: "/programs", label: "Programs" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/partners", label: "Partners" },
  { href: "/events", label: "Events" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex justify-between items-center mix-blend-difference">
      <Link href="/" className="text-xl md:text-2xl font-display font-bold tracking-tighter uppercase text-white">
        Digital<span className="text-accent">Den</span>
      </Link>
      <div className="hidden md:flex gap-8 text-xs font-medium uppercase tracking-[0.2em] text-white items-center">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className={`hover:text-accent transition-colors ${pathname === l.href ? "text-accent" : ""}`}>
            {l.label}
          </Link>
        ))}
        <Link href="/apply" className="px-5 py-1.5 border border-white/30 rounded-full hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all">
          Apply
        </Link>
      </div>
      <button onClick={() => setOpen(!open)} className="md:hidden text-white" aria-label="Menu">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 bg-background border-t border-border md:hidden mix-blend-normal">
          <div className="flex flex-col p-6 gap-4 text-sm uppercase tracking-widest">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={`hover:text-accent ${pathname === l.href ? "text-accent" : ""}`}>
                {l.label}
              </Link>
            ))}
            <Link href="/apply" onClick={() => setOpen(false)} className="text-accent">
              Apply / Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
