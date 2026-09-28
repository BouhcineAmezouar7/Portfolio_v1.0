"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { motion } from "framer-motion";
import BrandLogo from "./MyLogo";

const links = [
  { number: "01", name: "Home", href: "/" },
  { number: "02", name: "About", href: "/about" },
  { number: "03", name: "Projects", href: "/projects" },
  { number: "04", name: "Contact", href: "/contact" },
];

export default function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* MENU BUTTON */}
      <SheetTrigger asChild>
        <motion.button
          whileTap={{ scale: 0.95 }}
          aria-label="Open navigation menu"
          className="
            group relative
            flex h-10 w-10
            items-center justify-center
            border border-foreground/15
            bg-background
            text-foreground
            transition-all duration-300

            hover:border-accent
            hover:text-accent
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
              group-hover:border-accent
            "
          />

          <span
            className="
              absolute -bottom-px -right-px
              h-2 w-2
              border-b border-r
              border-foreground/40
              transition-colors
              group-hover:border-accent
            "
          />

          <FiMenu size={17} />
        </motion.button>
      </SheetTrigger>

      {/* MENU */}
      <SheetContent
        side="right"
        className="
          w-full
          border-l border-foreground/10
          bg-background
          p-0
          text-foreground
          sm:max-w-[480px]

          [&>button]:hidden
        "
      >
        <div className="flex h-full flex-col">
          {/* HEADER */}
          <div
            className="
              flex h-[72px]
              items-center justify-between
              border-b border-foreground/10
              px-5 sm:px-7
            "
          >
            <Link href="/" onClick={() => setOpen(false)} className="group">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-accent" />

                <BrandLogo size="md" />
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
              className="
                group relative
                flex h-10 w-10
                items-center justify-center
                border border-foreground/15
                transition-all duration-300

                hover:border-accent
                hover:text-accent
              "
            >
              <FiX
                size={17}
                className="transition-transform duration-300 group-hover:rotate-90"
              />

              <span className="absolute -right-px -top-px h-2 w-2 border-r border-t border-accent" />
            </button>
          </div>

          {/* META */}
          <div className="flex items-center justify-between border-b border-foreground/10 px-5 py-3 sm:px-7">
            <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-foreground/30">
              Navigation / Menu
            </span>

            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping bg-accent opacity-30" />

                <span className="relative inline-flex h-1.5 w-1.5 bg-accent" />
              </span>

              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/30">
                Available
              </span>
            </div>
          </div>

          {/* NAVIGATION */}
          <nav className="flex flex-1 flex-col justify-center">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`
                    group relative
                    flex items-center
                    border-b border-foreground/10
                    px-5 py-6
                    transition-all duration-300
                    sm:px-7 sm:py-7

                    ${
                      isActive
                        ? "bg-foreground text-background"
                        : "text-foreground hover:bg-foreground hover:text-background"
                    }
                  `}
                >
                  {/* NUMBER */}
                  <span
                    className={`
                      mr-5
                      font-mono text-[9px]
                      transition-colors duration-300

                      ${
                        isActive
                          ? "text-accent"
                          : "text-accent/70 group-hover:text-accent"
                      }
                    `}
                  >
                    {link.number}
                  </span>

                  {/* NAME */}
                  <span
                    className="
                      text-[clamp(2rem,9vw,3.4rem)]
                      font-medium
                      uppercase
                      leading-none
                      tracking-[-0.055em]
                    "
                  >
                    {link.name}
                  </span>

                  {/* ARROW */}
                  <FiArrowUpRight
                    className={`
                      ml-auto
                      text-lg
                      transition-all duration-300

                      ${
                        isActive
                          ? "text-accent"
                          : "opacity-20 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent group-hover:opacity-100"
                      }
                    `}
                  />

                  {/* ACTIVE LINE */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-accent" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* BOTTOM */}
          <div className="border-t border-foreground/10">
            <div className="grid grid-cols-2">
              <a
                href="https://github.com/BouhcineAmezouar7"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  border-r border-foreground/10
                  px-5 py-4
                  font-mono text-[8px]
                  uppercase tracking-[0.2em]
                  text-foreground/35
                  transition-colors
                  hover:text-accent
                  sm:px-7
                "
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/bouhcine-amezouar/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-5 py-4
                  text-right
                  font-mono text-[8px]
                  uppercase tracking-[0.2em]
                  text-foreground/35
                  transition-colors
                  hover:text-accent
                  sm:px-7
                "
              >
                LinkedIn ↗
              </a>
            </div>

            <div
              className="
                flex items-center justify-between
                border-t border-foreground/10
                px-5 py-4
                sm:px-7
              "
            >
              <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-foreground/20">
                Full Stack Developer
              </span>

              <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-foreground/20">
                BA / 2026
              </span>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
