"use client";

import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { useQuote } from "@/components/providers/QuoteProvider";
import { cn } from "@/lib/utils";

// Indicative ₹/sq.ft rates — EDIT to your real pricing in this file.
const SERVICES = [
  { id: "flex", label: "Flex Printing", rate: 12 },
  { id: "vinyl", label: "Vinyl Printing", rate: 35 },
  { id: "hoarding", label: "Hoarding (print + install)", rate: 25 },
  { id: "branding", label: "Shop / Retail Branding", rate: 45 },
  { id: "acp", label: "ACP Signage", rate: 180 },
];
const TIERS = [
  { id: "economy", label: "Economy", mult: 0.85 },
  { id: "standard", label: "Standard", mult: 1 },
  { id: "premium", label: "Premium", mult: 1.35 },
];

const inr = (n: number) =>
  "₹" + Math.round(n).toLocaleString("en-IN");

export function Estimator() {
  const { open } = useQuote();
  const [service, setService] = useState(SERVICES[0]);
  const [tier, setTier] = useState(TIERS[1]);
  const [area, setArea] = useState(500);

  const { low, high } = useMemo(() => {
    const base = area * service.rate * tier.mult;
    return { low: base * 0.88, high: base * 1.15 };
  }, [area, service, tier]);

  return (
    <section id="estimator" className="relative scroll-mt-24 bg-secondary py-24 sm:py-32">
      <div className="container-px">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeading
            eyebrow="Project Estimator"
            title="Ballpark your project in seconds"
            description="Get an indicative range instantly, then request an exact quote from our team. Estimates are guidance only — final pricing depends on artwork, site and volume."
          />

          <div className="rounded-3xl border border-surface-border bg-surface-raised p-6 sm:p-8">
            {/* Service */}
            <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted">
              Service
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
                Approx. Area
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

            {/* Tier */}
            <label className="mb-2 mt-6 block font-mono text-[10px] uppercase tracking-widest text-muted">
              Quality Tier
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

            {/* Result */}
            <div className="mt-7 rounded-2xl border border-accent/20 bg-accent/5 p-5">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
                Indicative range
              </div>
              <div className="mt-1 font-display text-3xl font-black text-gradient-blue">
                {inr(low)} – {inr(high)}
              </div>
              <button
                onClick={() => open(service.label)}
                className="btn-primary mt-5 w-full"
              >
                Request Exact Quote
                <Icon name="arrow" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
