"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import {
  FiCode,
  FiLayout,
  FiServer,
  FiDatabase,
  FiSmartphone,
  FiGlobe,
  FiArrowUpRight,
} from "react-icons/fi";

const services = [
  {
    number: "01",
    icon: <FiLayout />,
    title: "Frontend Development",
    description:
      "Creating responsive, pixel-perfect interfaces with React, Next.js, and modern CSS frameworks.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "02",
    icon: <FiServer />,
    title: "Backend Development",
    description:
      "Building scalable APIs and server-side applications with modern backend technologies.",
    skills: ["NestJS", "Node.js", "REST APIs", "Authentication"],
  },
  {
    number: "03",
    icon: <FiDatabase />,
    title: "Database Design",
    description:
      "Designing efficient relational database schemas and reliable data architectures.",
    skills: ["PostgreSQL", "Prisma", "SQL", "Database Design"],
  },
  {
    number: "04",
    icon: <FiCode />,
    title: "Full Stack Solutions",
    description:
      "Building complete applications from interface and API design to database and deployment.",
    skills: ["Next.js", "NestJS", "Docker", "Git"],
  },
  {
    number: "05",
    icon: <FiSmartphone />,
    title: "Responsive Experiences",
    description:
      "Creating interfaces that feel consistent and intuitive across desktop, tablet, and mobile.",
    skills: ["Responsive UI", "Mobile First", "UX", "Accessibility"],
  },
  {
    number: "06",
    icon: <FiGlobe />,
    title: "Web Optimization",
    description:
      "Improving application performance, accessibility, SEO, and overall user experience.",
    skills: ["SEO", "Performance", "A11y", "Optimization"],
  },
];

const ServicesSection = memo(function ServicesSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="container mx-auto ">
        {/* Top section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between border-b border-border pb-4"
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-accent" />

            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted">
              What I Do
            </span>
          </div>

          <span className="font-mono text-[9px] text-foreground/20">
            03 / SERVICES
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 border-b border-border py-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end"
        >
          <h2 className="text-[clamp(4.5rem,12vw,10rem)] font-semibold leading-[0.8] tracking-[-0.07em] text-foreground">
            SERVICES
          </h2>

          <div className="lg:pb-2">
            <span className="mb-4 block h-px w-10 bg-foreground/30" />

            <p className="max-w-sm text-sm leading-6 text-muted">
              From frontend interfaces to backend systems, I build complete
              digital products with performance, scalability and maintainability
              in mind.
            </p>
          </div>
        </motion.div>

        {/* Services */}
        <div>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
              className="
                group relative
                grid gap-6
                border-b border-border
                py-8
                transition-colors duration-500
                hover:bg-foreground
                md:grid-cols-[70px_60px_1fr]
                lg:grid-cols-[70px_70px_1fr_1fr_40px]
                lg:items-center
                lg:px-4
              "
            >
              {/* Number */}
              <div>
                <span className="font-mono text-[10px] text-accent/70 transition-colors duration-500 group-hover:text-background/35">
                  {service.number}
                </span>
              </div>

              {/* Icon */}
              <div
                className="
                  flex h-11 w-11 items-center justify-center
                  border border-border
                  text-lg text-muted
                  transition-all duration-500
                  group-hover:border-background/15
                  group-hover:bg-background
                  group-hover:text-foreground
                "
              >
                {service.icon}
              </div>

              {/* Title */}
              <div>
                <h3 className="max-w-[320px] text-xl font-medium tracking-[-0.02em] text-foreground transition-colors duration-500 group-hover:text-background sm:text-2xl">
                  {service.title}
                </h3>
              </div>

              {/* Description + Skills */}
              <div>
                <p className="max-w-md text-sm leading-6 text-muted transition-colors duration-500 group-hover:text-background/55">
                  {service.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {service.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        font-mono text-[8px] uppercase
                        tracking-[0.15em]
                        text-accent/70
                        transition-colors duration-500
                        group-hover:text-background/45
                      "
                    >
                      / {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden justify-end lg:flex">
                <FiArrowUpRight
                  size={19}
                  className="
                    text-foreground/20
                    transition-all duration-500
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-background
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-7 flex items-center justify-between">
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/20">
            Bouhcine Amezouar © 2026
          </span>

          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-foreground/10" />

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/20">
              Full Stack Development
            </span>
          </div>
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = "ServicesSection";

export default ServicesSection;
