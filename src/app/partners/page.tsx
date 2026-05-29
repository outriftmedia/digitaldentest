import type { Metadata } from "next";
import { client } from "@/sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Partners — Digital Den",
  description: "Local, regional and international partners powering the Digital Den ecosystem.",
};

const builder = createImageUrlBuilder({ projectId: "0jkfefce", dataset: "production" });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function urlFor(source: any) {
  return builder.image(source);
}

type Partner = {
  _id: string;
  name: string;
  url?: string;
  category: "Local" | "Regional" | "International";
  order?: number;
  logo?: any;
};

const GROUPS = ["Local", "Regional", "International"] as const;

const FALLBACK_PARTNERS: Partner[] = [
  { _id: "f1", name: "EPIcentar", url: "#", category: "Local" },
  { _id: "f2", name: "UN1QUELY", url: "#", category: "Local" },
  { _id: "f3", name: "Amplitudo", url: "#", category: "Local" },
  { _id: "f4", name: "NTP Crne Gore", url: "#", category: "Local" },
  { _id: "f5", name: "Univerzitet Donja Gorica", url: "#", category: "Local" },
  { _id: "f6", name: "Tehnopolis", url: "#", category: "Local" },
  { _id: "f7", name: "Foundation 787", url: "#", category: "Regional" },
  { _id: "f8", name: "Founder Institute Serbia", url: "#", category: "Regional" },
  { _id: "f9", name: "Western Balkans Startup Alliance", url: "#", category: "Regional" },
  { _id: "f10", name: "Impact Foundation", url: "#", category: "Regional" },
  { _id: "f11", name: "Comeunity Incubator", url: "#", category: "Regional" },
  { _id: "f12", name: "EIT RIS Hub Montenegro", url: "#", category: "Regional" },
  { _id: "f13", name: "Maine Center for Entrepreneurs", url: "#", category: "International" },
  { _id: "f14", name: "Denver Economic Development", url: "#", category: "International" },
  { _id: "f15", name: "University of Denver", url: "#", category: "International" },
  { _id: "f16", name: "University of Maine", url: "#", category: "International" },
  { _id: "f17", name: "CU Boulder", url: "#", category: "International" },
  { _id: "f18", name: "Thunderbird ASU", url: "#", category: "International" },
  { _id: "f19", name: "Roux Institute", url: "#", category: "International" },
  { _id: "f20", name: "Arizona State University", url: "#", category: "International" },
  { _id: "f21", name: "PwC", url: "#", category: "International" },
];

async function getPartners(): Promise<Partner[]> {
  try {
    const data = await client.fetch<Partner[]>(
      `*[_type == "partner"] | order(order asc, name asc) { _id, name, url, category, order, logo }`
    );
    return data.length > 0 ? data : FALLBACK_PARTNERS;
  } catch {
    return FALLBACK_PARTNERS;
  }
}

function PartnerCard({ partner }: { partner: Partner }) {
  const logoUrl = partner.logo
    ? urlFor(partner.logo).auto("format").url()
    : null;

  return (
    <a
      href={partner.url ?? "#"}
      target={partner.url && partner.url !== "#" ? "_blank" : undefined}
      rel="noreferrer"
      className="group relative aspect-square w-full overflow-hidden rounded-xl border border-border hover:border-accent/60 transition-all duration-500 hover-lift block bg-white"
    >
      {logoUrl ? (
        <>
          <div className="absolute inset-0 p-4 transition-transform duration-500 group-hover:scale-[1.03]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoUrl}
              alt={partner.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
            <span className="font-display font-bold uppercase text-[10px] tracking-widest text-white line-clamp-2">
              {partner.name}
            </span>
          </div>
        </>
      ) : (
        <div className="absolute inset-0 bg-surface flex flex-col items-center justify-center text-center p-4 gap-2">
          <div className="size-12 rounded-xl bg-gradient-primary grid place-items-center text-lg font-display font-bold shadow-[0_8px_24px_-8px_var(--color-accent)] group-hover:scale-105 transition-transform duration-500">
            {partner.name[0]}
          </div>
          <span className="font-display font-bold uppercase text-[10px] leading-tight group-hover:text-accent transition-colors line-clamp-2">
            {partner.name}
          </span>
        </div>
      )}
    </a>
  );
}

export default async function PartnersPage() {
  const partners = await getPartners();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <section className="px-6 md:px-10 pt-40 pb-16 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-6 block">— Partners</span>
        <h1 className="text-5xl md:text-8xl font-display font-bold uppercase leading-[0.9] tracking-tighter mb-6">
          A network<br />without borders.
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl">
          Institutions, universities and organisations across four continents that make the Digital Den ecosystem possible.
        </p>
      </section>

      <section className="px-6 md:px-10 pb-28 max-w-7xl mx-auto space-y-20">
        {GROUPS.map((group) => {
          const list = partners.filter((p) => p.category === group);
          if (list.length === 0) return null;
          return (
            <div key={group}>
              <div className="flex items-baseline gap-4 mb-8 border-b border-border pb-4">
                <h2 className="text-3xl md:text-5xl font-display font-bold uppercase">{group}</h2>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {list.length} partner{list.length !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {list.map((p) => (
                  <PartnerCard key={p._id} partner={p} />
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <Footer />
    </div>
  );
}
