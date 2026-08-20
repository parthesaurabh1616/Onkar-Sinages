"use client";

import { motion } from "framer-motion";
import { AAYUDH, DISTRIBUTOR_ROLE } from "@/lib/tools";
import { COMPANY_MODEL, SITE } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";

/**
 * Company introduction.
 *
 * The text in COMPANY_MODEL.intro is the owner's own statement of what the
 * business is. It sits high on the page because a plant deciding whether to
 * raise an enquiry wants to know who they are buying from before they look at
 * the range.
 */

const FACTS = [
  { label: "Company", value: "Trading Company", sub: SITE.legalName, icon: "building" },
  { label: "In market", value: `${COMPANY_MODEL.yearsInMarket} Years`, sub: `Since ${COMPANY_MODEL.since}`, icon: "spark" },
  { label: "Branches", value: "Three", sub: COMPANY_MODEL.branches, icon: "pin" },
  { label: "Tools by", value: AAYUDH.brand, sub: AAYUDH.legalName, icon: "tools" },
];

export function ToolsIntro() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 border-y border-white/10 bg-secondary py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 halftone opacity-25" />

      <div className="container-px relative">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr]">
          <div className="min-w-0">
            <span className="eyebrow">Who You Are Buying From</span>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="mt-6 font-display text-2xl font-bold leading-snug text-ink sm:text-[28px]"
            >
              {COMPANY_MODEL.introShort}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mt-6 max-w-2xl text-sm leading-relaxed text-muted sm:text-base"
            >
              {COMPANY_MODEL.intro}
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Automotive", "General Engineering", "Oil & Gas", "Other Manufacturing"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/12 bg-white/5 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/80"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="grid content-start gap-3 sm:grid-cols-2">
            {FACTS.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-2xl border border-surface-border bg-surface-raised/60 p-5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-highlight">
                  <Icon name={f.icon} className="h-4 w-4" />
                </span>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  {f.label}
                </p>
                <p className="mt-1 font-display text-lg font-bold text-white">{f.value}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted/85">{f.sub}</p>
              </motion.div>
            ))}

            <div className="rounded-2xl border border-accent/25 bg-accent/[0.07] p-5 sm:col-span-2">
              <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                <Icon name="shield" className="h-3.5 w-3.5" />
                Our role
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {DISTRIBUTOR_ROLE.long}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
