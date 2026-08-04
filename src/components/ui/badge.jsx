import React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, children, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-ink-muted",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
