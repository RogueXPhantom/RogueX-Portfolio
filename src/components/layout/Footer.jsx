import React from "react";

export default function Footer({ onOpenRogueOS }) {
  return (
    <footer className="relative border-t border-border py-10">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-ink-faint">
          © {new Date().getFullYear()} Pulkit Gautam. Built from scratch, broken in occasionally.
        </p>

        <button
          type="button"
          onClick={onOpenRogueOS}
          className="group flex items-center gap-2 font-mono text-xs text-ink-faint transition-colors duration-300 hover:text-mint"
          aria-label="Open RogueOS"
        >
          <span className="text-ink-ghost group-hover:text-mint">roguex@core:~$</span>
          <span className="inline-block h-3.5 w-[7px] animate-blink bg-mint" aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
}
