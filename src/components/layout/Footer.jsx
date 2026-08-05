import React from "react";
import { TerminalSquare, ArrowUpRight } from "lucide-react";

export default function Footer({ onOpenRogueOS }) {
  return (
    <footer className="relative border-t border-border py-10">
      <div className="section-shell flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">

        {/* Copyright */}
        <p className="text-xs text-ink-faint">
          © {new Date().getFullYear()} Pulkit Gautam. Built from scratch, broken in occasionally.
        </p>

        {/* RogueOS trigger */}
        <button
          type="button"
          onClick={onOpenRogueOS}
          aria-label="Open RogueOS"
          className="
            group
            inline-flex
            items-center
            gap-3
            rounded-md
            border
            border-border
            bg-white/[0.02]
            px-4
            py-2.5
            font-mono
            text-xs
            text-ink-faint
            transition-all
            duration-300
            hover:border-mint/40
            hover:bg-mint/[0.06]
            hover:text-mint
          "
        >
          {/* Terminal icon */}
          <TerminalSquare
            className="
              h-4 w-4
              text-ink-ghost
              transition-colors
              duration-300
              group-hover:text-mint
            "
          />

          {/* Terminal prompt */}
          <span className="text-ink-ghost group-hover:text-mint">
            roguex@core:~$
          </span>

          {/* Open text */}
          <span className="text-mint">
            OPEN ROGUEOS
          </span>

          <ArrowUpRight
            className="
              h-3.5 w-3.5
              transition-transform
              duration-300
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
            "
          />

          {/* Cursor */}
          <span
            className="
              inline-block
              h-3.5
              w-[6px]
              bg-mint
              animate-blink
            "
            aria-hidden="true"
          />
        </button>

      </div>
    </footer>
  );
}