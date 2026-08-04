import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import BlueprintGrid from "@/components/layout/BlueprintGrid";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ASCII = String.raw`
██████╗  ██████╗  ██████╗ ██╗   ██╗███████╗██╗  ██╗
██╔══██╗██╔═══██╗██╔════╝ ██║   ██║██╔════╝╚██╗██╔╝
██████╔╝██║   ██║██║  ███╗██║   ██║█████╗   ╚███╔╝
██╔══██╗██║   ██║██║   ██║██║   ██║██╔══╝   ██╔██╗
██║  ██║╚██████╔╝╚██████╔╝╚██████╔╝███████╗██╔╝ ██╗
╚═╝  ╚═╝ ╚═════╝  ╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝

`;

export default function Hero() {
  const reduced = useReducedMotion();
  const containerRef = useRef(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  const portraitX = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const portraitY = useTransform(sy, [-0.5, 0.5], [-14, 14]);
  const asciiX = useTransform(sx, [-0.5, 0.5], [10, -10]);
  const gridX = useTransform(sx, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e) => {
    if (reduced || !containerRef.current) return;

    const bounds = containerRef.current.getBoundingClientRect();

    mx.set((e.clientX - bounds.left) / bounds.width - 0.5);
    my.set((e.clientY - bounds.top) / bounds.height - 0.5);
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-page pt-28 transition-colors duration-500"
    >
      <motion.div
        style={{ x: reduced ? 0 : gridX }}
        className="absolute inset-0"
      >
        <BlueprintGrid />
      </motion.div>

      <div className="section-shell relative grid w-full grid-cols-1 items-center gap-16 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="eyebrow"
          >
            Issue No. 01 — Cybersecurity Student &amp; Builder
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-5 font-serif text-display-1 text-ink text-balance"
          >
            Pulkit Gautam
            <span className="block text-mint">writes as RogueX.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 max-w-lg text-lg leading-relaxed text-ink-muted text-balance"
          >
            I break systems to understand them, then build the tools that keep
            them standing. Currently studying cybersecurity, competing in CTFs,
            and shipping small, sharp security tooling in public.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button as="a" href="#projects" size="lg">
              View Projects
              <ArrowUpRight className="h-4 w-4" />
            </Button>

            <Button as="a" href="#resume" variant="outline" size="lg">
              Resume
              <Download className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-16 flex items-center gap-3 text-ink-faint"
          >
            <ArrowDown
              className="h-4 w-4 animate-bounce"
              aria-hidden="true"
            />

            <span className="font-mono text-xs uppercase tracking-[0.2em]">
              Scroll to read
            </span>
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          <motion.div
            style={{
              x: reduced ? 0 : portraitX,
              y: reduced ? 0 : portraitY,
            }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-border bg-surface-raised transition-colors duration-500"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgb(var(--accent)/0.16),transparent_60%)]">
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-ink-ghost">
                <span className="font-serif text-7xl text-ink-ghost">
                  PG
                </span>

                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-faint">
                  Portrait Placeholder
                </span>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 border-t border-border bg-surface/90 px-4 py-3 backdrop-blur transition-colors duration-500">
              <p className="font-mono text-[11px] uppercase tracking-widest text-mint">
                Status: Available for internships
              </p>
            </div>
          </motion.div>

          <motion.div
            style={{ x: reduced ? 0 : asciiX }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="pointer-events-none absolute -bottom-10 -right-6 hidden select-none font-mono text-[6px] leading-[7px] text-mint/25 sm:block md:text-[7px] md:leading-[8px]"
            aria-hidden="true"
          >
            <pre>{ASCII}</pre>
          </motion.div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute -bottom-10 left-0 right-0 select-none overflow-hidden text-center font-serif text-[22vw] leading-none text-ink/[0.025]"
        aria-hidden="true"
      >
        ROGUEX
      </div>
    </section>
  );
}