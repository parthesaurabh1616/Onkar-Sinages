"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { TOOL_CATEGORIES, TOOL_PRODUCTS } from "@/lib/tools";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Media } from "@/components/ui/Media";
import { Icon } from "@/components/ui/Icon";
import { useQuote } from "@/components/providers/QuoteProvider";

/**
 * The range, in two passes: the four families first, then the individual tools
 * filtered by family. Filtering is client-side over a small array — no need for
 * routing or a search index at this catalogue size.
 */
export function ToolsRange() {
  const [active, setActive] = useState<string>("all");
  const { open } = useQuote();

  const products = useMemo(
    () =>
      active === "all"
        ? TOOL_PRODUCTS
        : TOOL_PRODUCTS.filter((p) => p.category === active),
    [active]
  );

  const filters = [
    { slug: "all", name: "All Tools", count: TOOL_PRODUCTS.length },
    ...TOOL_CATEGORIES.map((c) => ({
      slug: c.slug,
      name: c.name,
      count: TOOL_PRODUCTS.filter((p) => p.category === c.slug).length,
    })),
  ];

  return (
    <section id="range" className="relative scroll-mt-24 bg-paper py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 halftone-ink opacity-60" />

      <div className="container-px relative">
        <SectionHeading
          tone="paper"
          eyebrow="The Range"
          title="Four families, one supply point"
          description="Standard geometries where a catalogue size fits, and ground-to-drawing tooling where it does not."
        />

        {/* --- Families ---------------------------------------------------- */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {TOOL_CATEGORIES.map((cat, i) => (
            <motion.article
              key={cat.slug}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-paper-line bg-paper-raised shadow-paper"
            >
              <div className="relative h-44 border-b border-paper-line bg-white">
                <Media
                  src={cat.image}
                  alt={cat.imageAlt}
                  overlay={false}
                  className="absolute inset-0"
                  imgClassName="object-contain p-4 transition-transform duration-700 group-hover:scale-[1.04]"
                  caption={cat.name}
                />
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-extrabold text-paper-ink">
                  {cat.name}
                </h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                  {cat.tagline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-paper-muted">
                  {cat.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {cat.types.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-paper-line bg-paper px-3 py-1 text-[11px] font-medium text-paper-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setActive(cat.slug)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-paper-ink transition hover:text-accent"
                >
                  View {cat.name.toLowerCase()}
                  <Icon name="arrow" className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* --- Individual tools -------------------------------------------- */}
        <div className="mt-20">
          <h3 className="font-display text-2xl font-extrabold text-paper-ink sm:text-3xl">
            Tools in the range
          </h3>

          <div
            role="tablist"
            aria-label="Filter tools by family"
            className="mt-6 flex flex-wrap gap-2"
          >
            {filters.map((f) => {
              const on = active === f.slug;
              return (
                <button
                  key={f.slug}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(f.slug)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    on
                      ? "border-accent bg-accent text-white"
                      : "border-paper-line bg-paper-raised text-paper-muted hover:border-accent/50 hover:text-paper-ink"
                  }`}
                >
                  {f.name}
                  <span className={`ml-2 font-mono text-[11px] ${on ? "text-white/70" : "text-paper-muted/70"}`}>
                    {f.count}
                  </span>
                </button>
              );
            })}
          </div>

          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <motion.li
                key={p.slug}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(i, 5) * 0.05 }}
                className="flex flex-col overflow-hidden rounded-3xl border border-paper-line bg-paper-raised shadow-paper"
              >
                <div className="relative h-56 border-b border-paper-line bg-white">
                  <Media
                    src={p.image}
                    alt={p.imageAlt}
                    overlay={false}
                    className="absolute inset-0"
                    imgClassName="object-contain p-5"
                    caption={p.name}
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h4 className="font-display text-lg font-bold text-paper-ink">
                    {p.name}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-paper-muted">
                    {p.summary}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {p.operations.map((o) => (
                      <li
                        key={o}
                        className="rounded-md bg-paper px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-paper-muted"
                      >
                        {o}
                      </li>
                    ))}
                  </ul>

                  {/* No fabricated spec table — these are ground to drawing. */}
                  <p className="mt-4 flex gap-2 rounded-xl border border-paper-line bg-paper p-3 text-[11px] leading-relaxed text-paper-muted">
                    <Icon name="compass" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                    {p.specNote}
                  </p>

                  <button
                    onClick={() => open(`Cutting Tools — ${p.name}`)}
                    className="mt-auto pt-5 text-left text-sm font-semibold text-accent transition hover:text-orange-deep"
                  >
                    Request a quotation →
                  </button>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
