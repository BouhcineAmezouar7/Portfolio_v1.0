"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowUpRight,
} from "react-icons/fi";
import { useState } from "react";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Maou3idy",
    category: "Full Stack",
    year: "1337",
    description:
      "A healthcare appointment platform created by a five-person team for ft_transcendence. I built the booking and scheduling domain across the frontend, backend and database.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "RabbitMQ"],
  },
  {
    id: 2,
    number: "02",
    title: "Atlas Team Manager",
    category: "Full Stack",
    year: "In progress",
    description:
      "A team-management platform with workspaces, members, projects, task boards, authentication, role-based permissions and an administration dashboard.",
    tags: ["Next.js", "NestJS", "TypeScript", "Docker"],
  },
  {
    id: 3,
    number: "03",
    title: "Webserv",
    category: "Systems",
    year: "1337",
    description:
      "An HTTP server project focused on sockets, request and response handling, configuration, networking and client/server architecture.",
    tags: ["HTTP", "Networking", "Sockets", "Linux"],
  },
  {
    id: 4,
    number: "04",
    title: "Inception",
    category: "Infrastructure",
    year: "1337",
    description:
      "A system-administration project that builds a multi-service environment with containers, images, volumes, networks and persistent data.",
    tags: ["Docker", "Docker Compose", "Linux", "Networks"],
  },
  {
    id: 5,
    number: "05",
    title: "E-Commerce Frontend",
    category: "Frontend",
    year: "Practice project",
    description:
      "A frontend-focused storefront built to practice reusable components, responsive layouts, product presentation and navigation.",
    tags: ["React", "JavaScript", "HTML", "CSS"],
  },
];

const filters = ["All", "Full Stack", "Systems", "Infrastructure", "Frontend"];

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

              {/* PROJECT VISUAL */}
              <div className="relative m-4 overflow-hidden bg-foreground text-background">
                <div className="relative flex aspect-[16/10] items-end overflow-hidden p-6 sm:p-8">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
                  <p className="relative max-w-[85%] text-[clamp(2rem,5vw,4.5rem)] font-medium uppercase leading-[0.84] tracking-[-0.065em] transition-transform duration-700 group-hover:-translate-y-2">
                    {project.title}
                  </p>

                  {/* IMAGE CORNERS */}
                  <div className="absolute left-3 top-3 h-4 w-4 border-l border-t border-on-image/50" />

                  <div className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-on-image/50" />

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

                {/* PROJECT META */}
                <div className="mt-7 flex items-center justify-between">
                  <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-foreground/30">
                    Project overview
                  </span>

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
