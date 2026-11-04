"use client";

import { useEffect, useState } from "react";
import { BackgroundCubesGrid } from "@/components/ui/background-cubes-grid";

type Theme = "light" | "dark";

function getTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export default function PortfolioCubesBackground() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const updateTheme = () => setTheme(getTheme());

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  if (!theme) return null;

  const colors =
    theme === "dark"
      ? {
          topColor: "#000000",
          leftColor: "#1f150c",
          rightColor: "#412d15",
          glowColor: "#e1dcc9",
        }
      : {
          topColor: "#e1dcc9",
          leftColor: "#412d15",
          rightColor: "#1f150c",
          glowColor: "#000000",
        };

  return (
    <div
      className="pointer-events-none absolute inset-0 scale-[1.01] opacity-[0.07] blur-[1px]"
      aria-hidden="true"
    >
      <BackgroundCubesGrid
        cellSize={190}
        gap={0.04}
        amplitude={0.28}
        speed={5}
        damping={0.04}
        idleRipples={false}
        glow={theme === "dark" ? 0.18 : 0.1}
        {...colors}
      />
    </div>
  );
}
