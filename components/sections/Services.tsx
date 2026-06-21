"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";
import { useQuote } from "@/components/providers/QuoteProvider";

export function Services() {
  const { open } = useQuote();

  return (
    <section id="services" className="relative scroll-mt-24 bg-primary py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-orange-fade opacity-40" />
      <div className="container-px relative">
        <SectionHeading
          eyebrow="Our Capabilities"
          title="Seven services. One execution partner."
          description="Each capability stands on its own — and together they deliver advertising projects of any scale without a single hand-off to an outside vendor."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-surface-border bg-surface-raised transition-all duration-500 hover:-translate-y-1 hover:border-accent/40"
            >
              {/* Image header */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Media
                  src={s.image}
                  alt={s.name}
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  overlay={false}
                  caption={s.image.replace("/images/", "")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-raised via-surface-raised/30 to-transparent" />
                <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-primary/70 text-highlight backdrop-blur">
                  <Icon name={s.icon} className="h-5 w-5" />
                </div>
                <span className="absolute right-4 top-4 font-mono text-xs text-ink/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold text-white">
                  {s.name}
                </h3>
                <p className="mt-1.5 text-sm text-muted">{s.tagline}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-300"
                    >
                      {it}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => open(s.name)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-highlight transition hover:gap-3"
                >
                  Request this service
                  <Icon name="arrow" className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}

          {/* CTA tile */}
          <div className="relative flex flex-col justify-center overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/20 via-surface-raised to-primary p-7">
            <h3 className="font-display text-xl font-bold text-white">
              Need more than one?
            </h3>
            <p className="mt-2 text-sm text-ink/80">
              Bundle supply, print, branding and installation into a single
              managed project.
            </p>
            <button onClick={() => open()} className="btn-primary mt-5 w-full">
              Plan My Project
              <Icon name="arrow" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
