"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Drop-in image slot.
 * Renders a branded placeholder immediately, then loads the real photo
 * from `src` on top of it. If the file doesn't exist yet (404) the
 * placeholder simply stays visible — so you can add the real photo to
 * /public<src> later with ZERO code changes.
 */
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
  /** Branded fallback shown until the real photo loads */
  placeholder?: React.ReactNode;
  /** Small dev hint of the expected file path */
  caption?: string;
  priority?: boolean;
  overlay?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-surface", className)}>
      {/* Branded placeholder layer */}
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-500",
          loaded && !failed ? "opacity-0" : "opacity-100"
        )}
      >
        {placeholder ?? <DefaultPlaceholder caption={caption ?? src} />}
      </div>

      {/* Real photo layer */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
          loaded && !failed ? "opacity-100" : "opacity-0",
          imgClassName
        )}
      />

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
