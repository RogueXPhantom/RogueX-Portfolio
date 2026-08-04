import React from "react";
import { motion } from "framer-motion";
import { Flag } from "lucide-react";
import SectionHeading from "@/components/layout/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { ctfs } from "@/data/ctfs";

export default function MissionLogs() {
  return (
    <section id="ctfs" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <SectionHeading
          index={5}
          eyebrow="Field Log"
          title="Mission Logs"
          deck="Capture-the-flag competitions, logged like after-action reports — what the challenge was, and what actually broke it open."
        />

        <div className="mt-16 border-t border-border">
          {ctfs.map((entry, i) => (
            <motion.article
              key={entry.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.05 }}
              className="group grid grid-cols-1 gap-4 border-b border-border py-8 transition-colors duration-300 hover:bg-white/[0.015] sm:grid-cols-[1fr_2fr] sm:gap-10 sm:px-2"
            >
              <div>
                <p className="font-mono text-xs text-ink-faint">{entry.date}</p>
                <h3 className="mt-2 flex items-center gap-2 font-serif text-2xl text-ink">
                  <Flag className="h-4 w-4 text-mint" strokeWidth={2} />
                  {entry.event}
                </h3>
                <p className="mt-2 text-sm text-ink-muted">{entry.role}</p>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-sm bg-mint/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-mint">
                    {entry.rank}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                    {entry.category}
                  </span>
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted">
                  {entry.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.tags.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
