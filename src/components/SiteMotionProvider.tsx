"use client";

import { MotionConfig } from "framer-motion";

export default function SiteMotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
