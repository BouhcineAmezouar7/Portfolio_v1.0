import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft, FiDownload, FiExternalLink } from "react-icons/fi";

import SiteReveal from "@/components/SiteReveal";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${profile.name} — Resume`,
  description: `View or download the resume of ${profile.name}.`,
};

export default function ResumePage() {
  return (
    <main className="min-h-screen px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pt-14">
      <div className="container mx-auto">
        <SiteReveal>
          <div className="flex flex-col gap-6 border-b border-border pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Link
                href="/"
                className="group mb-6 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent"
              >
                <FiArrowLeft
                  aria-hidden="true"
                  className="transition-transform group-hover:-translate-x-1"
                />
                Back Home
              </Link>

              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                Curriculum Vitae / PDF
              </p>
              <h1 className="mt-4 text-[clamp(2.5rem,7vw,6rem)] font-medium uppercase leading-[0.88] tracking-[-0.065em] text-foreground">
                My Resume<span className="text-accent">.</span>
              </h1>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-13 items-center justify-between gap-7 border border-border px-5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Open in Browser
                <FiExternalLink
                  aria-hidden="true"
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href={profile.resumePath}
                download="Bouhcine_Amezouar_Resume.pdf"
                className="group inline-flex h-13 items-center justify-between gap-7 bg-accent px-5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-85"
              >
                Download PDF
                <FiDownload
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </SiteReveal>

        <SiteReveal delay={0.08}>
          <section className="mt-7 overflow-hidden border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-5">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-accent" />
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-foreground">
                  {profile.name} / Resume
                </span>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                PDF Document
              </span>
            </div>

            <object
              data={`${profile.resumePath}#view=FitH&toolbar=1&navpanes=0`}
              type="application/pdf"
              aria-label={`${profile.name} resume PDF`}
              className="h-[72svh] min-h-[620px] w-full bg-white"
            >
              <div className="flex min-h-[620px] flex-col items-center justify-center px-6 text-center">
                <p className="max-w-md text-sm leading-7 text-muted">
                  Your browser cannot display the PDF inside this page. Open it
                  in a new browser tab or download it to your computer.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <a
                    href={profile.resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center gap-3 border border-border px-5 text-sm font-medium text-foreground"
                  >
                    Open PDF <FiExternalLink aria-hidden="true" />
                  </a>
                  <a
                    href={profile.resumePath}
                    download="Bouhcine_Amezouar_Resume.pdf"
                    className="inline-flex h-12 items-center gap-3 bg-accent px-5 text-sm font-semibold text-accent-foreground"
                  >
                    Download PDF <FiDownload aria-hidden="true" />
                  </a>
                </div>
              </div>
            </object>
          </section>
        </SiteReveal>
      </div>
    </main>
  );
}
