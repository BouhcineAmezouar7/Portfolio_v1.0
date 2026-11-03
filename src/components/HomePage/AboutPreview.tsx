"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { profile } from "@/data/portfolio";

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-0"
    >
      <div className="container mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-12 flex items-center justify-between border-b border-border pb-5">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 bg-accent" />

            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-foreground">
              About Me
            </span>
          </div>

          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
            02 / About
          </span>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* LEFT — BIG TYPOGRAPHY */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              A little about me
            </p>

            <h2 className="max-w-3xl text-[clamp(3rem,6vw,7rem)] font-semibold leading-[0.98] tracking-[-0.07em] text-foreground">
              I BUILD
              <br />
              PRODUCTS
              <br />
              <span className="text-accent">END TO END.</span>
            </h2>

            <div className="mt-10 max-w-md border-l-2 border-accent pl-5">
              <p className="text-sm leading-7 text-muted sm:text-base">
                From the first idea to the final implementation, I enjoy turning
                complex problems into clean, functional digital products.
              </p>
            </div>
          </motion.div>

          {/* RIGHT — BIOGRAPHY */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col justify-between"
          >
            <div>
              {/* SMALL LABEL */}
              <div className="mb-7 flex items-center gap-3">
                <div className="h-px w-8 bg-accent" />

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  The Developer Behind The Code
                </span>
              </div>

              {/* INTRO */}
              <h3 className="max-w-xl text-2xl font-medium leading-[1.35] tracking-[-0.035em] text-foreground sm:text-3xl lg:text-4xl">
                Hey, I&apos;m {profile.firstName}.
                <span className="text-foreground/40">
                  {" "}
                  A full-stack developer passionate about building meaningful
                  software.
                </span>
              </h3>

              {/* PARAGRAPHS */}
              <div className="mt-8 space-y-5">
                <p className="text-sm leading-8 text-muted sm:text-base">
                  I&apos;m currently studying at{" "}
                  <span className="font-medium text-foreground">
                    {profile.school}
                  </span>
                  , part of the 42 Network. My journey began with Laravel and
                  React, and today I focus on Next.js, NestJS, TypeScript, and
                  PostgreSQL.
                </p>

                <p className="text-sm leading-8 text-muted sm:text-base">
                  I enjoy working across the entire development process — from
                  responsive interfaces and REST APIs to database design,
                  authentication, microservices, and infrastructure.
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/about"
                className="group mt-9 inline-flex h-13 w-fit items-center gap-8 bg-accent px-6 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:opacity-85"
              >
                More About Me
                <FiArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

            {/* BOTTOM DETAIL */}
            <div className="mt-12 flex items-center justify-between border-t border-border pt-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                Based in {profile.location}
              </span>

              <FiArrowRight size={18} className="text-accent" />
            </div>
          </motion.div>
        </div>

        {/* BOTTOM LINE */}
        <div className="mt-14 flex items-center justify-between gap-4 border-t border-border pt-5">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
            Always Learning. Always Building.
          </span>
        </div>
      </div>
    </section>
  );
}
