"use client";

import { motion } from "framer-motion";
import { WORK } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Media } from "@/components/ui/Media";
import { Icon } from "@/components/ui/Icon";
import { useQuote } from "@/components/providers/QuoteProvider";

export function Showcase() {
  const { open } = useQuote();

  return (
    <section id="work" className="relative scroll-mt-24 bg-primary py-24 sm:py-32">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Project Showcase"
            title="Work delivered, end to end"
            description="Vehicle and fleet wraps, wayfinding systems, exhibition stalls, corporate interiors and wall graphics — produced on our own material and installed by our own crews."
          />
          <button onClick={() => open()} className="btn-primary shrink-0">
            Start Your Project
            <Icon name="arrow" className="h-4 w-4" />
          </button>
        </div>

        <ul className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 lg:grid-cols-3">
          {WORK.map((item, i) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
              className={`group relative overflow-hidden rounded-3xl border border-surface-border ${
                item.feature ? "row-span-2 lg:col-span-2" : ""
              }`}
            >
              <Media
                src={item.src}
                alt={item.alt}
                priority={i === 0}
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                caption={item.title}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-highlight">
                  {item.category}
                </span>
                <h3 className="mt-1 font-display text-lg font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
