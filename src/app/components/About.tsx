"use client";

import { FadeInView } from "./Motion";

const values = [
  {
    title: "Clarity",
    text: "Simple UI, readable code, and no unnecessary complexity.",
  },
  {
    title: "Reliability",
    text: "Real data flow, validation, and logic that holds up.",
  },
  {
    title: "Craft",
    text: "Performance, details, and a polished product feel.",
  },
];

const timeline = [
  {
    label: "Past",
    text: "Built strong CS fundamentals through coursework and projects that taught me how to structure code, think logically, and ship features step-by-step.",
  },
  {
    label: "Now",
    text: "Building full-stack apps with React + TypeScript and backend APIs—focused on clean UX, maintainable architecture, and real functionality (not just demos).",
  },
  {
    label: "Next",
    text: "Leveling up through internships and production-style work—shipping features users rely on, improving performance, and learning from real feedback.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 theme-surface-2"
    >
      <div className="max-w-4xl w-full py-20">
        {/* Title + quick CTA */}
        <FadeInView>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-4xl md:text-6xl tracking-tight font-semibold theme-text">
                About Me
              </h2>
              <p className="mt-3 text-sm md:text-base theme-muted">
                CS @ UTSA • Graduating May 2026 • Full-stack focused
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href="/Borhan_Rahimi_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm md:text-base font-semibold border theme-border theme-text"
                style={{ background: "var(--surface)" }}
              >
                View Resume
              </a>

              <a
                href="https://github.com/borhanrahimi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm md:text-base font-semibold border theme-border theme-text"
                style={{ background: "var(--surface)" }}
              >
                GitHub
              </a>
            </div>
          </div>
        </FadeInView>

        {/* Intro */}
        <FadeInView delay={0.06}>
          <p className="text-xl md:text-2xl leading-relaxed mb-7 theme-muted">
            I’m a computer science student who cares about both sides of building software:
            clean design and solid engineering. I like shipping products that feel simple,
            fast, and trustworthy from the first interaction.
          </p>
        </FadeInView>

        <FadeInView delay={0.12}>
          <p className="text-xl md:text-2xl leading-relaxed mb-12 theme-muted">
            My focus is building structured frontend systems and pairing them with backend
            logic that holds up in real usage—clear state, clean APIs, and predictable data flow.
          </p>
        </FadeInView>

        {/* Subtle divider */}
        <FadeInView delay={0.14}>
          <div
            className="h-px w-full mb-12"
            style={{ background: "var(--border)" }}
          />
        </FadeInView>

        {/* What I value */}
        <FadeInView delay={0.18}>
          <div className="mb-14">
            <h3 className="text-sm uppercase tracking-widest theme-muted mb-5">
              What I value
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border p-6 theme-border"
                  style={{ background: "var(--surface)" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                    <p className="theme-text font-semibold text-base md:text-lg">
                      {v.title}
                    </p>
                  </div>
                  <p className="text-base md:text-lg theme-muted leading-relaxed">
                    {v.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeInView>

        {/* Past → Now → Next */}
        <FadeInView delay={0.24}>
          <div>
            <h3 className="text-sm uppercase tracking-widest theme-muted mb-6">
              Past → Now → Next
            </h3>

            <div className="space-y-6">
              {timeline.map((t) => (
                <div
                  key={t.label}
                  className="rounded-2xl border p-6 theme-border"
                  style={{ background: "var(--surface)" }}
                >
                  <p className="text-xs uppercase tracking-widest theme-muted mb-2">
                    {t.label}
                  </p>
                  <p className="text-lg md:text-xl theme-muted leading-relaxed">
                    {t.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
