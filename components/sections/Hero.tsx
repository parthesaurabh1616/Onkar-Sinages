"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useQuote } from "@/components/providers/QuoteProvider";
import { Icon } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { open } = useQuote();
  const [videoOk, setVideoOk] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[76svh] items-center overflow-hidden bg-primary"
    >
      {/* Background: photo base + optional video overlay (drop /videos/hero.mp4) */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 scale-110">
        <Media
          src="/images/hero/hero.jpg"
          alt="Large-format advertising, branding and installation work by Onkar AP Signages"
          className="h-full w-full"
          priority
          overlay={false}
          caption="hero/hero.jpg"
        />
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoOk(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoOk ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Cinematic grades */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/40" />
      <div className="absolute left-0 top-0 h-1 w-full cmyk-rule opacity-80" />

      <motion.div
        style={{ y: yContent, opacity }}
        className="container-px relative z-10 pt-24"
      >
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            Everything Under One Roof
          </motion.div>

          <h1 className="mt-6 font-display text-hero font-black uppercase text-white">
            <Line delay={0.05}>The Advertising</Line>
            <Line delay={0.13}>
              <span className="text-accent">Infrastructure</span> Partner
            </Line>
            <Line delay={0.21}>For Modern Brands</Line>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-7 max-w-2xl text-base leading-relaxed text-ink/85 sm:text-lg"
          >
            From material supply to printing, branding, signage and installation
            — complete end-to-end advertising execution, delivered under one roof
            across Maharashtra.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.44 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <button onClick={() => open()} className="btn-primary group">
              Request Quote
              <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a href="#contact" className="btn-ghost">
              Book Consultation
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.62 }}
            className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 font-mono text-xs uppercase tracking-widest text-ink/70"
          >
            {["Material Supply", "Printing", "Branding", "Signage", "Installation"].map(
              (t) => (
                <span key={t} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {t}
                </span>
              )
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}
