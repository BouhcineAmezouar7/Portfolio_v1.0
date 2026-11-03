"use client";

import { useEffect, useState } from "react";
import GlowCursor from "@/components/GlowCursor";

export default function ThemedGlowCursor() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const syncTheme = () => setIsDark(root.classList.contains("dark"));

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  if (isDark === null) return null;

  const cursorColor = isDark ? "#E1DCC9" : "#412D15";

  return (
    <GlowCursor
      color={cursorColor}
      secondaryColor={cursorColor}
      intensity={0.8}
      trailWidth={2.2}
      linger={0.9}
      glow={0.65}
      hotspot={0}
      followSpeed={0.7}
      grain={0.04}
      clickBurst={false}
      quality="medium"
      theme={isDark ? "dark" : "light"}
      blendMode={isDark ? "screen" : "normal"}
    />
  );
}
