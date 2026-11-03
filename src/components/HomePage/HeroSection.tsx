"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { portfolioYear, profile, socialLinks } from "@/data/portfolio";

const socialIcons = {
  github: <FiGithub />,
  linkedin: <FiLinkedin />,
  email: <FiMail />,
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 lg:min-h-[calc(100svh-108px)] lg:px-8 lg:pb-20 lg:pt-14">
      <div className="container relative mx-auto">
        <div className="grid border-b border-border lg:grid-cols-[0.72fr_1.28fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="border-b border-border pb-10 lg:border-b-0 lg:border-r lg:pb-12 lg:pr-12"
          >
            <div className="relative mx-auto max-w-[520px] lg:mx-0">
              <div className="group relative aspect-[3/4] overflow-hidden bg-black">
                <Image
                  src="/mee.png"
                  alt={profile.name}
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 border border-border" />
              </div>

              <div className="mt-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-foreground/20" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">
                    {profile.location} / {portfolioYear}
                  </span>
                </div>

                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/20">
                  Available
                </span>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col justify-center py-10 lg:pl-12 lg:pt-12">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="text-xs uppercase tracking-[0.25em] text-accent">
                Hello, I&apos;m
              </span>
              <div className="h-px w-10 bg-accent" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-[clamp(3.4rem,8.5vw,8.5rem)] font-medium leading-[0.79] tracking-[-0.075em]"
            >
              <span className="text-foreground">BOUHCINE</span>
              <br />
              <span className="text-foreground/20">AMEZ</span>
              <span className="text-accent">OUAR</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-9 grid gap-6 border-t border-border pt-7 sm:grid-cols-[160px_1fr]"
            >
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-foreground">
                {profile.role
                  .replace("-", " ")
                  .split(" ")
                  .slice(0, 2)
                  .join(" ")}
                <br />
                {profile.role.split(" ").at(-1)}
              </p>

              <p className="max-w-xl text-sm leading-7 text-muted sm:text-base">
                {profile.school} student building full-stack products with
                Next.js, NestJS, TypeScript, PostgreSQL and Docker.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/projects"
                className="group flex h-14 items-center justify-between gap-10 bg-accent px-6 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-85"
              >
                View Projects
                <FiArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="/resume"
                className="flex h-14 items-center justify-center border border-border px-6 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Resume
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 flex items-center gap-3"
            >
              <span className="mr-2 text-[10px] uppercase tracking-[0.2em] text-foreground/30">
                Social
              </span>

              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -3 }}
                  aria-label={social.name}
                  className="flex h-11 w-11 items-center justify-center border border-border text-muted transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
                >
                  {socialIcons[social.id]}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
