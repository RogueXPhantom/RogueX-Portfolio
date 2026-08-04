import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

const BEATS = [
  {
    title: "2020 — The default password",
    text: "A university lab machine, a default admin password, and a weekend spent quietly checking how many other machines on the network shared it. Nineteen did.",
  },
  {
    title: "2022 — First CTF, zero flags",
    text: "Entered a beginner CTF alone, understood maybe a third of the challenge descriptions, and left with zero flags and a long list of things to learn.",
  },
  {
    title: "2023 — First flag, then twelve more",
    text: "Came back the following year with a small team. Solved a web challenge involving a subtly broken JWT check — the first of many.",
  },
  {
    title: "2024 — Building instead of only breaking",
    text: "Started shipping the tools that scratched a specific itch during engagements — recon scripts that became ShadowMap's first prototype.",
  },
  {
    title: "Now — Looking for the next room to break into",
    text: "Studying full-time, competing when the calendar allows, and looking for a team to learn from next.",
  },
];

export default function StoryMode() {
  const [index, setIndex] = useState(0);
  const beat = BEATS[index];

  return (
    <div className="flex h-full flex-col justify-between p-8">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
          {index + 1} / {BEATS.length}
        </p>
        <AnimatePresence mode="wait">
          <motion.div
            key={beat.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="mt-4"
          >
            <h4 className="font-serif text-2xl text-mint">{beat.title}</h4>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted">{beat.text}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
          className="flex items-center gap-1 font-mono text-xs text-ink-faint transition-colors hover:text-mint disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" /> Back
        </button>
        <div className="flex gap-1.5">
          {BEATS.map((_, i) => (
            <span
              key={i}
              className={`h-1 w-6 rounded-full transition-colors duration-300 ${
                i === index ? "bg-mint" : "bg-white/10"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setIndex((i) => Math.min(BEATS.length - 1, i + 1))}
          disabled={index === BEATS.length - 1}
          className="flex items-center gap-1 font-mono text-xs text-ink-faint transition-colors hover:text-mint disabled:pointer-events-none disabled:opacity-30"
        >
          Next <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
