"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiLayers,
} from "react-icons/fi";

import CardSwap, { Card, type CardSwapHandle } from "@/components/CardSwap";

import { featuredProjects } from "@/data/portfolio";

export default function ProjectsSection() {
  const router = useRouter();

  const deckRef = useRef<CardSwapHandle>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = featuredProjects[activeIndex] ?? featuredProjects[0];

  if (!activeProject) return null;

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="container mx-auto">
        {/* SECTION TOP */}
        <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-accent" />

            <span className="font-mono text-[10px] uppercase tracking-[0.17em] text-muted">
              Selected Work
            </span>
          </div>

          <span className="font-mono text-[10px] text-muted">
            {String(featuredProjects.length).padStart(2, "0")} Projects
          </span>
        </div>

        {/* HEADING */}
        <div className="flex flex-col justify-between gap-6 pt-10 sm:flex-row sm:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
              Portfolio / Highlights
            </p>

            <h2 className="text-4xl font-medium leading-[1.05] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              Work that
              <span className="text-accent"> speaks.</span>
            </h2>
          </motion.div>

          <p className="max-w-sm text-sm leading-7 text-muted">
            A few projects that reflect my approach to building products,
            solving problems, and exploring modern technologies.
          </p>
        </div>

        {/* MAIN SHOWCASE */}
        <div className="mt-12 grid gap-10 border-y border-border py-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:gap-14 lg:py-14">
          {/* LEFT — PROJECT CARD SWAP */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="relative min-w-0"
          >
            {/* IMAGE META */}
            <div className="mb-5 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                Project Preview
              </span>

              <span className="font-mono text-[10px] text-accent">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(featuredProjects.length).padStart(2, "0")}
              </span>
            </div>

            {/* SWAP CONTAINER */}
            <div className="relative h-[300px] w-full sm:h-[430px] lg:h-[460px] xl:h-[510px]">
              <CardSwap
                ref={deckRef}
                width={950}
                height={560}
                cardDistance={24}
                verticalDistance={25}
                depth={5}
                skewAmount={1.5}
                visibleCards={Math.min(3, featuredProjects.length)}
                delay={5500}
                speed={0.85}
                bounce={0.25}
                parallax={0.2}
                hoverSpread={0.06}
                dim={0.25}
                cardRadius={5}
                onChange={setActiveIndex}
                onCardClick={(index) => {
                  const project = featuredProjects[index];

                  if (project) {
                    router.push(`/projects/${project.slug}`);
                  }
                }}
                className="mx-auto max-w-full"
              >
                {featuredProjects.map((project) => (
                  <Card key={project.id} customClass="bg-card">
                    <div className="flex h-full flex-col overflow-hidden border border-border bg-card">
                      {/* TOP BAR */}
                      <div className="flex h-12 shrink-0 items-center justify-between gap-4 border-b border-border px-4">
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 bg-accent" />

                          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                            {project.category}
                          </span>
                        </div>

                        <span className="font-mono text-[10px] text-muted">
                          {project.number}
                        </span>
                      </div>

                      {/* IMAGE */}
                      <div className="relative min-h-0 flex-1 overflow-hidden bg-background">
                        <Image
                          src={project.image}
                          alt={`${project.title} project preview`}
                          fill
                          quality={90}
                          sizes="(max-width: 1024px) 90vw, 55vw"
                          className="pointer-events-none object-cover object-center"
                        />

                        {/* IMAGE GRADIENT */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                        {/* BOTTOM IMAGE CONTENT */}
                        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
                          <div>
                            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/65">
                              Featured Project
                            </p>

                            <h3 className="mt-2 text-xl font-medium tracking-[-0.04em] sm:text-3xl">
                              {project.title}
                            </h3>
                          </div>

                          <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-white text-black">
                            <FiArrowUpRight size={19} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>

            {/* CARD NAVIGATION */}
            <div className="mt-5 flex items-center justify-between gap-5">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => deckRef.current?.prev()}
                  aria-label="Previous project"
                  className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <FiArrowLeft size={17} />
                </button>

                <button
                  type="button"
                  onClick={() => deckRef.current?.next()}
                  aria-label="Next project"
                  className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <FiArrowRight size={17} />
                </button>
              </div>

              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                Drag to Explore
              </span>
            </div>
          </motion.div>

          {/* RIGHT — ACTIVE PROJECT */}
          <div className="flex min-w-0 flex-col justify-center">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                {/* NUMBER */}
                <div className="mb-7 flex items-center gap-3">
                  <FiLayers size={16} className="text-accent" />

                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                    Project / {activeProject.number}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="break-words text-3xl font-medium leading-[1.05] tracking-[-0.05em] sm:text-4xl lg:text-5xl">
                  {activeProject.title}
                </h3>

                {/* CATEGORY */}
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                    {activeProject.type}
                  </span>

                  <span className="h-px w-6 bg-border" />

                  <span className="font-mono text-[10px] text-muted">
                    {activeProject.year}
                  </span>
                </div>

                {/* DESCRIPTION */}
                <p className="mt-7 max-w-md text-sm leading-8 text-muted">
                  {activeProject.description}
                </p>

                {/* TECHNOLOGY STACK */}
                <div className="mt-8 border-t border-border pt-6">
                  <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {activeProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-border px-3 py-2 font-mono text-[10px] text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* VIEW PROJECT */}
                <Link
                  href={`/projects/${activeProject.slug}`}
                  className="group mt-9 inline-flex h-12 items-center gap-6 bg-foreground px-5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
                >
                  Explore Project
                  <FiArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* SECTION FOOTER */}
        <div className="flex flex-col justify-between gap-6 pt-9 sm:flex-row sm:items-center">
          <p className="max-w-md text-sm leading-7 text-muted">
            Each project represents a different challenge, from frontend design
            to backend architecture.
          </p>

          <Link
            href="/projects"
            className="group inline-flex h-13 w-fit items-center gap-8 border border-border px-6 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            View All Projects
            <FiArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
