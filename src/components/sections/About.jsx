import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/layout/SectionHeading";

const STATS = [
  { value: "0", label: "Projects Built" },
  { value: "6", label: "Security Domains Exploring" },
  { value: "1", label: "Certification in Progress" },
  { value: "∞", label: "Curiosity" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <SectionHeading
          index={1}
          eyebrow="Profile"
          title="Learning how systems work, so I can help secure them."
        />

        <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-[0.7fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <blockquote className="border-l-2 border-mint pl-6 font-serif text-3xl leading-snug text-ink text-balance sm:text-4xl">
              "The best way to secure a system is to first understand how it's
              built."
            </blockquote>

            <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
               — Pulkit, learning security by building and breaking
            </p>

            <dl className="mt-14 grid grid-cols-2 gap-8">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="font-serif text-4xl text-mint">
                    {s.value}
                  </dt>
                  <dd className="mt-2 text-sm leading-snug text-ink-muted">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6 text-lg leading-relaxed text-ink-muted"
          >
            <p>
              <span className="float-left mr-3 mt-1 font-serif text-7xl leading-[0.8] text-mint">
                I
              </span>
              'm a cybersecurity student who enjoys building things,
              experimenting with technology, figuring out how things work, and
              learning how systems are tested, secured, and protected through
              ethical hacking.
            </p>

            <p>
              My interest in cybersecurity started with curiosity. I was always
              fascinated by cybercrime and wondered how attackers compromise
              systems. At the same time, I wanted to understand how software
              works and how real-world applications are built. So I started
              learning one thing at a time, building projects and improving my
              skills through hands-on practice.
            </p>

            <p>
              I believe the best way to learn security is to first understand
              how to build secure systems. Once you know how applications work,
              you can better understand how they're attacked, tested, and
              improved. Today I'm exploring CTFs, web security, API security,
              reverse engineering, OSINT, and network security while
              continuously improving my programming skills.
            </p>

            <p>
              Currently, I'm working through picoCTF, pwn.college, web security
              labs, and Cisco's Junior Cybersecurity Analyst course. Every
              challenge and project helps me improve both my technical skills
              and my problem-solving mindset.
            </p>

            <p>
              Outside cybersecurity, I enjoy watching anime, building personal
              projects, and playing story-driven games. Every project I build
              teaches me something new and pushes me to become a better
              developer and security enthusiast.
            </p>

            <p className="text-ink">
              My goal is to become a cybersecurity professional who helps
              protect organizations and individuals from cyberattacks,
              safeguarding their privacy, personal data, and finances so they
              can use technology with confidence. I'm always open to
              internships, collaborations, and opportunities where I can learn,
              contribute, and grow alongside experienced professionals.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}