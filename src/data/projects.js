export const projects = [
  {
    id: "center-target-tracker",
    title: "Center Target Tracker",
    tagline: "Real-Time Vision. Precise Target Tracking.",
    description:
      "Real-time computer vision tracker using YOLOv5 that detects people and selects the target closest to the center of the frame, with live coordinates, distance, offsets, FPS, and visualization. Built with Python, PyTorch, OpenCV, and NumPy.",
    tags: ["Python YOLOv5 PyTorch OpenCV NumPy Computer Vision Object Detection Real-Time Tracking"],
    year: "2026",
    size: "lg",
    role: "Solo builder",
    github: "https://github.com/RogueXPhantom/center-target-tracker",
    metrics: [
      { label: "Detection Model", value: "YOLOv5" },
      { label: "Processing", value: "Real-Time" },
    ],
  },

  // {
  //   id: "shadowmap",
  //   title: "ShadowMap",
  //   tagline: "Attack-surface recon that thinks in graphs, not lists.",
  //   description:
  //     "A reconnaissance platform that crawls subdomains, ports, and exposed services, then renders them as an interactive attack graph so pentesters can see pivot paths instead of scrolling through flat scan output.",
  //   tags: ["Python", "Graph Theory", "Nmap", "React"],
  //   year: "2025",
  //   size: "lg",
  //   role: "Solo builder",
  //   github: "https://github.com/roguex/shadowmap",
  //   demo: "https://shadowmap.roguex.dev",
  //   metrics: [
  //     { label: "Assets mapped / scan", value: "1,200+" },
  //     { label: "Avg. scan time", value: "48s" },
  //   ],
  // },

  // {
  //   id: "cerberus-waf",
  //   title: "Cerberus",
  //   tagline: "A lightweight WAF that learns your app's normal traffic shape.",
  //   description:
  //     "Reverse-proxy WAF written in Go that baselines request patterns per route and flags statistical outliers in real time — catching payload-shaped anomalies that static rule sets miss.",
  //   tags: ["Go", "Reverse Proxy", "Anomaly Detection"],
  //   year: "2025",
  //   size: "md",
  //   role: "Solo builder",
  //   github: "https://github.com/roguex/cerberus",
  //   demo: null,
  //   metrics: [{ label: "Median added latency", value: "1.4ms" }],
  // },

  // {
  //   id: "keyseer",
  //   title: "KeySeer",
  //   tagline: "Static analysis for leaked secrets, tuned for false-positive fatigue.",
  //   description:
  //     "A CLI and pre-commit hook that scans diffs for credentials, API keys, and private key material using entropy scoring layered on top of pattern rules, cutting noisy alerts by a wide margin in internal testing.",
  //   tags: ["Rust", "CLI", "Git Hooks"],
  //   year: "2024",
  //   size: "md",
  //   role: "Solo builder",
  //   github: "https://github.com/roguex/keyseer",
  //   demo: null,
  //   metrics: [{ label: "False-positive drop", value: "~70%" }],
  // },

  // {
  //   id: "packetlore",
  //   title: "PacketLore",
  //   tagline: "A PCAP viewer built for teaching, not just triage.",
  //   description:
  //     "Browser-based packet inspector that annotates captures with plain-language explanations of each handshake step — built while tutoring juniors through TCP/TLS fundamentals for a campus workshop.",
  //   tags: ["TypeScript", "WebAssembly", "Networking"],
  //   year: "2024",
  //   size: "sm",
  //   role: "Solo builder",
  //   github: "https://github.com/roguex/packetlore",
  //   demo: "https://packetlore.roguex.dev",
  //   metrics: [],
  // },

  // {
  //   id: "quietaudit",
  //   title: "QuietAudit",
  //   tagline: "A checklist-driven mini SAST for student codebases.",
  //   description:
  //     "A teaching-focused static analyzer that walks a repo against OWASP-flavored checks and produces a plain-English report, built to help classmates understand *why* a pattern is risky, not just that it is.",
  //   tags: ["Python", "AST", "OWASP"],
  //   year: "2023",
  //   size: "sm",
  //   role: "Solo builder",
  //   github: "https://github.com/roguex/quietaudit",
  //   demo: null,
  //   metrics: [],
  // },
];