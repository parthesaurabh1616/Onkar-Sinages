"use client";

import { SITE } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LeadForm } from "@/components/ui/LeadForm";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

const POINTS = [
  { icon: "tools", title: "Trained install crews", desc: "On-site execution, any scale" },
  { icon: "headset", title: "Dedicated project manager", desc: "One point of contact" },
  { icon: "boxes", title: "Bulk material in stock", desc: "Across 3 branches" },
];

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-warm-glow" />
      <div className="container-px relative grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        {/* Left */}
        <div>
          <SectionHeading
            eyebrow="Start a Project"
            title="Let's plan your advertising project"
            description="Tell us the scope and our project team responds the same business day with approach, timeline and pricing."
          />

          <div className="mt-10 space-y-4">
            {POINTS.map((p) => (
              <Reveal key={p.title}>
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-surface-raised/40 p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-highlight">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{p.title}</div>
                    <div className="text-sm text-muted">{p.desc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Branches
            </span>
            {SITE.branches.map((b) => (
              <span
                key={b}
                className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold text-highlight"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-surface-raised/40 p-4 transition hover:border-accent/40"
            >
              <Icon name="phone" className="h-5 w-5 text-accent" />
              <div>
                <div className="text-xs text-muted">Call us</div>
                <div className="text-sm font-semibold text-white">{SITE.phoneDisplay}</div>
              </div>
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-surface-raised/40 p-4 transition hover:border-accent/40"
            >
              <Icon name="mail" className="h-5 w-5 text-accent" />
              <div className="min-w-0">
                <div className="text-xs text-muted">Email us</div>
                <div className="truncate text-sm font-semibold text-white">{SITE.email}</div>
              </div>
            </a>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${SITE.mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-surface-raised/40 p-4 transition hover:border-accent/40 sm:col-span-2"
            >
              <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <div className="text-xs text-muted">Visit / GSTIN {SITE.gstin}</div>
                <div className="text-sm font-semibold text-white">{SITE.address}</div>
              </div>
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-surface-raised/40 p-4 transition hover:border-accent/40 sm:col-span-2"
            >
              <Icon name="linkedin" className="h-5 w-5 text-accent" />
              <div>
                <div className="text-xs text-muted">Connect</div>
                <div className="text-sm font-semibold text-white">LinkedIn — Onkar AP Signages</div>
              </div>
            </a>
          </div>
        </div>

        {/* Form */}
        <Reveal delay={0.1}>
          <div className="relative rounded-3xl border border-white/10 bg-secondary/70 p-6 backdrop-blur-xl sm:p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <h3 className="text-xl font-bold text-white">Request a Quote</h3>
            <p className="mt-1 text-sm text-muted">
              All fields marked * are required.
            </p>
            <div className="mt-6">
              <LeadForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
