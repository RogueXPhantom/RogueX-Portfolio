import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/** Formats an index like 1 -> "01" for editorial numbering. */
export function pad(n) {
  return String(n).padStart(2, "0");
}
