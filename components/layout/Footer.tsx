"use client";

import { SITE, NAV_LINKS } from "@/lib/site";
import { PRODUCTS } from "@/lib/data";
import { Logo, Wordmark } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import { useQuote } from "@/components/providers/QuoteProvider";

export function Footer() {
  const { open } = useQuote();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-secondary">
      <div className="container-px py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <Logo className="h-10 w-10" />
              <Wordmark size="lg" />
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              {SITE.description}
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm text-muted">
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 hover:text-white">
                <Icon name="phone" className="h-4 w-4 text-accent" /> {SITE.phoneDisplay}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-white">
                <Icon name="mail" className="h-4 w-4 text-accent" /> {SITE.email}
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${SITE.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-white"
              >
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {SITE.address}
              </a>
              <span className="flex items-center gap-2 font-mono text-xs text-muted/80">
                GSTIN · {SITE.gstin}
              </span>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                Branches
              </span>
              <span className="text-sm font-semibold text-white">
                {SITE.branches.join(" · ")}
              </span>
            </div>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted transition hover:border-accent/50 hover:text-accent"
            >
              <Icon name="linkedin" className="h-5 w-5" />
            </a>
          </div>

          <FooterCol title="Navigate">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="footer-link">
                {l.label}
              </a>
            ))}
          </FooterCol>

          <FooterCol title="Products">
            {PRODUCTS.slice(0, 6).map((p) => (
              <a key={p.slug} href="#products" className="footer-link">
                {p.name}
              </a>
            ))}
          </FooterCol>

          <FooterCol title="Get Started">
            <button onClick={() => open()} className="footer-link text-left">
              Request Quote
            </button>
            <a href="/catalogue" className="footer-link">
              Download Catalogue
            </a>
            <a href="#contact" className="footer-link">
              Distributor Inquiry
            </a>
            <a href={`tel:${SITE.phone}`} className="footer-link">
              Call Us
            </a>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-muted sm:flex-row">
          <p>
            © {year} {SITE.legalName}. All rights reserved.
          </p>
          <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span>Flex Roll Supplier India</span>
            <span className="text-white/20">·</span>
            <span>Vinyl Supplier India</span>
            <span className="text-white/20">·</span>
            <span>Hoarding Material Supplier</span>
          </p>
        </div>
      </div>

      <style jsx>{`
        :global(.footer-link) {
          display: block;
          font-size: 0.875rem;
          color: #94a3b8;
          transition: color 0.2s;
        }
        :global(.footer-link:hover) {
          color: #ffffff;
        }
      `}</style>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white">
        {title}
      </h4>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
