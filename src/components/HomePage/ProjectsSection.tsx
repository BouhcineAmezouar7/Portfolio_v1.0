"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const featuredProjects = [
  {
    id: 1,
    number: "01",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce experience with product management, authentication, orders and an administration dashboard.",
    image: "/projects/project1.png",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Prisma"],
    github: "https://github.com",
    demo: "https://demo.com",
    year: "2026",
    type: "Full Stack",
  },
  {
    id: 2,
    number: "02",
    title: "Task Management",
    description:
      "A collaborative project management platform built around teams, workspaces, projects and structured task workflows.",
    image: "/projects/project2.png",
    tags: ["Next.js", "NestJS", "TypeScript", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
    year: "2026",
    type: "Web Application",
  },
  {
    id: 3,
    number: "03",
    title: "Analytics Dashboard",
    description:
      "A modern analytics experience for visualizing application data, monitoring metrics and exploring business performance.",
    image: "/projects/project3.png",
    tags: ["Next.js", "PostgreSQL", "D3.js"],
    github: "https://github.com",
    demo: "https://demo.com",
    year: "2026",
    type: "Dashboard",
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
                  {/* IMAGE */}
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
                    <div className="group relative overflow-hidden border border-border bg-background">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          quality={90}
                          sizes="(max-width: 1024px) 100vw, 750px"
                          className="
                            object-cover
                            grayscale
                            transition-all
                            duration-700
                            group-hover:scale-[1.025]
                           
                          "
                        />

                        {/* dark overlay */}
                        <div className="pointer-events-none absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-background/0" />

                        {/* PROJECT LINKS */}
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
                            className="
                              flex h-11 w-11
                              items-center justify-center
                              border border-border
                              bg-black/80
                              text-on-image
                              backdrop-blur-md
                              transition-all
                              hover:bg-foreground
                              hover:text-background
                            "
                          >
                            <FiGithub size={17} />
                          </a>

                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} live demo`}
                            className="
                              flex h-11 w-11
                              items-center justify-center
                              bg-foreground
                              text-background
                              transition-colors
                              hover:bg-foreground/80
                            "
                          >
                            <FiExternalLink size={17} />
                          </a>
                        </div>

                        {/* CORNERS */}
                        <div className="pointer-events-none absolute left-4 top-4 h-5 w-5 border-l border-t border-foreground/50" />

                        <div className="pointer-events-none absolute bottom-4 right-4 h-5 w-5 border-b border-r border-foreground/50" />
                      </div>

                      {/* IMAGE FOOTER */}
                      <div className="flex items-center justify-between border-t border-border px-4 py-3">
                        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-accent/70">
                          Project Preview
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

                    {/* VIEW PROJECT */}
                    <div className="mt-9">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          group/link
                          inline-flex
                          items-center gap-5
                          border-b border-foreground/30
                          pb-2
                          text-xs font-medium
                          uppercase
                          tracking-[0.12em]
                          text-foreground
                          transition-colors
                          hover:border-foreground
                        "
                      >
                        View Project
                        <FiArrowUpRight
                          size={16}
                          className="
                            transition-transform
                            duration-300
                            group-hover/link:translate-x-1
                            group-hover/link:-translate-y-1
                          "
                        />
                      </a>
                    </div>
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
