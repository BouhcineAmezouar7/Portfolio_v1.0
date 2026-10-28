"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mobileNavigationLinks } from "@/data/portfolio";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <motion.button
          whileTap={{ scale: 0.95 }}
          type="button"
          aria-label="Open navigation menu"
          className="flex h-10 w-10 items-center justify-center border border-border bg-background text-foreground transition-colors hover:border-foreground"
        >
          <FiMenu size={18} aria-hidden="true" />
        </motion.button>
      </SheetTrigger>

      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-full gap-0 border-l border-border bg-background p-0 text-foreground sm:max-w-[420px]"
      >
        <SheetTitle className="sr-only">Navigation menu</SheetTitle>
        <SheetDescription className="sr-only">
          Navigate to a portfolio page.
        </SheetDescription>

        <div className="flex h-20 items-center justify-end border-b border-border px-5">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
            className="flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:border-foreground"
          >
            <FiX size={18} aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile navigation" className="flex flex-1 flex-col">
          {mobileNavigationLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={`border-b border-border px-6 py-5 text-2xl font-medium uppercase tracking-[-0.04em] transition-colors sm:px-8 sm:py-6 ${
                  isActive
                    ? "bg-foreground text-background"
                    : "text-foreground hover:bg-foreground hover:text-background"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
