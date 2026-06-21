"use client";

import { CLIENTS, COMPANY_FACTS, SECTORS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

export function TrustedBy() {
  return (
    <section
      id="clients"
      className="relative scroll-mt-24 border-y border-surface-border bg-secondary py-16 sm:py-20"
    >
      <div className="container-px">
        <SectionHeading
          align="center"
          eyebrow="Who We Work With"
          title="One partner for businesses across sectors"
          description="From shop branding to political campaigns and corporate signage — we supply, print, brand and install for clients across Maharashtra."
        />

        {/* Client marquee */}
        <div className="mt-12">
          <p className="mb-5 text-center font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
            Brands We&apos;ve Worked With
          </p>
          <ClientMarquee />
        </div>

        {/* Honest facts */}
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-surface-border bg-surface-border sm:grid-cols-4">
          {COMPANY_FACTS.map((f) => (
            <div key={f.label} className="bg-primary p-5 text-center">
              <div className="font-display text-3xl font-black text-gradient-blue">
                {f.value}
              </div>
              <div className="mt-2 text-xs font-semibold text-ink">{f.label}</div>
              <div className="mt-0.5 font-mono text-[10px] text-muted">{f.sub}</div>
            </div>
          ))}
        </div>

        {/* Sectors */}
        <StaggerGroup className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2.5">
          {SECTORS.map((s) => (
            <StaggerItem key={s.name}>
              <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent/40 hover:text-white">
                <Icon name={s.icon} className="h-4 w-4 text-highlight" />
                {s.name}
              </span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function ClientMarquee() {
  // 4× copies guarantee a seamless, gap-free loop even with few clients.
  const items = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];
  return (
    <div className="group mask-fade-x overflow-hidden">
      <div
        className="flex w-max items-center gap-4 group-hover:[animation-play-state:paused]"
        style={{ animation: "marquee 32s linear infinite" }}
      >
        {items.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="flex shrink-0 items-center rounded-2xl border border-white/8 bg-white/[0.03] px-7 py-4 transition-colors hover:border-accent/40 hover:bg-white/[0.06]"
          >
            <span className="whitespace-nowrap font-display text-xl font-bold tracking-tight text-muted/70 transition-colors hover:text-white">
              {name}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
