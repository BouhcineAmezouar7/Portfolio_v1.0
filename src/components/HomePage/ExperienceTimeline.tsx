"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiBriefcase, FiCalendar } from "react-icons/fi";

const experiences = [
  {
    number: "01",
    title: "Software Engineering Student",
    company: "1337 Coding School",
    period: "2024 — Present",
    description:
      "Strengthening my engineering foundations through project-based work in systems programming, networking, web development, Docker and team collaboration.",
    achievements: [
      "Built Webserv and Inception",
      "Full-stack work on ft_transcendence",
      "Linux, networking and Docker",
    ],
    status: "Current",
  },
  {
    number: "02",
    title: "Web Full-Stack Development",
    company: "OFPPT — CFPM Sidi Moumen",
    period: "2022 — 2024",
    description:
      "Built my professional foundation in frontend development, backend development, databases and complete web application architecture in Casablanca.",
    achievements: [
      "Laravel + React.js",
      "JavaScript, HTML and CSS",
      "MySQL and application architecture",
    ],
    status: "Foundation",
  },
  {
    number: "03",
    title: "Full-Stack Developer — PFE Intern",
    company: "DM-Decore",
    period: "2 months",
    description:
      "Worked with a development team on an e-commerce application, connecting React interfaces with Laravel APIs and a MySQL database.",
    achievements: [
      "Laravel + React.js",
      "REST API integration",
      "Collaborative full-stack delivery",
    ],
    status: "Previous",
  },
  {
    number: "04",
    title: "Web Development / Database Intern",
    company: "NetoneMaroc",
    period: "4 months",
    description:
      "Managed database information and designed frontend interfaces for displaying and interacting with structured data.",
    achievements: [
      "Database management",
      "Frontend interface design",
      "Data organization",
    ],
    status: "Previous",
  },
];

export default function ExperienceTimeline() {
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
              Career Path
            </span>
          </div>

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/20">
            06 / Experience
          </span>
        </motion.div>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 border-b border-border py-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end"
        >
          <div>
            <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.25em] text-accent/70">
              Education / Experience / Journey
            </p>

            <h2 className="text-5xl font-medium leading-[0.9] tracking-[-0.055em] text-foreground sm:text-7xl lg:text-8xl">
              Career
              <br />
              <span className="text-accent/45 dark:text-accent/50">Path.</span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <div className="mb-5 h-px w-10 bg-foreground/30" />

            <p className="max-w-sm text-sm leading-7 text-muted">
              The education, professional experience and project-based learning
              that shaped the way I build digital products today.
            </p>
          </div>
        </motion.div>

        {/* EXPERIENCE LIST */}
        <div>
          {experiences.map((exp, index) => (
            <motion.article
              key={`${exp.company}-${exp.title}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="
                group
                border-b border-border
                transition-colors duration-500
                hover:bg-foreground/[0.025]
              "
            >
              <div
                className="
                  grid gap-8
                  py-10
                  lg:grid-cols-[80px_0.8fr_1.2fr]
                  lg:gap-12
                  lg:px-4
                  lg:py-14
                "
              >
                {/* NUMBER */}
                <div>
                  <div
                    className="
                      flex h-12 w-12
                      items-center justify-center
                      border border-border
                      font-mono text-[10px]
                      text-foreground/30
                      transition-all duration-500
                      group-hover:border-foreground
                      group-hover:bg-foreground
                      group-hover:text-background
                    "
                  >
                    {exp.number}
                  </div>
                </div>

                {/* ROLE */}
                <div className="flex flex-col justify-between">
                  <div>
                    {/* Status */}
                    <div className="mb-5 flex items-center gap-2">
                      {exp.status === "Current" && (
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping bg-foreground opacity-30" />

                          <span className="relative inline-flex h-1.5 w-1.5 bg-foreground" />
                        </span>
                      )}

                      <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-accent/70">
                        {exp.status}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3 className="max-w-sm text-2xl font-medium leading-tight tracking-[-0.035em] text-foreground sm:text-3xl">
                      {exp.title}
                    </h3>

                    {/* COMPANY */}
                    <div className="mt-5 flex items-center gap-3">
                      <FiBriefcase size={13} className="text-foreground/30" />

                      <span className="text-xs uppercase tracking-[0.1em] text-muted">
                        {exp.company}
                      </span>
                    </div>
                  </div>

                  {/* PERIOD */}
                  <div className="mt-8 flex items-center gap-3 lg:mt-12">
                    <FiCalendar size={12} className="text-accent/70" />

                    <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-foreground/30">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* DETAILS */}
                <div>
                  <p className="max-w-xl text-sm leading-7 text-muted">
                    {exp.description}
                  </p>

                  {/* ACHIEVEMENTS */}
                  <div className="mt-8">
                    <div className="mb-4 flex items-center gap-4">
                      <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-accent/70">
                        Key Achievements
                      </span>

                      <div className="h-px flex-1 bg-foreground/10" />
                    </div>

                    <div className="border-t border-border">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div
                          key={achievement}
                          className="
                            grid grid-cols-[35px_1fr]
                            border-b border-border
                            py-3
                          "
                        >
                          <span className="font-mono text-[8px] text-foreground/20">
                            0{achievementIndex + 1}
                          </span>

                          <span className="text-xs leading-5 text-muted sm:text-sm">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* DECORATIVE ARROW */}
                  <div className="mt-6 flex justify-end">
                    <FiArrowUpRight
                      size={17}
                      className="
                        text-foreground/15
                        transition-all duration-500
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-foreground
                      "
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-5 pt-7 sm:flex-row sm:items-center"
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-foreground/40" />

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/20">
              Professional Journey
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/20">
              {String(experiences.length).padStart(2, "0")} Positions
            </span>

            <div className="h-px w-10 bg-foreground/10" />

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/20">
              2021 — Present
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
