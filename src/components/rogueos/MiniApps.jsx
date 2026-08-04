import React from "react";
import { Flag, NotebookPen } from "lucide-react";
import { ctfs } from "@/data/ctfs";
import { blogs } from "@/data/blogs";

export function MissionLogsApp() {
  return (
    <div className="h-full overflow-y-auto p-5">
      {ctfs.map((c) => (
        <div key={c.id} className="border-b border-border py-4 last:border-0">
          <div className="flex items-center gap-2">
            <Flag className="h-3.5 w-3.5 text-mint" />
            <span className="font-mono text-sm text-ink">{c.event}</span>
            <span className="ml-auto font-mono text-[11px] text-ink-faint">{c.date}</span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-ink-muted">{c.summary}</p>
        </div>
      ))}
    </div>
  );
}

export function ResearchNotesApp() {
  return (
    <div className="h-full overflow-y-auto p-5">
      {blogs.map((b) => (
        <div key={b.id} className="border-b border-border py-4 last:border-0">
          <div className="flex items-center gap-2">
            <NotebookPen className="h-3.5 w-3.5 text-mint" />
            <span className="font-mono text-sm text-ink">{b.title}</span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-ink-muted">{b.excerpt}</p>
        </div>
      ))}
    </div>
  );
}
