"use client";

import { motion } from "framer-motion";
import { TOOL_SOLUTIONS, AAYUDH } from "@/lib/tools";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Media } from "@/components/ui/Media";
import { Icon } from "@/components/ui/Icon";

/**
 * Problem-led, not product-led. A plant does not shop for "an end mill" — it
 * has a cycle time, a chip-flow problem or a tooling budget it needs to fix.
 *
 * Any performance figure here renders inside an attributed block so it reads as
 * Aayudh's stated claim, never as our guarantee.
 */
export function ToolsSolutions() {
  return (
    <section id="solutions" className="relative scroll-mt-24 bg-primary py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 halftone opacity-30" />

      <div className="container-px relative">
        <SectionHeading
          eyebrow="Engineering Problems"
          title="What the tooling is actually solving"
          description="Four situations that come up on almost every shop floor — and the tooling approach for each."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {TOOL_SOLUTIONS.map((s, i) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="flex flex-col overflow-hidden rounded-3xl border border-surface-border bg-surface-raised/60"
            >
              <div className="relative h-48 border-b border-surface-border bg-[#0f0d0a]">
                <Media
                  src={s.image}
                  alt={s.imageAlt}
                  overlay={false}
                  className="absolute inset-0"
                  imgClassName="object-contain p-4"
                  caption={s.title}
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                  <Icon name="spark" className="h-3.5 w-3.5" />
                  {s.problem}
                </p>

                <h3 className="mt-3 font-display text-xl font-extrabold text-white">
                  {s.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>

                {s.claim && (
                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted/70">
                      Stated by {AAYUDH.brand}
                    </p>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/85">
                      {s.claim}
                    </p>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
