import React from "react";
import { cn } from "@/lib/utils";

export default function BlueprintGrid({ className, fade = true }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {/* Grid */}
      <div
        className="
          absolute inset-0
          bg-[size:56px_56px]
          bg-[linear-gradient(to_right,rgba(127,232,197,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(127,232,197,0.06)_1px,transparent_1px)]
          dark:opacity-100
          opacity-0
        "
      />

      <div
        className="
          absolute inset-0
          bg-[size:56px_56px]
          bg-[linear-gradient(to_right,rgba(154,115,40,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(154,115,40,0.10)_1px,transparent_1px)]
          dark:opacity-0
          opacity-100
        "
      />

      {/* Fade */}
      {fade && (
        <>
          {/* Dark mode fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black dark:block hidden" />

          {/* Light mode fade */}
          <div className="absolute inset-0 hidden bg-gradient-to-b from-transparent via-[#f3ead7]/40 to-[#f3ead7] dark:hidden" />
        </>
      )}
    </div>
  );
}