"use client";

import { motion } from "framer-motion";
import { DIVISIONS } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Media } from "@/components/ui/Media";
import { Icon } from "@/components/ui/Icon";

/**
 * Two-division gateway on the homepage.
 *
 * The company sells to two audiences that share almost nothing: a brand buying
 * printed media, and a plant buying cutting tools. Rather than blend them into
 * one product wall, this band sends each visitor to the right division within
 * the first screen of scroll.
 */

const CARDS = [
  {
    ...DIVISIONS[0],
    image: "/images/work/big-bold-printing.jpg",
    imageAlt:
      "Large-format printed graphics being produced for an outdoor advertising campaign.",
    points: ["Flex · Vinyl · Inks · ACP", "Printing & Fabrication", "Installation & Upkeep"],
    cta: "Explore Signage Media",
    isCurrent: true,
  },
  {
    ...DIVISIONS[1],
    image: "/images/tools/hero-carbide-tools.jpg",
    imageAlt:
      "Group of solid carbide cutting tools including coated step drills and a form cutter.",
    points: ["Solid Carbide · HSS · Brazed", "Special & Form Tools", "Re-New Reconditioning"],
    cta: "Explore Cutting Tools",
    isCurrent: false,
  },
];

export function Divisions() {
  return (
    <section
      id="divisions"
      className="relative scroll-mt-24 border-y border-white/10 bg-secondary py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 halftone opacity-30" />

      <div className="container-px relative">
        <SectionHeading
          eyebrow="Two Divisions"
          title="One company, two supply businesses"
          description="Onkar AP Signages supplies the advertising industry with print and signage material — and now supplies manufacturing plants with industrial cutting tools as authorised distributor for Aayudh Tools."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {CARDS.map((d, i) => (
            <motion.article
              key={d.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-surface-border bg-surface-raised/60"
            >
              <div className="relative h-52 sm:h-64">
                <Media
                  src={d.image}
                  alt={d.imageAlt}
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  caption={d.name}
                />
                <div className="absolute left-5 top-5 flex items-center gap-3">
                  <span className="rounded-lg bg-primary/80 px-2.5 py-1 font-mono text-[11px] font-semibold tracking-[0.2em] text-accent backdrop-blur">
                    DIVISION {d.number}
                  </span>
                  {!d.isCurrent && (
                    <span className="rounded-lg bg-accent px-2.5 py-1 font-mono text-[11px] font-bold tracking-[0.15em] text-white">
                      NEW
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-highlight">
                    <Icon name={d.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-2xl font-extrabold text-white">
                    {d.name}
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted">{d.tagline}</p>

                <ul className="mt-5 space-y-2">
                  {d.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-sm text-white/85">
                      <Icon name="check" className="h-4 w-4 shrink-0 text-accent" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted/80">
                  {d.audience}
                </p>

                <a
                  href={d.isCurrent ? "#services" : d.href}
                  className={
                    d.isCurrent
                      ? "btn-ghost mt-6 w-full text-xs"
                      : "btn-primary mt-6 w-full text-xs"
                  }
                >
                  {d.cta}
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
