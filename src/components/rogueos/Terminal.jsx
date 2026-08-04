import React, { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import { ctfs } from "@/data/ctfs";
import { blogs } from "@/data/blogs";

const WELCOME = [
  "RogueOS Terminal v1.0 — type 'help' to see available commands.",
  "",
];

function buildFileSystem() {
  return {
    "about.txt":
      "Pulkit Gautam (RogueX) — cybersecurity student, CTF player, and builder.\nFocused on offensive security, recon automation, and web exploitation.",
    "contact.txt": "hello@roguex.dev · github.com/roguex · linkedin.com/in/pulkit-gautam",
    "projects.list": projects.map((p) => `- ${p.title}: ${p.tagline}`).join("\n"),
    "ctfs.log": ctfs.map((c) => `[${c.date}] ${c.event} — ${c.rank}`).join("\n"),
    "notes.list": blogs.map((b) => `- ${b.title}`).join("\n"),
  };
}

export default function Terminal({ onUnlockSecretLab }) {
  const [history, setHistory] = useState(WELCOME);
  const [input, setInput] = useState("");
  const [commandLog, setCommandLog] = useState([]);
  const [logIndex, setLogIndex] = useState(-1);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const fs = useRef(buildFileSystem());

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [history]);

  const print = (lines) => setHistory((h) => [...h, ...(Array.isArray(lines) ? lines : [lines])]);

  const run = (raw) => {
    const cmd = raw.trim();
    print(`roguex@core:~$ ${cmd}`);
    if (!cmd) return;

    const [name, ...args] = cmd.split(/\s+/);

    switch (name.toLowerCase()) {
      case "help":
        print([
          "Available commands:",
          "  help              show this list",
          "  whoami            print operator identity",
          "  ls                list files",
          "  cat <file>        print a file",
          "  projects          list featured projects",
          "  ctfs              list mission logs",
          "  notes             list research notes",
          "  sudo <anything>   ...try it",
          "  clear             clear the terminal",
        ]);
        break;
      case "whoami":
        print("pulkit-gautam (RogueX) — role: student, offensive security");
        break;
      case "ls":
        print(Object.keys(fs.current).join("   "));
        break;
      case "cat":
        if (!args[0]) {
          print("usage: cat <file>");
        } else if (fs.current[args[0]]) {
          print(fs.current[args[0]].split("\n"));
        } else {
          print(`cat: ${args[0]}: no such file`);
        }
        break;
      case "projects":
        print(projects.map((p) => `${p.title.padEnd(14)} ${p.tagline}`));
        break;
      case "ctfs":
        print(ctfs.map((c) => `[${c.date}] ${c.event} — ${c.rank}`));
        break;
      case "notes":
        print(blogs.map((b) => `- ${b.title}`));
        break;
      case "clear":
        setHistory([]);
        return;
      case "sudo":
        print("Permission granted. Unlocking Secret Lab...");
        onUnlockSecretLab?.();
        break;
      default:
        print(`command not found: ${name} — type 'help'`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    run(input);
    setCommandLog((l) => [...l, input]);
    setLogIndex(-1);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandLog.length === 0) return;
      const next = Math.min(logIndex + 1, commandLog.length - 1);
      setLogIndex(next);
      setInput(commandLog[commandLog.length - 1 - next] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = logIndex - 1;
      setLogIndex(next);
      setInput(next >= 0 ? commandLog[commandLog.length - 1 - next] : "");
    }
  };

  return (
    <div
      className="flex h-full flex-col bg-black font-mono text-sm"
      onClick={() => inputRef.current?.focus()}
    >
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-4 text-[13px] leading-relaxed">
        {history.map((line, i) => (
          <p
            key={i}
            className={line.startsWith("roguex@core") ? "text-mint" : "whitespace-pre-wrap text-ink-muted"}
          >
            {line}
          </p>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-border px-5 py-3">
        <span className="text-mint">roguex@core:~$</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          spellCheck={false}
          autoComplete="off"
          aria-label="Terminal input"
          className="flex-1 bg-transparent text-ink outline-none placeholder:text-ink-ghost"
          placeholder="type a command..."
        />
      </form>
    </div>
  );
}
