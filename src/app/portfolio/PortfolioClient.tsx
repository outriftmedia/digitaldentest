"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PortableText } from "@portabletext/react";
import { X, ArrowUpRight, Users } from "lucide-react";
import type { Startup, TeamMember } from "./page";


function StartupModal({ startup, onClose }: { startup: Startup; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full sm:max-w-3xl bg-surface border border-border rounded-t-2xl sm:rounded-2xl overflow-hidden max-h-[92vh] flex flex-col"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 size-9 grid place-items-center rounded-full bg-background/70 backdrop-blur border border-border hover:border-accent hover:text-accent transition-colors"
          >
            <X size={15} />
          </button>

          {/* Cover image at top of modal */}
          {startup.coverImageUrl ? (
            <div className="relative h-56 shrink-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={startup.coverImageUrl} alt={startup.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-surface to-transparent" />
            </div>
          ) : startup.logoUrl ? (
            <div className="h-40 shrink-0 bg-white flex items-center justify-center p-8 border-b border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={startup.logoUrl} alt={startup.name} className="max-h-full max-w-full object-contain" />
            </div>
          ) : (
            <div className="h-28 shrink-0 bg-background border-b border-border flex items-center justify-center">
              <div className="size-16 rounded-2xl bg-gradient-primary grid place-items-center text-2xl font-display font-bold">
                {startup.name[0]}
              </div>
            </div>
          )}

          {/* Scrollable body */}
          <div className="overflow-y-auto flex flex-col gap-6 p-6 md:p-8 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-accent/40 [&::-webkit-scrollbar-thumb]:rounded-full">

            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                {startup.logoUrl && (
                  <div className="size-14 rounded-xl bg-white flex items-center justify-center p-1.5 shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={startup.logoUrl} alt="" className="w-full h-full object-contain" />
                  </div>
                )}
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold uppercase leading-tight">
                    {startup.name}
                  </h2>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {startup.mtsb && (
                      <span className="font-mono text-[10px] uppercase tracking-widest text-accent border border-accent/40 px-2 py-0.5 rounded-full">
                        {startup.mtsb}
                      </span>
                    )}
                    {startup.teamSize && (
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-1">
                        <Users size={10} /> {startup.teamSize}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              {startup.url && (
                <a
                  href={startup.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group shrink-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent border border-accent/40 px-4 py-2 rounded-full hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
                >
                  Visit <ArrowUpRight size={12} className="group-hover:rotate-45 transition-transform" />
                </a>
              )}
            </div>

            {/* Description */}
            {startup.description && (
              <div className="text-sm md:text-base text-muted-foreground leading-relaxed [&_strong]:text-foreground [&_strong]:font-bold [&_em]:italic [&_p]:mb-3 last:[&_p]:mb-0">
                <PortableText value={startup.description} />
              </div>
            )}

            {/* Team Members */}
            {startup.teamMembers && startup.teamMembers.length > 0 && (
              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-4">— Our Team</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {startup.teamMembers.map((m, i) => (
                    <TeamMemberCard key={i} member={m} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <div className="size-16 rounded-full overflow-hidden border border-border bg-surface shrink-0">
        {member.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-primary grid place-items-center text-lg font-display font-bold">
            {member.name[0]}
          </div>
        )}
      </div>
      <div>
        <p className="font-display font-bold text-sm uppercase leading-tight">{member.name}</p>
        {member.designation && (
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">
            {member.designation}
          </p>
        )}
      </div>
    </div>
  );
}

function StartupCard({ startup, onClick }: { startup: Startup; onClick: () => void }) {
  return (
    <article
      onClick={onClick}
      className="group glass-card overflow-hidden hover:border-accent/60 transition-all duration-500 hover-lift flex flex-col cursor-pointer"
    >
      {/* Logo */}
      <div className="h-32 bg-white flex items-center justify-center p-4 shrink-0">
        {startup.logoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={startup.logoUrl} alt={startup.name} className="w-full h-full object-contain" />
        ) : (
          <div className="size-12 rounded-xl bg-gradient-primary grid place-items-center text-lg font-display font-bold">
            {startup.name[0]}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3 flex flex-col gap-1.5">
        <div className="flex items-start justify-between gap-1">
          <h3 className="font-display text-sm font-bold uppercase group-hover:text-accent transition-colors leading-tight">
            {startup.name}
          </h3>
          <ArrowUpRight size={12} className="text-accent shrink-0 group-hover:rotate-45 transition-transform mt-0.5" />
        </div>
        <div className="flex items-center justify-between gap-1 flex-wrap">
          {startup.mtsb && (
            <span className="font-mono text-[9px] uppercase tracking-widest text-accent border border-accent/40 px-1.5 py-0.5 rounded-full">
              {startup.mtsb}
            </span>
          )}
          {startup.teamSize ? (
            <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground flex items-center gap-1 ml-auto">
              <Users size={9} /> {startup.teamSize}
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function PortfolioClient({ startups }: { startups: Startup[] }) {
  const [selected, setSelected] = useState<Startup | null>(null);

  return (
    <>
      <section className="px-6 md:px-10 pt-40 pb-16 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-6 block">— Portfolio</span>
        <h1 className="text-5xl md:text-8xl font-display font-bold uppercase leading-[0.9] tracking-tighter mb-10">
          Startups<br />we back.
        </h1>
      </section>

      <section className="px-6 md:px-10 pb-28 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {startups.map((s, i) => (
            <motion.div
              key={s._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <StartupCard startup={s} onClick={() => setSelected(s)} />
            </motion.div>
          ))}
        </div>
      </section>

      {selected && <StartupModal startup={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
