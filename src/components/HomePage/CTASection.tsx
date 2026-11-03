"use client";

import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMail,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import Link from "next/link";
import {
  portfolioStats,
  portfolioYear,
  profile,
  socialLinks,
} from "@/data/portfolio";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-0">
      <div className="container mx-auto ">

        {/* MAIN CTA */}
        <div className="border-b border-border py-12 sm:py-16 lg:py-20">
          {/* Small intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex items-center gap-4"
          >
            <div className="flex h-10 w-10 items-center justify-center border border-border">
              <FiMail size={15} className="text-muted" />
            </div>

            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-accent/70">
                Have an idea?
              </p>

              <p className="mt-1 text-xs text-muted">
                Let&apos;s turn it into something real.
              </p>
            </div>
          </motion.div>

          {/* HUGE TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              text-[clamp(4rem,11vw,9.5rem)]
              font-medium
              leading-[0.82]
              tracking-[-0.07em]
              text-foreground
            "
          >
            LET&apos;S BUILD
            <br />

            <span className="bg-gradient-to-r from-accent via-accent to-accent bg-clip-text text-transparent">SOMETHING</span>

            <br />

            TOGETHER.
          </motion.h2>

          {/* CTA ROW */}
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-xl text-sm leading-7 text-muted sm:text-base"
            >
              I&apos;m interested in new projects, collaborations and opportunities.
              If you have an idea, a project or simply want to talk about
              development, feel free to get in touch.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <Link href="/contact">
                <motion.div
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    group flex h-16
                    min-w-[200px]
                    items-center justify-between
                    gap-10
                    bg-foreground
                    px-6
                    text-sm font-semibold
                    text-background
                    transition-colors
                    hover:bg-foreground/90
                  "
                >
                  Start a Project

                  <FiArrowUpRight
                    size={18}
                    className="
                      transition-transform duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </motion.div>
              </Link>

              <Link href="/projects">
                <motion.div
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    flex h-16
                    items-center justify-center
                    border border-border
                    px-6
                    text-xs font-medium
                    uppercase
                    tracking-[0.12em]
                    text-foreground
                    transition-all
                    hover:border-foreground
                    hover:bg-foreground
                    hover:text-background
                  "
                >
                  View Projects
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* STATS + SOCIAL */}
        <div className="grid border-b border-border lg:grid-cols-[1fr_auto]">
          {/* Stats */}
          <div className="grid grid-cols-3 lg:max-w-2xl">
            {portfolioStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3 + index * 0.1,
                }}
                className={`
                  py-7
                  ${index !== portfolioStats.length - 1
                    ? "border-r border-border"
                    : ""
                  }
                  ${index !== 0 ? "pl-5 sm:pl-8" : ""}
                `}
              >
                <p className="text-2xl font-medium tracking-[-0.04em] text-foreground sm:text-3xl">
                  {stat.value}
                </p>

                <p className="mt-2 max-w-[100px] font-mono text-[7px] uppercase leading-4 tracking-[0.15em] text-accent/70 sm:text-[8px]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="
              flex items-center
              border-t border-border
              py-5
              lg:border-l
              lg:border-t-0
              lg:pl-8
            "
          >
            <span className="mr-5 font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/20">
              Connect
            </span>

            <div className="flex gap-2">
              <a
                href={socialLinks[0].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  border border-border
                  text-muted
                  transition-all duration-300
                  hover:border-foreground
                  hover:bg-foreground
                  hover:text-background
                "
              >
                <FiGithub size={15} />
              </a>

              <a
                href={socialLinks[1].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  border border-border
                  text-muted
                  transition-all duration-300
                  hover:border-foreground
                  hover:bg-foreground
                  hover:text-background
                "
              >
                <FiLinkedin size={15} />
              </a>

              <a
                href={socialLinks[2].href}
                aria-label="Email"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  border border-border
                  text-muted
                  transition-all duration-300
                  hover:border-foreground
                  hover:bg-foreground
                  hover:text-background
                "
              >
                <FiMail size={15} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* FOOT NOTE */}
        <div className="flex items-center justify-between pt-5">
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/20">
            Open to opportunities
          </span>

          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-foreground/10" />

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/20">
              {profile.location} / {portfolioYear}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
