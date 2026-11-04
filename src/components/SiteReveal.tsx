"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import {
  revealLeft,
  revealRight,
  revealUp,
  siteViewport,
} from "@/lib/site-motion";

type SiteRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
};

export default function SiteReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: SiteRevealProps) {
  const reduceMotion = useReducedMotion();
  const variants =
    direction === "left"
      ? revealLeft
      : direction === "right"
        ? revealRight
        : revealUp;

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={siteViewport}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
