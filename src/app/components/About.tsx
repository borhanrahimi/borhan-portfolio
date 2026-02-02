"use client";

import { FadeInView } from "./Motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 theme-surface-2"
    >
      <div className="max-w-4xl w-full py-20">
        <FadeInView>
          <h2 className="text-4xl md:text-6xl mb-12 tracking-tight font-semibold theme-text">
            About Me
          </h2>
        </FadeInView>

        <FadeInView delay={0.06}>
          <p className="text-xl md:text-2xl leading-relaxed mb-8 theme-muted">
            I’m a computer science student who cares deeply about both sides of building
            software: clean design and solid engineering. I enjoy creating products that
            feel simple, fast, and trustworthy from the user’s first interaction.
          </p>
        </FadeInView>

        <FadeInView delay={0.12}>
          <p className="text-xl md:text-2xl leading-relaxed mb-10 theme-muted">
            I focus on writing frontend code that is structured, scalable, and easy to
            maintain, while pairing it with backend logic that holds up in real usage —
            not just demos or class assignments.
          </p>
        </FadeInView>

        {/* ✅ What I value */}
        <FadeInView delay={0.18}>
          <div className="mb-14">
            <h3 className="text-sm uppercase tracking-widest theme-muted mb-4">
              What I value
            </h3>

            <div className="flex flex-col gap-3 text-lg md:text-xl theme-muted">
              <div className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
                <p>
                  <span className="theme-text font-semibold">Clarity</span> — simple UI, readable code, and no unnecessary complexity.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
                <p>
                  <span className="theme-text font-semibold">Reliability</span> — real data flow, validation, and logic that holds up.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
                <p>
                  <span className="theme-text font-semibold">Craft</span> — performance, details, and a product feel that’s polished.
                </p>
              </div>
            </div>
          </div>
        </FadeInView>

        {/* ✅ Timeline: Past → Now → Next */}
        <FadeInView delay={0.24}>
          <div>
            <h3 className="text-sm uppercase tracking-widest theme-muted mb-6">
              Past → Now → Next
            </h3>

            <div className="space-y-6">
              <div
                className="rounded-2xl border p-6 theme-border"
                style={{ background: "var(--surface)" }}
              >
                <p className="text-xs uppercase tracking-widest theme-muted mb-2">
                  Past
                </p>
                <p className="text-lg md:text-xl theme-muted leading-relaxed">
                  Started with core CS foundations and projects that taught me how to
                  structure code, think logically, and build features step-by-step.
                </p>
              </div>

              <div
                className="rounded-2xl border p-6 theme-border"
                style={{ background: "var(--surface)" }}
              >
                <p className="text-xs uppercase tracking-widest theme-muted mb-2">
                  Now
                </p>
                <p className="text-lg md:text-xl theme-muted leading-relaxed">
                  Building modern full-stack apps with React, TypeScript, and backend APIs —
                  focusing on clean UX, maintainable architecture, and real functionality.
                </p>
              </div>

              <div
                className="rounded-2xl border p-6 theme-border"
                style={{ background: "var(--surface)" }}
              >
                <p className="text-xs uppercase tracking-widest theme-muted mb-2">
                  Next
                </p>
                <p className="text-lg md:text-xl theme-muted leading-relaxed">
                  Leveling up through internships and production-style work — shipping
                  features that users rely on, improving performance, and learning from
                  real feedback.
                </p>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
