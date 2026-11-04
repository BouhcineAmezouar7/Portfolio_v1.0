"use client";

import { useState, type CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiMysql,
  SiCss,
  SiHtml5,
  SiLaravel,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiRabbitmq,
  SiLinux,
} from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";
import type { IconType } from "react-icons";

type Category =
  | "All"
  | "Frontend"
  | "Backend"
  | "Languages"
  | "Database"
  | "Tools";

type Skill = {
  name: string;
  icon: IconType;
  category: Exclude<Category, "All">;
  description: string;
};

const skills: Skill[] = [
  {
    name: "React",
    icon: SiReact,
    category: "Frontend",
    description: "UI library",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    category: "Frontend",
    description: "React framework",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "Languages",
    description: "Typed JavaScript",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    category: "Languages",
    description: "Programming language",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "Frontend",
    description: "Utility-first CSS",
  },
  {
    name: "NestJS",
    icon: SiNestjs,
    category: "Backend",
    description: "Node.js framework",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    category: "Database",
    description: "Relational database",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    category: "Database",
    description: "Database ORM",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    category: "Database",
    description: "Relational database",
  },
  {
    name: "Docker",
    icon: SiDocker,
    category: "Tools",
    description: "Containerization",
  },
  {
    name: "Git",
    icon: SiGit,
    category: "Tools",
    description: "Version control",
  },
  {
    name: "Laravel",
    icon: SiLaravel,
    category: "Backend",
    description: "PHP framework",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    category: "Backend",
    description: "JavaScript runtime",
  },
  {
    name: "RabbitMQ",
    icon: SiRabbitmq,
    category: "Tools",
    description: "Message broker",
  },
  {
    name: "Linux",
    icon: SiLinux,
    category: "Tools",
    description: "Development environment",
  },
  {
    name: "HTML5",
    icon: SiHtml5,
    category: "Frontend",
    description: "Markup language",
  },
  {
    name: "CSS3",
    icon: SiCss,
    category: "Frontend",
    description: "Styling language",
  },
];

const skillColors: Record<string, { light: string; dark: string }> = {
  React: { light: "#087ea4", dark: "#61dafb" },
  "Next.js": { light: "#111827", dark: "#f8fafc" },
  TypeScript: { light: "#3178c6", dark: "#60a5d8" },
  JavaScript: { light: "#b38f00", dark: "#f7df1e" },
  "Tailwind CSS": { light: "#0891b2", dark: "#38bdf8" },
  NestJS: { light: "#d91a4d", dark: "#f0446e" },
  PostgreSQL: { light: "#336791", dark: "#74a6cf" },
  Prisma: { light: "#2d3748", dark: "#d7dde5" },
  MySQL: { light: "#006f8c", dark: "#4db8d1" },
  Docker: { light: "#1473e6", dark: "#60aef5" },
  Git: { light: "#e44d2e", dark: "#ff765b" },
  Laravel: { light: "#e6291e", dark: "#ff6b63" },
  "Node.js": { light: "#3c873a", dark: "#72b95f" },
  RabbitMQ: { light: "#e85d00", dark: "#ff8a3d" },
  Linux: { light: "#3b4252", dark: "#facc15" },
  HTML5: { light: "#d94820", dark: "#ff704d" },
  CSS3: { light: "#1565b5", dark: "#58a6e7" },
};

const categories: Category[] = [
  "All",
  "Frontend",
  "Backend",
  "Languages",
  "Database",
  "Tools",
];

const categoryCounts = categories.reduce(
  (counts, category) => {
    counts[category] =
      category === "All"
        ? skills.length
        : skills.filter((skill) => skill.category === category).length;

    return counts;
  },
  {} as Record<Category, number>,
);

