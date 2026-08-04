import React, { useCallback, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import BootSequence from "@/components/sections/BootSequence";
import GrainOverlay from "@/components/layout/GrainOverlay";
import ScrollProgress from "@/components/layout/ScrollProgress";
import FloatingDock from "@/components/layout/FloatingDock";
import Footer from "@/components/layout/Footer";
import RogueOS from "@/components/rogueos/RogueOS";
import { useSecretTrigger } from "@/hooks/useSecretTrigger";

const BOOT_SESSION_KEY = "roguex_booted";

export default function App() {
  const [booted, setBooted] = useState(
    () => sessionStorage.getItem(BOOT_SESSION_KEY) === "1"
  );
  const [rogueOSOpen, setRogueOSOpen] = useState(false);

  const handleBootDone = useCallback(() => {
    sessionStorage.setItem(BOOT_SESSION_KEY, "1");
    setBooted(true);
  }, []);

  const openRogueOS = useCallback(() => setRogueOSOpen(true), []);
  const closeRogueOS = useCallback(() => setRogueOSOpen(false), []);

  // Typing "rogueos" anywhere on the page quietly unlocks the hidden OS.
  useSecretTrigger("rogueos", openRogueOS);

  return (
    <div className="relative min-h-screen bg-page text-ink transition-colors duration-500">
      {!booted && <BootSequence onDone={handleBootDone} />}

      {booted && (
        <>
          <a
            href="#home"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded focus:bg-mint focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black"
          >
            Skip to content
          </a>

          <ScrollProgress />
          <GrainOverlay />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer onOpenRogueOS={openRogueOS} />
          <FloatingDock />
          <RogueOS open={rogueOSOpen} onClose={closeRogueOS} />
        </>
      )}
    </div>
  );
}