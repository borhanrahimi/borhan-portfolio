"use client";

import { FadeInView, Stagger, StaggerItem } from "./Motion";

/* =========================
   DATA
   ========================= */

const experience = {
    title: "Software Engineering Student — H-E-B Digital",
    subtitle: "Quest for Texas Best (University–Industry Project)",
    dateLocation: "2025 – Present | San Antonio, TX",
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
        "Integrated frontend workflows with REST APIs built using FastAPI",
        "Worked with PostgreSQL through SQLAlchemy for data persistence and data modeling",
        "Used Docker to standardize development environments and reduce setup friction",
        "Followed Agile workflows using GitLab merge requests, Jira task tracking, and team communication",
        "Validated API behavior using Postman and supported automated testing workflows with pytest",
    ],
};

const projects = [
    {
        title: "MYGROCERY — Full-Stack Web Application",
        tech: ["React", "Node.js", "MongoDB", "Stripe", "REST"],
        bullets: [
            "Built a full-stack grocery e-commerce platform with authentication, cart, and checkout",
            "Designed REST APIs and integrated Stripe for real payment processing",
            "Persisted orders and user data using MongoDB",
            "Focused on clean, user-friendly UI inspired by real consumer apps",
        ],
        github: "https://github.com/borhanrahimi/mygrocery",
    },
    {
        title: "UTSA Student Course Planner",
        tech: ["React", "Node.js", "MySQL", "APIs", "CSV"],
        bullets: [
            "Developed a course planning platform for browsing courses and building schedules",
            "Designed backend APIs and relational database schema using MySQL",
            "Implemented CSV data ingestion and admin tooling",
        ],
        github: "https://github.com/borhanrahimi/student-course-planner",
    },
    {
        title: "PicPick — Android Photo Management App",
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
                    <StaggerItem>
                        <Card>
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight theme-text">
                                        {experience.title}
                                    </h3>
                                    <p className="mt-2 theme-muted">{experience.subtitle}</p>
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
