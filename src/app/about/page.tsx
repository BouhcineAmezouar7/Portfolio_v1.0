"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight, FiDownload } from "react-icons/fi";
import { profile } from "@/data/portfolio";

const principles = [
  {
    number: "01",
    title: "Clarity before complexity",
    description:
      "I reduce a problem to its essential decisions before choosing an architecture or writing code.",
  },
  {
    number: "02",
    title: "Ownership end to end",
    description:
      "I consider the full experience—from the first interaction to the data and systems supporting it.",
  },
  {
    number: "03",
    title: "Useful over impressive",
    description:
      "I value maintainable solutions that serve people well over complexity added only for appearance.",
  },
] as const;

const process = [
  {
    number: "01",
    title: "Understand",
    description: "Define the real problem, constraints, and desired outcome.",
  },
  {
    number: "02",
    title: "Shape",
    description: "Turn ambiguity into a clear flow and technical direction.",
  },
  {
    number: "03",
    title: "Build",
    description: "Implement in focused layers with deliberate boundaries.",
  },
  {
    number: "04",
    title: "Refine",
    description: "Test the details, simplify friction, and improve the result.",
  },
] as const;

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 pb-24 pt-12 sm:px-6 lg:px-8 lg:pt-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between border-b border-border pb-5"
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-accent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              About / Profile
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
            01 / Introduction
          </span>
        </motion.div>

        <section className="grid border-b border-border py-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16 lg:py-20">
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
              The person behind the work
            </p>
            <h1 className="font-primary text-[clamp(3.7rem,9vw,9rem)] font-semibold leading-[0.84] tracking-[-0.075em] text-foreground">
              MORE THAN
              <br />
              <span className="text-accent">THE CODE.</span>
            </h1>
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 border-t border-border pt-7 lg:mt-0"
          >
            <p className="text-lg leading-8 tracking-[-0.025em] text-foreground">
              I&apos;m {profile.firstName}, a {profile.age}-year-old full-stack
              developer based in {profile.location} and a student at{" "}
              {profile.school}, part of the 42 Network.
            </p>
            <p className="mt-5 text-sm leading-7 text-muted">
              After graduating from OFPPT in {profile.graduationYear} and
              completing two internships, I joined 1337 to deepen my
              programming and software-engineering skills. I&apos;m especially
              interested in backend development, system architecture, and
              complete full-stack applications.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={profile.resumePath}
                download
                className="group inline-flex h-13 items-center gap-5 bg-foreground px-5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
              >
                Download Resume
                <FiDownload aria-hidden="true" />
              </a>
              <Link
                href="/projects"
                className="group inline-flex h-13 items-center gap-5 border border-border px-5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                View Projects
                <FiArrowUpRight
                  aria-hidden="true"
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </section>

        <section className="grid border-b border-border lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="border-b border-border py-12 lg:border-b-0 lg:border-r lg:pr-12 lg:py-16"
          >
            <div className="relative mx-auto aspect-[4/5] max-w-[470px] overflow-hidden bg-black lg:mx-0">
              <Image
                src="/my_images/wooo.png"
                alt={profile.name}
                fill
                sizes="(max-width: 1024px) 90vw, 38vw"
                className="object-contain object-bottom"
              />
              <div className="pointer-events-none absolute inset-0 border border-border" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-foreground px-5 py-4 text-background">
                <span className="font-mono text-[9px] uppercase tracking-[0.18em]">
                  Curious by default
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em]">
                  BA / 01
                </span>
              </div>
            </div>
          </motion.div>

          <div className="py-12 lg:py-16 lg:pl-14">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65 }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                02 / How I think
              </p>
              <h2 className="home-section-title mt-6">
                GOOD WORK
                <br />
                <span className="text-accent">STARTS CLEAR.</span>
              </h2>
              <p className="mt-8 max-w-2xl text-sm leading-8 text-muted sm:text-base">
                I&apos;m most engaged when a project needs both product judgment
                and engineering depth. I like asking what matters, finding the
                simplest useful shape, and then building it carefully enough to
                grow without becoming difficult to understand.
              </p>
            </motion.div>

            <div className="mt-12 border-t border-border">
              {principles.map((principle, index) => (
                <motion.article
                  key={principle.title}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="grid gap-4 border-b border-border py-6 sm:grid-cols-[50px_0.8fr_1.2fr] sm:items-start"
                >
                  <span className="font-mono text-[10px] text-accent">
                    {principle.number}
                  </span>
                  <h3 className="text-base font-semibold tracking-[-0.025em] text-foreground">
                    {principle.title}
                  </h3>
                  <p className="text-sm leading-7 text-muted">
                    {principle.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border py-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65 }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                03 / Process
              </p>
              <h2 className="home-section-title mt-6">
                FROM IDEA
                <br />
                <span className="text-accent">TO OUTCOME.</span>
              </h2>
              <p className="mt-7 max-w-md text-sm leading-7 text-muted">
                A simple working rhythm keeps decisions visible and progress
                grounded in the problem being solved.
              </p>
            </motion.div>

            <div className="grid border-l border-t border-border sm:grid-cols-2">
              {process.map((step, index) => (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className="group flex min-h-[220px] flex-col justify-between border-b border-r border-border p-6 transition-colors duration-300 hover:bg-card"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-accent">
                      {step.number}
                    </span>
                    <FiArrowUpRight
                      aria-hidden="true"
                      className="text-muted transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.035em] text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      {step.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end"
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                04 / Next conversation
              </p>
              <h2 className="home-section-title mt-6">
                HAVE A PROBLEM
                <br />
                <span className="text-accent">WORTH SOLVING?</span>
              </h2>
            </div>
            <Link
              href="/contact"
              className="group inline-flex h-16 w-fit min-w-[210px] items-center justify-between gap-10 bg-foreground px-6 text-sm font-semibold text-background transition-opacity hover:opacity-85"
            >
              Start a Conversation
              <FiArrowRight
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
