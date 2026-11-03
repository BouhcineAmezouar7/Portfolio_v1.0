"use client";

import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import BrandLogo from "./MyLogo";
import ModeSwitch from "./ModeSwitch";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="relative z-50 w-full px-4 pt-5 sm:px-6 lg:px-8">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto container "
      >
        <div
          className="
            relative flex h-[72px]
            items-center justify-between
            border-y border-border
            bg-background/30
            px-2 sm:px-4
          "
        >
          {/* left decoration */}
          <div className="absolute -left-px -top-px h-3 w-3 border-l border-t border-foreground/50" />

          <div className="absolute -bottom-px -left-px h-3 w-3 border-b border-l border-foreground/50" />

          {/* right decoration */}
          <div className="absolute -right-px -top-px h-3 w-3 border-r border-t border-foreground/50" />

          <div className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-foreground/50" />

          {/* Logo */}
          <div className="flex items-center gap-5">
            <Link href="/" className="shrink-0">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="flex items-center"
              >
                <BrandLogo size="md" animated />
              </motion.div>
            </Link>

            {/* separator */}
            <div className="hidden h-5 w-px bg-foreground/15 sm:block" />

            {/* small portfolio label */}
            <div className="hidden sm:block">
              <p className="font-mono text-[9px] uppercase leading-[1.5] tracking-[0.2em] text-foreground/30">
                Full Stack
              </p>

              <p className="font-mono text-[9px] uppercase leading-[1.5] tracking-[0.2em] text-foreground/30">
                Developer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Desktop Navigation */}
            <div className="hidden items-center gap-7 xl:flex">
              <Nav />

              {/* status */}
              <div className="flex items-center gap-2 border-l border-border pl-6">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-30" />

                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>

                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-foreground/35">
                  Available
                </span>
              </div>
            </div>

            <ModeSwitch />

            {/* Mobile Navigation */}
            <div className="flex items-center gap-4 xl:hidden">

              <MobileNav />
            </div>
          </div>
        </div>

      </motion.div>
    </header>
  );
}
