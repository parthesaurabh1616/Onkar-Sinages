"use client";

import { SITE } from "@/lib/site";
import { DISTRIBUTOR_ROLE } from "@/lib/tools";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { ToolsEnquiry } from "./ToolsEnquiry";

export function ToolsContact() {
  return (
    <section
      id="enquiry"
      className="relative scroll-mt-24 border-t border-white/10 bg-secondary py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-warm-glow" />

      <div className="container-px relative grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Talk to Us"
            title="Send us the component, not just the tool size"
            description="The fastest route to the right tool is the drawing and the material. Send those and we'll come back with a recommendation and a price."
          />

          <div className="mt-10 space-y-4">
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-4 rounded-2xl border border-surface-border bg-surface-raised/50 p-5 transition hover:border-accent/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-highlight">
                <Icon name="phone" className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  Call
                </span>
                <span className="block font-semibold text-white">
                  {SITE.phoneDisplay}
                </span>
              </span>
            </a>

            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
                "Hello Onkar — I have a cutting tool requirement."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-surface-border bg-surface-raised/50 p-5 transition hover:border-accent/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-highlight">
                <Icon name="whatsapp" className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  WhatsApp
                </span>
                <span className="block font-semibold text-white">
                  Send a drawing or photo
                </span>
              </span>
            </a>

            <a
              href={`mailto:${SITE.email}?subject=${encodeURIComponent(
                "Cutting tool enquiry"
              )}`}
              className="flex items-center gap-4 rounded-2xl border border-surface-border bg-surface-raised/50 p-5 transition hover:border-accent/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-highlight">
                <Icon name="mail" className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  Email
                </span>
                <span className="block font-semibold text-white">{SITE.email}</span>
              </span>
            </a>

            <a
              href="/cutting-tools-catalogue.pdf"
              download
              className="flex items-center gap-4 rounded-2xl border border-accent/30 bg-accent/10 p-5 transition hover:border-accent/60 hover:bg-accent/15"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/15 text-highlight">
                <Icon name="download" className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                  Catalogue
                </span>
                <span className="block font-semibold text-white">
                  Download the cutting tools catalogue
                </span>
                <span className="block text-xs text-muted">PDF · 12 pages · 2.7 MB</span>
              </span>
            </a>

            <div className="rounded-2xl border border-surface-border bg-surface-raised/30 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                Our role
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {DISTRIBUTOR_ROLE.long}
              </p>
              <p className="mt-3 flex items-start gap-2 text-sm text-muted">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {SITE.address}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-primary/60 p-6 backdrop-blur-xl sm:p-8">
          <h3 className="font-display text-xl font-bold text-white">
            Tooling enquiry
          </h3>
          <p className="mt-1 text-sm text-muted">
            Fields marked * are required. Everything else helps us quote faster.
          </p>
          <div className="mt-6">
            <ToolsEnquiry />
          </div>
        </div>
      </div>
    </section>
  );
}