/* ----------------------------------
   SKILL CARD
----------------------------------- */

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const Icon = skill.icon;
  const colors = skillColors[skill.name] ?? {
    light: "var(--accent)",
    dark: "var(--accent)",
  };
  const colorVariables = {
    "--skill-light": colors.light,
    "--skill-dark": colors.dark,
  } as CSSProperties;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      exit={{ opacity: 0, y: -10, scale: 0.97 }}
      transition={{
        duration: 0.35,
        delay: Math.min(index * 0.025, 0.2),
      }}
      style={colorVariables}
      className="skill-card group relative flex min-h-[205px] flex-col justify-between overflow-hidden border border-border bg-background p-5 transition-colors duration-300 sm:min-h-[230px] sm:p-6"
    >
      {/* BACKGROUND ICON */}
      <div className="skill-icon-wash pointer-events-none absolute -bottom-7 -right-6 text-[130px] opacity-[0.055] transition-transform duration-700 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:rotate-[-12deg]">
        <Icon />
      </div>

      {/* CARD HEADER */}
      <div className="relative z-10 flex items-start justify-between">
        <span className="font-mono text-[10px] tracking-[0.15em] text-muted">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="skill-card-arrow flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-all duration-300">
          <FiArrowUpRight size={14} />
        </div>
      </div>

      {/* MAIN ICON */}
      <div className="relative z-10 flex flex-1 items-center">
        <motion.div
          whileHover={{ rotate: -8, scale: 1.12 }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 18,
          }}
          className="skill-icon text-[44px] transition-colors duration-300 sm:text-[52px]"
        >
          <Icon />
        </motion.div>
      </div>

      {/* CARD FOOTER */}
      <div className="relative z-10 border-t border-border pt-4 transition-colors duration-300">
        <div className="flex items-end justify-between gap-2">
          <div className="min-w-0">
            <h3 className="text-base font-medium tracking-[-0.03em] text-foreground sm:text-lg">
              {skill.name}
            </h3>

            <p className="mt-1 text-[11px] text-muted">{skill.description}</p>
          </div>

          <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
            {skill.category}
          </span>
        </div>
      </div>

      {/* HOVER ACCENT LINE */}
      <div className="skill-accent absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
}

/* ----------------------------------
   CATEGORY FILTERS
----------------------------------- */

function CategoryFilters({
  activeCategory,
  onCategoryChange,
}: {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}) {
  return (
    <div className="mb-8 border-b border-border">
      {/* FILTER HEADER */}
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.17em] text-muted">
          Filter technologies
        </span>

        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
          Select category
        </span>
      </div>

      {/* FILTER NAVIGATION */}
      <div
        role="group"
        aria-label="Filter skills by category"
        className="flex items-center gap-6 overflow-x-auto"
      >
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              aria-pressed={isActive}
              className={`group relative flex shrink-0 items-center gap-2 whitespace-nowrap pb-5 pt-2 font-mono text-[11px] transition-colors duration-300 ${
                isActive
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {/* CATEGORY NAME */}
              <span>{category}</span>

              {/* CATEGORY COUNT */}
              <span
                className={`text-[9px] transition-colors duration-300 ${
                  isActive
                    ? "text-accent"
                    : "text-muted/50 group-hover:text-foreground/60"
                }`}
              >
                {String(categoryCounts[category]).padStart(2, "0")}
              </span>

              {/* ANIMATED UNDERLINE */}
              {isActive && (
                <motion.span
                  layoutId="active-skill-underline"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 32,
                  }}
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ----------------------------------
   MAIN SKILLS SHOWCASE
----------------------------------- */

export default function SkillsShowcase() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="container mx-auto">
        {/* TOP SECTION LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center justify-between border-b border-border pb-5"
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-accent" />

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              Technical toolkit
            </span>
          </div>

          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
            03 / Skills
          </span>
        </motion.div>

        {/* FULL-WIDTH HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 border-b border-border pb-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
        >
          <div>
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              Skills / Tools
            </p>
            <h2 className="home-section-title">
              SKILLS &amp;
              <br />
              <span className="text-accent">TECHNOLOGIES.</span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <div className="mb-6 h-px w-12 bg-accent" />
            <p className="max-w-md text-sm leading-7 text-muted">
              A focused toolkit for building reliable interfaces, backend
              services, data layers, and production-ready applications.
            </p>
          </div>
        </motion.div>

        {/* FILTER + GRID BELOW HEADER */}
        <div className="min-w-0 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
          >
            <CategoryFilters
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-2 gap-2 sm:gap-3 xl:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
              Always learning. Always building.
            </span>

            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-border" />
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                Showing {filteredSkills.length} of {skills.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}