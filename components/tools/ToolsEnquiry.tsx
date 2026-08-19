"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { SITE } from "@/lib/site";
import { TOOL_CATEGORIES } from "@/lib/tools";
import { Icon } from "@/components/ui/Icon";

const inputCls =
  "w-full rounded-xl border border-white/10 bg-primary/60 px-4 py-3 text-sm text-white placeholder:text-muted/70 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30";

const labelCls =
  "mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-muted";

/**
 * Tooling enquiry.
 *
 * Deliberately different from the signage quote form: for a cutting tool the
 * useful answer depends on the component, the material and the machine, so
 * those are the fields we ask for. Everything optional is marked optional so
 * the form stays short enough to actually get filled in.
 */
export function ToolsEnquiry() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    // Honeypot — bots fill this, humans never see it.
    if (data.get("_honey")) {
      setStatus("done");
      return;
    }

    setStatus("sending");

    const payload = {
      _subject: `Cutting Tools Enquiry — ${data.get("company") || "Website"}`,
      _template: "table",
      _captcha: "false",
      Division: "Cutting Tools (Aayudh)",
      Company: String(data.get("company") || ""),
      Contact: String(data.get("person") || ""),
      Phone: String(data.get("phone") || ""),
      Email: String(data.get("email") || ""),
      ToolFamily: String(data.get("family") || "—"),
      Operation: String(data.get("operation") || "—"),
      Material: String(data.get("material") || "—"),
      Machine: String(data.get("machine") || "—"),
      Quantity: String(data.get("quantity") || "—"),
      Requirement: String(data.get("requirement") || "—"),
      Source: "onkarsignages.com — cutting tools enquiry",
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
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl border border-accent/30 bg-accent/10 p-8 text-center"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white">
          <Icon name="check" className="h-6 w-6" />
        </div>
        <h3 className="mt-4 font-display text-xl font-bold text-white">
          Enquiry received
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          We&apos;ll come back with a recommendation and a quotation. If you have a
          component drawing, email it to{" "}
          <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">
            {SITE.email}
          </a>{" "}
          and we&apos;ll match it to this enquiry.
        </p>
        <a href={`tel:${SITE.phone}`} className="btn-primary mt-6 text-xs">
          <Icon name="phone" className="h-4 w-4" />
          {SITE.phoneDisplay}
        </a>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="tool-company" className={labelCls}>
            Company *
          </label>
          <input id="tool-company" name="company" required className={inputCls} placeholder="Company name" />
        </div>
        <div>
          <label htmlFor="tool-person" className={labelCls}>
            Contact person *
          </label>
          <input id="tool-person" name="person" required className={inputCls} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="tool-phone" className={labelCls}>
            Phone / WhatsApp *
          </label>
          <input id="tool-phone" name="phone" type="tel" required className={inputCls} placeholder="+91" />
        </div>
        <div>
          <label htmlFor="tool-email" className={labelCls}>
            Email *
          </label>
          <input id="tool-email" name="email" type="email" required className={inputCls} placeholder="you@company.com" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="tool-family" className={labelCls}>
            Tool family
          </label>
          <select id="tool-family" name="family" className={inputCls} defaultValue="">
            <option value="">Not sure — advise me</option>
            {TOOL_CATEGORIES.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
            <option value="Re-New Reconditioning">Re-New Reconditioning</option>
          </select>
        </div>
        <div>
          <label htmlFor="tool-operation" className={labelCls}>
            Operation <span className="normal-case tracking-normal">(optional)</span>
          </label>
          <input id="tool-operation" name="operation" className={inputCls} placeholder="Drilling, reaming, milling…" />
        </div>
        <div>
          <label htmlFor="tool-material" className={labelCls}>
            Material being machined
          </label>
          <input id="tool-material" name="material" className={inputCls} placeholder="e.g. Inconel, alloy steel, aluminium" />
        </div>
        <div>
          <label htmlFor="tool-machine" className={labelCls}>
            Machine <span className="normal-case tracking-normal">(optional)</span>
          </label>
          <input id="tool-machine" name="machine" className={inputCls} placeholder="CNC / VMC / lathe" />
        </div>
      </div>

      <div>
        <label htmlFor="tool-quantity" className={labelCls}>
          Quantity / consumption <span className="normal-case tracking-normal">(optional)</span>
        </label>
        <input id="tool-quantity" name="quantity" className={inputCls} placeholder="e.g. 25 pcs, or 40/month" />
      </div>

      <div>
        <label htmlFor="tool-requirement" className={labelCls}>
          Requirement
        </label>
        <textarea
          id="tool-requirement"
          name="requirement"
          rows={4}
          className={inputCls}
          placeholder="Describe the component, the hole/profile, tolerance and the problem you're trying to solve."
        />
      </div>

      <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60">
        {status === "sending" ? (
          "Sending…"
        ) : (
          <>
            <Icon name="arrow" className="h-4 w-4" />
            Send Tool Requirement
          </>
        )}
      </button>

      {status === "error" && (
        <p className="text-center text-xs text-highlight">
          Could not send just now. Please call{" "}
          <a href={`tel:${SITE.phone}`} className="underline">
            {SITE.phoneDisplay}
          </a>{" "}
          or email {SITE.email}.
        </p>
      )}

      <p className="text-center text-xs leading-relaxed text-muted/80">
        Have a drawing? Email it to {SITE.email} — it gets you a faster, more
        accurate quotation than a description alone.
      </p>
    </form>
  );
}
