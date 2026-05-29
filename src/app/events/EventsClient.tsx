"use client";
import { useState } from "react";
import { Calendar, Users, MapPin, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PortableText } from "@portabletext/react";
import type { Event } from "./page";

function plainText(blocks: any[]): string {
  if (!Array.isArray(blocks)) return "";
  return blocks
    .map((b) => b.children?.map((c: any) => c.text).join("") ?? "")
    .join(" ");
}

const tabs = ["Digital Den Connects", "Others", "Upcoming"] as const;
type Tab = (typeof tabs)[number];

function EventModal({ event, onClose }: { event: Event; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

        {/* Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full sm:max-w-2xl bg-surface border border-border rounded-t-2xl sm:rounded-2xl overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 size-9 grid place-items-center rounded-full bg-background/60 backdrop-blur border border-border hover:border-accent hover:text-accent transition-colors"
          >
            <X size={16} />
          </button>

          {/* Cover image */}
          {event.imageUrl ? (
            <div className="relative h-56 shrink-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface to-transparent" />
            </div>
          ) : (
            <div className="h-32 shrink-0 bg-background flex items-center justify-center border-b border-border">
              {event.category === "Others"
                ? <Users size={36} className="text-accent/30" />
                : <Calendar size={36} className="text-accent/30" />}
            </div>
          )}

          {/* Content */}
          <div className="overflow-y-auto p-6 md:p-8 flex flex-col gap-4 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-accent/40 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-accent/70">
            <div className="flex flex-wrap gap-2 items-center">
              {(event.date) && (
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent border border-accent/30 px-2.5 py-1 rounded-full">
                  {event.date}
                </span>
              )}
              {event.vertical && (
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground border border-border px-2.5 py-1 rounded-full">
                  {event.vertical}
                </span>
              )}
              {event.location && (
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-1">
                  <MapPin size={10} /> {event.location}
                </span>
              )}
            </div>

            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase leading-tight">
              {event.title}
            </h2>

            {event.description && (
              <div className="text-sm md:text-base text-muted-foreground leading-relaxed prose prose-invert prose-sm max-w-none [&_strong]:text-foreground [&_strong]:font-bold [&_em]:italic [&_p]:mb-3 last:[&_p]:mb-0">
                <PortableText value={event.description} />
              </div>
            )}

            <button
              onClick={onClose}
              className="mt-2 self-start inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent border-b border-accent pb-0.5 hover:gap-3 transition-all"
            >
              Close <ArrowUpRight size={12} />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function EventCard({ event, onClick }: { event: Event; onClick: () => void }) {
  return (
    <article
      onClick={onClick}
      className="group glass-card overflow-hidden hover:border-accent/60 transition-all duration-500 hover-lift flex flex-col cursor-pointer"
    >
      {event.imageUrl ? (
        <div className="relative h-48 overflow-hidden bg-surface shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background/60 to-transparent" />
        </div>
      ) : (
        <div className="h-40 bg-surface flex items-center justify-center border-b border-border shrink-0">
          {event.category === "Others"
            ? <Users size={28} className="text-accent/30" />
            : <Calendar size={28} className="text-accent/30" />}
        </div>
      )}

      <div className="p-5 flex flex-col flex-1 gap-2">
        {(event.date || event.vertical) && (
          <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
            {event.vertical ?? event.date}
          </span>
        )}
        <h3 className="font-display text-lg font-bold uppercase group-hover:text-accent transition-colors leading-tight">
          {event.title}
        </h3>
        {event.description && (
          <p className="text-xs text-muted-foreground line-clamp-2 flex-1">
            {plainText(event.description)}
          </p>
        )}
        {event.location && (
          <div className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-1">
            <MapPin size={10} /> {event.location}
          </div>
        )}
        <span className="text-[10px] font-mono uppercase tracking-widest text-accent/60 group-hover:text-accent transition-colors mt-1">
          Read more →
        </span>
      </div>
    </article>
  );
}

export function EventsClient({ events }: { events: Event[] }) {
  const [tab, setTab] = useState<Tab>("Digital Den Connects");
  const [selected, setSelected] = useState<Event | null>(null);
  const filtered = events.filter((e) => e.category === tab);

  return (
    <>
      <section className="px-6 md:px-10 pt-40 pb-12 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-6 block">— Events</span>
        <h1 className="text-5xl md:text-8xl font-display font-bold uppercase leading-[0.9] tracking-tighter mb-10">
          Where the<br />ecosystem meets.
        </h1>
        <div className="flex flex-wrap gap-2 border-b border-border">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-3 text-xs font-bold uppercase tracking-widest transition-colors border-b-2 -mb-px ${
                tab === t
                  ? "border-accent text-accent"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
              <span className="ml-2 font-mono text-[9px] opacity-50">
                {events.filter((e) => e.category === t).length}
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 pb-28 max-w-7xl mx-auto">
        {filtered.length === 0 ? (
          <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest py-12">
            No {tab.toLowerCase()} events yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filtered.map((e) => (
              <EventCard key={e._id} event={e} onClick={() => setSelected(e)} />
            ))}
          </div>
        )}
      </section>

      {selected && (
        <EventModal event={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
