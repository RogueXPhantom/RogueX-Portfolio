/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],

  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      colors: {
        black: "#000000",

        page: "rgb(var(--page) / <alpha-value>)",

        surface: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          raised: "rgb(var(--surface-raised) / <alpha-value>)",
          hover: "rgb(var(--surface-hover) / <alpha-value>)",
        },

        border: {
          DEFAULT: "rgb(var(--border) / <alpha-value>)",
          hairline: "rgb(var(--border-hairline) / <alpha-value>)",
        },

        mint: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          dim: "rgb(var(--accent-dim) / <alpha-value>)",
          bright: "rgb(var(--accent-bright) / <alpha-value>)",
        },

        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          muted: "rgb(var(--ink-muted) / <alpha-value>)",
          faint: "rgb(var(--ink-faint) / <alpha-value>)",
          ghost: "rgb(var(--ink-ghost) / <alpha-value>)",
        },
      },

      fontFamily: {
        serif: ["Instrument Serif", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },

      fontSize: {
        "display-1": [
          "clamp(3.5rem, 9vw, 9rem)",
          { lineHeight: "0.92", letterSpacing: "-0.02em" },
        ],
        "display-2": [
          "clamp(2.5rem, 6vw, 5.5rem)",
          { lineHeight: "0.96", letterSpacing: "-0.02em" },
        ],
        "display-3": [
          "clamp(1.8rem, 3.4vw, 3rem)",
          { lineHeight: "1.05", letterSpacing: "-0.01em" },
        ],
      },

      borderRadius: {
        DEFAULT: "14px",
        sm: "8px",
        lg: "20px",
        xl: "28px",
      },

      backgroundImage: {
        "blueprint-grid":
          "linear-gradient(to right, rgb(var(--accent) / 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--accent) / 0.06) 1px, transparent 1px)",
      },

      keyframes: {
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-1%, -2%)" },
          "20%": { transform: "translate(-3%, 1%)" },
          "30%": { transform: "translate(2%, -3%)" },
          "40%": { transform: "translate(-1%, 3%)" },
          "50%": { transform: "translate(-3%, 1%)" },
          "60%": { transform: "translate(2%, 0%)" },
          "70%": { transform: "translate(1%, -2%)" },
          "80%": { transform: "translate(-2%, 2%)" },
          "90%": { transform: "translate(1%, 1%)" },
        },

        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },

        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },

        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },

        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },

      animation: {
        grain: "grain 8s steps(10) infinite",
        blink: "blink 1s step-end infinite",
        marquee: "marquee 28s linear infinite",
        "fade-up":
          "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
      },

      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },

  plugins: [],
};