"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const stats = [
  { value: "1337", label: "Coding School" },
  { value: "2024", label: "OFPPT Graduate" },
  { value: "06", label: "Months Interning" },
];

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="container mx-auto ">

        {/* SECTION TOP */}
        <div className="mb-10 flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 bg-accent" />

            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
              About
            </span>
          </div>

          <span className="font-mono text-[10px] text-foreground/20">
            02 / 05
          </span>
        </div>

        {/* HUGE TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border-b border-border pb-8"
        >
          <h2
            className="
              text-[clamp(5rem,16vw,13rem)]
              font-semibold
              leading-[0.78]
              tracking-[-0.08em]
              text-foreground
            "
          >
            ABOUT
          </h2>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid border-b border-border lg:grid-cols-[0.7fr_1.3fr]">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              border-b border-border
              py-10
              lg:border-b-0
              lg:border-r
              lg:pr-12
            "
          >
            {/* Portrait */}
            <div className="relative max-w-[320px]">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-accent/70">
                  Portrait
                </span>

                <span className="font-mono text-[8px] text-foreground/20">
                  001
                </span>
              </div>

              <div className="group relative aspect-[3/4] overflow-hidden bg-black">
                <Image
                  src="/me.png"
                  alt="Bouhcine Amezouar"
                  fill
                  quality={90}
                  sizes="320px"
                  className="
                    object-cover
                    grayscale
                    transition-all
                    duration-700
                    group-hover:scale-[1.03]
                   
                  "
                />

                <div className="absolute inset-0 border border-border" />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5 pt-16">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-on-image/80">
                    Full Stack Developer
                  </p>
                </div>
              </div>

              {/* Image caption */}
              <div className="mt-4 flex items-center gap-3">
                <div className="h-px w-8 bg-foreground/20" />

                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">
                  Morocco / 2026
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="py-10 lg:pl-14">

            {/* INTRO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/30">
                Who am I?
              </p>

              <h3
                className="
                  max-w-3xl
                  text-3xl
                  font-medium
                  leading-[1.15]
                  tracking-[-0.035em]
                  text-foreground
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                I build products end-to-end
                <span className="text-foreground/30">
                  {" "}from data models to user interfaces.
                </span>
              </h3>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <p className="text-sm leading-7 text-muted">
                  I&apos;m Bouhcine, a Full-Stack Developer and student at 1337
                  Coding School in Morocco. I started with Laravel and React
                  and now work primarily with Next.js and NestJS.
                </p>

                <p className="text-sm leading-7 text-muted">
                  I enjoy working across the stack—from responsive interfaces
                  and REST APIs to database design, scheduling logic,
                  microservices and containerized infrastructure.
                </p>
              </div>
            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="
                mt-12 grid
                grid-cols-3
                border-y border-border
              "
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`
                    py-6
                    ${index !== stats.length - 1
                      ? "border-r border-border"
                      : ""
                    }
                    ${index !== 0 ? "pl-5 sm:pl-7" : ""}
                  `}
                >
                  <p className="text-2xl font-medium text-foreground sm:text-3xl lg:text-4xl">
                    {stat.value}
                  </p>

                  <p className="mt-2 max-w-[100px] font-mono text-[8px] uppercase leading-4 tracking-[0.15em] text-foreground/30">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex items-center gap-6"
            >
              <Link
                href="/about"
                className="
                  group flex h-14
                  items-center gap-10
                  bg-foreground
                  px-6
                  text-sm font-medium
                  text-background
                  transition-all
                  hover:bg-foreground/90
                "
              >
                Explore My Story

                <FiArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </Link>

              <span className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/20 sm:block">
                More about
                <br />
                my journey
              </span>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM MARQUEE-LIKE LINE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="
            flex items-center
            gap-5
            overflow-hidden
            border-b border-border
            py-5
          "
        >
          <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/20">
            Design
          </span>

          <span className="text-foreground/15">✦</span>

          <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/20">
            Development
          </span>

          <span className="text-foreground/15">✦</span>

          <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/20">
            Frontend
          </span>

          <span className="text-foreground/15">✦</span>

          <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/20">
            Backend
          </span>

          <span className="text-foreground/15">✦</span>

          <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/20">
            Problem Solving
          </span>

          <div className="h-px min-w-20 flex-1 bg-foreground/10" />
        </motion.div>
      </div>
    </section>
  );
}
