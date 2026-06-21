"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { useQuote } from "@/components/providers/QuoteProvider";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { open: openQuote } = useQuote();

  return (
    <section id="faq" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-px grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="FAQ"
            title="Answers for buyers and distributors"
            description="Everything you need to know about ordering, delivery and specifications."
          />
          <div className="mt-8 rounded-3xl border border-accent/15 bg-accent/5 p-6">
            <p className="text-sm text-muted">Still have a question?</p>
            <h4 className="mt-1 text-lg font-bold text-white">
              Talk to our supply desk
            </h4>
            <button onClick={() => openQuote()} className="btn-primary mt-4 py-2.5 text-xs">
              Request a Quote
              <Icon name="arrow" className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-white/10 bg-surface-raised/40"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-base font-semibold text-white">
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 transition-all ${
                      isOpen ? "rotate-45 border-accent bg-accent text-white" : "text-muted"
                    }`}
                  >
                    <Icon name="plus" className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
