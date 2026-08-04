import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
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

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              className="card-editorial group flex flex-col justify-between rounded-lg p-7"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <BadgeCheck className="h-5 w-5 text-mint" strokeWidth={1.75} />
                  <span className="font-mono text-xs text-ink-faint">{cert.year}</span>
                </div>
                <h3 className="mt-5 font-serif text-xl leading-snug text-ink">{cert.name}</h3>
                <p className="mt-1 text-sm text-mint/80">{cert.issuer}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">{cert.note}</p>
              </div>
              <p className="mt-6 border-t border-border pt-4 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                ID · {cert.credentialId}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
