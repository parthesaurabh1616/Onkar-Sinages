import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { PRODUCTS } from "@/lib/data";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import { CatalogueForm } from "@/components/sections/CatalogueForm";

export const metadata: Metadata = {
  title: "Download Product Catalogue",
  description:
    "Download the full Onkar Signages product catalogue — flex rolls, vinyl, eco-solvent & UV inks and lamination films with complete specifications.",
  alternates: { canonical: "/catalogue" },
};

export default function CataloguePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-warm-glow" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="container-px relative py-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-white">
          <Icon name="arrow" className="h-4 w-4 rotate-180" />
          Back to home
        </Link>
      </div>

      <div className="container-px relative grid gap-12 pb-24 lg:grid-cols-2">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-11 w-11" />
            <span className="text-lg font-bold text-white">{SITE.name}</span>
          </div>
          <span className="eyebrow mt-8">Product Catalogue 2026</span>
          <h1 className="mt-5 text-section font-bold text-gradient">
            The complete materials catalogue
          </h1>
          <p className="mt-5 max-w-lg text-muted">
            Full technical specifications, GSM grades, finishes and weather
            ratings across our entire range. Get the PDF delivered to your inbox.
          </p>

          <ul className="mt-8 space-y-3">
            {PRODUCTS.map((p) => (
              <li key={p.slug} className="flex items-center gap-3 text-sm text-slate-300">
                <Icon name="check" className="h-4 w-4 text-accent" />
                <span className="font-medium text-white">{p.name}</span>
                <span className="text-muted">— {p.category}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="sticky top-10 rounded-3xl border border-white/10 bg-secondary/70 p-6 backdrop-blur-xl sm:p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-highlight">
                <Icon name="download" className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Download Catalogue</h2>
                <p className="text-xs text-muted">PDF · ~6 MB · Updated 2026</p>
              </div>
            </div>
            <div className="mt-6">
              <CatalogueForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
