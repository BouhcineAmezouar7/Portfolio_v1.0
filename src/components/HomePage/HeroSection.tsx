"use client";

import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import Link from "next/link";
import MyImage from "@/components/MyImage";

const socialLinks = [
  {
    name: "GitHub",
    icon: <FiGithub />,
    href: "https://github.com/BouhcineAmezouar7",
  },
  {
    name: "LinkedIn",
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/bouhcine-amezouar/",
  },
  {
    name: "Email",
    icon: <FiMail />,
    href: "mailto:bouhcine_amezouar@gmail.com",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100svh-108px)] overflow-hidden px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-6">
      {/* subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative container mx-auto ">
        {/* top meta */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center justify-between border-b border-border pb-4"
        >
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Available for work
          </div>

          <span className="hidden text-[11px] uppercase tracking-[0.18em] text-foreground/30 sm:block">
            Full Stack Developer / 2026
          </span>
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="text-xs uppercase tracking-[0.25em] text-accent">
                Hello, I&apos;m
              </span>

              <div className="h-px w-10 bg-gradient-to-r from-accent to-accent" />
            </motion.div>

            {/* name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[clamp(3.5rem,10vw,9rem)] font-medium leading-[0.78] tracking-[-0.075em]"
            >
              <span className="text-foreground">BOUHCINE</span>

              <br />

              <span className="text-foreground/20">AMEZ</span>

              <span className="text-accent">OUAR</span>
            </motion.h1>

            {/* role + description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 grid gap-6 border-t border-border pt-7 sm:grid-cols-[180px_1fr]"
            >
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-foreground">
                Full Stack
                <br />
                Developer
              </p>

              <p className="max-w-lg text-sm leading-7 text-muted sm:text-base">
                1337 Coding School student building full-stack products with
                Next.js, NestJS, TypeScript, PostgreSQL and Docker.
              </p>
            </motion.div>

            {/* buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link href="/projects">
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex h-14 items-center justify-between gap-10 bg-gradient-to-r from-accent to-accent px-6 text-sm font-semibold text-accent-foreground transition-all hover:from-accent hover:to-accent"
                >
                  View Projects
                  <FiArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </motion.div>
              </Link>

              <Link href="/resume">
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex h-14 items-center justify-center gap-3 border border-border px-6 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  Resume
                </motion.div>
              </Link>
            </motion.div>

            {/* social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 flex items-center gap-3"
            >
              <span className="mr-2 text-[10px] uppercase tracking-[0.2em] text-foreground/30">
                Social
              </span>

              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.name !== "Email" ? "_blank" : undefined}
                  rel={
                    social.name !== "Email" ? "noopener noreferrer" : undefined
                  }
                  whileHover={{ y: -3 }}
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center border border-border text-muted transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            {/* TOP META */}
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-foreground" />

                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/30">
                  Profile / 001
                </span>
              </div>

              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/20">
                Full Stack Developer
              </span>
            </div>

            {/* MAIN FRAME */}
            <div
              className="
    relative
    border border-border
    bg-background
  "
            >
              {/* CORNERS */}
              <span
                className="
      absolute -left-px -top-px z-20
      h-5 w-5
      border-l border-t
      border-foreground/50
    "
              />

              <span
                className="
      absolute -right-px -top-px z-20
      h-5 w-5
      border-r border-t
      border-foreground/50
    "
              />

              <span
                className="
      absolute -bottom-px -left-px z-20
      h-5 w-5
      border-b border-l
      border-foreground/50
    "
              />

              <span
                className="
      absolute -bottom-px -right-px z-20
      h-5 w-5
      border-b border-r
      border-foreground/50
    "
              />

              {/* IMAGE */}
              <div className="relative min-h-[390px] overflow-hidden sm:min-h-[460px] lg:min-h-[500px]">
                <MyImage />

                {/* LEFT INDEX */}
                <div className="absolute left-4 top-4 z-10">
                  <span
                    className="
          font-mono text-[8px]
          uppercase tracking-[0.2em]
          text-foreground/30
        "
                  >
                    BA — 01
                  </span>
                </div>

                {/* RIGHT STATUS */}
                <div className="absolute right-4 top-4 z-10 flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span
                      className="
            absolute inline-flex h-full w-full
            animate-ping
            bg-foreground opacity-20
          "
                    />

                    <span
                      className="
            relative inline-flex
            h-1.5 w-1.5
            bg-foreground
          "
                    />
                  </span>

                  <span
                    className="
          font-mono text-[8px]
          uppercase tracking-[0.2em]
          text-muted
        "
                  >
                    Available
                  </span>
                </div>
              </div>

              {/* BOTTOM INFO */}
              <div
                className="
      grid grid-cols-2
      border-t border-border
    "
              >
                {/* LOCATION */}
                <div className="p-4 sm:p-5">
                  <p
                    className="
          font-mono text-[7px]
          uppercase tracking-[0.2em]
          text-foreground/35
        "
                  >
                    Location
                  </p>

                  <p
                    className="
          mt-2 text-xs font-medium
          text-muted
        "
                  >
                    Morocco
                  </p>
                </div>

                {/* FOCUS */}
                <div
                  className="
        border-l border-border
        p-4
        sm:p-5
      "
                >
                  <p
                    className="
          font-mono text-[7px]
          uppercase tracking-[0.2em]
          text-foreground/35
        "
                  >
                    Focus
                  </p>

                  <p
                    className="
          mt-2 text-xs font-medium
          text-muted
        "
                  >
                    Full Stack
                  </p>
                </div>
              </div>
            </div>

            {/* BOTTOM TECH LINE */}
            <div className="mt-3 flex items-center justify-between">
              <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-foreground/15">
                Creative Developer
              </span>

              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-foreground/10" />

                <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-foreground/15">
                  Portfolio / 2026
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* bottom */}
        <div className="mt-20 flex items-center gap-5">
          <span className="font-mono text-[10px] text-accent/70">01</span>
          <div className="h-px flex-1 bg-foreground/10" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-accent/70">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
}
