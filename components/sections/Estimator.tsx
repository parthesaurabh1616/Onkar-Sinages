"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { useQuote } from "@/components/providers/QuoteProvider";
import { cn } from "@/lib/utils";

// No public pricing — every job is quoted on spec, site and volume.
const SERVICES = [
  { id: "flex", label: "Flex Printing" },
  { id: "vinyl", label: "Vinyl & Vehicle Wraps" },
  { id: "hoarding", label: "Hoardings & Outdoor" },
  { id: "branding", label: "Shop / Retail Branding" },
  { id: "signage", label: "LED / ACP / Acrylic Signage" },
  { id: "wayfinding", label: "Wayfinding Systems" },
];
const TIERS = [
  { id: "economy", label: "Economy" },
  { id: "standard", label: "Standard" },
  { id: "premium", label: "Premium" },
];

const TRUST = [
  "Response within 24 hours",
  "Free site survey",
  "No-obligation quote",
];

export function Estimator() {
  const { open } = useQuote();
  const [service, setService] = useState(SERVICES[0]);
  const [tier, setTier] = useState(TIERS[1]);
  const [area, setArea] = useState(500);

  const brief = `${service.label} · ~${area.toLocaleString("en-IN")} sq.ft · ${tier.label} finish`;

  return (
    <section id="estimator" className="relative scroll-mt-24 bg-secondary py-24 sm:py-32">
      <div className="container-px">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeading
            eyebrow="Request a Quote"
            title="Tell us about your project"
            description="No two jobs are the same, so we price every project on its artwork, site and volume — never off a generic rate card. Outline your requirement below and our team reverts with an exact, itemised quote."
          />

          <div className="rounded-3xl border border-surface-border bg-surface-raised p-6 sm:p-8">
            {/* Service */}
            <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted">
              What do you need?
            </label>
            <div className="flex flex-wrap gap-2">
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setService(s)}
                  className={cn(
                    "rounded-full border px-3.5 py-2 text-xs font-semibold transition",
                    service.id === s.id
                      ? "border-accent bg-accent text-white"
                      : "border-white/10 bg-white/5 text-muted hover:text-white"
                  )}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* Area */}
            <div className="mt-6 flex items-center justify-between">
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted">
                Approx. Area / Scale
              </label>
              <span className="font-display text-lg font-bold text-white">
                {area.toLocaleString("en-IN")} sq.ft
              </span>
            </div>
            <input
              type="range"
              min={50}
              max={10000}
              step={50}
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="mt-3 w-full accent-accent"
            />
            <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted/70">
              Not sure? Just give a rough figure — we&apos;ll confirm on survey.
            </p>

            {/* Tier */}
            <label className="mb-2 mt-6 block font-mono text-[10px] uppercase tracking-widest text-muted">
              Finish / Quality
            </label>
            <div className="grid grid-cols-3 gap-2">
              {TIERS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTier(t)}
                  className={cn(
                    "rounded-xl border px-3 py-2.5 text-xs font-semibold transition",
                    tier.id === t.id
                      ? "border-accent bg-accent text-white"
                      : "border-white/10 bg-white/5 text-muted hover:text-white"
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Brief summary + CTA (no pricing) */}
            <div className="mt-7 rounded-2xl border border-accent/20 bg-accent/5 p-5">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
                Your project brief
              </div>
              <div className="mt-1.5 font-display text-xl font-bold text-white sm:text-2xl">
                {brief}
              </div>
              <button
                onClick={() => open(brief)}
                className="btn-primary mt-5 w-full"
              >
                Request Tailored Quote
                <Icon name="arrow" className="h-4 w-4" />
              </button>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {TRUST.map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-1.5 text-xs font-medium text-muted"
                  >
                    <Icon name="check" className="h-3.5 w-3.5 text-accent" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
