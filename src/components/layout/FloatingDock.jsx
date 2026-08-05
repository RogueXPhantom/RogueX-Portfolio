import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sun, Moon, BookOpen } from "lucide-react";
import { navItems } from "@/data/nav";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useTheme } from "../../context/ThemeContext.jsx";

const SECTION_IDS = navItems.map((n) => n.id);

function DockIcon({ item, mouseX, isActive, onNavigate }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const distance = useTransform(mouseX, (val) => {
    if (val === null || !ref.current) return Infinity;

    const bounds = ref.current.getBoundingClientRect();

    return val - (bounds.left + bounds.width / 2);
  });

  const sizeRaw = useTransform(
    distance,
    [-140, 0, 140],
    [40, 60, 40]
  );

  const size = useSpring(reduced ? 40 : sizeRaw, {
    mass: 0.1,
    stiffness: 220,
    damping: 16,
  });

  return (
    <Tooltip delayDuration={150}>
      <TooltipTrigger asChild>
        <motion.a
          ref={ref}
          href={item.href}
          onClick={(e) => onNavigate(e, item.href)}
          style={reduced ? undefined : { width: size, height: size }}
          className={cn(
            "relative flex aspect-square items-center justify-center rounded-full border transition-colors duration-300",
            isActive
              ? "border-mint/60 bg-mint/10 text-mint"
              : "border-border bg-surface-raised text-ink-muted hover:border-mint/40 hover:text-mint"
          )}
          aria-label={item.label}
          aria-current={isActive ? "true" : undefined}
        >
          <item.icon
            className="h-[42%] w-[42%]"
            strokeWidth={1.75}
          />

          {isActive && (
            <motion.span
              layoutId="dock-active-dot"
              className="absolute -bottom-2 h-1 w-1 rounded-full bg-mint"
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
            />
          )}
        </motion.a>
      </TooltipTrigger>

      <TooltipContent side="top">
        {item.label}
      </TooltipContent>
    </Tooltip>
  );
}

export default function FloatingDock({ onOpenStoryMode }) {
  const mouseX = useMotionValue(null);

  const active = useActiveSection(SECTION_IDS);

  const { theme, toggleTheme } = useTheme();

  const onNavigate = (e, href) => {
    e.preventDefault();

    const el = document.querySelector(href);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      history.replaceState(null, "", href);
    }
  };

  return (
    <TooltipProvider>
      <nav
        aria-label="Primary"
        className="fixed inset-x-0 bottom-5 z-[65] flex justify-center px-4"
      >
        <motion.div
          onMouseMove={(e) => mouseX.set(e.clientX)}
          onMouseLeave={() => mouseX.set(null)}
          className="flex max-w-[94vw] items-end gap-1.5 overflow-x-auto rounded-full border border-border bg-surface-raised/90 px-3 py-2.5 shadow-[0_8px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl [scrollbar-width:none] sm:gap-2 [&::-webkit-scrollbar]:hidden"
        >
          {navItems.map((item) => (
            <DockIcon
              key={item.id}
              item={item}
              mouseX={mouseX}
              isActive={active === item.id}
              onNavigate={onNavigate}
            />
          ))}

          {/* Story Mode */}
          <Tooltip delayDuration={150}>
            <TooltipTrigger asChild>
              <motion.button
                type="button"
                whileTap={{ scale: 0.92 }}
                onClick={onOpenStoryMode}
                className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-ink-muted transition-colors duration-300 hover:border-mint/40 hover:text-mint"
                aria-label="Open Story Mode"
              >
                <BookOpen
                  className="h-[42%] w-[42%]"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </motion.button>
            </TooltipTrigger>

            <TooltipContent side="top">
              Story Mode
            </TooltipContent>
          </Tooltip>

          <div
            className="mx-1 h-6 w-px bg-border"
            aria-hidden="true"
          />

          {/* Theme */}
          <Tooltip delayDuration={150}>
            <TooltipTrigger asChild>
              <motion.button
                type="button"
                whileTap={{ scale: 0.92 }}
                onClick={toggleTheme}
                className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-ink-muted transition-colors duration-300 hover:border-mint/40 hover:text-mint"
                aria-label={`Switch to ${
                  theme === "dark" ? "light" : "dark"
                } theme`}
              >
                {theme === "dark" ? (
                  <Sun
                    className="h-[42%] w-[42%]"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                ) : (
                  <Moon
                    className="h-[42%] w-[42%]"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                )}
              </motion.button>
            </TooltipTrigger>

            <TooltipContent side="top">
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </TooltipContent>
          </Tooltip>
        </motion.div>
      </nav>
    </TooltipProvider>
  );
}