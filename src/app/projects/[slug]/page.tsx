
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiCheckCircle,
} from "react-icons/fi";

import { projects } from "@/data/portfolio";

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

  const index = projects.findIndex(
    (item) => item.slug === slug
  );

  if (index === -1) notFound();

  const project = projects[index];
  const previous = projects[index - 1];
  const next = projects[index + 1];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pt-14">

        {/* BREADCRUMB */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5">
          <div className="flex items-center gap-3 text-sm">
            <Link
              href="/projects"
              className="text-muted transition-colors hover:text-accent"
            >
              Projects
            </Link>

            <FiArrowRight size={13} className="text-muted/40" />

            <span className="font-medium text-foreground">
              {project.title}
            </span>
          </div>

          <span className="font-mono text-[10px] text-muted">
            {String(index + 1).padStart(2, "0")}
            {" / "}
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        {/* HERO */}
        <header className="grid gap-12 border-b border-border py-16 lg:grid-cols-[1fr_0.45fr] lg:items-end lg:py-24">
          <div className="min-w-0">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-accent" />

              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                Featured Project
              </span>
            </div>

            <h1 className="max-w-5xl break-words text-[clamp(3.5rem,7vw,7.5rem)] font-medium leading-[0.95] tracking-[-0.075em]">
              {project.title}
              <span className="text-accent">.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {project.description}
            </p>
          </div>

          {/* HERO META */}
          <div className="grid grid-cols-2 gap-6 border-t border-border pt-7 lg:grid-cols-1 lg:border-t-0 lg:border-l lg:pl-10">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                Project Category
              </p>
              <p className="mt-2 text-base font-medium">
                {project.category}
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                Project Type
              </p>
              <p className="mt-2 text-base font-medium">
                {project.type}
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                Year
              </p>
              <p className="mt-2 text-base font-medium">
                {project.year}
              </p>
            </div>
          </div>
        </header>

        {/* VISUAL SHOWCASE */}
        <section className="py-8 lg:py-12">
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm text-muted">
              {project.title} — project overview
            </figcaption>
          </figure>

          {"diagram" in project && (
            <figure className="mt-8">
              <div className="relative aspect-[640/312] overflow-hidden rounded-lg border border-border bg-white">
                <Image
                  src={project.diagram}
                  alt="Diagram showing an HTTP request to the web server and its response to the browser"
                  fill
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-contain"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted">
                How a browser sends an HTTP request and receives a response.
              </figcaption>
            </figure>
          )}
        </section>

        {/* OVERVIEW */}
        <section className="grid gap-10 border-b border-border py-14 lg:grid-cols-[0.65fr_1fr] lg:gap-20 lg:py-20">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
              01 / Overview
            </span>

            <h2 className="mt-5 text-3xl font-medium tracking-[-0.05em] sm:text-4xl">
              The project
              <br />
              at a glance.
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-xl leading-9 tracking-[-0.025em] text-foreground/85 sm:text-2xl sm:leading-10">
              {project.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {project.tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className="border border-border px-3 py-2 font-mono text-[11px] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="border-b border-border py-14 lg:py-20">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
                02 / Features
              </span>

              <h2 className="mt-5 text-3xl font-medium tracking-[-0.05em] sm:text-4xl">
                What I built.
              </h2>
            </div>

            <span className="font-mono text-[11px] text-muted">
              {String(project.highlights.length).padStart(2, "0")} Features
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {project.highlights.map((highlight, index) => (
              <div
                key={`${index}-${highlight}`}
                className="group flex min-h-[155px] flex-col justify-between rounded-lg border border-border p-6 transition-colors hover:border-accent/40 hover:bg-foreground/[0.02]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <FiCheckCircle
                    size={18}
                    className="text-muted/40 transition-colors group-hover:text-accent"
                  />
                </div>

                <p className="mt-8 text-base leading-7 text-foreground">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="border-b border-border py-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1fr] lg:gap-20">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
                03 / Technology
              </span>

              <h2 className="mt-5 text-3xl font-medium tracking-[-0.05em] sm:text-4xl">
                Technology stack.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
                Frameworks, languages, and tools used
                during the development of this project.
              </p>
            </div>

            <div className="flex flex-wrap content-start gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex h-12 items-center rounded-md border border-border px-5 text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECT NAVIGATION */}
        <nav
          aria-label="Project navigation"
          className="grid gap-4 py-12 sm:grid-cols-2"
        >
          {previous ? (
            <Link
              href={`/projects/${previous.slug}`}
              className="group flex min-h-[125px] flex-col justify-between rounded-lg border border-border p-6 transition-colors hover:border-accent/40"
            >
              <span className="flex items-center gap-3 text-xs text-muted">
                <FiArrowLeft
                  size={16}
                  className="transition-transform group-hover:-translate-x-1"
                />
                Previous Project
              </span>

              <span className="mt-6 text-xl font-medium transition-colors group-hover:text-accent">
                {previous.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group flex min-h-[125px] flex-col items-end justify-between rounded-lg border border-border p-6 text-right transition-colors hover:border-accent/40"
            >
              <span className="flex items-center gap-3 text-xs text-muted">
                Next Project
                <FiArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>

              <span className="mt-6 text-xl font-medium transition-colors group-hover:text-accent">
                {next.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
        </nav>

        {/* CONTACT CTA */}
        <section className="flex flex-col justify-between gap-8 border-t border-border py-16 lg:flex-row lg:items-center">
          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
              Let&apos;s collaborate
            </p>

            <h2 className="text-3xl font-medium tracking-[-0.05em] sm:text-4xl">
              Have a project in mind?
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted">
              I&apos;m always open to discussing new projects
              and interesting opportunities.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex h-14 w-fit items-center gap-8 rounded-md bg-accent px-6 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-85"
          >
            Get In Touch
            <FiArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </section>
      </div>
    </main>
  );
}
