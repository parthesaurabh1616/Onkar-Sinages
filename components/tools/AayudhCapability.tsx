"use client";

import { motion } from "framer-motion";
import { AAYUDH, AAYUDH_CAPABILITY, DISTRIBUTOR_ROLE } from "@/lib/tools";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Media } from "@/components/ui/Media";
import { Icon } from "@/components/ui/Icon";

/**
 * Attribution section.
 *
 * The grinding capability, the machines and the plant are Aayudh's — not ours.
 * This section exists to borrow that credibility honestly: it names Aayudh as
 * the manufacturer in the heading, and states our role as distributor plainly
 * rather than letting a visitor assume we grind tools ourselves.
 */
export function AayudhCapability() {
  return (
    <section
      id="manufacturing"
      className="relative scroll-mt-24 bg-paper py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 halftone-ink opacity-50" />

      <div className="container-px relative">
        <SectionHeading
          tone="paper"
          eyebrow="Behind the Tools"
          title={AAYUDH_CAPABILITY.heading}
          description={AAYUDH_CAPABILITY.intro}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AAYUDH_CAPABILITY.items.map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="overflow-hidden rounded-3xl border border-paper-line bg-paper-raised shadow-paper"
            >
              <div className="relative h-40">
                <Media
                  src={item.image}
                  alt={item.imageAlt}
                  overlay={false}
                  className="absolute inset-0"
                  caption={item.name}
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-bold text-paper-ink">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-paper-muted">
                  {item.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Role statement — who does what, in plain words. */}
        <div className="mt-12 grid gap-6 rounded-3xl border border-paper-line bg-paper-raised p-6 shadow-paper sm:p-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              <Icon name="shield" className="h-3.5 w-3.5" />
              Our role
            </p>
            <p className="mt-3 text-sm leading-relaxed text-paper-muted">
              {DISTRIBUTOR_ROLE.long}
            </p>
            <p className="mt-4 text-sm text-paper-muted">
              Tools are ground at {AAYUDH.legalName}&apos;s plant —{" "}
              <span className="font-medium text-paper-ink">{AAYUDH.plant}</span>.
            </p>
            {/*
              No outbound link to the manufacturer. We name them for
              transparency, but enquiries are ours to handle — the same reason
              no Aayudh contact route appears in the printed catalogue.
            */}
            <a
              href="#enquiry"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-orange-deep"
            >
              Send us your requirement
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-paper-line">
            <Media
              src="/images/tools/aayudh-plant.jpg"
              alt="Aayudh Tools manufacturing facility with the team assembled outside the building."
              overlay={false}
              className="absolute inset-0"
              caption="Aayudh Tools plant"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
