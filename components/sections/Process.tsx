"use client";

import { motion } from "framer-motion";
import { PROCESS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

export function Process() {
  return (
    <section id="process" className="section-paper relative scroll-mt-24 py-24 sm:py-32">
      <div className="absolute inset-0 halftone-ink opacity-40" />
      <div className="container-px relative">
        <SectionHeading
          tone="paper"
          eyebrow="How We Execute"
          title="A disciplined 8-step delivery process"
          description="Every project moves through the same controlled pipeline — so a single hoarding and a multi-city rollout get the same rigour."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className="group relative rounded-2xl border border-paper-line bg-paper-raised p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                  <Icon name={p.icon} className="h-5 w-5" />
                </div>
                <span className="font-display text-3xl font-black text-paper-line transition-colors group-hover:text-accent/30">
                  {p.step}
                </span>
              </div>
              <h3 className="mt-4 text-base font-bold text-paper-ink">{p.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-paper-muted">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
