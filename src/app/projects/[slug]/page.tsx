
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiCode,
  FiLayers,
} from "react-icons/fi";

import { projects } from "@/data/portfolio";
import SiteReveal from "@/components/SiteReveal";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.title} — Project Details`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);

  if (index === -1) notFound();

  const project = projects[index];
  const previous = projects[index - 1];
  const next = projects[index + 1];

  const diagram =
    "diagram" in project &&
    typeof project.diagram === "string"
      ? project.diagram
      : null;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 pb-20 pt-8 sm:px-6 lg:px-8">

        {/* TOP NAVIGATION */}
        <SiteReveal>
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-foreground"
          >
            <FiArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            All projects
          </Link>

          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
            Project {String(index + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
          </div>
        </SiteReveal>

        {/* =====================================
            HERO — IMAGE LEFT / INFO RIGHT
        ====================================== */}

        <section className="grid gap-10 border-b border-border py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:py-20">

          {/* LEFT — IMAGE */}
          <SiteReveal direction="left" className="min-w-0">
            <div className="relative overflow-hidden border border-border bg-foreground/[0.035] p-3 sm:p-5 lg:p-7">

              {/* IMAGE */}
              <div className="relative aspect-[4/3] overflow-hidden border border-border bg-card">
                <Image
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-top"
                />
              </div>

              {/* IMAGE NUMBER */}
              <div className="absolute bottom-6 left-6 border border-border bg-background px-4 py-2 sm:bottom-9 sm:left-9">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground">
                  Preview / {project.number}
                </span>
              </div>
            </div>

            {/* IMAGE FOOTER */}
            <div className="mt-4 flex items-center justify-between gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                Project screenshot
              </span>

              <span className="font-mono text-[10px] text-muted">
                {project.year}
              </span>
            </div>
          </SiteReveal>

          {/* RIGHT — PROJECT INFO */}
          <SiteReveal direction="right" delay={0.1} className="min-w-0 lg:pl-3">

            {/* CATEGORY */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-2 w-2 bg-accent" />

              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                {project.category}
              </span>
            </div>

            {/* TITLE */}
            <h1 className="break-words text-[clamp(3.2rem,5.7vw,6.5rem)] font-medium leading-[0.96] tracking-[-0.075em] text-foreground">
              {project.title}
              <span className="text-accent">.</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-xl text-sm leading-8 text-muted sm:text-base">
              {project.description}
            </p>

            {/* PROJECT META */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-y border-border py-6">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-muted">
                  Type
                </p>

                <p className="mt-2 break-words text-sm font-medium">
                  {project.type}
                </p>
              </div>

              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-muted">
                  Category
                </p>

                <p className="mt-2 break-words text-sm font-medium">
                  {project.category}
                </p>
              </div>

              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-muted">
                  Year
                </p>

                <p className="mt-2 text-sm font-medium">
                  {project.year}
                </p>
              </div>
            </div>

            {/* TECH STACK PREVIEW */}
            <div className="mt-7">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                Technologies
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 6).map((tag) => (
                  <span
                    key={tag}
                    className="border border-border px-3 py-2 font-mono text-[10px] text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* ACTIONS */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#project-details"
                className="group inline-flex h-13 items-center gap-8 bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-85"
              >
                Explore Details

                <FiArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <Link
                href="/projects"
                className="group inline-flex h-13 items-center gap-3 text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                All Projects
                <FiArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </SiteReveal>
        </section>

        {/* =====================================
             PROJECT DETAILS — BELOW HERO
        ====================================== */}

        <div id="project-details" className="scroll-mt-24">

          {/* OVERVIEW */}
          <SiteReveal>
            <section className="grid gap-10 border-b border-border py-16 lg:grid-cols-[0.55fr_1fr] lg:gap-20 lg:py-24">

            {/* LEFT */}
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                01 / Overview
              </span>

              <h2 className="mt-6 text-3xl font-medium leading-tight tracking-[-0.055em] sm:text-5xl">
                About the
                <br />
                project.
              </h2>
            </div>

            {/* RIGHT */}
            <div>
              <p className="max-w-3xl text-lg leading-9 tracking-[-0.02em] text-foreground sm:text-xl">
                {project.description}
              </p>

              <div className="mt-10 grid gap-6 border-t border-border pt-7 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                    Project Type
                  </p>

                  <p className="mt-3 text-base font-medium">
                    {project.type}
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                    Category
                  </p>

                  <p className="mt-3 text-base font-medium">
                    {project.category}
                  </p>
                </div>
              </div>
            </div>
            </section>
          </SiteReveal>

          {/* =====================================
              FEATURES
          ====================================== */}

          <SiteReveal direction="left">
            <section className="border-b border-border py-16 lg:py-24">

            {/* HEADER */}
            <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                  02 / Features
                </span>

                <h2 className="mt-6 text-3xl font-medium tracking-[-0.055em] sm:text-5xl">
                  What I built.
                </h2>
              </div>

              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                {String(project.highlights.length).padStart(2, "0")} Highlights
              </span>
            </div>

            {/* FEATURE LIST */}
            <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
              {project.highlights.map((highlight, index) => (
                <div
                  key={`${index}-${highlight}`}
                  className="group flex min-h-[210px] flex-col justify-between bg-background p-7 transition-colors duration-300 hover:bg-foreground/[0.035] sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <FiCheck
                      size={18}
                      className="text-muted transition-colors group-hover:text-accent"
                    />
                  </div>

                  <p className="mt-10 max-w-md text-base leading-7 text-foreground sm:text-lg">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
            </section>
          </SiteReveal>

          {/* =====================================
              TECHNOLOGY STACK
          ====================================== */}

          <SiteReveal direction="right">
            <section className="grid gap-10 border-b border-border py-16 lg:grid-cols-[0.55fr_1fr] lg:gap-20 lg:py-24">

            {/* LEFT */}
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                03 / Technology
              </span>

              <h2 className="mt-6 text-3xl font-medium tracking-[-0.055em] sm:text-5xl">
                Built with.
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
                The technologies and tools used to bring
                this project to life.
              </p>
            </div>

            {/* RIGHT */}
            <div>
              <div className="flex items-center justify-between border-b border-border pb-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                  Technology Stack
                </span>

                <FiCode size={18} className="text-accent" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3">
                {project.tags.map((tag, index) => (
                  <div
                    key={`${tag}-${index}`}
                    className="group flex min-h-[110px] flex-col justify-between border-b border-r border-border p-5 transition-colors hover:bg-foreground/[0.035]"
                  >
                    <span className="font-mono text-[10px] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex items-center justify-between gap-2">
                      <p className="break-words text-sm font-medium text-foreground">
                        {tag}
                      </p>

                      <FiLayers
                        size={14}
                        className="shrink-0 text-muted/40 transition-colors group-hover:text-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </section>
          </SiteReveal>

          {/* =====================================
              OPTIONAL ARCHITECTURE
          ====================================== */}

          {diagram && (
            <SiteReveal>
              <section className="border-b border-border py-16 lg:py-24">
              <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    04 / Architecture
                  </span>

                  <h2 className="mt-6 text-3xl font-medium tracking-[-0.055em] sm:text-5xl">
                    Under the hood.
                  </h2>
                </div>

                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                  Technical Diagram
                </span>
              </div>

              <div className="relative aspect-[640/312] overflow-hidden border border-border bg-white">
                <Image
                  src={diagram}
                  alt={`${project.title} architecture diagram`}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-contain p-4 sm:p-8"
                />
              </div>
              </section>
            </SiteReveal>
          )}
        </div>

        {/* =====================================
            PROJECT NAVIGATION
        ====================================== */}

        <SiteReveal>
          <nav
            aria-label="Project navigation"
            className="grid border-b border-border sm:grid-cols-2"
          >
          {/* PREVIOUS */}
          <div className="border-b border-border sm:border-b-0 sm:border-r">
            {previous ? (
              <Link
                href={`/projects/${previous.slug}`}
                className="group flex h-full min-h-[160px] flex-col justify-between p-6 transition-colors hover:bg-foreground/[0.025] sm:p-9"
              >
                <span className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                  <FiArrowLeft
                    size={16}
                    className="transition-transform group-hover:-translate-x-1"
                  />
                  Previous Project
                </span>

                <span className="mt-8 text-2xl font-medium tracking-[-0.04em] transition-colors group-hover:text-accent">
                  {previous.title}
                </span>
              </Link>
            ) : (
              <div className="flex min-h-[160px] items-end p-9 text-sm text-muted">
                Beginning of archive
              </div>
            )}
          </div>

          {/* NEXT */}
          <div>
            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className="group flex h-full min-h-[160px] flex-col items-end justify-between p-6 text-right transition-colors hover:bg-foreground/[0.025] sm:p-9"
              >
                <span className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                  Next Project

                  <FiArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>

                <span className="mt-8 text-2xl font-medium tracking-[-0.04em] transition-colors group-hover:text-accent">
                  {next.title}
                </span>
              </Link>
            ) : (
              <div className="flex min-h-[160px] items-end justify-end p-9 text-sm text-muted">
                End of archive
              </div>
            )}
          </div>
          </nav>
        </SiteReveal>

        {/* =====================================
            FINAL CTA
        ====================================== */}

        <SiteReveal>
          <section className="flex flex-col justify-between gap-8 py-16 lg:flex-row lg:items-end">
          <div>
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.17em] text-accent">
              Next Collaboration
            </p>

            <h2 className="text-3xl font-medium tracking-[-0.055em] sm:text-5xl">
              Have a project in mind?
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-muted">
              I&apos;m open to interesting projects, collaborations,
              and new development opportunities.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex h-14 w-fit items-center gap-8 bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            Let&apos;s work together

            <FiArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
          </section>
        </SiteReveal>
      </div>
    </main>
  );
}
