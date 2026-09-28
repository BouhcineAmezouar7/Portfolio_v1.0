"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiGit,
  SiDocker,
  SiSqlite,
  SiMysql,
  SiFigma,
  SiCss,
  SiHtml5,
  SiLaravel,
  SiPython,
  SiSupabase,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <SiReact />, category: "Frontend" },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    category: "Language",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    category: "Language",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    category: "Styling",
  },
  {
    name: "NestJS",
    icon: <SiNestjs />,
    category: "Backend",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    category: "Database",
  },
  {
    name: "Prisma",
    icon: <SiPrisma />,
    category: "ORM",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    category: "Database",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    category: "Database",
  },
  {
    name: "SQLite",
    icon: <SiSqlite />,
    category: "Database",
  },
  {
    name: "Docker",
    icon: <SiDocker />,
    category: "DevOps",
  },
  {
    name: "Git",
    icon: <SiGit />,
    category: "Tools",
  },
  {
    name: "Laravel",
    icon: <SiLaravel />,
    category: "Backend",
  },
  {
    name: "Python",
    icon: <SiPython />,
    category: "Language",
  },
  {
    name: "Supabase",
    icon: <SiSupabase />,
    category: "Backend",
  },
  {
    name: "HTML5",
    icon: <SiHtml5 />,
    category: "Frontend",
  },
  {
    name: "CSS3",
    icon: <SiCss />,
    category: "Frontend",
  },
  {
    name: "Figma",
    icon: <SiFigma />,
    category: "Design",
  },
];

export default function SkillsShowcase() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="container mx-auto ">

        {/* Top */}
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
              Technologies
            </span>
          </div>

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/20">
            04 / Stack
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 border-b border-border py-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end"
        >
          <div>
            <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.25em] text-accent/70">
              My toolkit
            </p>

            <h2 className="text-5xl font-medium leading-[0.95] tracking-[-0.05em] text-foreground sm:text-6xl lg:text-7xl">
              Tools I use to
              <br />

              <span className="text-accent/70">
                build products.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <div className="mb-5 h-px w-10 bg-foreground/30" />

            <p className="max-w-sm text-sm leading-7 text-muted">
              A collection of languages, frameworks, databases and tools I use
              to design and develop modern web applications.
            </p>
          </div>
        </motion.div>

        {/* Skills grid */}
        <div
          className="
            grid
            grid-cols-2
            border-l border-border
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
          "
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: index * 0.025,
              }}
              whileHover={{
                y: -5,
              }}
              className="
                group relative
                min-h-[180px]
                cursor-default
                overflow-hidden
                border-b border-r border-border
                p-5
                transition-colors duration-500
                hover:bg-foreground
                sm:min-h-[200px]
                sm:p-6
              "
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[8px] text-foreground/20 transition-colors duration-500 group-hover:text-background/30">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-foreground/20 transition-colors duration-500 group-hover:text-background/30">
                  {skill.category}
                </span>
              </div>

              {/* Icon */}
              <div className="flex h-[100px] items-center sm:h-[115px]">
                <motion.div
                  className="
                    text-4xl
                    text-muted
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:text-background
                    sm:text-5xl
                  "
                  whileHover={{
                    rotate: -5,
                  }}
                >
                  {skill.icon}
                </motion.div>
              </div>

              {/* Name */}
              <div className="flex items-end justify-between border-t border-border pt-3 transition-colors duration-500 group-hover:border-background/10">
                <span className="text-xs font-medium text-muted transition-colors duration-500 group-hover:text-background">
                  {skill.name}
                </span>

                <span className="font-mono text-[8px] text-foreground/15 transition-colors duration-500 group-hover:text-background/25">
                  /
                </span>
              </div>

              {/* Hover accent */}
              <div
                className="
                  absolute bottom-0 left-0
                  h-[2px] w-0
                  bg-foreground
                  transition-all duration-500
                  group-hover:bg-background
                  group-hover:w-full
                "
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom info */}
        <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/20">
            Always learning / Always building
          </span>

          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-foreground/10" />

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/20">
              {skills.length} Technologies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
