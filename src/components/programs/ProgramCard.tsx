"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Rocket, Globe2, Map as MapIcon, Flag, Building2, Users } from "lucide-react";

type Status = "Open" | "Ongoing" | "Closed";
type Program = {
  code: string;
  title: string;
  desc: string;
  status: Status;
  region: string;
  cohorts: string;
  icon: any;
  span?: string;
};

const badge: Record<Status, string> = {
  Open: "bg-accent text-accent-foreground",
  Ongoing: "bg-foreground/10 text-foreground border border-border",
  Closed: "bg-transparent text-muted-foreground border border-border",
};

const dot: Record<Status, string> = {
  Open: "bg-accent shadow-[0_0_12px_var(--color-accent)]",
  Ongoing: "bg-foreground",
  Closed: "bg-muted-foreground/40",
};

const ICONS: Record<string, any> = {
  Rocket,
  Globe2,
  MapIcon,
  Flag,
  Building2,
  Users,
};

export default function ProgramCard({ p, i }: { p: Program; i: number }) {
  const isOpen = p.status === "Open";
  const Icon = ICONS[p.icon] ?? Rocket;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className={p.span ?? ""}
    >
      <Link
        href={isOpen ? "/apply" : "/programs"}
        className="group relative h-full min-h-65 flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface p-7 md:p-9 hover:border-accent/70 hover:-translate-y-1 transition-all duration-500"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className={`size-2 rounded-full ${dot[p.status]}`} />
            <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${badge[p.status]}`}>
              {p.status}
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {p.code} · {p.cohorts}
          </span>
        </div>

  <Icon size={48} strokeWidth={1} className="text-accent my-6 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110" />

        <div>
          <h3 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tighter mb-2 group-hover:text-accent transition-colors">
            {p.title}
          </h3>
          <p className="text-sm text-muted-foreground max-w-md mb-5">{p.desc}</p>

          <div className="flex items-center justify-between pt-4 border-t border-border/60">
            <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/70">{p.region}</span>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-accent">
              {isOpen ? "Apply" : "Details"}
              <ArrowUpRight size={14} className="transition-transform group-hover:rotate-45" />
            </span>
          </div>
        </div>

        <div className="pointer-events-none absolute -bottom-24 -right-24 size-56 bg-accent/15 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </Link>
    </motion.div>
  );
}
