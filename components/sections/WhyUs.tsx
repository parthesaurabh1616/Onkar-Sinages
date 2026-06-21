"use client";

import { WHY_US } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function WhyUs() {
  return (
    <section id="why" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-orange-fade opacity-50" />
      <div className="container-px relative">
        <SectionHeading
          align="center"
          eyebrow="Why Choose Us"
          title="The supply partner serious printers rely on"
          description="From first roll to recurring container orders, every part of our operation is built to keep your presses running and your deadlines met."
        />

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((item) => (
            <StaggerItem key={item.title}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-surface-raised/50 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40">
                <div className="absolute inset-0 bg-card-sheen opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-highlight transition-transform duration-500 group-hover:scale-110">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
