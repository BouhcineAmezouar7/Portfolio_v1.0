"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMapPin,
} from "react-icons/fi";
import PageTransition from "@/components/PageTransition";

const facts = [
  {
    number: "01",
    value: "23",
    label: "Years Old",
  },
  {
    number: "02",
    value: "1337",
    label: "Current School",
  },
  {
    number: "03",
    value: "2024",
    label: "OFPPT Graduate",
  },
  {
    number: "04",
    value: "06",
    label: "Months Interning",
  },
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "NestJS",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "Git",
];

const principles = [
  {
    number: "01",
    title: "Keep it simple.",
    description:
      "Good software doesn't need unnecessary complexity. I prefer clear architecture, understandable code and intentional interfaces.",
  },
  {
    number: "02",
    title: "Build with purpose.",
    description:
      "Every feature should solve a real problem. I focus on useful experiences instead of adding functionality just because I can.",
  },
  {
    number: "03",
    title: "Never stop learning.",
    description:
      "Technology changes constantly. I enjoy understanding new tools, improving my fundamentals and becoming a better developer.",
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="relative min-h-screen overflow-hidden px-4 pb-24 pt-12 sm:px-6 lg:px-8 lg:pt-20">
        <div className="container mx-auto ">
          {/* TOP */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between border-b border-border pb-4"
          >
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-foreground" />

              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted">
                About / Profile
              </span>
            </div>

            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/20">
              BA © 2026
            </span>
          </motion.div>

          {/* HERO */}
          <section className="border-b border-border py-12 lg:py-16">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-5 font-mono text-[9px] uppercase tracking-[0.25em] text-accent/70"
            >
              Developer / Builder / Learner
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="
                text-[clamp(4.5rem,13vw,11rem)]
                font-medium
                leading-[0.78]
                tracking-[-0.075em]
                text-foreground
              "
            >
              ABOUT
              <br />

              <span className="text-foreground/20">
                BOUHCINE.
              </span>
            </motion.h1>

            <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="flex items-center gap-4"
              >
                <FiMapPin
                  size={12}
                  className="text-foreground/30"
                />

                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/30">
                  Casablanca, Morocco
                </span>

                <div className="h-px w-10 bg-foreground/15" />

                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/30">
                  Full Stack Developer
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-sm leading-7 text-muted"
              >
                I build complete web applications—from database design and
                backend business logic to APIs and responsive interfaces.
              </motion.p>
            </div>
          </section>

          {/* INTRO / PORTRAIT */}
          <section className="grid border-b border-border lg:grid-cols-[0.8fr_1.2fr]">
            {/* PORTRAIT */}
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                border-b border-border
                py-10
                lg:border-b-0
                lg:border-r
                lg:pr-12
              "
            >
              <div className="mx-auto max-w-[430px] lg:mx-0">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-accent/70">
                    Portrait / 001
                  </span>

                  <span className="font-mono text-[8px] text-foreground/20">
                    BA
                  </span>
                </div>

                <div className="group relative aspect-[4/5] overflow-hidden bg-black">
                  <Image
                    src="/me2.png"
                    alt="Bouhcine Amezouar"
                    fill
                    priority
                    quality={90}
                    sizes="(max-width: 1024px) 90vw, 430px"
                    className="
                      object-cover
                      grayscale
                      contrast-[1.05]
                      transition-all
                      duration-700
                      group-hover:scale-[1.02]
                     
                    "
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4 h-5 w-5 border-l border-t border-on-image/60" />

                  <div className="absolute right-4 top-4 h-5 w-5 border-r border-t border-on-image/60" />

                  <div className="absolute bottom-4 left-4 h-5 w-5 border-b border-l border-on-image/60" />

                  <div className="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-on-image/60" />

                  <div className="absolute bottom-6 left-6">
                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-on-image/80">
                      Full Stack Developer
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/20">
                    Casablanca, Morocco
                  </span>

                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/20">
                    2026
                  </span>
                </div>
              </div>
            </motion.div>

            {/* STORY */}
            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="py-10 lg:pl-14 lg:py-14"
            >
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent/70">
                01 / Who I Am
              </p>

              <h2 className="mt-6 max-w-3xl text-4xl font-medium leading-[1.08] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
                I enjoy understanding
                <span className="text-accent/70">
                  {" "}the complete system.
                </span>
              </h2>

              <div className="mt-10 grid gap-7 sm:grid-cols-2">
                <p className="text-sm leading-7 text-muted">
                  I&apos;m Bouhcine Amezouar, a 23-year-old Full-Stack Developer in
                  Casablanca and a student at 1337 Coding School. I graduated
                  from OFPPT&apos;s Web Full Stack program in 2024.
                </p>

                <p className="text-sm leading-7 text-muted">
                  I began with Laravel and React.js and now focus on Next.js,
                  NestJS, TypeScript, PostgreSQL, Prisma and Docker while
                  deepening my systems and networking foundations.
                </p>
              </div>

              <div className="mt-10 border-y border-border py-6">
                <div className="flex items-start gap-5">
                  <span className="font-mono text-3xl text-foreground/15">
                    “
                  </span>

                  <p className="max-w-xl text-lg leading-8 tracking-[-0.02em] text-foreground/70">
                    I enjoy building products end-to-end and understanding the
                    engineering beneath the frameworks I use.
                  </p>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/projects">
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="
                      group flex h-14
                      items-center gap-10
                      bg-foreground
                      px-6
                      text-sm font-semibold
                      text-background
                    "
                  >
                    My Projects

                    <FiArrowUpRight
                      size={17}
                      className="
                        transition-transform duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />
                  </motion.div>
                </Link>

                <Link href="/resume">
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="
                      flex h-14
                      items-center gap-3
                      border border-border
                      px-6
                      text-xs font-medium
                      uppercase tracking-[0.1em]
                      text-foreground
                      transition-all
                      hover:border-foreground
                      hover:bg-foreground
                      hover:text-background
                    "
                  >
                    Resume
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </section>

          {/* FACTS */}
          <section className="border-b border-border py-12">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent/70">
                02 / By The Numbers
              </span>

              <div className="h-px w-12 bg-foreground/10" />
            </div>

            <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
              {facts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="
                    group
                    min-h-[190px]
                    border-b border-r border-border
                    p-6
                    transition-colors duration-500
                    hover:bg-foreground
                  "
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8px] text-foreground/20 transition-colors group-hover:text-background/30">
                      {fact.number}
                    </span>

                    <span className="h-1 w-1 bg-foreground/30 transition-colors group-hover:bg-background/30" />
                  </div>

                  <div className="mt-12">
                    <p className="text-4xl font-medium tracking-[-0.05em] text-foreground transition-colors group-hover:text-background sm:text-5xl">
                      {fact.value}
                    </p>

                    <p className="mt-3 font-mono text-[8px] uppercase tracking-[0.18em] text-foreground/30 transition-colors group-hover:text-background/40">
                      {fact.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* EDUCATION */}
          <section className="border-b border-border py-14">
            <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent/70">
                  03 / Education
                </p>

                <h2 className="mt-5 text-4xl font-medium tracking-[-0.045em] text-foreground sm:text-5xl">
                  OFPPT
                  <br />

                  <span className="text-accent/70">
                    CFPM Sidi Moumen.
                  </span>
                </h2>

                <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.18em] text-foreground/30">
                  Casablanca, Morocco · Graduated 2024
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="border-t border-border"
              >
                <div className="border-b border-border py-7">
                  <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/25">
                    Full-Stack Program
                  </p>

                  <h3 className="mt-3 text-xl font-medium leading-8 text-foreground sm:text-2xl">
                    Technicien Spécialisé en Développement Digital — Web Full
                    Stack
                  </h3>
                </div>

                <div className="grid gap-6 border-b border-border py-7 sm:grid-cols-2">
                  <p className="text-sm leading-7 text-muted">
                    My OFPPT training provided my initial professional
                    foundation in web development.
                  </p>

                  <p className="text-sm leading-7 text-muted">
                    I studied frontend development, backend development,
                    databases, application architecture and the fundamentals
                    required to build complete web applications.
                  </p>
                </div>

                <div className="py-7">
                  <p className="mb-4 font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/25">
                    Primary stack
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {["Laravel", "React.js", "JavaScript", "HTML", "CSS", "MySQL"].map(
                      (technology) => (
                        <span
                          key={technology}
                          className="border border-border px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-foreground/50"
                        >
                          {technology}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* PRINCIPLES */}
          <section className="border-b border-border py-14">
            <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent/70">
                  04 / Principles
                </p>

                <h2 className="mt-5 text-4xl font-medium tracking-[-0.045em] text-foreground sm:text-5xl">
                  How I
                  <br />

                  <span className="text-accent/70">
                    approach work.
                  </span>
                </h2>
              </div>

              <div className="border-t border-border">
                {principles.map((principle, index) => (
                  <motion.div
                    key={principle.title}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    className="
                      group grid gap-5
                      border-b border-border
                      py-7
                      sm:grid-cols-[60px_0.7fr_1.3fr]
                    "
                  >
                    <span className="font-mono text-[9px] text-foreground/20">
                      {principle.number}
                    </span>

                    <h3 className="text-lg font-medium text-foreground">
                      {principle.title}
                    </h3>

                    <p className="max-w-md text-sm leading-6 text-muted">
                      {principle.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* STACK */}
          <section className="border-b border-border py-14">
            <div className="mb-9 grid gap-6 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent/70">
                  05 / Technology
                </p>

                <h2 className="mt-5 text-4xl font-medium tracking-[-0.045em] text-foreground sm:text-5xl">
                  Tools I enjoy
                  <br />

                  <span className="text-accent/70">
                    working with.
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-muted lg:justify-self-end">
                My stack changes depending on the problem, but these are some
                of the technologies I currently use most often.
              </p>
            </div>

            <div className="grid border-l border-t border-border sm:grid-cols-2 md:grid-cols-4">
              {stack.map((technology, index) => (
                <motion.div
                  key={technology}
                  whileHover={{
                    y: -3,
                  }}
                  className="
                    group flex min-h-[90px]
                    items-center justify-between
                    border-b border-r border-border
                    px-5
                    transition-colors duration-300
                    hover:bg-foreground
                  "
                >
                  <span className="text-sm text-muted transition-colors group-hover:text-background">
                    {technology}
                  </span>

                  <span className="font-mono text-[8px] text-foreground/20 transition-colors group-hover:text-background/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* FINAL */}
          <section className="py-16">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"
            >
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent/70">
                  06 / Let&apos;s Connect
                </p>

                <h2 className="mt-5 text-5xl font-medium leading-[0.95] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl">
                  Want to build
                  <br />

                  <span className="text-foreground/20">
                    something together?
                  </span>
                </h2>
              </div>

              <Link href="/contact">
                <motion.div
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    group flex h-16
                    min-w-[210px]
                    items-center justify-between
                    gap-10
                    bg-foreground
                    px-6
                    text-sm font-semibold
                    text-background
                  "
                >
                  Contact Me

                  <FiArrowUpRight
                    size={18}
                    className="
                      transition-transform duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </motion.div>
              </Link>
            </motion.div>

            {/* SOCIAL */}
            <div className="mt-14 flex items-center justify-between border-t border-border pt-5">
              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/15">
                Bouhcine Amezouar © 2026
              </span>

              <div className="flex gap-2">
                <a
                  href="https://github.com/BouhcineAmezouar7"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-9 w-9 items-center justify-center border border-border text-foreground/35 transition-all hover:bg-foreground hover:text-background"
                >
                  <FiGithub size={14} />
                </a>

                <a
                  href="https://www.linkedin.com/in/bouhcine-amezouar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center border border-border text-foreground/35 transition-all hover:bg-foreground hover:text-background"
                >
                  <FiLinkedin size={14} />
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </PageTransition>
  );
}
