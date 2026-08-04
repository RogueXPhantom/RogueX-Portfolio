import { useEffect, useRef } from "react";

export function useSecretTrigger(phrase, onUnlock) {
  const bufferRef = useRef("");

  useEffect(() => {
    const handler = (e) => {
      const tag = document.activeElement?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea") return;

      if (e.key.length === 1) {
        bufferRef.current = (bufferRef.current + e.key).slice(-phrase.length).toLowerCase();
        if (bufferRef.current === phrase.toLowerCase()) {
          onUnlock();
          bufferRef.current = "";
        }
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [phrase, onUnlock]);
}
