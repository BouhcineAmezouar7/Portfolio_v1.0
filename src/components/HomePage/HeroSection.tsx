"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Link from "next/link";
import MyImage from "@/components/MyImage";
import { profile, socialLinks } from "@/data/portfolio";

const socialIcons = {
  github: <FiGithub />,
  linkedin: <FiLinkedin />,
  email: <FiMail />,
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100svh-108px)] overflow-hidden px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-15">
      <div className="relative container mx-auto ">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* LEFT */}
          <div className="order-2 lg:order-1">
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
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -3 }}
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center border border-border text-muted transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
                >
                  {socialIcons[social.id]}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 mx-auto w-full max-w-[520px] lg:order-2"
          >

            {/* MAIN FRAME */}
            <div
              className="
    relative
  "
            >

              {/* IMAGE */}
              <div className="relative min-h-[390px] overflow-hidden sm:min-h-[460px] lg:min-h-[500px]">
                <MyImage />
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
                    {profile.location}
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
