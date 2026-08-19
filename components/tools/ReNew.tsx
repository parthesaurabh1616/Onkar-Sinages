"use client";

import { motion } from "framer-motion";
import { AAYUDH } from "@/lib/tools";
import { Media } from "@/components/ui/Media";
import { Icon } from "@/components/ui/Icon";
import { useQuote } from "@/components/providers/QuoteProvider";

const STEPS = [
  { n: "01", label: "Collect", desc: "Worn tools picked up with your batch." },
  { n: "02", label: "Assess", desc: "Wear checked against the original geometry." },
  { n: "03", label: "Regrind", desc: "Reground at Aayudh, including complex forms." },
  { n: "04", label: "Return", desc: "Back on the machine instead of into scrap." },
];

export function ReNew() {
  const { open } = useQuote();

  return (
    <section
      id="re-new"
      className="relative scroll-mt-24 overflow-hidden border-y border-white/10 bg-secondary py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-orange-fade" />

      <div className="container-px relative grid items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Re-New · Tool Reconditioning</span>

          <h2 className="mt-6 font-display text-section font-extrabold text-ink">
            Extend the life of tooling
            <span className="block text-gradient-blue">you already own.</span>
          </h2>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
            Standard drills and end mills get reground routinely. Complex step,
            combination and form tools usually get scrapped — because most
            regrinders cannot restore the geometry. Re-New is built for exactly
            those tools.
          </p>

          {/* The 80–85% figure is Aayudh's, and is labelled as such. */}
          <div className="mt-8 rounded-3xl border border-accent/25 bg-accent/[0.07] p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              Stated by {AAYUDH.brand}
            </p>
            <p className="mt-3 font-display text-3xl font-extrabold text-white">
              80–85%
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              of the life of a fresh tool can be achieved after renewing, as
              stated in Aayudh&apos;s published material. Actual result depends on
              the tool and its condition — send a sample and we will assess it.
            </p>
          </div>

          <button
            onClick={() => open("Re-New — tool reconditioning enquiry")}
            className="btn-primary mt-8"
          >
            <Icon name="wrench" className="h-4 w-4" />
            Discuss Tool Reconditioning
          </button>
        </div>

        <div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-4xl border border-surface-border">
            <Media
              src="/images/tools/mfg-regrinding.jpg"
              alt="Cutting tool being reground under flood coolant on a precision grinding machine."
              className="absolute inset-0"
              caption="Reconditioning line"
            />
          </div>

          <ol className="mt-6 grid grid-cols-2 gap-3">
            {STEPS.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="rounded-2xl border border-surface-border bg-surface-raised/60 p-4"
              >
                <span className="font-mono text-[11px] font-bold tracking-[0.16em] text-accent">
                  {s.n}
                </span>
                <p className="mt-1.5 font-display text-base font-bold text-white">
                  {s.label}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted">{s.desc}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
