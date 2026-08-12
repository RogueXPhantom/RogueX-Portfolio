import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/layout/SectionHeading";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <SectionHeading
          index={4}
          eyebrow="Credentials"
          title="Certifications"
          deck="Formal proof to go with the informal kind — the write-ups in Mission Logs and Research Notes."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.55,
                delay: (i % 2) * 0.08,
              }}
              className="card-editorial group overflow-hidden rounded-lg"
            >
              {/* Certificate preview */}
              <div className="relative h-[360px] overflow-hidden bg-white">
                <iframe
                  src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  title={cert.name}
                  className="absolute left-0 top-0 border-0"
                  style={{
                    width: "calc(100% + 20px)",
                    height: "calc(100% + 20px)",
                  }}
                />

                {/* Click anywhere on the preview to open the full PDF */}
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${cert.name}`}
                  className="absolute inset-0 z-10"
                />
              </div>

              {/* Certificate information */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <BadgeCheck
                      className="h-5 w-5 text-mint"
                      strokeWidth={1.75}
                    />

                    <span className="font-mono text-xs uppercase tracking-widest text-mint">
                      Verified
                    </span>
                  </div>

                  <span className="font-mono text-xs text-ink-faint">
                    {cert.year}
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-xl leading-snug text-ink">
                  {cert.name}
                </h3>

                <p className="mt-1 text-sm text-mint/80">
                  {cert.issuer}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {cert.note}
                </p>

                <div className="mt-5 flex items-center justify-between gap-4 border-t border-border pt-4">
                  <span className="truncate font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                    ID · {cert.credentialId}
                  </span>

                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="flex shrink-0 items-center gap-1.5 font-mono text-xs text-ink-faint transition-colors hover:text-mint"
                  >
                    Open
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}