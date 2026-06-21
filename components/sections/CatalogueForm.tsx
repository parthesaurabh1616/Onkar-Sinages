"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { SITE } from "@/lib/site";

const inputCls =
  "w-full rounded-xl border border-white/10 bg-primary/60 px-4 py-3 text-sm text-white placeholder:text-muted/70 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30";

export function CatalogueForm() {
  const [done, setDone] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = {
      _subject: `Catalogue request — ${data.get("company") || "Website"}`,
      _template: "table",
      _captcha: "false",
      Name: String(data.get("name") || ""),
      Company: String(data.get("company") || ""),
      Email: String(data.get("email") || ""),
      Phone: String(data.get("phone") || ""),
      Source: "onkarsignages.com — catalogue request",
    };
    setDone(true);
    try {
      await fetch(`https://formsubmit.co/ajax/${SITE.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      /* download still proceeds below */
    }
  }

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-accent/30 bg-accent/10 p-6 text-center"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white">
          <Icon name="check" className="h-6 w-6" />
        </div>
        <h3 className="mt-4 font-bold text-white">Catalogue on its way</h3>
        <p className="mt-1 text-sm text-muted">
          Check your inbox — the PDF link has been sent. You can also start the
          download below.
        </p>
        <a
          href="/catalogue.pdf"
          className="btn-primary mt-5 w-full py-3 text-xs"
          download
        >
          <Icon name="download" className="h-4 w-4" />
          Download now
        </a>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <input name="name" required placeholder="Full name" className={inputCls} />
      <input name="company" required placeholder="Company name" className={inputCls} />
      <input name="email" required type="email" placeholder="Work email" className={inputCls} />
      <input name="phone" required type="tel" placeholder="Phone / WhatsApp" className={inputCls} />
      <button type="submit" className="btn-primary w-full">
        <Icon name="download" className="h-4 w-4" />
        Get the Catalogue
      </button>
      <p className="text-center text-xs text-muted/80">
        We&apos;ll email you the PDF and occasional product updates. Unsubscribe
        anytime.
      </p>
    </form>
  );
}
