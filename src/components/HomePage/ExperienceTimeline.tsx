
"use client";

import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiBriefcase,
  FiCheck,
} from "react-icons/fi";

import { experiences } from "@/data/portfolio";
import { revealUp, siteEase as homeEase, siteViewport as homeViewport } from "@/lib/site-motion";

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="container mx-auto">

        {/* SECTION HEADER */}
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={homeViewport}
          className="flex items-center justify-between border-b border-border pb-5"
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-accent" />

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              Career / Experience
            </span>
          </div>

          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
            05 / Experience
          </span>
        </motion.div>

        {/* MAIN HEADING */}
        <div className="grid gap-10 border-b border-border py-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:py-16">
          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={homeViewport}
          >
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              My Professional Journey
            </p>

            <h2 className="home-section-title">
              EXPERIENCE
              <br />
              <span className="text-accent">
                & GROWTH.
              </span>
            </h2>
          </motion.div>

          <motion.p
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={homeViewport}
            transition={{ delay: 0.12 }}
            className="max-w-md text-sm leading-7 text-muted"
          >
            A journey of learning, collaboration, and
            building real-world applications through
            education and professional experience.
          </motion.p>
        </div>

        {/* EXPERIENCE LIST */}
        <div className="relative">

          {/* TABLE HEADER */}
          <div className="hidden grid-cols-[180px_1fr_120px] gap-8 border-b border-border py-5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted lg:grid">
            <span>Period</span>
            <span>Experience / Organization</span>
            <span className="text-right">Status</span>
          </div>

          {/* ENTRIES */}
          {experiences.map((exp, index) => {
            const isCurrent = exp.status === "Current";

            return (
              <motion.article
                key={`${exp.company}-${exp.title}-${index}`}
                initial={{ opacity: 0, y: 48, x: index % 2 === 0 ? -18 : 18, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
                viewport={homeViewport}
                transition={{
                  duration: 0.78,
                  delay: index * 0.1,
                  ease: homeEase,
                }}
                className="group relative border-b border-border transition-colors duration-300 hover:bg-foreground/[0.025]"
              >
                <div className="grid gap-6 py-9 lg:grid-cols-[180px_1fr_120px] lg:gap-8 lg:px-4 lg:py-10">

                  {/* DATE */}
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
                      {exp.period}
                    </span>

                    <span className="mt-3 block font-mono text-[9px] uppercase tracking-[0.15em] text-muted">
                      {exp.number ||
                        String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* MAIN DETAILS */}
                  <div className="min-w-0">

                    {/* COMPANY */}
                    <div className="mb-3 flex items-center gap-3">
                      <FiBriefcase
                        size={15}
                        className="shrink-0 text-accent"
                      />

                      <span className="text-sm font-medium text-muted">
                        {exp.company}
                      </span>
                    </div>

                    {/* ROLE */}
                    <h3 className="text-2xl font-medium leading-tight tracking-[-0.045em] text-foreground transition-colors duration-300 group-hover:text-accent sm:text-3xl">
                      {exp.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-muted">
                      {exp.description}
                    </p>

                    {/* ACHIEVEMENTS */}
                    {exp.achievements.length > 0 && (
                      <div className="mt-6 flex flex-col gap-3">
                        {exp.achievements.map(
                          (achievement, achievementIndex) => (
                            <div
                              key={`${achievementIndex}-${achievement}`}
                              className="flex items-start gap-3"
                            >
                              <FiCheck
                                size={14}
                                className="mt-1 shrink-0 text-accent"
                              />

                              <span className="max-w-xl text-[13px] leading-6 text-muted">
                                {achievement}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>

                  {/* STATUS */}
                  <div className="flex items-start lg:justify-end">
                    <span
                      className={`inline-flex items-center gap-2 border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.1em] ${
                        isCurrent
                          ? "border-accent/40 text-accent"
                          : "border-border text-muted"
                      }`}
                    >
                      {isCurrent && (
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      )}

                      {exp.status}
                    </span>
                  </div>
                </div>

                {/* HOVER LINE */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM NOTE */}
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={homeViewport}
          className="mt-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-center"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center border border-border text-accent">
              <FiArrowRight size={18} />
            </span>

            <div>
              <p className="text-sm font-medium text-foreground">
                The journey continues.
              </p>

              <p className="mt-1 text-xs text-muted">
                Learning, building, and improving every day.
              </p>
            </div>
          </div>

          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
            {String(experiences.length).padStart(2, "0")} Milestones
          </span>
        </motion.div>
      </div>
    </section>
  );
}
