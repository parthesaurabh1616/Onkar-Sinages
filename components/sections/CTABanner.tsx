"use client";

import { motion } from "framer-motion";
import { useQuote } from "@/components/providers/QuoteProvider";
import { Icon } from "@/components/ui/Icon";

export function CTABanner() {
  const { open } = useQuote();
  return (
    <section className="relative py-20">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-4xl border border-accent/20 bg-gradient-to-br from-accent/15 via-secondary to-primary p-10 text-center sm:p-16"
        >
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
          <div className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-[640px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-section font-bold text-gradient">
              Planning a branding, signage or printing project?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              From material supply to installation, we deliver it under one roof
              across Maharashtra — on quality and on time.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button onClick={() => open()} className="btn-primary">
                Request Quote
                <Icon name="arrow" className="h-4 w-4" />
              </button>
              <a href="/catalogue" className="btn-ghost">
                <Icon name="download" className="h-4 w-4" />
                Download Product Catalogue
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
