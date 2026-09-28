"use client";

import { useEffect, useState, useCallback } from "react";
import { FiSun, FiMoon, FiArrowUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function ModeSwitch() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const initialDark = savedTheme ? savedTheme === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", initialDark);

    const mountFrame = window.requestAnimationFrame(() => {
      setIsDark(initialDark);
      setMounted(true);
    });

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.cancelAnimationFrame(mountFrame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const newIsDark = !prev;

      localStorage.setItem("theme", newIsDark ? "dark" : "light");

      document.documentElement.classList.toggle("dark", newIsDark);

      return newIsDark;
    });
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  if (!mounted) {
    return <span className="h-10 w-10 shrink-0" aria-hidden="true" />;
  }

  return (
    <>
      {/* SCROLL TO TOP */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 15,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="
              group
              fixed bottom-5 right-5 z-40
              flex h-12 w-12
              items-center justify-center
              border border-accent/30
              bg-foreground
              text-background
              transition-all duration-300

              hover:border-accent
              hover:bg-gradient-to-br
              hover:from-accent
              hover:to-accent
              hover:text-accent-foreground

              sm:bottom-7
              sm:right-7
            "
            style={{
              bottom: "max(1.25rem, env(safe-area-inset-bottom))",
              right: "max(1.25rem, env(safe-area-inset-right))",
            }}
          >
            {/* CORNER */}
            <span
              className="
                absolute -left-px -top-px
                h-2.5 w-2.5
                border-l border-t
                border-foreground/50
                transition-colors
                group-hover:border-background/40
              "
            />

            <FiArrowUp
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-1
              "
            />

            {/* INDEX */}
            <span
              className="
                absolute bottom-1 right-1.5
                font-mono text-[6px]
                text-foreground/20
                transition-colors
                group-hover:text-background/30
              "
            >
              ↑
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* THEME SWITCH */}
      <motion.button
        whileHover={{
          y: -2,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        title={`Switch to ${isDark ? "light" : "dark"} mode`}
        className="
          group relative
          flex h-10 w-10
          shrink-0
          items-center justify-center
          border border-accent/30
          bg-background
          dark:bg-background
          text-foreground
          transition-all duration-300

          hover:border-accent
          hover:bg-accent/15
          hover:text-background
        "
      >
        {/* CORNERS */}
        <span
          className="
            absolute -left-px -top-px
            h-2 w-2
            border-l border-t
            border-foreground/40
            transition-colors
            group-hover:border-background/50
          "
        />

        <span
          className="
            absolute -bottom-px -right-px
            h-2 w-2
            border-b border-r
            border-foreground/40
            transition-colors
            group-hover:border-background/50
          "
        />

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isDark ? "sun" : "moon"}
            initial={{
              opacity: 0,
              rotate: -45,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              rotate: 45,
              scale: 0.7,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            {isDark ? <FiSun size={15} /> : <FiMoon size={15} />}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </>
  );
}
