"use client";

import { motion } from "framer-motion";
import {
  TOOL_INDUSTRIES,
  TOOL_MATERIALS,
  TOOL_SERVICES,
  TOOL_WHY_US,
} from "@/lib/tools";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Media } from "@/components/ui/Media";
import { Icon } from "@/components/ui/Icon";

export function ToolsIndustries() {
  return (
    <section id="industries" className="relative scroll-mt-24 bg-primary py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 halftone opacity-25" />

      <div className="container-px relative">
        <SectionHeading
          eyebrow="Applications"
          title="Where this tooling is used"
          description="Oil and gas, automotive and general engineering are where we supply day to day. Aerospace and medical are named in Aayudh's own material as segments served."
        />

        {/*
          The first entry runs full width as the lead segment; the rest sit in a
          row of four beneath it. Five equal columns would crowd the titles and
          would not show which segment we actually lead with.
        */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TOOL_INDUSTRIES.map((ind, i) => {
            const lead = i === 0;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className={
                  lead
                    ? "relative overflow-hidden rounded-3xl border border-accent/30 sm:col-span-2 lg:col-span-4"
                    : "rounded-3xl border border-surface-border bg-surface-raised/60 p-6"
                }
              >
                {lead && (
                  <>
                    <Media
                      src="/images/tools/oil-gas/refinery-twilight.jpg"
                      alt="Petrochemical refinery lit at twilight, the kind of plant the components this tooling machines end up in."
                      overlay={false}
                      className="absolute inset-0"
                    />
                    {/* Keeps the copy legible over a busy, high-contrast photo. */}
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-r from-primary via-primary/92 to-primary/55"
                    />
                  </>
                )}

                <div className={lead ? "relative p-7 sm:p-9" : ""}>
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl border text-highlight ${
                      lead
                        ? "border-accent/40 bg-accent/15"
                        : "border-accent/20 bg-accent/10"
                    }`}
                  >
                    <Icon name={ind.icon} className="h-5 w-5" />
                  </span>
                  <h3
                    className={`mt-4 font-display font-bold text-white ${
                      lead ? "text-2xl sm:text-3xl" : "text-lg"
                    }`}
                  >
                    {ind.name}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed text-muted ${
                      lead ? "max-w-2xl sm:text-base" : ""
                    }`}
                  >
                    {ind.desc}
                  </p>

                  {lead && (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {["Duplex Stainless", "Inconel", "Titanium"].map((m) => (
                        <li
                          key={m}
                          className="rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-highlight"
                        >
                          {m}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/*
          Sector context, not our work. These are illustrative photographs of the
          industry the tooling serves — labelled as such so nothing reads as a
          project we executed.
        */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              src: "/images/tools/oil-gas/offshore-platform.jpg",
              alt: "Offshore oil and gas production platform with a supply vessel alongside.",
              label: "Upstream · Offshore",
            },
            {
              src: "/images/tools/oil-gas/refinery-waterfront.jpg",
              alt: "Refinery complex lit at dusk along a waterfront.",
              label: "Downstream · Refining",
            },
            {
              src: "/images/tools/oil-gas/rig-floor.jpg",
              alt: "Drilling rig structure and handling equipment seen from above.",
              label: "Drilling Equipment",
            },
          ].map((img) => (
            <figure
              key={img.src}
              className="relative h-40 overflow-hidden rounded-2xl border border-surface-border"
            >
              <Media src={img.src} alt={img.alt} className="absolute inset-0" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 font-mono text-[10px] uppercase tracking-[0.18em] text-white/85">
                {img.label}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-3 text-[11px] leading-relaxed text-muted/60">
          Sector imagery shown for context. These are illustrative photographs of
          the oil and gas industry, not projects executed by Onkar AP Signages.
        </p>

        {/* --- Materials -------------------------------------------------- */}
        <div className="mt-16 rounded-3xl border border-surface-border bg-surface-raised/40 p-6 sm:p-8">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            Materials machined
          </h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {TOOL_MATERIALS.map((m) => (
              <li
                key={m}
                className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-white/85"
              >
                {m}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-muted/80">
            Tooling is selected against the material and the operation — the
            corrosion-resistant and high-strength alloys that dominate oil and gas
            work are the same ones this range is built around. Tell us what you are
            cutting and we will come back with a recommendation.
          </p>
        </div>

        {/* --- Services --------------------------------------------------- */}
        <div className="mt-20">
          <h3 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
            What we handle
          </h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TOOL_SERVICES.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
                className="flex gap-4 rounded-2xl border border-surface-border bg-surface-raised/50 p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-highlight">
                  <Icon name={s.icon} className="h-4.5 w-4.5" />
                </span>
                <div>
                  <h4 className="font-display text-base font-bold text-white">
                    {s.name}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- Why buy through us ----------------------------------------- */}
        <div className="mt-20">
          <h3 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
            Why buy through Onkar
          </h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TOOL_WHY_US.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
                className="rounded-2xl border border-surface-border bg-surface-raised/50 p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-highlight">
                  <Icon name={w.icon} className="h-4.5 w-4.5" />
                </span>
                <h4 className="mt-4 font-display text-base font-bold text-white">
                  {w.title}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
