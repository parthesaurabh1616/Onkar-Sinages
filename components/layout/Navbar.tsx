"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/site";
import { useQuote } from "@/components/providers/QuoteProvider";
import { Icon } from "@/components/ui/Icon";
import { Logo, Wordmark } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { open: openQuote } = useQuote();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[90] flex justify-center px-4 pt-3">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "flex w-full max-w-container items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-5",
          scrolled
            ? "border border-white/10 bg-secondary/80 shadow-card backdrop-blur-xl"
            : "border border-transparent bg-transparent"
        )}
      >
        <a href="#top" className="flex items-center gap-3" aria-label={SITE.name}>
          <Logo className="h-9 w-9" />
          <div className="leading-tight">
            <Wordmark size="sm" className="block" />
            <span className="block text-[9px] font-medium uppercase tracking-[0.18em] text-muted">
              Advertising Materials
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden text-sm font-medium text-muted transition hover:text-white sm:inline"
          >
            {SITE.phoneDisplay}
          </a>
          <button onClick={() => openQuote()} className="btn-primary hidden py-2.5 text-xs sm:inline-flex">
            Request Quote
          </button>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
          >
            <Icon name={open ? "close" : "layers"} className="h-5 w-5" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-4 right-4 top-[72px] z-[80] rounded-2xl border border-white/10 bg-secondary/95 p-3 backdrop-blur-xl lg:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-muted transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                openQuote();
              }}
              className="btn-primary mt-2 w-full"
            >
              Request Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
