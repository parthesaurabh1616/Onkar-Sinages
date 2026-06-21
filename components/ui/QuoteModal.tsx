"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { LeadForm } from "@/components/ui/LeadForm";
import { Icon } from "@/components/ui/Icon";

export function QuoteModal({
  isOpen,
  onClose,
  preset,
}: {
  isOpen: boolean;
  onClose: () => void;
  preset?: string;
}) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-primary/80 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Request a quote"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-secondary shadow-card"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted transition hover:text-white"
            >
              <Icon name="close" className="h-4 w-4" />
            </button>
            <div className="max-h-[88vh] overflow-y-auto p-6 sm:p-8" data-lenis-prevent>
              <span className="eyebrow">Get Instant Quote</span>
              <h3 className="mt-4 text-2xl font-bold text-white">
                Request a Quote
              </h3>
              <p className="mt-2 text-sm text-muted">
                Tell us what you need — our team responds within one business
                hour with pricing and availability.
              </p>
              <div className="mt-6">
                <LeadForm preset={preset} compact />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
