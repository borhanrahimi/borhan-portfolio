"use client";

import Image from "next/image";
import { FadeIn } from "./Motion";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-24 theme-bg"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-20 relative">
        {/* LEFT */}
        <div className="flex-1 order-2 md:order-1">
          <FadeIn delay={0.05}>
            <h1 className="text-5xl md:text-7xl mb-6 tracking-tight font-semibold theme-text">
              Hello, I&apos;m{" "}
              <span className="theme-muted">Borhan Rahimi</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p className="text-xl md:text-2xl leading-relaxed max-w-xl theme-muted">
              Observability Platform Engineering intern at Costco IT, focused on
              reliable systems, operational visibility, and thoughtful software.
            </p>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="mt-4 text-sm md:text-base theme-muted">
              Dynatrace • DQL • Monitoring • Full-stack engineering
            </p>
          </FadeIn>

          <FadeIn delay={0.18}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#work"
                className="px-8 py-4 rounded-full font-semibold transition-colors"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                View Work
              </a>

              <a
                href="/Borhan_Rahimi_RESUME.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 border rounded-full font-semibold transition-colors theme-border"
                style={{ background: "var(--surface)", color: "var(--text)" }}
              >
                View Resume
              </a>

              <a
                href="https://github.com/borhanrahimi"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 border rounded-full font-semibold transition-colors theme-border"
                style={{ background: "var(--surface)", color: "var(--text)" }}
              >
                GitHub
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.24}>
            <div className="mt-10 flex flex-wrap gap-2 text-sm theme-muted">
              <span
                className="rounded-full border px-4 py-2 theme-border"
                style={{ background: "var(--surface)" }}
              >
                UTSA • May 2026
              </span>
              <span
                className="rounded-full border px-4 py-2 theme-border"
                style={{ background: "var(--surface)" }}
              >
                Costco IT • Observability
              </span>
              <span
                className="rounded-full border px-4 py-2 theme-border"
                style={{ background: "var(--surface)" }}
              >
                React • TypeScript • Docker
              </span>
            </div>
          </FadeIn>
        </div>

        {/* RIGHT */}
        <div className="flex-1 order-1 md:order-2 flex justify-center">
          <FadeIn delay={0.10}>
            <div
              className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border"
              style={{
                background: "var(--surface-2)",
                borderColor: "var(--border)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.18)",
              }}
            >
              <Image
                src="/Profile.png"
                alt="Portrait of Borhan Rahimi"
                width={800}
                height={800}
                className="w-full h-full object-cover"
                priority
                unoptimized
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
