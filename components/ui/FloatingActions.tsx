"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { useQuote } from "@/components/providers/QuoteProvider";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const { open } = useQuote();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-[95] flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-secondary/90 text-muted shadow-card backdrop-blur transition hover:text-white"
          >
            <Icon name="arrow" className="h-5 w-5 -rotate-90" />
          </motion.button>
        )}
      </AnimatePresence>

      <button
        onClick={() => open()}
        className="hidden items-center gap-2 rounded-full bg-accent px-4 py-3 text-xs font-semibold uppercase tracking-wide text-white shadow-glow transition hover:bg-orange-hover sm:flex"
      >
        <Icon name="spark" className="h-4 w-4" />
        Request Quote
      </button>
    </div>
  );
}
