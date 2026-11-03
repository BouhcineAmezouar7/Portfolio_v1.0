"use client";

import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMail,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import Link from "next/link";
import { socialLinks } from "@/data/portfolio";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between border-b border-border pb-5">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-accent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              Contact
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
            06 / Contact
          </span>
        </div>

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
            className="home-section-title"
          >
            LET&apos;S BUILD
            <br />

            <span className="text-accent">SOMETHING</span>

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

        {/* SOCIAL LINKS */}
        <div className="border-b border-border">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-between py-5"
          >
            <span className="mr-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
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
        <div className="pt-5">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
            Open to opportunities
          </span>
        </div>
      </div>
    </section>
  );
}
