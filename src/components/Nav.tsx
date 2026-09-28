"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-7">
      {links.map((link, index) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className="group relative flex items-center gap-2 py-2"
          >
            {/* Number */}
            <span
              className={`
                font-mono text-[8px] transition-colors duration-300
                ${isActive ? "text-accent" : "text-foreground/20"}
              `}
            >
              0{index + 1}
            </span>

            {/* Link */}
            <span
              className={`
                text-[12px] font-medium uppercase tracking-[0.12em]
                transition-colors duration-300
                ${
                  isActive
                    ? "text-accent"
                    : "text-muted group-hover:text-accent"
                }
              `}
            >
              {link.name}
            </span>

            {/* Active indicator */}
            {isActive && (
              <motion.span
                layoutId="active-nav"
                className="absolute -bottom-[1px] left-0 h-px w-full bg-gradient-to-r from-accent via-accent to-accent"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}

            {/* Hover indicator */}
            {!isActive && (
              <span className="absolute -bottom-[1px] left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            )}
          </Link>
        );
      })}

      {/* Separator */}
      <div className="h-5 w-px bg-foreground/10" />

      {/* Resume */}
      <Link href="/resume">
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="
            group flex h-10 items-center gap-3
            border border-border
            px-4
            text-foreground
            transition-all duration-300
            hover:border-foreground
            hover:bg-foreground
            hover:text-background
          "
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em]">
            Resume
          </span>

          <FiDownload
            size={13}
            className="opacity-60 transition-opacity group-hover:opacity-100"
          />
        </motion.div>
      </Link>
    </nav>
  );
}
