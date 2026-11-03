
"use client";

import { useEffect, useState } from "react";
import LetterGlitch from "@/components/LetterGlitch";

export default function ThemedLetterGlitch() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const root = document.documentElement;

    const updateTheme = () => {
      setIsDark(root.classList.contains("dark"));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 h-full w-full overflow-hidden"
    >
      {isDark !== null && (
        <LetterGlitch
          lightMode={!isDark}
          baseColor={isDark ? "#E1DCC9" : "#1F150C"}
          glitchColors={
            isDark
              ? ["#E1DCC9", "#412D15", "#1F150C"]
              : ["#000000", "#412D15", "#1F150C"]
          }
          characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[]+-="
          fontFamily="var(--font-jetbrains-mono), monospace"
          fontSize={14}
          spacing={0.7}
          density={0.75}
          baseOpacity={0.55}
          glitchAmount={0.3}
          speed={0.55}
          smooth={true}
          interactive={false}
          clickEffect="none"
          flow={0.2}
          edgeFade={0.08}
          centerFade={0.25}
          intro={true}
          className="absolute inset-0 h-full w-full"
        />
      )}
    </div>
  );
}
