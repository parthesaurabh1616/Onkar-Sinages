"use client";

import { motion } from "framer-motion";
import { ECOSYSTEM } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative scroll-mt-24 bg-primary py-24 sm:py-32">
      <div className="absolute inset-0 halftone opacity-30" />
      <div className="container-px relative">
        <SectionHeading
          align="center"
          eyebrow="The Complete Ecosystem"
          title="One partner, the entire advertising chain"
          description="Most brands juggle a supplier, a printer, a fabricator and an installer. We are all of them — a single accountable pipeline from raw material to maintained asset."
        />

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-[34px] hidden h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent lg:block" />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {ECOSYSTEM.map((stage, i) => (
              <motion.div
                key={stage.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative text-center"
              >
                <div className="relative mx-auto flex h-[68px] w-[68px] items-center justify-center rounded-2xl border border-surface-border bg-surface-raised text-highlight transition-all duration-500 group-hover:-translate-y-1 group-hover:border-accent/50 group-hover:text-white">
                  <Icon name={stage.icon} className="h-7 w-7" />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent font-mono text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-bold text-white">{stage.name}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  {stage.desc}
                </p>
                {i < ECOSYSTEM.length - 1 && (
                  <Icon
                    name="arrow"
                    className="mx-auto mt-3 h-4 w-4 text-accent/50 lg:hidden"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
