import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const LINES = [
  "roguex@core:~$ initiating session",
  "authenticating ........... Pulkit Gautam",
  "loading profile .......... cybersecurity student",
  "loading modules .......... web | pwn | rev | osint | networks",
  "loading projects ......... github.com/RogueXPhantom",
  "mounting  ................ /portfolio",
  "status .................... online",
];

export default function BootSequence({ onDone }) {
  const reduced = useReducedMotion();
  const [visibleLines, setVisibleLines] = useState(reduced ? LINES.length : 0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (reduced) {
      const t = setTimeout(finish, 250);
      return () => clearTimeout(t);
    }

    if (visibleLines < LINES.length) {
      const t = setTimeout(() => setVisibleLines((v) => v + 1), 260);
      return () => clearTimeout(t);
    }

    const t = setTimeout(finish, 550);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleLines, reduced]);

  function finish() {
    setExiting(true);
    setTimeout(() => onDone?.(), 650);
  }

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-start justify-center bg-black px-8 sm:px-16"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mx-auto w-full max-w-xl font-mono text-sm text-mint sm:text-base">
            {LINES.slice(0, visibleLines).map((line, i) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={i === LINES.length - 1 ? "mt-3 text-white" : "text-mint/80"}
              >
                {line}
              </motion.p>
            ))}
            <motion.span
              className="mt-2 inline-block h-4 w-2.5 bg-mint align-middle"
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
              aria-hidden="true"
            />
          </div>

          <motion.div
            className="pointer-events-none absolute inset-0 flex items-end justify-end p-8 sm:p-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-faint">
              RogueX / v1.0
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
