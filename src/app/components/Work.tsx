"use client";

import Image from "next/image";
import { FadeInView, Stagger, StaggerItem } from "./Motion";

/* =========================
   DATA
   ========================= */

const experiences = [
    {
        title: "Observability Platform Engineering Intern — Costco IT",
        subtitle: "Enterprise Observability & Monitoring",
        dateLocation: "Jun 2026 – Present | Issaquah, WA",
        logo: "/logos/costco.svg",
        logoAlt: "Costco Wholesale logo",
        tech: [
            "Dynatrace",
            "DQL",
            "Dashboards",
            "Notebooks",
            "Observability",
            "Monitoring",
            "Automation",
            "Docker",
        ],
        bullets: [
            "Support the Observability Platform Engineering team in building and maintaining enterprise monitoring and observability solutions across Costco IT",
            "Use Dynatrace to monitor application performance, infrastructure health, logs, distributed traces, and business events",
            "Develop and enhance dashboards, notebooks, and DQL queries to improve operational visibility and troubleshooting",
            "Collaborate on platform automation, integrations, and performance investigations that improve operational efficiency and system reliability",
        ],
    },
    {
        title: "Software Engineering Student — H-E-B Digital",
        subtitle: "Quest for Texas Best (University–Industry Project)",
        dateLocation: "Aug 2025 – May 2026 | San Antonio, TX",
        logo: "/logos/heb.svg",
        logoAlt: "H-E-B logo",
        tech: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "FastAPI",
            "PostgreSQL",
            "SQLAlchemy",
            "Docker",
            "GitLab",
            "Jira",
            "Slack",
            "Postman",
            "pytest",
        ],
        bullets: [
            "Collaborated with H-E-B Digital in a production-style, course-based software engineering environment",
            "Built and refined frontend features using React and TypeScript with reusable component patterns",
            "Integrated REST APIs built with FastAPI and modeled PostgreSQL data through SQLAlchemy",
            "Used Docker, GitLab merge requests, Jira, Postman, and pytest in an Agile team workflow",
        ],
    },
];

const projects = [
    {
        title: "MYGROCERY — Full-Stack Web Application",
        mark: "MG",
        category: "E-commerce Platform",
        accent: "#22c55e",
        tech: ["React", "Express", "MongoDB", "Stripe", "REST"],
        bullets: [
            "Built authentication, product filtering, cart, delivery, discount, and order-history workflows",
            "Designed Express REST APIs and persisted user, product, and order data in MongoDB Atlas",
            "Integrated Stripe checkout with detailed tax, discount, delivery, and total calculations",
        ],
        github: "https://github.com/borhanrahimi/mygrocery",
    },
    {
        title: "UTSA Student Course Planner",
        mark: "CP",
        category: "Academic Planning",
        accent: "#3b82f6",
        tech: ["React", "TypeScript", "Node.js", "MySQL", "JWT"],
        bullets: [
            "Developed course catalog, section browsing, authentication, and student planning workflows",
            "Built Express APIs with JWT authentication and role-based student and admin routes",
            "Designed a relational MySQL model for courses, sections, terms, instructors, and meetings",
        ],
        github: "https://github.com/borhanrahimi/student-course-planner",
    },
    {
        title: "PicPick — Android Photo Management App",
        mark: "PP",
        category: "Android Application",
        accent: "#a855f7",
        tech: ["Java", "Android", "MVC", "File I/O"],
        bullets: [
            "Developed an Android app to organize photos into Keep / Trash / Skip workflows",
            "Applied MVC architecture and file I/O for local image management",
            "Designed scrollable layouts and modular activities for usability",
        ],
        github: "https://github.com/borhanrahimi/PicPick",
    },
];

/* =========================
   UI PIECES
   ========================= */

