"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { memo } from "react";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

const sizes = {
  sm: {
    width: 110,
    height: 32,
    className: "w-[100px] sm:w-[110px]",
  },
  md: {
    width: 145,
    height: 42,
    className: "w-[125px] sm:w-[145px]",
  },
  lg: {
    width: 180,
    height: 52,
    className: "w-[155px] sm:w-[180px]",
  },
};

const BrandLogo = memo(function BrandLogo({
  size = "md",
  animated = true,
}: BrandLogoProps) {
  const s = sizes[size];

  const Logo = (
    <div className="group relative flex items-center">
      {/* LIGHT MODE */}
      <Image
        src="/logo-dark-transparent.png"
        alt="Bouhcine Amezouar"
        width={s.width}
        height={s.height}
        priority
        className={`
          ${s.className}
          h-auto object-contain
          transition-opacity duration-300
          group-hover:opacity-70
          dark:hidden
        `}
      />

      {/* DARK MODE */}
      <Image
        src="/logo-light-transparent.png"
        alt="Bouhcine Amezouar"
        width={s.width}
        height={s.height}
        priority
        className={`
          ${s.className}
          hidden h-auto object-contain
          transition-opacity duration-300
          group-hover:opacity-70
          dark:block
        `}
      />

      {/* Small technical detail */}
      <span
        className="
          absolute -right-3 top-0
          h-1 w-1
          bg-current
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-40
        "
      />
    </div>
  );

  if (!animated) {
    return Logo;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -12,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      whileHover={{
        x: 2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="inline-flex"
    >
      {Logo}
    </motion.div>
  );
});

BrandLogo.displayName = "BrandLogo";

export default BrandLogo;