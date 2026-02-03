"use client";

import { FadeInView, Stagger, StaggerItem } from "./Motion";

const experience = {
    title: "Software Engineering Student — H-E-B Digital",
    subtitle: "Quest for Texas Best (University-Industry Project)",
    dateLocation: "2025 – Present | San Antonio, TX",
    bullets: [
        "Course-based software engineering project in collaboration with H-E-B Digital",
        "Built and refined frontend features using React and TypeScript",
        "Contributed to backend APIs using FastAPI and PostgreSQL",
        "Used Docker for containerized development and consistent local environments",
        "Worked in Agile workflows using Git, GitLab, Jira, and Slack",
    ],
};

const projects = [
    {
        title: "MYGROCERY — Full-Stack Web Application",
        meta: "React • Node.js • MongoDB • Stripe • REST APIs",
        bullets: [
            "Built a full-stack grocery e-commerce platform with authentication, cart, and checkout",
            "Designed REST APIs and integrated Stripe for real payment processing",
            "Stored orders and user data using MongoDB",
            "Focused on clean, user-friendly UI inspired by real consumer apps",
        ],
        github: "https://github.com/borhanrahimi/mygrocery",
    },
    {
        title: "UTSA Student Course Planner",
        meta: "React • Node.js • MySQL",
        bullets: [
            "Built a course planning platform for browsing courses and building schedules",
            "Designed backend APIs and relational database schema",
            "Implemented CSV data ingestion and admin tools",
        ],
        github: "https://github.com/borhanrahimi/student-course-planner",
    },
    {
        title: "PicPick — Android Photo Management App",
        meta: "Java • Android • MVC Architecture",
        bullets: [
            "Developed an Android app to organize photos into Keep / Trash / Skip workflows",
            "Applied MVC architecture and file I/O for local image management",
            "Designed scrollable layouts and modular activities for usability",
        ],
        github: "https://github.com/borhanrahimi/PicPick",
    },
];

function SectionHeader({ title }: { title: string }) {
    return (
        <div className="text-center mb-14">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight theme-text">
                {title}
            </h2>
            <div className="mt-4 flex justify-center">
                <div
                    className="h-2 w-44 rounded-sm"
                    style={{ background: "var(--accent)" }}
                />
            </div>
        </div>
    );
}

function BulletList({ items }: { items: string[] }) {
    return (
        <ul className="mt-6 space-y-4">
            {items.map((text) => (
                <li key={text} className="flex gap-3">
                    <span
                        className="mt-2 h-2 w-2 rounded-full flex-shrink-0"
                        style={{ background: "var(--text)" }}
                    />
                    <span className="leading-relaxed theme-muted">{text}</span>
                </li>
            ))}
        </ul>
    );
}

function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="rounded-2xl border theme-border theme-surface p-8 md:p-10">
            {children}
        </div>
    );
}

export default function Work() {
    return (
        <section
            id="work"
            className="min-h-screen flex items-center justify-center px-6 md:px-12 theme-bg"
        >
            <div className="max-w-6xl w-full py-20 space-y-24">

                {/* EXPERIENCE */}
                <FadeInView>
                    <SectionHeader title="EXPERIENCE" />
                </FadeInView>

                <FadeInView>
                    <Card>
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight theme-text">
                            {experience.title}
                        </h3>

                        <p className="mt-2 theme-muted">{experience.subtitle}</p>

                        <p className="mt-1 text-sm theme-muted">
                            {experience.dateLocation}
                        </p>

                        <BulletList items={experience.bullets} />
                    </Card>
                </FadeInView>

                {/* PROJECTS */}
                <FadeInView>
                    <SectionHeader title="PROJECTS" />
                </FadeInView>

                <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project) => (
                        <StaggerItem key={project.title}>
                            <Card>
                                <h3 className="text-xl md:text-2xl font-extrabold tracking-tight theme-text">
                                    {project.title}
                                </h3>

                                <p className="mt-2 text-sm theme-muted tracking-wide">
                                    {project.meta}
                                </p>

                                <BulletList items={project.bullets} />

                                <div className="mt-8">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-block px-6 py-2.5 border rounded-full text-sm font-semibold theme-border transition-colors"
                                        style={{
                                            background: "var(--surface)",
                                            color: "var(--text)",
                                        }}
                                    >
                                        View on GitHub
                                    </a>
                                </div>
                            </Card>
                        </StaggerItem>
                    ))}
                </Stagger>
            </div>
        </section>
    );
}
