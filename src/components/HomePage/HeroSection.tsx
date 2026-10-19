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
    icon: FiGithub,
    href: "https://github.com/BouhcineAmezouar7",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/bouhcine-amezouar/",
  },
  {
    name: "Email",
    icon: FiMail,
    href: "mailto:bouhcine_amezouar@gmail.com",
  },
];

const techStack = ["Next.js", "NestJS", "TypeScript", "PostgreSQL"];

export default function HeroSection() {
  return (
    <section
      className="
        relative
        min-h-[calc(100svh-108px)]
        overflow-hidden
        px-4 pb-16 pt-10
        sm:px-6
        lg:px-8 lg:pb-20 lg:pt-6
      "
    >
      {/* BACKGROUND GRID */}
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

      {/* SMALL ACCENT GLOW */}
      <div
        className="
          pointer-events-none
          absolute right-[10%] top-[20%]
          h-[320px] w-[320px]
          rounded-full
          bg-accent/[0.035]
          blur-[100px]
        "
      />

      <div className="container relative mx-auto">
        {/* =========================================================
            TOP META
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            mb-12 flex items-center justify-between
            border-b border-border pb-4
          "
        >
          <div
            className="
              flex items-center gap-2
              font-mono text-[10px]
              uppercase tracking-[0.18em]
              text-muted
            "
          >
            <span className="relative flex h-1.5 w-1.5">
              <span
                className="
                  absolute inline-flex
                  h-full w-full
                  animate-ping rounded-full
                  bg-accent opacity-40
                "
              />

              <span
                className="
                  relative inline-flex
                  h-1.5 w-1.5
                  rounded-full bg-accent
                "
              />
            </span>

            Available for work
          </div>

          <span
            className="
              hidden
              font-mono text-[9px]
              uppercase tracking-[0.18em]
              text-foreground/30
              sm:block
            "
          >
            Casablanca, Morocco · 2026
          </span>
        </motion.div>

        {/* =========================================================
            MAIN GRID
        ========================================================== */}

        <div
          className="
            grid items-center gap-14
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-20
          "
        >
          {/* =======================================================
              LEFT CONTENT
          ======================================================== */}

          <div>
            {/* ROLE */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 flex items-center gap-3"
            >
              <span
                className="
                  font-mono text-[10px]
                  uppercase tracking-[0.25em]
                  text-accent
                "
              >
                Full Stack Developer
              </span>

              <div className="h-px w-10 bg-accent/40" />
            </motion.div>

            {/* NAME */}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                text-[clamp(3.5rem,10vw,9rem)]
                font-medium
                leading-[0.78]
                tracking-[-0.075em]
              "
            >
              <span className="text-foreground">
                BOUHCINE
              </span>

              <br />

              <span className="text-foreground">
                AMEZ
              </span>

              <span className="text-accent">
                OUAR.
              </span>
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="
                mt-8
                max-w-[560px]
                text-sm leading-7
                text-muted
                sm:text-base
              "
            >
              I build thoughtful digital products from interface to
              infrastructure — combining clean frontend experiences with
              reliable backend systems.
            </motion.p>

            {/* TECH STACK */}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="
                mt-6 flex flex-wrap
                items-center gap-x-4 gap-y-3
              "
            >
              {techStack.map((tech, index) => (
                <div
                  key={tech}
                  className="flex items-center gap-4"
                >
                  <span
                    className="
                      font-mono text-[9px]
                      uppercase tracking-[0.14em]
                      text-foreground/40
                    "
                  >
                    {tech}
                  </span>

                  {index !== techStack.length - 1 && (
                    <span className="h-1 w-1 bg-border" />
                  )}
                </div>
              ))}
            </motion.div>

            {/* BUTTONS */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="
                mt-9 flex flex-col
                gap-3 sm:flex-row
              "
            >
              <Link
                href="/projects"
                className="
                  group flex h-14
                  items-center justify-between
                  gap-10
                  bg-accent px-6
                  text-sm font-semibold
                  text-accent-foreground
                  transition-opacity
                  hover:opacity-90
                "
              >
                View Projects

                <FiArrowUpRight
                  size={18}
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </Link>

              <Link
                href="/about"
                className="
                  flex h-14
                  items-center justify-center
                  border border-border
                  px-6
                  text-sm font-medium
                  text-foreground
                  transition-all duration-300
                  hover:border-foreground/40
                  hover:bg-foreground/[0.04]
                "
              >
                About Me
              </Link>
            </motion.div>

            {/* SOCIAL */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="
                mt-9 flex
                items-center gap-4
              "
            >
              <span
                className="
                  mr-1 font-mono
                  text-[9px]
                  uppercase tracking-[0.2em]
                  text-foreground/25
                "
              >
                Connect
              </span>

              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={
                      social.name !== "Email"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      social.name !== "Email"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    whileHover={{ y: -2 }}
                    aria-label={social.name}
                    className="
                      flex h-9 w-9
                      items-center justify-center
                      border border-border
                      text-muted
                      transition-all duration-300
                      hover:border-foreground/40
                      hover:text-foreground
                    "
                  >
                    <Icon size={15} />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* =======================================================
              RIGHT IMAGE
          ======================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative mx-auto
              w-full max-w-[520px]
            "
          >
            {/* IMAGE TOP META */}

            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-accent" />

                <span
                  className="
                    font-mono text-[8px]
                    uppercase tracking-[0.2em]
                    text-foreground/30
                  "
                >
                  Profile / BA
                </span>
              </div>

              <span
                className="
                  font-mono text-[8px]
                  uppercase tracking-[0.2em]
                  text-foreground/20
                "
              >
                01 — 26
              </span>
            </div>

            {/* IMAGE FRAME */}

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
                  border-accent/60
                "
              />

              <span
                className="
                  absolute -right-px -top-px z-20
                  h-5 w-5
                  border-r border-t
                  border-accent/60
                "
              />

              <span
                className="
                  absolute -bottom-px -left-px z-20
                  h-5 w-5
                  border-b border-l
                  border-accent/60
                "
              />

              <span
                className="
                  absolute -bottom-px -right-px z-20
                  h-5 w-5
                  border-b border-r
                  border-accent/60
                "
              />

              {/* IMAGE */}

              <div
                className="
                  relative
                  min-h-[390px]
                  overflow-hidden
                  sm:min-h-[460px]
                  lg:min-h-[500px]
                "
              >
                <MyImage />

                <span
                  className="
                    absolute left-4 top-4 z-20
                    font-mono text-[8px]
                    uppercase tracking-[0.2em]
                    text-foreground/25
                  "
                >
                  BA — 01
                </span>
              </div>

              {/* IMAGE FOOTER */}

              <div
                className="
                  grid grid-cols-2
                  border-t border-border
                "
              >
                <div className="p-4 sm:p-5">
                  <p
                    className="
                      font-mono text-[7px]
                      uppercase tracking-[0.2em]
                      text-foreground/30
                    "
                  >
                    Based in
                  </p>

                  <p
                    className="
                      mt-2 text-xs
                      font-medium text-muted
                    "
                  >
                    Casablanca, Morocco
                  </p>
                </div>

                <div
                  className="
                    border-l border-border
                    p-4 sm:p-5
                  "
                >
                  <p
                    className="
                      font-mono text-[7px]
                      uppercase tracking-[0.2em]
                      text-foreground/30
                    "
                  >
                    Education
                  </p>

                  <p
                    className="
                      mt-2 text-xs
                      font-medium text-muted
                    "
                  >
                    1337 / 42 Network
                  </p>
                </div>
              </div>
            </div>

            {/* SMALL BOTTOM META */}

            <div
              className="
                mt-3 flex
                items-center justify-between
              "
            >
              <span
                className="
                  font-mono text-[7px]
                  uppercase tracking-[0.2em]
                  text-foreground/15
                "
              >
                Portfolio
              </span>

              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-foreground/10" />

                <span
                  className="
                    font-mono text-[7px]
                    uppercase tracking-[0.2em]
                    text-foreground/15
                  "
                >
                  2026
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            BOTTOM
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-20 flex items-center gap-5"
        >
          <span
            className="
              font-mono text-[10px]
              text-accent/70
            "
          >
            01
          </span>

          <div className="h-px flex-1 bg-foreground/10" />

          <span
            className="
              font-mono text-[9px]
              uppercase tracking-[0.2em]
              text-accent/70
            "
          >
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </section>
  );
}