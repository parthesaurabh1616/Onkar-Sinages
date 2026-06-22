"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Robust image slot.
 *
 * Renders a branded placeholder behind the real photo. The photo fades in
 * once loaded; if the file is missing (404) the placeholder stays.
 *
 * IMPORTANT: a cached image can fire its `load` event BEFORE React attaches
 * the onLoad handler (during hydration), which would otherwise leave the
 * image stuck invisible after a refresh. We guard against that by checking
 * `img.complete` on mount — the standard fix for the cached-image problem.
 */
type Status = "loading" | "loaded" | "error";

export function Media({
  src,
  alt,
  className,
  imgClassName,
  placeholder,
  caption,
  priority = false,
  overlay = true,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  placeholder?: React.ReactNode;
  caption?: string;
  priority?: boolean;
  overlay?: boolean;
}) {
  const [status, setStatus] = useState<Status>("loading");
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setStatus("loading");
    const img = ref.current;
    if (!img) return;
    // If the browser already finished with this src (cache) before the
    // onLoad/onError handlers were wired up, resolve the status now.
    if (img.complete) {
      setStatus(img.naturalWidth > 0 ? "loaded" : "error");
    }
  }, [src]);

  return (
    <div className={cn("relative overflow-hidden bg-surface", className)}>
      {/* Branded placeholder — always behind the photo */}
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-500",
          status === "loaded" ? "opacity-0" : "opacity-100"
        )}
      >
        {placeholder ?? <DefaultPlaceholder caption={caption ?? src} />}
      </div>

      {/* Real photo — removed entirely if it 404s so the placeholder shows */}
      {status !== "error" && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={ref}
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
            status === "loaded" ? "opacity-100" : "opacity-0",
            imgClassName
          )}
        />
      )}

      {overlay && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/25 to-transparent" />
      )}
    </div>
  );
}

function DefaultPlaceholder({ caption }: { caption: string }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-surface-raised to-primary">
      <div className="absolute inset-0 halftone opacity-50" />
      <div className="absolute left-0 top-0 h-1 w-full cmyk-rule opacity-70" />
      <div className="relative flex flex-col items-center gap-2 px-4 text-center">
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-accent/70" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="8.5" cy="10" r="1.6" />
          <path d="M21 16l-5-5L5 19" />
        </svg>
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted/70">
          {caption}
        </span>
      </div>
    </div>
  );
}
