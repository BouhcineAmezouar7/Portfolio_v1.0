import Link from "next/link";
import {
  FiArrowLeft,
  FiDownload,
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import {
  profile,
  projects,
  resumeExperiences,
  socialLinks,
} from "@/data/portfolio";
import SiteReveal from "@/components/SiteReveal";

const skills = [
  ["Frontend", "Next.js, React.js, TypeScript, Tailwind CSS, HTML5, CSS"],
  ["Backend", "NestJS, Laravel, Node.js, REST APIs, microservices"],
  ["Data", "PostgreSQL, Prisma ORM, MySQL"],
  ["Architecture", "Microservices, RabbitMQ, database design, RBAC"],
  ["DevOps & Tools", "Docker, Docker Compose, Git, Linux, RabbitMQ"],
  ["Concepts", "Software architecture, authentication, role management, API integration, OOP"],
];

export default function ResumePage() {
  return (
    <main className="min-h-screen px-4 pb-24 pt-12 sm:px-6 lg:px-8 lg:pt-20">
      <div className="container mx-auto">
        <SiteReveal>
          <Link
            href="/"
            className="group mb-10 inline-flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/30 transition-colors hover:text-foreground"
          >
            <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
            Back Home
          </Link>
        </SiteReveal>

        <SiteReveal delay={0.08}>
          <header className="grid gap-10 border-y border-border py-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.25em] text-accent/70">
              Curriculum Vitae / Profile
            </p>
            <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-medium uppercase leading-[0.82] tracking-[-0.07em] text-foreground">
              {profile.firstName}
              <br />
              <span className="text-foreground/20">{profile.lastName}.</span>
            </h1>
          </div>

          <div className="space-y-5 lg:pb-1">
            <p className="text-lg font-medium text-foreground">
              {profile.role} · {profile.school} Student
            </p>
            <p className="max-w-xl text-sm leading-7 text-muted">
              Full-stack developer with hands-on experience building web
              applications, REST APIs, microservices, authentication systems,
              database-driven features, and responsive interfaces. Currently
              focused on backend development and system architecture.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-4 py-3 font-mono text-[9px] uppercase tracking-[0.14em] text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <FiExternalLink aria-hidden="true" />
                Open PDF
              </a>
              <a
                href={profile.resumePath}
                download="Bouhcine_Amezouar_Resume.pdf"
                className="inline-flex items-center gap-2 bg-foreground px-4 py-3 font-mono text-[9px] uppercase tracking-[0.14em] text-background transition-opacity hover:opacity-80"
              >
                <FiDownload aria-hidden="true" />
                Download PDF
              </a>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-3 font-mono text-[9px] uppercase tracking-[0.14em] text-foreground/40">
              <a className="inline-flex items-center gap-2 hover:text-accent" href={socialLinks[2].href}><FiMail /> Email</a>
              <a className="inline-flex items-center gap-2 hover:text-accent" href={profile.phoneHref}><FiPhone /> {profile.phone}</a>
              <a className="inline-flex items-center gap-2 hover:text-accent" href={socialLinks[0].href} target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
              <a className="inline-flex items-center gap-2 hover:text-accent" href={socialLinks[1].href} target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
              <span>{profile.location}</span>
            </div>
          </div>
          </header>
        </SiteReveal>

        <SiteReveal direction="left">
          <section className="grid border-b border-border lg:grid-cols-[0.35fr_0.65fr]">
          <h2 className="py-10 text-3xl font-medium tracking-[-0.04em] text-foreground lg:border-r lg:border-border">
            Experience
          </h2>
          <div className="lg:pl-10">
            {resumeExperiences.map((item) => (
              <article key={item.id} className="border-t border-border py-8 first:border-t-0">
                <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-accent/70">{item.company}</p>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-foreground/30">{item.period}</span>
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">{item.description}</p>
              </article>
            ))}
          </div>
          </section>
        </SiteReveal>

        <SiteReveal direction="right">
          <section className="grid border-b border-border lg:grid-cols-[0.35fr_0.65fr]">
          <h2 className="py-10 text-3xl font-medium tracking-[-0.04em] text-foreground lg:border-r lg:border-border">
            Education
          </h2>
          <div className="space-y-8 py-10 lg:pl-10">
            <div>
              <h3 className="text-lg font-medium text-foreground">{profile.school}</h3>
              <p className="mt-2 text-sm leading-7 text-muted">42 Network · Programming and Software Engineering · Current student</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground">OFPPT — CFPM Sidi Moumen</h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                Technicien Spécialisé en Développement Digital — Web Full
                Stack · {profile.location} · Graduated {profile.graduationYear}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
                Built a professional foundation in frontend and backend
                development, databases and application architecture using
                Laravel, React.js, JavaScript, HTML, CSS and MySQL.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground">Baccalaureate</h3>
              <p className="mt-2 text-sm leading-7 text-muted">Life and Earth Sciences (SVT) · {profile.baccalaureateYear}</p>
            </div>
          </div>
          </section>
        </SiteReveal>

        <SiteReveal direction="left">
          <section className="grid border-b border-border lg:grid-cols-[0.35fr_0.65fr]">
          <h2 className="py-10 text-3xl font-medium tracking-[-0.04em] text-foreground lg:border-r lg:border-border">
            Selected Projects
          </h2>
          <div className="lg:pl-10">
            {projects.map((project) => (
              <article key={project.id} className="border-t border-border py-7 first:border-t-0">
                <h3 className="text-base font-medium text-foreground">{project.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">{project.description}</p>
              </article>
            ))}
          </div>
          </section>
        </SiteReveal>

        <SiteReveal direction="right">
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
        </SiteReveal>

        <SiteReveal>
          <section className="grid border-t border-border lg:grid-cols-[0.35fr_0.65fr]">
          <h2 className="py-10 text-3xl font-medium tracking-[-0.04em] text-foreground lg:border-r lg:border-border">
            Languages
          </h2>
          <div className="py-10 lg:pl-10">
            <div className="grid gap-2 sm:grid-cols-[130px_1fr]">
              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-accent/70">Arabic</span>
              <span className="text-sm text-muted">Native</span>
            </div>
          </div>
          </section>
        </SiteReveal>
      </div>
    </main>
  );
}
