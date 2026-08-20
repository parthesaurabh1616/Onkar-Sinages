"use client";

import { motion } from "framer-motion";
import { AAYUDH, DISTRIBUTOR_ROLE } from "@/lib/tools";
import { SITE } from "@/lib/site";
import { Media } from "@/components/ui/Media";
import { Icon } from "@/components/ui/Icon";
import { useQuote } from "@/components/providers/QuoteProvider";

export function ToolsHero() {
  const { open } = useQuote();

  return (
    <section id="top" className="relative overflow-hidden bg-primary pt-32 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-warm-glow" />
      <div className="pointer-events-none absolute inset-0 halftone opacity-40" />

      <div className="container-px relative grid items-center gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow">Division 02 · Cutting Tools</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 font-display text-hero font-extrabold text-ink"
          >
            Precision cutting tools,
            <span className="block text-gradient-blue">selected for your component.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            Onkar AP Signages is a trading company, and this division is an
            authorised distributor of cutting tools — solid carbide, HSS, brazed
            and special tooling supplied to automotive, general engineering, oil
            and gas and other manufacturing industries through our branches.
            Manufactured by {AAYUDH.brand} ({AAYUDH.legalName}).
          </motion.p>

          {/* The four families, stated plainly for a scanning purchase manager. */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mt-7 flex flex-wrap gap-2"
          >
            {["Solid Carbide", "Special & Form", "HSS", "Brazed"].map((t) => (
              <li
                key={t}
                className="rounded-full border border-white/12 bg-white/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-white/80"
              >
                {t}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a href="#range" className="btn-primary">
              Explore the Range
              <Icon name="arrow" className="h-4 w-4" />
            </a>
            <button
              onClick={() => open("Cutting Tools — application enquiry")}
              className="btn-ghost"
            >
              <Icon name="headset" className="h-4 w-4" />
              Discuss Your Application
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-7 flex items-center gap-2 text-xs text-muted/80"
          >
            <Icon name="pin" className="h-4 w-4 shrink-0 text-accent" />
            Supplied from {SITE.branches.join(" · ")} · {DISTRIBUTOR_ROLE.short}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-4xl border border-surface-border">
            <Media
              src="/images/tools/hero-carbide-tools.jpg"
              alt="Group of solid carbide cutting tools including coated step drills, an end mill and a form cutter standing on a machined base."
              priority
              overlay={false}
              className="absolute inset-0"
              caption="Solid carbide tooling"
            />
          </div>

          <div className="absolute -bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-secondary/90 p-4 backdrop-blur-xl sm:left-8 sm:right-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              Manufactured by
            </p>
            <p className="mt-1 font-display text-lg font-extrabold text-white">
              {AAYUDH.brand}
            </p>
            <p className="mt-0.5 text-xs text-muted">{AAYUDH.promise}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
