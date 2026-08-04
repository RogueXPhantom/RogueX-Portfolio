import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Mail, Linkedin, Github, Twitter } from "lucide-react";
import SectionHeading from "@/components/layout/SectionHeading";

const EMAIL = "pulkitgautam7@gmail.com";

const LINKS = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, icon: Mail, copy: true },
  { label: "GitHub", value: "@roguexphantom", href: "https://github.com/roguexphantom", icon: Github },
  { label: "LinkedIn", value: "/in/pulkit-gautam", href: "https://www.linkedin.com/in/pulkit-gautam-8048a2427/", icon: Linkedin },
  { label: "Twitter / X", value: "@Roguex", href: "https://x.com/RogueX_Phantom", icon: Twitter },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e, value) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${value}`;
    }
  };

  return (
    <section id="contact" className="relative py-28 sm:py-40">
      <div className="section-shell">
        <SectionHeading index={9} eyebrow="Get in Touch" title="Let's work together." align="center" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-10 max-w-2xl text-center"
        >
          <p className="text-lg leading-relaxed text-ink-muted text-balance">
            I'm currently open to internships and junior security or engineering
            roles. If you're building something that needs someone who reads
            source code for fun, say hello.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            onClick={(e) => handleCopy(e, EMAIL)}
            className="group mt-8 inline-flex items-center gap-3 font-serif text-3xl text-ink transition-colors duration-300 hover:text-mint sm:text-5xl"
          >
            {EMAIL}
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors duration-300 group-hover:border-mint/50">
              {copied ? (
                <Check className="h-4 w-4 text-mint" />
              ) : (
                <Copy className="h-4 w-4 text-ink-faint group-hover:text-mint" />
              )}
            </span>
          </a>
          <p className="mt-2 font-mono text-xs uppercase tracking-widest text-ink-faint">
            {copied ? "Copied to clipboard" : "Click to copy"}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex flex-col items-center gap-3 rounded-lg border border-border bg-surface-raised px-4 py-6 text-center transition-colors duration-300 hover:border-mint/40"
            >
              <link.icon className="h-5 w-5 text-ink-faint transition-colors duration-300 group-hover:text-mint" />
              <span className="text-xs text-ink-muted transition-colors duration-300 group-hover:text-ink">
                {link.value}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
