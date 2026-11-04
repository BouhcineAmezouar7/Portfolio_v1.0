"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {
  FiArrowLeft,
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import { projects, projectFilters } from "@/data/portfolio";
import { revealUp, siteEase, siteViewport } from "@/lib/site-motion";

const PROJECTS_PER_PAGE = 6;

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE),
  );

  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;

  const visibleProjects = filteredProjects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE,
  );

  function changeFilter(filter: string) {
    setActiveFilter(filter);
    setCurrentPage(1);
  }

  function changePage(page: number) {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    document.getElementById("projects-grid")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <main className="min-h-screen px-4 pb-24 pt-12 text-foreground sm:px-6 lg:px-8 lg:pt-10">
      <div className="container mx-auto">
        {/* BACK */}
        <motion.div
          variants={revealUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: siteEase }}
          className="mb-10"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground"
          >
            <FiArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back Home
          </Link>
        </motion.div>

        {/* HERO */}
        <div className="border-b border-border py-5">
          <motion.p
            variants={revealUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.65, delay: 0.08, ease: siteEase }}
            className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-accent"
          >
            Selected & Experimental Work
          </motion.p>

          <motion.h1
            variants={revealUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.14, ease: siteEase }}
            className="text-[clamp(3.8rem,12vw,10rem)] font-medium leading-[0.83] tracking-[-0.075em]"
          >
            PROJECT
            <br />
            <span className="text-foreground/25">ARCHIVE.</span>
          </motion.h1>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_400px] lg:items-end">
            <div className="flex items-center gap-4">
              <span className="font-mono text-sm text-accent">
                {String(projects.length).padStart(2, "0")}
              </span>

              <span className="h-px w-12 bg-border" />

              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                Projects
              </span>
            </div>

            <p className="max-w-md text-sm leading-7 text-muted">
              A collection of products, experiments and applications I&apos;ve
              built while exploring frontend development, backend architecture
              and full-stack engineering.
            </p>
          </div>
        </div>

        {/* FILTERS */}
        <div className="flex flex-col justify-between gap-5 border-b border-border py-6 sm:flex-row sm:items-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
            Filter by discipline
          </span>

          <div className="flex flex-wrap gap-2">
            {projectFilters.map((filter) => {
              const active = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => changeFilter(filter)}
                  aria-pressed={active}
                  className={`border px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.1em] transition-colors ${
                    active
                      ? "border-foreground bg-foreground text-background"
                      : "border-border text-muted hover:border-foreground/50 hover:text-foreground"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* PROJECT GRID */}
        <section id="projects-grid" className="scroll-mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeFilter}-${currentPage}`}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
              transition={{ duration: 0.45, ease: siteEase }}
              className="grid border-l border-border md:grid-cols-2"
            >
              {visibleProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.06,
                    ease: siteEase,
                  }}
                  className="group flex min-w-0 flex-col border-b border-r border-border"
                >
                  {/* PROJECT META */}
                  <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[10px] text-accent">
                        {project.number}
                      </span>

                      <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-muted">
                        {project.category}
                      </span>
                    </div>

                    <span className="font-mono text-[10px] text-muted">
                      {project.year}
                    </span>
                  </div>

                  {/* PROJECT IMAGE */}
                  <Link
                    href={`/projects/${project.slug}`}
                    aria-label={`View ${project.title} project`}
                    className="project-image-link project-image-inset group/image relative mx-4 mt-4 overflow-hidden bg-card"
                  >
                    <div className="relative aspect-[16/9] w-full">
                      <Image
                        src={project.image}
                        alt={`${project.title} project preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-center transition-transform duration-700 group-hover/image:scale-[1.035]"
                      />
                    </div>

                    {/* HOVER OVERLAY */}
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover/image:bg-black/10" />

                    {/* ARROW */}
                    <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center bg-foreground text-background transition-transform duration-300 group-hover/image:-translate-y-1">
                      <FiArrowUpRight size={19} />
                    </span>
                  </Link>

                  {/* CONTENT */}
                  <div className="flex flex-1 flex-col px-5 pb-6 pt-5">
                    {/* TITLE */}
                    <div className="flex items-start justify-between gap-5">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="min-w-0"
                      >
                        <h2 className="break-words text-2xl font-medium leading-tight tracking-[-0.04em] transition-colors duration-300 hover:text-accent sm:text-3xl">
                          {project.title}
                        </h2>
                      </Link>

                      <Link
                        href={`/projects/${project.slug}`}
                        aria-label={`Open ${project.title}`}
                        className="mt-1 shrink-0 text-muted transition-colors hover:text-accent"
                      >
                        <FiArrowUpRight size={20} />
                      </Link>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="mt-4 line-clamp-3 text-sm leading-7 text-muted">
                      {project.description}
                    </p>

                    {/* TAGS */}
                    <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 border-t border-border pt-5">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted"
                        >
                          <span className="mr-2 text-accent/60">
                            {String(tagIndex + 1).padStart(2, "0")}
                          </span>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* PROJECT LINK */}
                    <div className="mt-auto flex items-center justify-between gap-4 pt-7">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="group/link inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.1em] text-foreground transition-colors hover:text-accent"
                      >
                        View Project
                        <FiArrowUpRight
                          size={17}
                          className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                        />
                      </Link>

                      <span className="font-mono text-[10px] text-muted">
                        BA / {project.number}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* EMPTY STATE */}
          {filteredProjects.length === 0 && (
            <div className="border-b border-border py-20 text-center">
              <p className="text-sm text-muted">
                No projects found in this category.
              </p>

              <button
                type="button"
                onClick={() => changeFilter("All")}
                className="mt-5 text-sm font-medium text-accent hover:underline"
              >
                View all projects
              </button>
            </div>
          )}
        </section>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <nav
            aria-label="Project pagination"
            className="flex flex-col items-center justify-between gap-5 border-b border-border py-8 sm:flex-row"
          >
            <span className="font-mono text-[11px] text-muted">
              Showing {startIndex + 1}–
              {Math.min(
                startIndex + PROJECTS_PER_PAGE,
                filteredProjects.length,
              )}{" "}
              of {filteredProjects.length} projects
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous page"
                disabled={currentPage === 1}
                onClick={() => changePage(currentPage - 1)}
                className="flex h-10 w-10 items-center justify-center border border-border transition-colors hover:border-foreground/50 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <FiChevronLeft size={18} />
              </button>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => changePage(page)}
                    aria-label={`Go to page ${page}`}
                    aria-current={currentPage === page ? "page" : undefined}
                    className={`flex h-10 min-w-10 items-center justify-center border px-3 font-mono text-xs transition-colors ${
                      currentPage === page
                        ? "border-foreground bg-foreground text-background"
                        : "border-border text-muted hover:border-foreground/50 hover:text-foreground"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}

              <button
                type="button"
                aria-label="Next page"
                disabled={currentPage === totalPages}
                onClick={() => changePage(currentPage + 1)}
                className="flex h-10 w-10 items-center justify-center border border-border transition-colors hover:border-foreground/50 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <FiChevronRight size={18} />
              </button>
            </div>
          </nav>
        )}

        {/* BOTTOM CTA */}
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={siteViewport}
          transition={{ duration: 0.7, ease: siteEase }}
          className="grid gap-8 border-b border-border py-14 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
              Have a project?
            </span>

            <h3 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              Let&apos;s build something
              <br />
              <span className="text-accent/70">interesting together.</span>
            </h3>
          </div>

          <Link
            href="/contact"
            className="group inline-flex h-14 w-fit min-w-[200px] items-center justify-between gap-10 bg-foreground px-6 text-sm font-semibold text-background"
          >
            Get In Touch
            <FiArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>

        {/* FOOTER */}
        <div className="flex flex-wrap items-center justify-between gap-5 pt-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
            Bouhcine Amezouar
          </span>

          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-border" />

            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
              Project Archive / 2026
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
