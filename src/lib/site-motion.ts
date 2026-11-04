import type { Variants } from "framer-motion";

export const siteEase = [0.16, 1, 0.3, 1] as const;

export const revealUp: Variants = {
  hidden: { opacity: 0, y: 44, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.82, ease: siteEase },
  },
};

export const revealLeft: Variants = {
  hidden: { opacity: 0, x: -48, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: siteEase },
  },
};

export const revealRight: Variants = {
  hidden: { opacity: 0, x: 48, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: siteEase },
  },
};

export const staggerReveal: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

export const siteViewport = {
  once: true,
  amount: 0.18,
  margin: "0px 0px -8% 0px",
} as const;
