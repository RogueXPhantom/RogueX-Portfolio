import React from "react";
import { motion } from "framer-motion";
import { Lock, FlaskConical } from "lucide-react";

const EXPERIMENTS = [
  // {
  //   name: "Project Chimera",
  //   status: "Paused",
  //   note: "An LLM-assisted fuzzer that writes its own grammar from observed traffic. Promising, occasionally hallucinates entire protocols.",
  // },
  // {
  //   name: "Operation Quietkey",
  //   status: "Active",
  //   note: "Side-channel timing experiments on a homemade keypad — how much can you infer from keystroke latency alone?",
  // },
  // {
  //   name: "Glass Onion",
  //   status: "Archived",
  //   note: "A layered CTF designed for the campus club, each flag revealing the next challenge's attack surface.",
  // },
];

export default function SecretLab({ unlocked }) {
  if (!unlocked) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4 p-10 text-center">
        <Lock className="h-8 w-8 text-ink-ghost" />
        <p className="max-w-xs font-mono text-xs leading-relaxed text-ink-faint">
          This wing is locked. Open the Terminal app and try the obvious command.
        </p>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="mb-6 flex items-center gap-2 text-mint">
        <FlaskConical className="h-4 w-4" />
        <p className="font-mono text-xs uppercase tracking-widest">Access granted — classified experiments</p>
      </div>
      <div className="space-y-4">
        {EXPERIMENTS.map((exp, i) => (
          <motion.div
            key={exp.name}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="rounded-sm border border-border bg-white/[0.02] p-4"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-serif text-lg text-ink">{exp.name}</h4>
              <span className="font-mono text-[10px] uppercase tracking-widest text-mint/70">
                {exp.status}
              </span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-ink-muted">{exp.note}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
