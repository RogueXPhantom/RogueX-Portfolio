# RogueX — Portfolio for Pulkit Gautam

An editorial-magazine-styled portfolio with a hidden, OS-inspired layer
("RogueOS"). Built with React (Vite), React Router, Tailwind CSS, Framer
Motion, shadcn-style components, and Lucide icons.

## Stack

- **React 18** + **Vite 5**
- **React Router v6** (client-side routing, `/` and a 404 catch-all)
- **Tailwind CSS 3** (custom design tokens — see `tailwind.config.js`)
- **Framer Motion** (all animation/orchestration)
- **shadcn-style primitives** built on **Radix UI** (`Dialog`, `Tooltip`)
- **Lucide React** (icons)

## Getting started

This project's dependencies were **not** installed in the sandbox that
generated it (no network access there), so the first thing to do locally is:

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    ui/            shadcn-style primitives (Button, Badge, Card, Dialog, Tooltip)
    layout/         Chrome shared across pages (FloatingDock, GrainOverlay,
                    BlueprintGrid, ScrollProgress, SectionHeading, Footer)
    sections/       The 11 editorial sections (Hero, About, Projects, ...)
    rogueos/        The hidden RogueOS overlay and its mini-apps
  data/             Placeholder content (projects, certs, CTFs, blog posts)
  hooks/            useReducedMotion, useScrollProgress, useActiveSection,
                    useSecretTrigger
  pages/            Home.jsx, NotFound.jsx
  lib/utils.js      cn() classname helper
  App.jsx           Boot sequence + routing + global chrome
  main.jsx          Entry point
```

## Design system

- **Background:** pure black (`#000000`)
- **Accent:** mint (`#7FE8C5`)
- **Type:** Instrument Serif (headings) + Inter (body), loaded from Google Fonts
- **Radius:** 14px default (`rounded` in Tailwind maps to this)
- No glow, no neon, no Matrix-style effects — motion and typography carry
  the personality instead.

## The hidden layer — RogueOS

RogueOS is reachable two ways, neither of which interferes with normal
browsing:

1. Click the blinking cursor (`roguex@core:~$ _`) in the footer.
2. Type **`rogueos`** anywhere on the page (not while focused in a text
   input) — a quiet keyboard easter egg.

Inside RogueOS:
- **Workspace** — app launcher
- **Repository Manager** — filterable list of projects
- **Mission Logs** / **Research Notes** — condensed views of the CTF and
  blog data
- **Terminal** — a small functional shell (`help`, `whoami`, `ls`,
  `cat <file>`, `projects`, `ctfs`, `notes`, `clear`, and `sudo ...` to
  unlock the Secret Lab)
- **Secret Lab** — locked until you run a `sudo` command in the Terminal
- **Story Mode** — a short paginated origin story

## Replacing placeholder content

- Swap the initials placeholder in `Hero.jsx` for a real portrait.
- `public/resume-pulkit-gautam.pdf` is a generated placeholder résumé —
  replace it with a real PDF of the same filename (or update the paths in
  `ResumeSection.jsx`).
- All copy (projects, certifications, CTFs, blog posts, tech stack) lives
  in `src/data/*.js` — edit those files directly.

## Accessibility notes

- Respects `prefers-reduced-motion` (hooks/useReducedMotion.js + a global
  CSS override in `index.css`).
- Visible focus rings everywhere (`:focus-visible`), a skip-to-content
  link, semantic landmarks, and `aria-label`/`aria-current` on interactive
  chrome (dock, dialogs, progress bar).
- Color contrast was chosen against pure black background at AA or above
  for body text.
