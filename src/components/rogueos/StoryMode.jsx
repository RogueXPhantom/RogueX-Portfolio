import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

const BEATS = [
  
 {
  title: "2026 — Curiosity turned into cybersecurity",
  text: "I was always fascinated by cybercrime and wanted to understand how attackers do what they do. At the same time, I wanted to know how programs work and how to build them, so I started learning one thing at a time.",
},
{
  title: "2026 — Learning how things work",
  text: "I started exploring cybersecurity through CTFs and network security, then expanded into web security, API security, OSINT, and reverse engineering. The goal wasn't just to use tools, but to understand what was happening underneath them.",
},
{
  title: "2026 — Building while learning",
  text: "I realized that learning how to build something makes it easier to understand how to break it. So I started experimenting with programming and building projects while practicing security through CTF platforms and hands-on labs.",
},
{
  title: "Now — Learning, breaking, building",
  text: "Currently working through picoCTF, pwn.college, web security practice, and Cisco's Junior Cybersecurity Analyst course. I'm working toward becoming a cybersecurity professional who can help protect people's privacy, data, and money from cyber attacks.",
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
