import React from "react";
import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";
import SectionHeading from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/button";
import { pad } from "@/lib/utils";

const TIMELINE = [
  // {
  //   period: "2023 — Present",
  //   role: "B.Tech, Computer Science (Cybersecurity Track)",
  //   org: "University Institute of Technology",
  //   note: "Coursework in network security, applied cryptography, and systems programming.",
  // },
  // {
  //   period: "2024 — Present",
  //   role: "Web & Recon Lead",
  //   org: "Campus Cybersecurity Club",
  //   note: "Runs monthly internal CTFs, mentors juniors through their first exploits.",
  // },
  // {
  //   period: "Summer 2024",
  //   role: "Security Intern",
  //   org: "Local MSP (contract)",
  //   note: "Assisted with vulnerability assessments and client-facing remediation reports.",
  // },
];

export default function ResumeSection() {
  return (
    <section id="resume" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            index={8}
            eyebrow="On Paper"
            title="Resume"
            deck="The condensed, recruiter-friendly version of everything on this page."
          />
          <div className="flex shrink-0 gap-3">
            <Button as="a" href="/resume-pulkit-gautam.pdf" download variant="primary">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
            <Button as="a" href="/resume-pulkit-gautam.pdf" target="_blank" rel="noreferrer" variant="outline">
              <Eye className="h-4 w-4" />
              Preview
            </Button>
          </div>
        </div>

        <div className="mt-16 border-t border-border">
          {TIMELINE.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="grid grid-cols-1 gap-3 border-b border-border py-8 sm:grid-cols-[100px_1fr_1.4fr] sm:gap-8"
            >
              <p className="font-mono text-xs text-ink-faint">{pad(i + 1)}</p>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-mint">{item.period}</p>
                <h3 className="mt-2 font-serif text-xl text-ink">{item.role}</h3>
                <p className="mt-1 text-sm text-ink-muted">{item.org}</p>
              </div>
              <p className="text-sm leading-relaxed text-ink-muted">{item.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
