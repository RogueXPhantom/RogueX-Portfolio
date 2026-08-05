import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  LayoutGrid,
  FolderGit2,
  Flag,
  NotebookPen,
  TerminalSquare,
  FlaskConical,
  BookOpen,
} from "lucide-react";
import Terminal from "./Terminal";
import RepositoryManager from "./RepositoryManager";
import SecretLab from "./SecretLab";
import StoryMode from "./StoryMode";
import { MissionLogsApp, ResearchNotesApp } from "./MiniApps";

const APPS = [
  { id: "workspace", label: "Workspace", icon: LayoutGrid },
  { id: "repos", label: "Repository Manager", icon: FolderGit2 },
  { id: "missions", label: "Mission Logs", icon: Flag },
  { id: "notes", label: "Research Notes", icon: NotebookPen },
  { id: "terminal", label: "Terminal", icon: TerminalSquare },
  { id: "lab", label: "Secret Lab", icon: FlaskConical },
];

function Workspace({ onOpen }) {
  return (
    <div className="grid h-full grid-cols-2 gap-4 p-8 sm:grid-cols-3">
      {APPS.filter((a) => a.id !== "workspace").map((app) => (
        <button
          key={app.id}
          onClick={() => onOpen(app.id)}
          className="group flex flex-col items-center justify-center gap-3 rounded-lg border border-border bg-white/[0.02] py-8 transition-colors duration-300 hover:border-mint/40 hover:bg-white/[0.04]"
        >
          <app.icon
            className="h-6 w-6 text-ink-muted transition-colors duration-300 group-hover:text-mint"
            strokeWidth={1.6}
          />

          <span className="font-mono text-xs text-ink-muted transition-colors duration-300 group-hover:text-ink">
            {app.label}
          </span>
        </button>
      ))}
    </div>
  );
}

export default function RogueOS({ open, onClose }) {
  const [activeApp, setActiveApp] = useState("workspace");
  const [labUnlocked, setLabUnlocked] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const renderApp = () => {
    switch (activeApp) {
      case "repos":
        return <RepositoryManager />;

      case "missions":
        return <MissionLogsApp />;

      case "notes":
        return <ResearchNotesApp />;

      case "terminal":
        return (
          <Terminal
            onUnlockSecretLab={() => setLabUnlocked(true)}
          />
        );

      case "lab":
        return <SecretLab unlocked={labUnlocked} />;

      case "story":
        return <StoryMode />;

      default:
        return <Workspace onOpen={setActiveApp} />;
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="RogueOS"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.97,
              y: 12,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.97,
              y: 12,
            }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex h-full max-h-[46rem] w-full max-w-5xl flex-col overflow-hidden rounded-lg border border-border bg-[#030303] shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-mint/60" />

                <span className="ml-3 font-mono text-xs uppercase tracking-widest text-ink-faint">
                  RogueOS —{" "}
                  {APPS.find((a) => a.id === activeApp)?.label}
                </span>
              </div>

              <button
                onClick={onClose}
                aria-label="Close RogueOS"
                className="rounded-sm p-1 text-ink-faint transition-colors hover:text-mint"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex min-h-0 flex-1">
              <div className="hidden w-48 shrink-0 flex-col gap-1 border-r border-border p-3 sm:flex">
                {APPS.map((app) => (
                  <button
                    key={app.id}
                    onClick={() => setActiveApp(app.id)}
                    className={`flex items-center gap-2.5 rounded-sm px-3 py-2 text-left font-mono text-xs transition-colors duration-200 ${
                      activeApp === app.id
                        ? "bg-mint/10 text-mint"
                        : "text-ink-faint hover:bg-white/[0.03] hover:text-ink"
                    }`}
                  >
                    <app.icon
                      className="h-3.5 w-3.5"
                      strokeWidth={1.75}
                    />

                    {app.label}
                  </button>
                ))}
              </div>

              <div className="min-h-0 flex-1">
                {renderApp()}
              </div>
            </div>

            <div className="flex gap-1 overflow-x-auto border-t border-border p-2 sm:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {APPS.map((app) => (
                <button
                  key={app.id}
                  onClick={() => setActiveApp(app.id)}
                  className={`flex shrink-0 items-center gap-1.5 rounded-sm px-3 py-2 font-mono text-[11px] ${
                    activeApp === app.id
                      ? "bg-mint/10 text-mint"
                      : "text-ink-faint"
                  }`}
                >
                  <app.icon className="h-3.5 w-3.5" />
                  {app.label}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
