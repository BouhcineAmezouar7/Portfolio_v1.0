"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

const featuredProjects = [
  {
    id: 1,
    number: "01",
    title: "Maou3idy",
    description:
      "A healthcare appointment platform built by a five-person team. I owned the booking domain, from doctor availability and slots to patient scheduling and appointment lifecycles.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "RabbitMQ"],
    year: "1337",
    type: "Full Stack / Team",
  },
  {
    id: 2,
    number: "02",
    title: "Atlas Team Manager",
    description:
      "A full-stack platform for workspaces, members, projects and task boards, with authentication, role-based permissions and system administration.",
    tags: ["Next.js", "NestJS", "TypeScript", "Docker"],
    year: "In progress",
    type: "Personal Project",
  },
  {
    id: 3,
    number: "03",
    title: "Webserv",
    description:
      "An HTTP server project built to understand request handling, sockets, server configuration and the client/server model beneath web frameworks.",
    tags: ["HTTP", "Networking", "Sockets", "Linux"],
    year: "1337",
    type: "Systems / Networking",
  },
];

export default function ProjectsSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="container mx-auto ">
        {/* TOP LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between border-b border-border pb-4"
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-accent" />

            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted">
              Selected Work
            </span>
          </div>

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/20">
            05 / Projects
          </span>
        </motion.div>

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 border-b border-border py-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end"
        >
          <div>
            <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.25em] text-accent/70">
              Portfolio / Selected
            </p>

            <h2 className="text-5xl font-medium leading-[0.9] tracking-[-0.055em] text-foreground sm:text-7xl lg:text-8xl">
              Selected
              <br />
              <span className="text-accent/45 dark:text-accent/50">Projects.</span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <div className="mb-5 h-px w-10 bg-foreground/30" />

            <p className="max-w-sm text-sm leading-7 text-muted">
              A selection of projects where I combine frontend development,
              backend architecture and thoughtful interface design.
            </p>
          </div>
        </motion.div>

        {/* PROJECTS */}
        <div>
          {featuredProjects.map((project, index) => {
            const reverse = index % 2 !== 0;

            return (
              <motion.article
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="border-b border-border py-12 lg:py-16"
              >
                {/* PROJECT META */}
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <span className="font-mono text-[9px] text-accent/70">
                      {project.number}
                    </span>

                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/35">
                      {project.type}
                    </span>
                  </div>

                  <span className="font-mono text-[9px] text-accent/70">
                    {project.year}
                  </span>
                </div>

                <div
                  className={`
                    grid gap-8
                    lg:grid-cols-[1.35fr_0.65fr]
                    lg:items-stretch
                    lg:gap-12
                    ${reverse ? "lg:grid-cols-[0.65fr_1.35fr]" : ""}
                  `}
                >
                  {/* PROJECT VISUAL */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: reverse ? 30 : -30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: 0.1,
                    }}
                    className={`
                      ${reverse ? "lg:order-2" : ""}
                    `}
                  >
                    <div className="group relative overflow-hidden border border-border bg-foreground text-background">
                      <div className="relative flex aspect-[16/10] items-end overflow-hidden p-7 sm:p-10">
                        <p className="relative max-w-[80%] text-[clamp(2.4rem,7vw,6rem)] font-medium uppercase leading-[0.82] tracking-[-0.07em] opacity-90 transition-transform duration-700 group-hover:-translate-y-2">
                          {project.title}
                        </p>

                        {/* CORNERS */}
                        <div className="pointer-events-none absolute left-4 top-4 h-5 w-5 border-l border-t border-foreground/50" />

                        <div className="pointer-events-none absolute bottom-4 right-4 h-5 w-5 border-b border-r border-foreground/50" />
                      </div>

                      {/* IMAGE FOOTER */}
                      <div className="flex items-center justify-between border-t border-border px-4 py-3">
                        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-accent/70">
                          Project / {project.type}
                        </span>

                        <span className="font-mono text-[8px] text-foreground/20">
                          BA / {project.number}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* CONTENT */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: reverse ? -30 : 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: 0.2,
                    }}
                    className={`
                      flex flex-col justify-between
                      ${reverse ? "lg:order-1" : ""}
                    `}
                  >
                    <div>
                      {/* Number */}
                      <span className="font-mono text-[10px] text-foreground/20">
                        / {project.number}
                      </span>

                      {/* TITLE */}
                      <h3 className="mt-5 text-3xl font-medium leading-[1] tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl">
                        {project.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p className="mt-6 max-w-md text-sm leading-7 text-muted">
                        {project.description}
                      </p>

                      {/* TAGS */}
                      <div className="mt-8 border-t border-border">
                        {project.tags.map((tag, tagIndex) => (
                          <div
                            key={tag}
                            className="
                              flex items-center
                              justify-between
                              border-b border-border
                              py-3
                            "
                          >
                            <span className="text-xs text-muted">{tag}</span>

                            <span className="font-mono text-[8px] text-foreground/20">
                              0{tagIndex + 1}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className="mt-9 font-mono text-[9px] uppercase tracking-[0.18em] text-foreground/30">
                      Project overview
                    </p>
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* VIEW ALL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-6 pt-10 sm:flex-row sm:items-center"
        >
          <div>
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/20">
              Want to see more?
            </span>

            <p className="mt-2 text-sm text-muted">
              Explore the complete project archive.
            </p>
          </div>

          <Link href="/projects">
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="
                group flex h-14
                items-center justify-between
                gap-12
                bg-foreground
                px-6
                text-sm font-semibold
                text-background
                transition-colors
                hover:bg-foreground/90
              "
            >
              All Projects
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
      </div>
    </section>
  );
}
