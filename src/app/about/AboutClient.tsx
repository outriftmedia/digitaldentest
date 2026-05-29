"use client";
import { motion } from "motion/react";
import { PortableText } from "@portabletext/react";
import type { AboutData, Person } from "./page";

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

/* Portrait card — DD Team */
function TeamCard({ person, index = 0 }: { person: Person; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      {/* Photo */}
      <div className="relative aspect-3/4 overflow-hidden rounded-xl mb-4 bg-surface border border-border group-hover:border-accent/50 transition-colors duration-500">
        {person.photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={person.photoUrl} alt={person.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <div className="w-full h-full bg-gradient-primary grid place-items-center text-4xl font-display font-bold">
            {person.name[0]}
          </div>
        )}
        {/* LinkedIn overlay */}
        {person.linkedin && (
          <a
            href={person.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`${person.name} LinkedIn`}
            className="absolute bottom-3 right-3 size-9 grid place-items-center rounded-full bg-background/80 backdrop-blur border border-border text-muted-foreground hover:border-accent hover:text-accent transition-all opacity-0 group-hover:opacity-100 duration-300"
          >
            <LinkedInIcon />
          </a>
        )}
      </div>
      {/* Info */}
      <h3 className="font-display font-bold uppercase text-base leading-tight group-hover:text-accent transition-colors">
        {person.name}
      </h3>
      {person.designation && (
        <p className="font-mono text-[10px] uppercase tracking-widest text-accent mt-1">
          {person.designation}
        </p>
      )}
    </motion.div>
  );
}

/* Editorial horizontal card — Advisory Board */
function AdvisoryCard({ person, index = 0 }: { person: Person; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group grid grid-cols-[auto_1fr] gap-6 py-8 border-b border-border last:border-0 items-start"
    >
      {/* Photo */}
      <div className="size-20 md:size-24 rounded-xl overflow-hidden border border-border group-hover:border-accent/50 transition-colors duration-500 shrink-0">
        {person.photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={person.photoUrl} alt={person.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="w-full h-full bg-gradient-primary grid place-items-center text-2xl font-display font-bold">
            {person.name[0]}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1">
        <div className="flex items-start justify-between gap-4 mb-2">
          <div>
            <h3 className="font-display font-bold uppercase text-xl md:text-2xl leading-tight group-hover:text-accent transition-colors">
              {person.name}
            </h3>
            {person.designation && (
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent mt-1">
                {person.designation}
              </p>
            )}
          </div>
          {person.linkedin && (
            <a
              href={person.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`${person.name} LinkedIn`}
              className="shrink-0 size-9 grid place-items-center rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
            >
              <LinkedInIcon />
            </a>
          )}
        </div>
        {person.description && (
          <p className="text-sm text-muted-foreground leading-relaxed">{person.description}</p>
        )}
      </div>
    </motion.div>
  );
}

export function AboutClient({ data }: { data: AboutData }) {
  return (
    <>
      {/* HERO */}
      <section className="px-6 md:px-10 pt-40 pb-20 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-6 block">— About</span>
        <h1 className="text-5xl md:text-8xl font-display font-bold uppercase leading-[0.9] tracking-tighter">
          Rub<br />the Hub.
        </h1>
      </section>

      {/* ABOUT */}
      <section className="px-6 md:px-10 pb-28 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-6 block">— 01 / What is Digital Den</span>
            {data.definition ? (
              <div className="text-base md:text-lg text-muted-foreground leading-relaxed [&_strong]:text-foreground [&_strong]:font-bold [&_em]:italic [&_p]:mb-4 last:[&_p]:mb-0">
                <PortableText value={data.definition} />
              </div>
            ) : (
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Digital Den is a startup launch platform and venture studio. We build alongside founders — from the first idea to international markets — through programs, capital access and a network spanning four continents.
              </p>
            )}
          </div>

          <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-surface">
            {data.imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={data.imageUrl} alt="Digital Den" className="w-full h-full object-cover" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Add image in Studio</span>
              </div>
            )}
            <div className="absolute inset-0 bg-linear-to-t from-background/30 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* DD TEAM */}
      <section className="px-6 md:px-10 py-20 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-4 block">— 02 / DD Team</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase leading-[0.95]">
              People behind<br />Digital Den.
            </h2>
          </div>
          {data.ddTeam.length === 0 ? (
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground py-8">
              Add DD Team members in the Studio.
            </p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {data.ddTeam.map((p, i) => (
                <TeamCard key={p._id} person={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ADVISORY BOARD */}
      <section className="px-6 md:px-10 py-20 max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-4 block">— 03 / Advisory Board</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase leading-[0.95]">
            Our advisory<br />board.
          </h2>
        </div>
        {data.advisoryBoard.length === 0 ? (
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground py-8">
            Add Advisory Board members in the Studio.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {data.advisoryBoard.map((p, i) => (
              <AdvisoryCard key={p._id} person={p} index={i} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
