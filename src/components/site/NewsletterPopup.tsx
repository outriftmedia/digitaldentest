"use client";
import { useEffect, useState } from "react";
import { X, Rocket } from "lucide-react";

const KEY = "dd_newsletter_dismissed_v1";

export function NewsletterPopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("startup");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(KEY)) return;
    const t = setTimeout(() => setOpen(true), 6000);
    return () => clearTimeout(t);
  }, []);

  function close() {
    setOpen(false);
    try { localStorage.setItem(KEY, "1"); } catch {}
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setDone(true);
    setTimeout(close, 1500);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-4 md:p-6 bg-background/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-surface border border-border rounded-2xl p-8 shadow-elegant" style={{ boxShadow: "var(--shadow-elegant)" }}>
        <button onClick={close} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground" aria-label="Close">
          <X size={18} />
        </button>
        <div className="size-12 grid place-items-center rounded-full bg-gradient-primary mb-5">
          <Rocket size={20} className="text-white" />
        </div>
        <h3 className="font-display text-2xl font-bold mb-2">Stay in the loop</h3>
        <p className="text-muted-foreground text-sm mb-6">
          Programs, portfolio updates and events — straight to your inbox.
        </p>
        {done ? (
          <p className="text-accent text-sm">Thanks — you're subscribed.</p>
        ) : (
          <form onSubmit={submit} className="space-y-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full px-4 py-3 bg-background border border-border rounded-md text-sm focus:outline-none focus:border-accent"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 bg-background border border-border rounded-md text-sm focus:outline-none focus:border-accent"
            >
              <option value="startup">I'm a startup</option>
              <option value="partner">I'm a partner</option>
              <option value="investor">I'm an investor</option>
              <option value="other">Other</option>
            </select>
            <button type="submit" className="w-full py-3 bg-accent text-accent-foreground rounded-md font-bold uppercase text-xs tracking-widest hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
