"use client";

import { motion } from "framer-motion";
import { Product } from "@/lib/data";
import { ProductArt } from "@/components/ui/ProductArt";
import { Media } from "@/components/ui/Media";
import { Icon } from "@/components/ui/Icon";
import { useQuote } from "@/components/providers/QuoteProvider";
import { cn } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const { open } = useQuote();

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-paper-line bg-paper-raised shadow-paper transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_30px_60px_-28px_rgba(255,90,30,0.35)]"
    >
      {/* Media — real photo drops over the SVG render */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Media
          src={product.image ?? `/images/products/${product.slug}.jpg`}
          alt={product.name}
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          overlay={false}
          caption={`products/${product.slug}`}
          placeholder={<ProductArt product={product} />}
        />

        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-white/15 bg-primary/70 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-ink backdrop-blur">
            {product.category}
          </span>
        </div>

        <div className="absolute bottom-3 left-4">
          <span
            className={cn(
              "flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold backdrop-blur",
              product.inStock
                ? "bg-emerald-500/20 text-emerald-300"
                : "bg-amber-500/20 text-amber-200"
            )}
          >
            <span className={cn("h-1.5 w-1.5 rounded-full", product.inStock ? "bg-emerald-400" : "bg-amber-400")} />
            {product.inStock ? "In Stock" : "Made to Order"}
          </span>
        </div>
      </div>

      {/* Body (paper) */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold text-paper-ink">{product.name}</h3>
        <p className="mt-1.5 text-sm text-paper-muted">{product.tagline}</p>

        <ul className="mt-5 space-y-2">
          {product.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-paper-ink/80">
              <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {f}
            </li>
          ))}
        </ul>

        {/* Datasheet specs (mono) */}
        <div className="mt-5 grid grid-cols-2 gap-2">
          {product.specs.map((s) => (
            <div key={s.label} className="rounded-xl border border-paper-line bg-paper px-3 py-2">
              <div className="font-mono text-[9px] uppercase tracking-widest text-paper-muted">
                {s.label}
              </div>
              <div className="font-mono text-xs font-semibold text-paper-ink">{s.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {product.applications.map((a) => (
            <span key={a} className="rounded-full border border-paper-line bg-paper px-2.5 py-1 text-[11px] text-paper-muted">
              {a}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-2 rounded-xl border border-accent/20 bg-accent/5 px-3 py-2 text-xs">
          <Icon name="sun" className="h-4 w-4 text-accent" />
          <span className="text-paper-muted">Weather:</span>
          <span className="font-semibold text-paper-ink">{product.weatherResistance}</span>
        </div>

        <button onClick={() => open(product.name)} className="btn-primary mt-6 w-full py-3 text-xs">
          Request Quote
          <Icon name="arrow" className="h-4 w-4" />
        </button>
      </div>
    </motion.article>
  );
}
