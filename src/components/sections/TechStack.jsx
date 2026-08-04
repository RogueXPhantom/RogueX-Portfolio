import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/layout/SectionHeading";
import { pad } from "@/lib/utils";
import { techStack } from "@/data/techstack";

export default function TechStack() {
  return (
    <section id="techstack" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <SectionHeading
          index={3}
          eyebrow="Toolbox"
          title="Tech Stack"
          deck="The tools I reach for most — grouped by what they're actually for, not by how impressive the list looks."
        />

        <div className="mt-16 grid grid-cols-1 border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: gi * 0.06 }}
              className="border-b border-r border-border p-8 first:border-l"
            >
              <p className="font-mono text-xs text-ink-faint">{pad(gi + 1)}</p>
              <h3 className="mt-3 font-serif text-xl text-ink">{group.category}</h3>
              <ul className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-ink-muted transition-colors duration-300 hover:text-mint"
                  >
                    <span className="h-1 w-1 rounded-full bg-ink-ghost" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
