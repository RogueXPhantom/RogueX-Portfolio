import React, { useState } from "react";
import { Search, GitBranch, Star } from "lucide-react";
import { projects } from "@/data/projects";

export default function RepositoryManager() {
  const [query, setQuery] = useState("");

  const filtered = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2 border-b border-border px-5 py-3">
        <Search className="h-4 w-4 text-ink-faint" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter repositories by name or tag..."
          className="w-full bg-transparent font-mono text-sm text-ink outline-none placeholder:text-ink-ghost"
          aria-label="Filter repositories"
        />
      </div>
      <div className="flex-1 overflow-y-auto p-3">
        {filtered.length === 0 && (
          <p className="p-6 text-center font-mono text-xs text-ink-faint">No repositories match "{query}".</p>
        )}
        {filtered.map((p) => (
          <div
            key={p.id}
            className="flex items-start justify-between gap-4 rounded-sm border border-transparent px-3 py-3 transition-colors hover:border-border hover:bg-white/[0.02]"
          >
            <div>
              <div className="flex items-center gap-2">
                <GitBranch className="h-3.5 w-3.5 text-mint" />
                <span className="font-mono text-sm text-ink">roguex/{p.id}</span>
              </div>
              <p className="mt-1 max-w-md text-xs text-ink-muted">{p.tagline}</p>
              <div className="mt-2 flex gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <span className="flex shrink-0 items-center gap-1 font-mono text-xs text-ink-faint">
              <Star className="h-3.5 w-3.5" /> {p.metrics.length > 0 ? p.metrics[0].value : "—"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
