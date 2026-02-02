"use client";

import { useEffect, useMemo, useState } from "react";
import { FadeIn } from "./Motion";
import ThemeToggle from "./ThemeToggle";

type NavItem = { label: string; href: string; id: string };

export default function Navbar() {
    const navItems: NavItem[] = useMemo(
        () => [
            { label: "About", href: "#about", id: "about" },
            { label: "Work", href: "#work", id: "work" },
            { label: "Skills", href: "#skills", id: "skills" },
            { label: "Contact", href: "#contact", id: "contact" },
        ],
        []
    );

    const [activeId, setActiveId] = useState<string>("about");
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const sections = navItems
            .map((i) => document.getElementById(i.id))
            .filter(Boolean) as HTMLElement[];

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                // choose the most visible section
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

                if (visible?.target?.id) setActiveId(visible.target.id);
            },
            {
                root: null,
                // helps active state change a bit earlier/later while scrolling
                rootMargin: "-30% 0px -60% 0px",
                threshold: [0.1, 0.25, 0.5, 0.75],
            }
        );

        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, [navItems]);

    // Close mobile menu on hash change (when clicking links)
    useEffect(() => {
        const onHash = () => setMobileOpen(false);
        window.addEventListener("hashchange", onHash);
        return () => window.removeEventListener("hashchange", onHash);
    }, []);

    return (
        <FadeIn>
            {/* Skip link for accessibility */}
            <a
                href="#content"
                className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[60] focus:rounded-full focus:bg-[var(--surface)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--text)] focus:shadow-lg"
            >
                Skip to content
            </a>

            <header className="fixed left-0 right-0 top-0 z-50">
                <div className="mx-auto max-w-6xl px-6">
                    <div
                        className={[
                            "mt-4 flex items-center justify-between rounded-full border px-4 py-3",
                            "backdrop-blur supports-[backdrop-filter]:bg-[color-mix(in_srgb,var(--surface)_75%,transparent)]",
                            "bg-[color-mix(in_srgb,var(--surface)_85%,transparent)]",
                            "border-[var(--border)] shadow-[0_10px_30px_rgba(0,0,0,0.12)]",
                        ].join(" ")}
                    >
                        {/* Brand */}
                        <a
                            href="#"
                            className="group inline-flex items-center gap-2 rounded-full px-2 py-1 text-sm font-semibold text-[var(--text)] outline-none transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
                            aria-label="Go to top"
                            onClick={() => setMobileOpen(false)}
                        >
                            <span className="relative">
                                Borhan Rahimi
                                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
                            </span>
                        </a>

                        {/* Desktop nav */}
                        <nav className="hidden items-center gap-2 text-sm sm:flex" aria-label="Primary">
                            {navItems.map((item) => {
                                const isActive = activeId === item.id;
                                return (
                                    <a
                                        key={item.id}
                                        href={item.href}
                                        aria-current={isActive ? "page" : undefined}
                                        className={[
                                            "rounded-full px-3 py-2 outline-none transition",
                                            "text-[var(--muted)] hover:text-[var(--text)] hover:bg-[color-mix(in_srgb,var(--surface)_60%,transparent)]",
                                            "focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]",
                                            isActive
                                                ? "text-[var(--text)] bg-[color-mix(in_srgb,var(--surface)_70%,transparent)]"
                                                : "",
                                        ].join(" ")}
                                    >
                                        {item.label}
                                    </a>
                                );
                            })}
                        </nav>

                        {/* Actions */}
                        <div className="flex items-center gap-2">
                            <a
                                href="#contact"
                                className="hidden rounded-full px-4 py-2 text-sm font-semibold text-white outline-none transition hover:opacity-95 focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] sm:inline-flex"
                                style={{ background: "var(--accent)" }}
                            >
                                Let’s talk
                            </a>

                            <ThemeToggle />

                            {/* Mobile menu button */}
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_80%,transparent)] px-3 py-2 text-sm text-[var(--text)] outline-none transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] sm:hidden"
                                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                                aria-expanded={mobileOpen}
                                onClick={() => setMobileOpen((v) => !v)}
                            >
                                {mobileOpen ? "✕" : "☰"}
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu panel */}
                    {mobileOpen && (
                        <div className="mt-3 sm:hidden">
                            <div className="rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_85%,transparent)] p-3 backdrop-blur shadow-[0_20px_40px_rgba(0,0,0,0.18)]">
                                <nav className="flex flex-col gap-1" aria-label="Mobile Primary">
                                    {navItems.map((item) => {
                                        const isActive = activeId === item.id;
                                        return (
                                            <a
                                                key={item.id}
                                                href={item.href}
                                                aria-current={isActive ? "page" : undefined}
                                                className={[
                                                    "rounded-xl px-3 py-2 text-sm outline-none transition",
                                                    "text-[var(--muted)] hover:text-[var(--text)] hover:bg-[color-mix(in_srgb,var(--surface)_60%,transparent)]",
                                                    "focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]",
                                                    isActive ? "text-[var(--text)] bg-[color-mix(in_srgb,var(--surface)_70%,transparent)]" : "",
                                                ].join(" ")}
                                                onClick={() => setMobileOpen(false)}
                                            >
                                                {item.label}
                                            </a>
                                        );
                                    })}
                                    <a
                                        href="#contact"
                                        className="mt-2 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white transition hover:opacity-95"
                                        style={{ background: "var(--accent)" }}
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        Let’s talk
                                    </a>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </FadeIn>
    );
}
