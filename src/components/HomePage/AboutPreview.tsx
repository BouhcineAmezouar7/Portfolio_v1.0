"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
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

            <h2 className="home-section-title max-w-3xl">
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
                <span className="text-muted">
                  {" "}A full-stack developer who turns complex requirements
                  into focused, dependable products.
                </span>
              </h3>

              {/* PARAGRAPHS */}
              <div className="mt-8 space-y-5">
                <p className="text-sm leading-8 text-muted sm:text-base">
                  I like owning the full path from product decisions and
                  interface structure to the systems that make an application
                  reliable behind the scenes.
                </p>

                <p className="text-sm leading-8 text-muted sm:text-base">
                  My approach is practical: understand the problem, keep the
                  architecture clear, and deliver an experience that feels
                  considered at every screen size.
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
