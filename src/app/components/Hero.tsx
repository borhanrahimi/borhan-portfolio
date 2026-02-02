"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FadeIn } from "./Motion";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0); // 0..1 (0 = fully visible, 1 = leaving)

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    let raf = 0;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      /**
       * Netflix-like "leaving" progress:
       * - 0 when hero is at top of viewport
       * - 1 when you've scrolled ~1 viewport down (hero is moving away)
       */
      const raw = (0 - rect.top) / vh;
      setProgress(clamp(raw, 0, 1));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // zoom IN + fade OUT as you go to next section
  const zoom = 1 + progress * 0.22;          // 1 -> 1.22
  const fade = 1 - progress * 0.85;          // 1 -> 0.15
  const lift = progress * -60;               // slight upward drift
  const blur = progress * 2;                 // optional "depth" blur (0 -> 6px)

  return (
    <section
      ref={sectionRef as any}
      className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-24 theme-bg"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* subtle darkening as it leaves (makes Netflix zoom feel real) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: progress * 0.35,
          background:
            "radial-gradient(900px 600px at 50% 30%, rgba(0,0,0,0.28), transparent 60%)",
        }}
      />

      <div
        className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-20 relative"
        style={{
          transform: `translateY(${lift}px) scale(${zoom})`,
          opacity: fade,
          filter: `blur(${blur}px)`,
          willChange: "transform, opacity, filter",
        }}
      >
        {/* LEFT */}
        <div className="flex-1 order-2 md:order-1">
          <FadeIn delay={0.05}>
            <h1 className="text-5xl md:text-7xl mb-6 tracking-tight font-semibold theme-text">
              Hello, I&apos;m <br />
              <span className="theme-muted">Borhan Rahimi</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p className="text-xl md:text-2xl leading-relaxed max-w-xl theme-muted">
              A software engineering student focused on building clean, modern
              full-stack apps with great UI and real backend logic.
            </p>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="mt-4 text-sm md:text-base theme-muted">
              UTSA • Graduating May 2026 • Building real-world projects
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
                href="/resume.pdf"
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
                React • TypeScript
              </span>
              <span
                className="rounded-full border px-4 py-2 theme-border"
                style={{ background: "var(--surface)" }}
              >
                Node • DB • Docker
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
                src="/profile.png"
                alt="Profile"
                width={800}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
