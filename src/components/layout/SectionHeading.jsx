import React from "react";
import { motion } from "framer-motion";
import { pad } from "@/lib/utils";

export default function SectionHeading({ index, eyebrow, title, deck, align = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <p className="eyebrow flex items-center gap-3 justify-start">
        {typeof index === "number" && <span className="text-ink-faint">{pad(index)}</span>}
        {eyebrow}
      </p>
      <h2 className="mt-4 font-serif text-display-2 text-ink text-balance">{title}</h2>
      {deck && <p className="mt-5 text-base leading-relaxed text-ink-muted text-balance">{deck}</p>}
    </motion.div>
  );
}
