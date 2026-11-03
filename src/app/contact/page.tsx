"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
  FiMail,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
  FiPhone,
} from "react-icons/fi";
import {
  portfolioYear,
  profile,
  socialLinks as portfolioSocialLinks,
} from "@/data/portfolio";

const contactInfo = [
  {
    number: "01",
    icon: <FiMail />,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    number: "02",
    icon: <FiPhone />,
    label: "Phone",
    value: profile.phone,
    href: profile.phoneHref,
  },
  {
    number: "03",
    icon: <FiMapPin />,
    label: "Location",
    value: profile.location,
    href: null,
  },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: <FiGithub />,
    href: portfolioSocialLinks[0].href,
  },
  {
    name: "LinkedIn",
    icon: <FiLinkedin />,
    href: portfolioSocialLinks[1].href,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject || "Portfolio inquiry");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="relative min-h-screen overflow-hidden px-4 pb-24 pt-12 sm:px-6 lg:px-8 lg:pt-4">
      <div className="container mx-auto ">
        {/* HERO */}
        <div className="border-b border-border py-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.25em] text-accent/70">
              Have something in mind?
            </p>

            <h1 className="text-[clamp(4.5rem,13vw,11rem)] font-medium leading-[0.78] tracking-[-0.075em] text-foreground">
              LET&apos;S
              <br />
              <span className="text-foreground/20">CONNECT.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="mt-12 grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end"
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-[9px] text-foreground/20">
                07
              </span>

              <div className="h-px w-12 bg-foreground/15" />

              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/30">
                Start a conversation
              </span>
            </div>

            <p className="text-sm leading-7 text-muted">
              Have a project, an idea or an opportunity? Send me a message and
              tell me what you&apos;re working on. I&apos;m always interested in
              building something meaningful.
            </p>
          </motion.div>
        </div>

        {/* CONTACT CONTENT */}
        <div className="grid border-b border-border lg:grid-cols-[0.7fr_1.3fr]">
          {/* LEFT */}
          <motion.aside
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="border-b border-border py-10 lg:border-b-0 lg:border-r lg:pr-10"
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent/70">
              Contact Details
            </p>

            {/* CONTACT INFO */}
            <div className="mt-7 border-t border-border">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="group grid grid-cols-[35px_45px_1fr] items-center border-b border-border py-5"
                >
                  <span className="font-mono text-[8px] text-foreground/20">
                    {info.number}
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center border border-border text-sm text-muted transition-all duration-300 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                    {info.icon}
                  </div>

                  <div className="min-w-0">
                    <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-accent/70">
                      {info.label}
                    </p>

                    {info.href ? (
                      <Link
                        href={info.href}
                        className="mt-1 block truncate text-xs text-muted transition-colors hover:text-foreground sm:text-sm"
                      >
                        {info.value}
                      </Link>
                    ) : (
                      <p className="mt-1 text-xs text-muted sm:text-sm">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* AVAILABILITY */}
            <div className="mt-10">
              <div className="mb-4 flex items-center gap-3">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping bg-foreground opacity-30" />

                  <span className="relative inline-flex h-1.5 w-1.5 bg-foreground" />
                </span>

                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/35">
                  Current Status
                </span>
              </div>

              <h2 className="max-w-sm text-2xl font-medium leading-tight tracking-[-0.035em] text-foreground">
                Available for new
                <span className="text-foreground/30">
                  {" "}
                  projects & opportunities.
                </span>
              </h2>

              <p className="mt-4 max-w-sm text-xs leading-6 text-foreground/35">
                I&apos;m open to interesting projects, collaborations and
                development opportunities.
              </p>
            </div>

            {/* SOCIAL */}
            <div className="mt-12">
              <div className="mb-4 flex items-center gap-4">
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/20">
                  Social
                </span>

                <div className="h-px flex-1 bg-foreground/10" />
              </div>

              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="group flex h-11 items-center gap-3 border border-border px-4 text-muted transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
                  >
                    {social.icon}

                    <span className="font-mono text-[8px] uppercase tracking-[0.15em]">
                      {social.name}
                    </span>

                    <FiArrowUpRight
                      size={11}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>

          {/* FORM */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="py-10 lg:pl-12"
          >
            {/* FORM HEADER */}
            <div className="flex items-start justify-between border-b border-border pb-6">
              <div>
                <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-accent/70">
                  Message / 001
                </p>

                <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-foreground sm:text-4xl">
                  Tell me about
                  <br />
                  <span className="text-foreground/60">your project.</span>
                </h2>
              </div>

              <FiMail size={22} className="mt-1 text-foreground/55" />
            </div>

            <form onSubmit={handleSubmit} className="mt-8">
              {/* NAME + EMAIL */}
              <div className="grid gap-6 sm:grid-cols-2">
                {/* NAME */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-3 flex items-center justify-between"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/75">
                      Your Name
                    </span>

                    <span className="font-mono text-[9px] text-foreground/50">01</span>
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    className="
          h-14 w-full
          border border-border
          bg-foreground/[0.025]
          px-5
          text-sm text-foreground
          placeholder:text-foreground/50
          outline-none
          transition-all duration-300
          hover:border-foreground/30
          focus:border-accent
          focus:bg-accent/[0.025]
          focus:ring-2 focus:ring-accent/10
        "
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-3 flex items-center justify-between"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/75">
                      Email Address
                    </span>

                    <span className="font-mono text-[9px] text-foreground/50">02</span>
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="
          h-14 w-full
          border border-border
          bg-foreground/[0.025]
          px-5
          text-sm text-foreground
          placeholder:text-foreground/50
          outline-none
          transition-all duration-300
          hover:border-foreground/30
          focus:border-accent
          focus:bg-accent/[0.025]
          focus:ring-2 focus:ring-accent/10
        "
                  />
                </div>
              </div>

              {/* SUBJECT */}
              <div className="mt-6">
                <label
                  htmlFor="subject"
                  className="mb-3 flex items-center justify-between"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/75">
                    Subject
                  </span>

                  <span className="font-mono text-[9px] text-foreground/50">03</span>
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Project inquiry"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      subject: e.target.value,
                    }))
                  }
                  className="
        h-14 w-full
        border border-border
        bg-foreground/[0.025]
        px-5
        text-sm text-foreground
        placeholder:text-foreground/50
        outline-none
        transition-all duration-300
        hover:border-foreground/30
        focus:border-accent
        focus:bg-accent/[0.025]
        focus:ring-2 focus:ring-accent/10
      "
                />
              </div>

              {/* MESSAGE */}
              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="mb-3 flex items-center justify-between"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/75">
                    Your Message
                  </span>

                  <span className="font-mono text-[9px] text-foreground/50">04</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about your idea, project or opportunity..."
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  className="
        min-h-[180px] w-full
        resize-y
        border border-border
        bg-foreground/[0.025]
        px-5 py-4
        text-sm leading-7 text-foreground
        placeholder:text-foreground/50
        outline-none
        transition-all duration-300
        hover:border-foreground/30
        focus:border-accent
        focus:bg-accent/[0.025]
        focus:ring-2 focus:ring-accent/10
      "
                />
              </div>

              {/* SUBMIT */}
              <div className="mt-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                <p className="max-w-xs font-mono text-[9px] uppercase leading-5 tracking-[0.12em] text-foreground/60">
                  This form opens your email application with your message
                  prepared.
                </p>

                <motion.button
                  type="submit"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="
        group flex h-16 min-w-[210px]
        items-center justify-between
        gap-10
        bg-foreground px-6
        text-sm font-semibold
        text-background
        transition-opacity
        hover:opacity-85
      "
                >
                  Send Message
                  <FiSend
                    size={17}
                    className="
          transition-transform duration-300
          group-hover:translate-x-1
          group-hover:-translate-y-1
        "
                  />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col justify-between gap-4 pt-5 sm:flex-row sm:items-center"
        >
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/15">
            {profile.name} © {portfolioYear}
          </span>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/15">
              {profile.role}
            </span>

            <div className="h-px w-8 bg-foreground/10" />

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/15">
              {profile.location}
            </span>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
