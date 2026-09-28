"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MyImage() {
  return (
    <div
      className="
        relative flex h-full w-full
        min-h-[390px]
        items-center justify-center
        sm:min-h-[430px]
        lg:min-h-[500px]
      "
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.4,
            delay: 1.5,
            ease: "easeIn",
          },
        }}
        className="
          relative flex h-full w-full
          max-h-[390px] max-w-[390px]
          items-center justify-center
          sm:max-h-[430px] sm:max-w-[430px]
          lg:max-h-[500px] lg:max-w-[500px]
          xl:max-h-[700px] xl:max-w-[700px]
        "
      >
        {/* =========================
            COSMIC RINGS
        ========================== */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="
              absolute rounded-full
              border border-accent/15
            "
            style={{
              width: `${170 + i * 35}px`,
              height: `${170 + i * 35}px`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, i % 2 === 0 ? 360 : -360],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* =========================
            ORBITING POINTS
        ========================== */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="
              absolute
              h-1 w-1
              rounded-full
              bg-accent
              sm:h-1.5 sm:w-1.5
            "
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 15 + (i % 5) * 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              top: "50%",
              left: "50%",
              transformOrigin: `${70 + (i % 3) * 25}px ${Math.sin(i) * 35}px`,
            }}
          >
            <motion.div
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              className="
                h-full w-full
                rounded-full
                bg-accent
                shadow-[0_0_8px_color-mix(in_srgb,var(--accent)_45%,transparent)]
                dark:shadow-[0_0_8px_color-mix(in_srgb,var(--accent)_55%,transparent)]
              "
            />
          </motion.div>
        ))}

        {/* =========================
            PORTAL GLOW
        ========================== */}
        <motion.svg
          className="
            absolute
            h-[300px] w-[300px]
            sm:h-[350px] sm:w-[350px]
            lg:h-[400px] lg:w-[400px]
            xl:h-[500px] xl:w-[500px]
          "
          viewBox="0 0 100 100"
        >
          <defs>
            {/* LIGHT MODE */}
            <radialGradient id="portalGradientLight">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.16" />

              <stop offset="45%" stopColor="var(--accent)" stopOpacity="0.08" />

              <stop offset="75%" stopColor="var(--accent)" stopOpacity="0.03" />

              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </radialGradient>

            {/* DARK MODE */}
            <radialGradient id="portalGradientDark">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.2" />

              <stop offset="45%" stopColor="var(--accent)" stopOpacity="0.1" />

              <stop offset="75%" stopColor="var(--accent)" stopOpacity="0.04" />

              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* LIGHT MODE PORTAL */}
          <motion.circle
            cx="50"
            cy="50"
            r="48"
            fill="url(#portalGradientLight)"
            className="dark:hidden"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* DARK MODE PORTAL */}
          <motion.circle
            cx="50"
            cy="50"
            r="48"
            fill="url(#portalGradientDark)"
            className="hidden dark:block"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.svg>

        {/* =========================
            SPIRAL LINES
        ========================== */}
        <motion.svg
          className="
            absolute h-full w-full
            max-h-[330px] max-w-[330px]
            sm:max-h-[380px] sm:max-w-[380px]
            lg:max-h-[430px] lg:max-w-[430px]
            xl:max-h-[550px] xl:max-w-[550px]
          "
          viewBox="0 0 100 100"
        >
          {[...Array(3)].map((_, i) => (
            <motion.path
              key={i}
              d="M 50 50 Q 75 25 90 50 T 50 90 T 10 50 T 50 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.25"
              opacity={0.2 - i * 0.04}
              className="text-accent"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20 - i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                transformOrigin: "50% 50%",
              }}
            />
          ))}
        </motion.svg>

        {/* =========================
            OUTER TECH MARKERS
        ========================== */}
        <div
          className="
            pointer-events-none absolute
            h-[88%] w-[88%]
            sm:h-[85%] sm:w-[85%]
            lg:h-[80%] lg:w-[80%]
          "
        >
          <span
            className="
              absolute left-0 top-0
              h-4 w-4
              border-l border-t
              border-accent/40
            "
          />

          <span
            className="
              absolute right-0 top-0
              h-4 w-4
              border-r border-t
              border-accent/40
            "
          />

          <span
            className="
              absolute bottom-0 left-0
              h-4 w-4
              border-b border-l
              border-accent/40
            "
          />

          <span
            className="
              absolute bottom-0 right-0
              h-4 w-4
              border-b border-r
              border-accent/40
            "
          />
        </div>

        {/* =========================
            PROFILE IMAGE
        ========================== */}
        <div className="relative flex items-center justify-center">
          {/* Background circle / glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 1,
                delay: 1.8,
                ease: "easeOut",
              },
            }}
            className="
      absolute
      h-[230px] w-[230px]
      rounded-full
      border border-accent/20
      bg-accent/[0.04]
      sm:h-[270px] sm:w-[270px]
      lg:h-[310px] lg:w-[310px]
      xl:h-[390px] xl:w-[390px]
    "
            style={{
              boxShadow:
                "0 0 100px color-mix(in srgb, var(--accent) 16%, transparent)",
            }}
          />

          {/* Ripple */}
          <motion.div
            className="
      absolute
      h-[230px] w-[230px]
      rounded-full
      border border-accent/40
      sm:h-[270px] sm:w-[270px]
      lg:h-[310px] lg:w-[310px]
      xl:h-[390px] xl:w-[390px]
    "
            animate={{
              scale: [1, 1.18, 1.18],
              opacity: [0.6, 0, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />

          {/* PNG PERSON */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 2,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="
      relative z-10
      h-[340px] w-[280px]
      sm:h-[390px] sm:w-[320px]
      lg:h-[440px] lg:w-[360px]
      xl:h-[570px] xl:w-[470px]
    "
          >
            <Image
              src="/me4.png"
              alt="Bouhcine Amezouar"
              priority
              fill
              quality={100}
              sizes="
        (max-width: 640px) 280px,
        (max-width: 1024px) 320px,
        (max-width: 1280px) 360px,
        470px
      "
              className="
        object-contain
        object-bottom
        contrast-[1.03]
        drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)]
        transition-all
        duration-700
      "
            />
          </motion.div>
        </div>

        {/* =========================
            SMALL TECH LABEL
        ========================== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 3,
            duration: 0.5,
          }}
          className="
            absolute
            bottom-1 right-2
            hidden items-center gap-3
            sm:flex
            lg:bottom-0 lg:right-0
          "
        >
          <div className="h-px w-7 bg-accent/50" />

          <span
            className="
              font-mono
              text-[7px]
              uppercase
              tracking-[0.2em]
              text-accent/50
            "
          >
            BA / 001
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
