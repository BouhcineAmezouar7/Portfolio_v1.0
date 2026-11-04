"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowDown,
  FiArrowRight,
  FiArrowUpRight,
  FiDownload,
} from "react-icons/fi";

import { profile } from "@/data/portfolio";

const colors = {
  bg: "var(--background)",
  surface: "var(--card)",
  accent: "var(--accent)",
  muted: "var(--muted)",
  border: "var(--border)",
};

const ease = [0.22, 1, 0.36, 1] as const;

const principles = [
  {
    id: "01",
    title: "Clarity before complexity",
    text: "Understand the real problem before choosing a solution.",
  },
  {
    id: "02",
    title: "Ownership end to end",
    text: "Build thoughtful interfaces backed by reliable systems.",
  },
  {
    id: "03",
    title: "Useful over impressive",
    text: "Prioritize simplicity, performance and maintainability.",
  },
];

const process = [
  {
    id: "01",
    title: "Understand",
    text: "Explore the problem and define the goal.",
  },
  {
    id: "02",
    title: "Shape",
    text: "Design the architecture and user experience.",
  },
  {
    id: "03",
    title: "Build",
    text: "Develop clean and maintainable solutions.",
  },
  {
    id: "04",
    title: "Refine",
    text: "Test, improve and simplify the result.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-transparent text-foreground">
      <div className="container mx-auto px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pt-16">

        {/* HERO HEADER */}
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="border-b pb-9 pt-12 lg:pt-16"
          style={{ borderColor: colors.border }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span
              className="font-mono text-[10px] uppercase tracking-[0.22em]"
              style={{ color: colors.accent }}
            >
              02 / About me
            </span>

            <span
              className="h-px w-10"
              style={{ backgroundColor: colors.accent }}
            />
          </div>

          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <h1 className="text-[clamp(4.5rem,12vw,12rem)] font-bold uppercase leading-[0.8] tracking-[-0.09em]">
              ABOUT
              <span style={{ color: colors.accent }}>.</span>
            </h1>

            <div className="flex items-center gap-3 lg:pb-2">
              <span
                className="font-mono text-[10px] uppercase tracking-[0.15em]"
                style={{ color: colors.muted }}
              >
                Discover my story
              </span>

              <FiArrowDown size={18} style={{ color: colors.accent }} />
            </div>
          </div>
        </motion.section>

        {/* MAIN PROFILE */}
        <section className="grid gap-10 py-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 lg:py-16">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease }}
          >
            <div className="group relative border border-border bg-card p-3 sm:p-5">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-background/40">
                <Image
                  src="/my_images/mee.png"
                  alt={`${profile.name}, full-stack developer`}
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
                />
                <div className="pointer-events-none absolute inset-0 border border-border" />
              </div>

              <div className="absolute left-7 top-7 flex items-center gap-2 bg-background/90 px-3 py-2 backdrop-blur-sm sm:left-9 sm:top-9">
                <span className="h-1.5 w-1.5 bg-accent" />
                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-foreground">
                  Portrait / 001
                </span>
              </div>

              <div className="absolute bottom-7 right-7 flex h-10 w-10 items-center justify-center bg-accent text-accent-foreground sm:bottom-9 sm:right-9">
                <FiArrowUpRight size={17} />
              </div>
            </div>

            <div
              className="flex items-center justify-between border-b py-5"
              style={{ borderColor: colors.border }}
            >
              <span
                className="font-mono text-[10px] uppercase tracking-[0.15em]"
                style={{ color: colors.muted }}
              >
                Full-stack developer
              </span>

              <span
                className="font-mono text-[10px]"
                style={{ color: colors.accent }}
              >
                © BA
              </span>
            </div>
          </motion.div>

          {/* RIGHT INFORMATION */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1, ease }}
            className="flex flex-col justify-between"
          >
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span
                  className="h-px w-10"
                  style={{ backgroundColor: colors.accent }}
                />

                <span
                  className="font-mono text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: colors.accent }}
                >
                  The developer behind the work
                </span>
              </div>

              {/* LARGE STATEMENT */}
              <h2 className="max-w-3xl text-[clamp(1.9rem,3.5vw,3.9rem)] font-bold uppercase leading-[1.12] tracking-[-0.055em]">
                TURNING COMPLEX IDEAS INTO
                <span style={{ color: colors.accent }}>
                  {" "}
                  SIMPLE DIGITAL EXPERIENCES.
                </span>
              </h2>

              <div
                className="my-8 h-px w-full"
                style={{ backgroundColor: colors.border }}
              />

              <div className="space-y-5">
                <p
                  className="text-sm leading-8 sm:text-base"
                  style={{ color: colors.muted }}
                >
                  I&apos;m{" "}
                  <span className="font-medium text-foreground">{profile.name}</span>
                  , a {profile.age}-year-old software engineering student and
                  full-stack developer based in {profile.location}. I build
                  modern applications by connecting thoughtful interfaces with
                  reliable backend systems.
                </p>

                <p
                  className="text-sm leading-8 sm:text-base"
                  style={{ color: colors.muted }}
                >
                  After graduating from OFPPT in {profile.graduationYear}, I
                  continued my software engineering journey at {profile.school},
                  part of the 42 Network. My interests include backend
                  architecture, systems and full-stack development.
                </p>
              </div>

              {/* INFORMATION GRID */}
              <div
                className="mt-10 grid grid-cols-2 gap-x-7 gap-y-8 border-y py-8"
                style={{ borderColor: colors.border }}
              >
                {[
                  {
                    label: "01 / Location",
                    value: profile.location,
                  },
                  {
                    label: "02 / Born",
                    value: `${profile.birthDateLabel} · ${profile.age} years old`,
                  },
                  {
                    label: "03 / Education",
                    value: profile.school,
                  },
                  {
                    label: "04 / Interests",
                    value: "Backend & Architecture",
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <p
                      className="mb-2 font-mono text-[9px] uppercase tracking-[0.15em]"
                      style={{ color: colors.accent }}
                    >
                      {item.label}
                    </p>

                    <p className="text-sm font-medium leading-6">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ACTIONS */}
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={profile.resumePath}
                download
                className="group inline-flex h-12 items-center gap-8 px-5 text-sm font-semibold transition-opacity hover:opacity-80"
                style={{
                  backgroundColor: colors.accent,
                  color: colors.bg,
                }}
              >
                Download CV
                <FiDownload size={17} />
              </a>

              <Link
                href="/projects"
                className="group inline-flex h-12 items-center gap-8 border px-5 text-sm font-medium transition-colors hover:border-accent"
                style={{ borderColor: colors.border }}
              >
                View Projects
                <FiArrowUpRight size={17} style={{ color: colors.accent }} />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* PHILOSOPHY */}
        <section
          className="border-t py-16 lg:py-24"
          style={{ borderColor: colors.border }}
        >
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p
                className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em]"
                style={{ color: colors.accent }}
              >
                03 / Philosophy
              </p>

              <h2 className="text-[clamp(2.8rem,5vw,6rem)] font-bold uppercase leading-[0.9] tracking-[-0.07em]">
                HOW I
                <br />
                <span style={{ color: colors.accent }}>THINK.</span>
              </h2>

              <p
                className="mt-7 max-w-md text-sm leading-8"
                style={{ color: colors.muted }}
              >
                Good software starts with good decisions. These principles guide
                the way I approach development.
              </p>
            </div>

            <div className="border-t" style={{ borderColor: colors.border }}>
              {principles.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="grid gap-4 border-b py-7 sm:grid-cols-[45px_1fr_1.2fr]"
                  style={{ borderColor: colors.border }}
                >
                  <span
                    className="font-mono text-[10px]"
                    style={{ color: colors.accent }}
                  >
                    {item.id}
                  </span>

                  <h3 className="text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>

                  <p
                    className="text-sm leading-7"
                    style={{ color: colors.muted }}
                  >
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DEVELOPMENT PROCESS */}
        <section
          className="border-t py-16 lg:py-24"
          style={{ borderColor: colors.border }}
        >
          <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p
                className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em]"
                style={{ color: colors.accent }}
              >
                04 / Development process
              </p>

              <h2 className="text-[clamp(2.8rem,5vw,6rem)] font-bold uppercase leading-[0.9] tracking-[-0.07em]">
                FROM IDEA
                <br />
                <span style={{ color: colors.accent }}>TO REALITY.</span>
              </h2>
            </div>

            <p
              className="max-w-sm text-sm leading-8"
              style={{ color: colors.muted }}
            >
              A simple process focused on understanding, building and improving
              useful products.
            </p>
          </div>

          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.id}
                className="group flex min-h-[240px] flex-col justify-between p-6 transition-colors hover:bg-accent/5"
                style={{ backgroundColor: colors.surface }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="font-mono text-[11px]"
                    style={{ color: colors.accent }}
                  >
                    {item.id}
                  </span>

                  <FiArrowUpRight size={17} style={{ color: colors.accent }} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>

                  <p
                    className="mt-3 text-sm leading-7"
                    style={{ color: colors.muted }}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT CTA */}
        <section
          className="border-t py-16 lg:py-24"
          style={{ borderColor: colors.border }}
        >
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <p
                className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em]"
                style={{ color: colors.accent }}
              >
                05 / Next chapter
              </p>

              <h2 className="text-[clamp(3rem,6vw,7rem)] font-bold uppercase leading-[0.9] tracking-[-0.07em]">
                LET&apos;S
                <br />
                <span style={{ color: colors.accent }}>CONNECT.</span>
              </h2>
            </div>

            <Link
              href="/contact"
              className="group inline-flex h-14 w-fit items-center justify-between gap-12 px-6 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{
                backgroundColor: colors.accent,
                color: colors.bg,
              }}
            >
              Get in touch
              <FiArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
