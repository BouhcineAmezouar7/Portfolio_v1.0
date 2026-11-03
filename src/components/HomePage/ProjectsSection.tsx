"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";

import CardSwap, { Card, type CardSwapHandle } from "@/components/CardSwap";

import { featuredProjects } from "@/data/portfolio";

/* ----------------------------------------
   RESPONSIVE DECK DIMENSIONS
----------------------------------------- */

function useDeckSize() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(340);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const update = () => {
      const available = element.clientWidth;

      setWidth(Math.min(680, Math.max(200, available - 56)));
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const height = Math.round(width * 0.63);

  return {
    containerRef,
    width,
    height,
  };
}

/* ----------------------------------------
   MAIN COMPONENT
----------------------------------------- */

export default function ProjectsSection() {
  const router = useRouter();
  const deckRef = useRef<CardSwapHandle>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const { containerRef, width, height } = useDeckSize();

  const total = featuredProjects.length;

  const activeProject = featuredProjects[activeIndex] ?? featuredProjects[0];

  if (!activeProject) return null;

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="container mx-auto">
        {/* SECTION LABEL */}
        <div className="flex items-center justify-between border-b border-border pb-5">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-accent" />

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              Selected Work
            </span>
          </div>

          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
            04 / Projects
          </span>
        </div>

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="grid gap-8 border-b border-border py-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
        >
          <div>
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              Projects / Highlights
            </p>

            <h2 className="home-section-title">
              SELECTED
              <br />
              <span className="text-accent">WORK.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-muted">
            A collection of projects focused on solving real problems through
            modern web technologies and thoughtful engineering.
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid gap-12 border-b border-border py-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-14 lg:py-16">
          {/* LEFT — CARDSWAP */}
          <div className="min-w-0">
            {/* DECK HEADER */}
            <div className="mb-5 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                Project Preview
              </span>

              <span className="font-mono text-[11px] text-foreground">
                {String(activeIndex + 1).padStart(2, "0")}
                <span className="mx-2 text-muted">/</span>
                {String(total).padStart(2, "0")}
              </span>
            </div>

            {/* CARDSWAP CONTAINER */}
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
                      <div className="flex h-13 shrink-0 items-center justify-between gap-4 border-b border-border px-4">
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

            {/* FIXED NAVIGATION */}
            <div className="mt-3 flex items-center justify-between gap-4 border-t border-border pt-5">
              {/* ARROWS */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => deckRef.current?.prev()}
                  disabled={total < 2}
                  aria-label="Previous project"
                  className="group flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:bg-foreground hover:text-background disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <FiArrowLeft
                    size={17}
                    className="transition-transform group-hover:-translate-x-0.5"
                  />
                </button>

                <button
                  type="button"
                  onClick={() => deckRef.current?.next()}
                  disabled={total < 2}
                  aria-label="Next project"
                  className="group flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:bg-foreground hover:text-background disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <FiArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </button>
              </div>

              <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
                Drag or use arrows
              </span>
            </div>
          </div>

          {/* RIGHT — ACTIVE PROJECT DETAILS */}
          <div className="min-w-0">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                {/* PROJECT LABEL */}
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                    Project / {activeProject.number}
                  </span>

                  <span className="h-px flex-1 bg-border" />
                </div>

                {/* PROJECT TITLE */}
                <h3 className="mt-7 break-words text-[clamp(2.4rem,4vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.06em] text-foreground">
                  {activeProject.title}
                </h3>

                {/* META */}
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
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

                {/* HIGHLIGHT */}
                {activeProject.highlights?.[0] && (
                  <div className="mt-8 border-t border-border pt-6">
                    <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.15em] text-accent">
                      Core Contribution
                    </p>

                    <p className="text-sm leading-7 text-foreground">
                      {activeProject.highlights[0]}
                    </p>
                  </div>
                )}

                {/* LINK */}
                <Link
                  href={`/projects/${activeProject.slug}`}
                  className="group mt-9 inline-flex h-12 items-center gap-7 bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-85"
                >
                  Explore Project
                  <FiArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* BOTTOM LINK */}
        <div className="flex justify-end pt-9">
          <Link
            href="/projects"
            className="group inline-flex h-12 items-center gap-7 border border-border px-5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            View All Projects
            <FiArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
