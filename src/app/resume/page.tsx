import Link from "next/link";
import { FiArrowLeft, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const experience = [
  {
    role: "Software Engineering Student",
    place: "1337 Coding School",
    period: "2024 — Present",
    summary:
      "Project-based work across programming, systems, networking, HTTP, Docker, backend architecture and collaborative full-stack development.",
  },
  {
    role: "Full-Stack Developer — PFE Intern",
    place: "DM-Decore",
    period: "2 months",
    summary:
      "Worked in a team on an e-commerce application using Laravel, React.js, MySQL and REST APIs.",
  },
  {
    role: "Web Development / Database Intern",
    place: "NetoneMaroc",
    period: "4 months",
    summary:
      "Managed database information and designed frontend interfaces for displaying and interacting with structured data.",
  },
];

const projects = [
  {
    name: "Maou3idy — ft_transcendence",
    detail:
      "Healthcare appointment platform built by five developers. Owned booking and scheduling across doctor availability, slots, appointments, NestJS APIs, Prisma data models and Next.js interfaces.",
  },
  {
    name: "Webserv",
    detail:
      "HTTP server project covering sockets, request/response handling, configuration and client/server architecture.",
  },
  {
    name: "Inception",
    detail:
      "Containerized infrastructure project using Docker, Compose, volumes, networks and Linux service configuration.",
  },
  {
    name: "Atlas Team Manager",
    detail:
      "Full-stack platform for workspaces, teams, projects and tasks with authentication, permissions and administration.",
  },
];

const skills = [
  ["Frontend", "Next.js, React.js, TypeScript, Tailwind CSS, HTML5, CSS"],
  ["Backend", "NestJS, Laravel, REST APIs, authentication, authorization"],
  ["Data", "PostgreSQL, Prisma, MySQL, SQLite, Supabase"],
  ["Architecture", "Microservices, RabbitMQ, database design, RBAC"],
  ["Tools", "Docker, Git, Linux, Docker Compose"],
];

export default function ResumePage() {
  return (
    <main className="min-h-screen px-4 pb-24 pt-12 sm:px-6 lg:px-8 lg:pt-20">
      <div className="container mx-auto">
        <Link
          href="/"
          className="group mb-10 inline-flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/30 transition-colors hover:text-foreground"
        >
          <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
          Back Home
        </Link>

        <header className="grid gap-10 border-y border-border py-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.25em] text-accent/70">
              Curriculum Vitae / Profile
            </p>
            <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-medium uppercase leading-[0.82] tracking-[-0.07em] text-foreground">
              Bouhcine
              <br />
              <span className="text-foreground/20">Amezouar.</span>
            </h1>
          </div>

          <div className="space-y-5 lg:pb-1">
            <p className="text-lg font-medium text-foreground">
              Full-Stack Developer · 1337 Coding School Student
            </p>
            <p className="max-w-xl text-sm leading-7 text-muted">
              I build products across the complete application stack, from
              relational data models and backend business logic to APIs and
              responsive frontend interfaces.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-3 font-mono text-[9px] uppercase tracking-[0.14em] text-foreground/40">
              <a className="inline-flex items-center gap-2 hover:text-accent" href="mailto:bouhcine_amezouar@gmail.com"><FiMail /> Email</a>
              <a className="inline-flex items-center gap-2 hover:text-accent" href="https://github.com/BouhcineAmezouar7" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
              <a className="inline-flex items-center gap-2 hover:text-accent" href="https://www.linkedin.com/in/bouhcine-amezouar/" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
              <span>Casablanca, Morocco</span>
            </div>
          </div>
        </header>

        <section className="grid border-b border-border lg:grid-cols-[0.35fr_0.65fr]">
          <h2 className="py-10 text-3xl font-medium tracking-[-0.04em] text-foreground lg:border-r lg:border-border">
            Experience
          </h2>
          <div className="lg:pl-10">
            {experience.map((item) => (
              <article key={item.place} className="border-t border-border py-8 first:border-t-0">
                <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">{item.role}</h3>
                    <p className="mt-1 text-sm text-accent/70">{item.place}</p>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-foreground/30">{item.period}</span>
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid border-b border-border lg:grid-cols-[0.35fr_0.65fr]">
          <h2 className="py-10 text-3xl font-medium tracking-[-0.04em] text-foreground lg:border-r lg:border-border">
            Education
          </h2>
          <div className="space-y-8 py-10 lg:pl-10">
            <div>
              <h3 className="text-lg font-medium text-foreground">1337 Coding School</h3>
              <p className="mt-2 text-sm leading-7 text-muted">Software Engineering / Computer Programming · Current student</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground">OFPPT — CFPM Sidi Moumen</h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                Technicien Spécialisé en Développement Digital — Web Full
                Stack · Casablanca, Morocco · Graduated 2024
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
                Built a professional foundation in frontend and backend
                development, databases and application architecture using
                Laravel, React.js, JavaScript, HTML, CSS and MySQL.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground">Baccalaureate</h3>
              <p className="mt-2 text-sm leading-7 text-muted">Life and Earth Sciences (SVT) · 2022</p>
            </div>
          </div>
        </section>

        <section className="grid border-b border-border lg:grid-cols-[0.35fr_0.65fr]">
          <h2 className="py-10 text-3xl font-medium tracking-[-0.04em] text-foreground lg:border-r lg:border-border">
            Selected Projects
          </h2>
          <div className="lg:pl-10">
            {projects.map((project) => (
              <article key={project.name} className="border-t border-border py-7 first:border-t-0">
                <h3 className="text-base font-medium text-foreground">{project.name}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">{project.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-[0.35fr_0.65fr]">
          <h2 className="py-10 text-3xl font-medium tracking-[-0.04em] text-foreground lg:border-r lg:border-border">
            Technical Skills
          </h2>
          <div className="py-10 lg:pl-10">
            {skills.map(([label, value]) => (
              <div key={label} className="grid gap-2 border-b border-border py-4 first:pt-0 sm:grid-cols-[130px_1fr]">
                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-accent/70">{label}</span>
                <span className="text-sm leading-6 text-muted">{value}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
