export function Wordmark({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const text =
    size === "sm" ? "text-sm" : size === "lg" ? "text-2xl" : "text-base";
  return (
    <span
      className={`font-display font-extrabold uppercase leading-none tracking-tight ${text} ${className ?? ""}`}
    >
      <span className="text-accent">Onkar AP</span>{" "}
      <span className="text-ink/70">Signages</span>
    </span>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden role="img">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF7A45" />
          <stop offset="100%" stopColor="#FF5A1E" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="#211C16" />
      <rect width="40" height="40" rx="11" fill="url(#lg)" opacity="0.14" />
      <path
        d="M11 28V12h5.4c3.4 0 5.6 1.9 5.6 5 0 2.3-1.3 4-3.4 4.6L27 28"
        fill="none"
        stroke="url(#lg)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="28.5" cy="13.5" r="2.2" fill="#FF5A1E" />
    </svg>
  );
}
