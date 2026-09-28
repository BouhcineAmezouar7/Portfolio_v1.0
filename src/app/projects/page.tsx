"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";
import { useState } from "react";

const projects = [
  {
    id: 1,
    number: "01",
    title: "E-Commerce Platform",
    category: "Full Stack",
    year: "2026",
    description:
      "A complete e-commerce platform with authentication, product management, orders, payments and an administration dashboard.",
    image: "/projects/project1.png",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Prisma"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 2,
    number: "02",
    title: "Team Management",
    category: "Full Stack",
    year: "2026",
    description:
      "A collaborative project management platform with workspaces, projects, tasks, team members and structured workflows.",
    image: "/projects/project2.png",
    tags: ["Next.js", "NestJS", "TypeScript", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 3,
    number: "03",
    title: "Analytics Dashboard",
    category: "Frontend",
    year: "2026",
    description:
      "A modern analytics dashboard for visualizing application data, business metrics and performance.",
    image: "/projects/project3.png",
    tags: ["Next.js", "TypeScript", "D3.js"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 4,
    number: "04",
    title: "Doctor Reservation",
    category: "Full Stack",
    year: "2026",
    description:
      "A healthcare marketplace where patients discover doctors, manage appointments and book available schedules.",
    image: "/projects/project4.png",
    tags: ["Next.js", "NestJS", "Prisma", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 5,
    number: "05",
    title: "Developer Portfolio",
    category: "Frontend",
    year: "2026",
    description:
      "A minimal developer portfolio focused on typography, motion, interaction and a monochrome visual identity.",
    image: "/projects/project5.png",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 6,
    number: "06",
    title: "REST API System",
    category: "Backend",
    year: "2025",
    description:
      "A structured REST API with authentication, authorization, validation, database integration and containerization.",
    image: "/projects/project6.png",
    tags: ["NestJS", "PostgreSQL", "Docker", "Prisma"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

const filters = ["All", "Full Stack", "Frontend", "Backend"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <main className="min-h-screen px-4 pb-24 pt-12 sm:px-6 lg:px-8 lg:pt-20">
      <div className="container mx-auto ">
        {/* BACK */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-10"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/30 transition-colors hover:text-foreground"
          >
            <FiArrowLeft
              size={13}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back Home
          </Link>
        </motion.div>

        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between border-b border-border pb-4"
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-foreground" />

            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted">
              Project Archive
            </span>
          </div>

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/20">
            BA / Work
          </span>
        </motion.div>

        {/* HERO */}
        <div className="border-b border-border py-12 lg:py-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-5 font-mono text-[9px] uppercase tracking-[0.25em] text-accent/70"
          >
            Selected & Experimental Work
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="text-[clamp(4.5rem,13vw,11rem)] font-medium leading-[0.78] tracking-[-0.075em] text-foreground"
          >
            PROJECT
            <br />
            <span className="text-foreground/20">ARCHIVE.</span>
          </motion.h1>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_400px] lg:items-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <span className="font-mono text-[9px] text-foreground/20">
                {String(projects.length).padStart(2, "0")}
              </span>

              <div className="h-px w-12 bg-foreground/15" />

              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/30">
                Projects
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-sm leading-7 text-muted"
            >
              A collection of products, experiments and applications I&apos;ve built
              while exploring frontend development, backend architecture and
              full-stack engineering.
            </motion.p>
          </div>
        </div>

        {/* FILTER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="flex flex-col justify-between gap-5 border-b border-border py-5 sm:flex-row sm:items-center"
        >
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/20">
            Filter by discipline
          </span>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
              const active = activeFilter === filter;

              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`
                    border px-4 py-2
                    font-mono text-[9px]
                    uppercase tracking-[0.15em]
                    transition-all duration-300
                    ${
                      active
                        ? "border-foreground bg-foreground text-background"
                        : "border-border text-foreground/35 hover:border-foreground/40 hover:text-foreground"
                    }
                  `}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* PROJECT GRID */}
        <motion.div
          layout
          className="grid border-l border-border md:grid-cols-2"
        >
          {filteredProjects.map((project, index) => (
            <motion.article
              layout
              key={project.id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
              }}
              className="group border-b border-r border-border"
            >
              {/* META */}
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <div className="flex items-center gap-5">
                  <span className="font-mono text-[8px] text-foreground/20">
                    {project.number}
                  </span>

                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-foreground/35">
                    {project.category}
                  </span>
                </div>

                <span className="font-mono text-[8px] text-foreground/20">
                  {project.year}
                </span>
              </div>

              {/* IMAGE */}
              <div className="relative m-4 overflow-hidden bg-black">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover grayscale transition-all duration-700 group-hover:scale-[1.025]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent" />

                  {/* IMAGE CORNERS */}
                  <div className="absolute left-3 top-3 h-4 w-4 border-l border-t border-on-image/50" />

                  <div className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-on-image/50" />

                  {/* LINKS */}
                  <div
                    className="
                      absolute right-4 top-4
                      flex gap-2
                      opacity-100
                      transition-all duration-300
                      sm:translate-y-2
                      sm:opacity-0
                      sm:group-hover:translate-y-0
                      sm:group-hover:opacity-100
                    "
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub`}
                      className="flex h-10 w-10 items-center justify-center border border-on-image/20 bg-black/80 text-on-image backdrop-blur transition-all hover:bg-accent hover:text-accent-foreground"
                    >
                      <FiGithub size={15} />
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="flex h-10 w-10 items-center justify-center bg-foreground text-background transition-colors hover:bg-foreground/80"
                    >
                      <FiExternalLink size={15} />
                    </a>
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="px-5 pb-6 pt-2">
                <div className="flex items-start justify-between gap-5">
                  <h2 className="max-w-[400px] text-2xl font-medium leading-tight tracking-[-0.035em] text-foreground sm:text-3xl">
                    {project.title}
                  </h2>

                  <FiArrowUpRight
                    size={19}
                    className="mt-1 shrink-0 text-foreground/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground"
                  />
                </div>

                <p className="mt-5 max-w-lg text-sm leading-6 text-muted">
                  {project.description}
                </p>

                {/* TAGS */}
                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className="font-mono text-[8px] uppercase tracking-[0.15em] text-foreground/30"
                    >
                      <span className="mr-2 text-foreground/15">
                        0{tagIndex + 1}
                      </span>

                      {tag}
                    </span>
                  ))}
                </div>

                {/* ACTION */}
                <div className="mt-7 flex items-center justify-between">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-4 border-b border-foreground/20 pb-2 text-[10px] font-medium uppercase tracking-[0.15em] text-foreground transition-colors hover:border-foreground"
                  >
                    View Project
                    <FiArrowUpRight
                      size={14}
                      className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                    />
                  </a>

                  <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-foreground/15">
                    BA / {project.number}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* EMPTY */}
        {filteredProjects.length === 0 && (
          <div className="border-b border-border py-24 text-center">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/30">
              No projects found
            </p>
          </div>
        )}

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-8 border-b border-border py-14 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <div>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">
              Have a project?
            </span>

            <h3 className="mt-4 text-4xl font-medium tracking-[-0.04em] text-foreground sm:text-5xl">
              Let&apos;s build something
              <br />
              <span className="text-accent/70">interesting together.</span>
            </h3>
          </div>

          <Link href="/contact">
            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group flex h-16 min-w-[200px] items-center justify-between gap-10 bg-foreground px-6 text-sm font-semibold text-background"
            >
              Get In Touch
              <FiArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.div>
          </Link>
        </motion.div>

        {/* FOOT */}
        <div className="flex items-center justify-between pt-5">
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/15">
            Bouhcine Amezouar
          </span>

          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-foreground/10" />

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/15">
              Project Archive / 2026
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
