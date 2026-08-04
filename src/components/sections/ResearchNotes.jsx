import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/layout/SectionHeading";
import { blogs } from "@/data/blogs";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function ResearchNotes() {
  return (
    <section id="blogs" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <SectionHeading
          index={6}
          eyebrow="Notebook"
          title="Research Notes"
          deck="Long-form write-ups on whatever broke my brain that month — mostly web security, exploitation, and defensive tooling."
        />

        <div className="mt-16 grid grid-cols-1 gap-1 lg:grid-cols-2 lg:gap-x-10">
          {blogs.map((post, i) => (
            <motion.a
              key={post.id}
              href="#blogs"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.06 }}
              className="group flex items-start justify-between gap-6 border-b border-border py-7"
            >
              <div>
                <p className="font-mono text-xs text-ink-faint">
                  {formatDate(post.date)} · {post.readTime} read
                </p>
                <h3 className="mt-2 max-w-xl font-serif text-2xl leading-snug text-ink transition-colors duration-300 group-hover:text-mint">
                  {post.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-muted">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {post.tags.map((t) => (
                    <span key={t} className="font-mono text-[11px] uppercase tracking-wider text-mint/70">
                      #{t.replace(/\s+/g, "")}
                    </span>
                  ))}
                </div>
              </div>
              <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-ink-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-mint" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
