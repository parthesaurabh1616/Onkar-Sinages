"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PRODUCTS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Flex Rolls", "Vinyl", "Inks", "Lamination", "ACP", "Boards & Sheets", "LED & Signage", "Display", "Consumables"];

export function Products() {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(
    () =>
      category === "All"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === category),
    [category]
  );

  return (
    <section id="products" className="section-paper relative scroll-mt-24 py-24 sm:py-32">
      <div className="absolute inset-0 halftone-ink opacity-40" />
      <div className="container-px relative">
        <SectionHeading
          tone="paper"
          eyebrow="Our Material Range"
          title="Every material your print floor runs on"
          description="Outdoor-grade flex, conformable vinyl, vivid inks, lamination, ACP and consumables — stocked in depth and dispatched fast."
        />

        {/* Category filter */}
        <div className="mt-10 flex flex-wrap items-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition",
                category === c
                  ? "border-accent bg-accent text-white"
                  : "border-paper-line bg-paper-raised text-paper-muted hover:border-accent/40 hover:text-paper-ink"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