function SectionHeader({
    title,
    subtitle,
}: {
    title: string;
    subtitle?: string;
}) {
    return (
        <div className="text-center">
            <div className="inline-flex items-center justify-center gap-3">
                <span className="h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight theme-text">
                    {title}
                </h2>
                <span className="h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
            </div>

            {subtitle && (
                <p className="mt-4 text-base md:text-lg theme-muted max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}

            <div className="mt-6 flex justify-center">
                <div
                    className="h-[3px] w-40 rounded-full opacity-90"
                    style={{ background: "var(--accent)" }}
                />
            </div>
        </div>
    );
}

function BulletList({ items }: { items: string[] }) {
    return (
        <ul className="mt-6 space-y-4">
            {items.map((text, i) => (
                <li key={i} className="flex gap-3">
                    <span
                        className="mt-[10px] h-[6px] w-[6px] rounded-full flex-shrink-0 opacity-80"
                        style={{ background: "var(--text)" }}
                    />
                    <span className="leading-relaxed theme-muted">{text}</span>
                </li>
            ))}
        </ul>
    );
}

function TechChips({ items }: { items: string[] }) {
    return (
        <div className="mt-5 flex flex-wrap gap-2">
            {items.map((t) => (
                <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-semibold border theme-border"
                    style={{
                        background: "color-mix(in oklab, var(--surface) 85%, transparent)",
                        color: "var(--text)",
                    }}
                >
                    {t}
                </span>
            ))}
        </div>
    );
}

function ProjectVisual({
    mark,
    category,
    accent,
}: {
    mark: string;
    category: string;
    accent: string;
}) {
    return (
        <div
            className="mb-7 flex min-h-36 items-end justify-between overflow-hidden rounded-xl border p-5 theme-border"
            style={{
                background: `linear-gradient(135deg, color-mix(in oklab, ${accent} 22%, var(--surface)), var(--surface))`,
            }}
        >
            <span
                className="flex h-16 w-16 items-center justify-center rounded-2xl text-xl font-black text-white shadow-lg"
                style={{ background: accent }}
                aria-hidden="true"
            >
                {mark}
            </span>
            <span className="rounded-full border theme-border px-3 py-1 text-xs font-semibold theme-text">
                {category}
            </span>
        </div>
    );
}

function Card({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="rounded-2xl border theme-border p-8 md:p-10 transition-all duration-300 hover:-translate-y-1"
            style={{
                background:
                    "linear-gradient(180deg, color-mix(in oklab, var(--surface) 92%, transparent), color-mix(in oklab, var(--surface) 75%, transparent))",
                boxShadow:
                    "0 20px 60px color-mix(in oklab, var(--text) 10%, transparent)",
            }}
        >
            {children}
        </div>
    );
}

function GhostButton({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold border theme-border transition-all duration-200 hover:opacity-95 hover:-translate-y-[1px]"
            style={{
                background: "color-mix(in oklab, var(--surface) 85%, transparent)",
                color: "var(--text)",
            }}
        >
            {children}
        </a>
    );
}

/* =========================
   PAGE
   ========================= */

export default function Work() {
    return (
        <section
            id="work"
            className="min-h-screen flex items-center justify-center px-6 md:px-12 theme-bg"
        >
            <div className="max-w-6xl w-full py-20 space-y-24">
                {/* EXPERIENCE */}
                <FadeInView>
                    <SectionHeader
                        title="EXPERIENCE"
                        subtitle="Real-world collaboration, production-style workflows, and team-based development."
                    />
                </FadeInView>

                <Stagger className="grid grid-cols-1 gap-12">
                    {experiences.map((experience) => (
                        <StaggerItem key={experience.title}>
                            <Card>
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                                    <div className="flex items-start gap-4">
                                        <div
                                            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border theme-border p-2"
                                            style={{
                                                background:
                                                    "color-mix(in oklab, white 96%, var(--surface))",
                                            }}
                                        >
                                            <Image
                                                src={experience.logo}
                                                alt={experience.logoAlt}
                                                width={48}
                                                height={36}
                                                className="h-auto max-h-9 w-full object-contain"
                                            />
                                        </div>

                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight theme-text">
                                                {experience.title}
                                            </h3>
                                            <p className="mt-2 theme-muted">
                                                {experience.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className="inline-flex self-start px-4 py-2 rounded-full text-sm border theme-border"
                                        style={{
                                            background:
                                                "color-mix(in oklab, var(--surface) 85%, transparent)",
                                            color: "var(--text)",
                                        }}
                                    >
                                        {experience.dateLocation}
                                    </div>
                                </div>

                                <TechChips items={experience.tech} />
                                <BulletList items={experience.bullets} />
                            </Card>
                        </StaggerItem>
                    ))}
                </Stagger>

                {/* PROJECTS */}
                <FadeInView>
                    <SectionHeader
                        title="PROJECTS"
                        subtitle="A few things I’ve built — full-stack apps, clean UI, and real features that ship."
                    />
                </FadeInView>

                <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project) => (
                        <StaggerItem key={project.title}>
                            <Card>
                                <ProjectVisual
                                    mark={project.mark}
                                    category={project.category}
                                    accent={project.accent}
                                />
                                <h3 className="text-xl md:text-2xl font-extrabold tracking-tight theme-text">
                                    {project.title}
                                </h3>

                                <TechChips items={project.tech} />
                                <BulletList items={project.bullets} />

                                <div className="mt-8">
                                    <GhostButton href={project.github}>
                                        View on GitHub →
                                    </GhostButton>
                                </div>
                            </Card>
                        </StaggerItem>
                    ))}
                </Stagger>
            </div>
        </section>
    );
}
