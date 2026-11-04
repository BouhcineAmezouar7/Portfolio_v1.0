
"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

import { featuredProjects } from "@/data/portfolio";
import { revealUp, siteEase as homeEase, siteViewport as homeViewport } from "@/lib/site-motion";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="container mx-auto">

        {/* =====================================
            SECTION TOP LABEL
            SAME STYLE AS SKILLS
        ====================================== */}
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={homeViewport}
          className="mb-12 flex items-center justify-between border-b border-border pb-5"
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-accent" />

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              Selected Work
            </span>
          </div>

          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
            04 / Projects
          </span>
        </motion.div>

        {/* =====================================
            SECTION HEADING
            SAME STYLE AS SKILLS
        ====================================== */}
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={homeViewport}
          className="grid gap-8 border-b border-border pb-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
        >
          {/* LEFT HEADING */}
          <div>
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              Portfolio / Selected
            </p>

            <h2 className="home-section-title">
              SELECTED
              <br />
              <span className="text-accent">PROJECTS.</span>
            </h2>
          </div>

          {/* RIGHT DESCRIPTION */}
          <div className="lg:pb-1">
            <div className="mb-6 h-px w-12 bg-accent" />

            <p className="max-w-md text-sm leading-7 text-muted">
              A selection of projects where I combine frontend
              development, backend architecture and thoughtful
              interface design.
            </p>
          </div>
        </motion.div>

        {/* =====================================
            PROJECTS LIST
        ====================================== */}
        <div>
          {featuredProjects.map((project, index) => {
            const reverse = index % 2 !== 0;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 56, filter: "blur(9px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={homeViewport}
                transition={{
                  duration: 0.88,
                  ease: homeEase,
                }}
                className="border-b border-border py-12 lg:py-16"
              >
                {/* PROJECT META */}
                <div className="mb-7 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] text-accent">
                      {project.number}
                    </span>

                    <span className="h-px w-7 bg-border" />

                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                      {project.type}
                    </span>
                  </div>

                  <span className="font-mono text-[10px] text-muted">
                    {project.year}
                  </span>
                </div>

                {/* =====================================
                    PROJECT GRID
                    SAME IMAGE SIZE FOR ALL PROJECTS
                ====================================== */}
                <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-8 xl:gap-12">

                  {/* =====================================
                      PROJECT IMAGE
                      ORIGINAL DESIGN PRESERVED
                  ====================================== */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: reverse ? 64 : -64,
                      scale: 0.965,
                      filter: "blur(8px)",
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      filter: "blur(0px)",
                    }}
                    viewport={homeViewport}
                    transition={{
                      duration: 0.9,
                      delay: 0.08,
                      ease: homeEase,
                    }}
                    className={`min-w-0 ${
                      reverse ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="group relative w-full">
                      <div className="relative overflow-hidden border border-border bg-card">

                        {/* FULL IMAGE */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-foreground/5">
                          <Image
                            src={project.image}
                            alt={`${project.title} project interface`}
                            fill
                            quality={90}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                          />

                          {/* ORIGINAL DARK GRADIENT */}
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/20" />

                          {/* TOP META */}
                          <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-4 p-5 text-on-image sm:p-7">
                            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-on-image/75">
                              {project.category}
                            </span>

                            <span className="font-mono text-[9px] text-on-image/70">
                              {project.year}
                            </span>
                          </div>

                          {/* LARGE PROJECT TITLE */}
                          <p className="absolute bottom-0 left-0 max-w-[90%] break-words p-6 text-[clamp(2.2rem,6vw,5.5rem)] font-medium uppercase leading-[0.84] tracking-[-0.07em] text-on-image transition-transform duration-700 group-hover:-translate-y-1 sm:p-9">
                            {project.title}
                          </p>

                          {/* DECORATIVE CORNERS */}
                          <div className="pointer-events-none absolute left-4 top-4 h-5 w-5 border-l border-t border-on-image/60" />

                          <div className="pointer-events-none absolute bottom-4 right-4 h-5 w-5 border-b border-r border-on-image/60" />
                        </div>

                        {/* IMAGE FOOTER */}
                        <div className="flex items-center justify-between gap-4 border-t border-border bg-card px-4 py-3 text-card-foreground">
                          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-accent">
                            Project / {project.type}
                          </span>

                          <span className="font-mono text-[8px] text-card-foreground/40">
                            BA / {project.number}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* =====================================
                      PROJECT INFORMATION
                  ====================================== */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: reverse ? -52 : 52,
                      filter: "blur(7px)",
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      filter: "blur(0px)",
                    }}
                    viewport={homeViewport}
                    transition={{
                      duration: 0.85,
                      delay: 0.16,
                      ease: homeEase,
                    }}
                    className={`flex min-w-0 flex-col ${
                      reverse ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    {/* PROJECT LABEL */}
                    <div className="mb-5 flex items-center gap-3">
                      <span className="h-1.5 w-1.5 bg-accent" />

                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                        Featured / {project.number}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3 className="break-words text-3xl font-medium leading-[1.05] tracking-[-0.05em] text-foreground sm:text-4xl xl:text-5xl">
                      {project.title}
                      <span className="text-accent">.</span>
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-6 max-w-lg text-sm leading-7 text-muted">
                      {project.description}
                    </p>

                    {/* TECHNOLOGIES */}
                    <div className="mt-8">
                      <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                        Technologies used
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="border border-border px-3 py-2 font-mono text-[10px] text-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CORE CONTRIBUTION */}
                    {project.highlights?.[0] && (
                      <div className="mt-8 border-t border-border pt-6">
                        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                          Core contribution
                        </p>

                        <p className="max-w-lg text-sm leading-7 text-muted">
                          {project.highlights[0]}
                        </p>
                      </div>
                    )}

                    {/* BOTTOM META */}
                    <div className="mt-9 flex items-center justify-between border-t border-border pt-5">
                      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                        {project.category}
                      </span>

                      <span className="font-mono text-[9px] text-accent">
                        / {project.number}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =====================================
            VIEW ALL PROJECTS
        ====================================== */}
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={homeViewport}
          className="flex flex-col justify-between gap-6 pt-10 sm:flex-row sm:items-center"
        >
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
              Want to see more?
            </span>

            <p className="mt-2 text-sm text-muted">
              Explore the complete project archive.
            </p>
          </div>

          <Link
            href="/projects"
            className="group flex h-12 items-center justify-between gap-9 bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            All Projects

            <FiArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
