"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/data";
import { SITE } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

const inputCls =
  "w-full rounded-xl border border-white/10 bg-primary/60 px-4 py-3 text-sm text-white placeholder:text-muted/70 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30";

function leadFields(data: FormData) {
  return {
    Company: String(data.get("company") || ""),
    Contact: String(data.get("person") || ""),
    Phone: String(data.get("phone") || ""),
    Email: String(data.get("email") || ""),
    ProjectType: String(data.get("product") || ""),
    Location: String(data.get("city") || "—"),
    Budget: String(data.get("budget") || "—"),
    Timeline: String(data.get("timeline") || "—"),
    Requirements: String(data.get("requirements") || "—"),
  };
}

export function LeadForm({
  preset,
  compact = false,
}: {
  preset?: string;
  compact?: boolean;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);

    // Spam honeypot — bots fill this, humans never see it.
    if (data.get("_honey")) {
      setStatus("done");
      return;
    }

    const payload = {
      _subject: `Quote Request — ${data.get("company") || "Website"}`,
      _template: "table",
      _captcha: "false",
      ...leadFields(data),
      Source: "onkarsignages.com — quote form",
    };

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${SITE.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`status ${res.status}`);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }


  if (status === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 p-8 text-center"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white">
          <Icon name="check" className="h-7 w-7" />
        </div>
        <h4 className="mt-5 text-xl font-bold text-white">Request sent</h4>
        <p className="mt-2 max-w-sm text-sm text-muted">
          Thank you — your enquiry has reached our team at {SITE.email}. We
          respond with pricing and availability the same business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-ghost mt-6 py-2.5 text-xs"
        >
          Submit another request
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot (hidden from humans) */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />
      <div className={cn("grid gap-4", !compact && "sm:grid-cols-2")}>
        <Field label="Company Name" required>
          <input name="company" required placeholder="Acme Brands" className={inputCls} />
        </Field>
        <Field label="Contact Person" required>
          <input name="person" required placeholder="Full name" className={inputCls} />
        </Field>
        <Field label="Phone" required>
          <input name="phone" required type="tel" placeholder="+91 ..." className={inputCls} />
        </Field>
        <Field label="Email" required>
          <input name="email" required type="email" placeholder="you@company.com" className={inputCls} />
        </Field>
        <Field label="Project Type" required>
          <select name="product" required defaultValue={preset ?? ""} className={cn(inputCls, "appearance-none")}>
            <option value="" disabled>
              Select project type
            </option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Multiple / Turnkey Project">Multiple / Turnkey Project</option>
          </select>
        </Field>
        <Field label="Location / City" required>
          <input name="city" required placeholder="e.g. Pune" className={inputCls} />
        </Field>
        <Field label="Budget Range">
          <select name="budget" defaultValue="" className={cn(inputCls, "appearance-none")}>
            <option value="">Select budget</option>
            <option>Under ₹50,000</option>
            <option>₹50,000 – ₹2 Lakh</option>
            <option>₹2 Lakh – ₹10 Lakh</option>
            <option>₹10 Lakh+</option>
            <option>Not sure yet</option>
          </select>
        </Field>
        <Field label="Timeline">
          <select name="timeline" defaultValue="" className={cn(inputCls, "appearance-none")}>
            <option value="">Select timeline</option>
            <option>Immediate / Urgent</option>
            <option>Within 1–2 weeks</option>
            <option>This month</option>
            <option>Planning ahead</option>
          </select>
        </Field>
        <Field label="Requirements" className="sm:col-span-2">
          <textarea
            name="requirements"
            rows={3}
            placeholder="Tell us about your project — scope, sizes, locations…"
            className={cn(inputCls, "resize-none")}
          />
        </Field>
      </div>

      {status === "error" && (
        <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-center text-xs text-red-300">
          Couldn&apos;t send just now. Please try again or reach us on WhatsApp
          below.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Send Request"}
        {status !== "sending" && <Icon name="arrow" className="h-4 w-4" />}
      </button>
      <p className="text-center text-xs text-muted/80">
        Your details are confidential and used only to prepare your quote.
      </p>
    </form>
  );
}

function Field({
  label,
  children,
  required,
  className,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      {children}
    </label>
  );
}
