"use client";

import { FadeInView } from "./Motion";

const sections = [
  {
    title: "Programming Languages",
    description: "Core languages used across frontend, backend, and systems.",
    items: ["TypeScript", "JavaScript", "Python", "Java", "C", "CSS"],
  },
  {
    title: "Frontend",
    description: "Clean UI, responsive layouts, and maintainable components.",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Responsive UI",
      "State Management",
      "Accessibility Basics",
    ],
  },
  {
    title: "Backend",
    description: "APIs and business logic designed for real usage.",
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "CRUD APIs",
      "Auth / JWT",
      "Input Validation",
      "Error Handling",
    ],
  },
  {
    title: "Databases",
    description: "Data modeling, querying, and storage decisions.",
    items: [
      "MySQL",
      "MongoDB",
      "NoSQL",
      "Schema Design",
      "SQL Queries",
      "Relationships & Joins",
      "Indexing Basics",
    ],
  },
  {
    title: "Systems & OS",
    description: "Foundational systems knowledge and command-line workflows.",
    items: [
      "Linux (CLI)",
      "Bash / Shell",
      "File Permissions",
      "Processes & Signals",
      "Environment Variables",
      "Networking Basics",
    ],
  },
  {
    title: "Architecture & Design",
    description: "Structuring codebases for clarity, scale, and maintainability.",
    items: [
      "MVC (Model–View–Controller)",
      "Separation of Concerns",
      "Layered Architecture",
      "UML Diagrams (Class / Sequence)",
      "Code Organization",
    ],
  },
  {
    title: "DevOps & Tools",
    description: "Workflow, collaboration, and shipping-ready tooling.",
    items: [
      "Docker",
      "Docker Compose",
      "Git / GitHub",
      "Jira",
      "AWS (Foundations)",
      "Environment Config (.env)",
      "VS Code",
      "Postman",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 theme-surface-2"
    >
      <div className="w-full max-w-6xl py-20">
        {/* Title */}
        <FadeInView>
          <h2 className="mb-10 text-4xl md:text-6xl font-semibold tracking-tight theme-text">
            Skills & Expertise
          </h2>
        </FadeInView>

        {/* Hint row */}
        <FadeInView delay={0.08}>
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm theme-muted">Scroll to explore categories</p>
            <p className="hidden md:block text-sm theme-muted">→</p>
          </div>

          {/* Horizontal scroll */}
          <div
            className="flex gap-6 overflow-x-auto pb-4"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollSnapType: "x mandatory",
            }}
          >
            {sections.map((section) => (
              <div
                key={section.title}
                className="min-w-[280px] sm:min-w-[340px] md:min-w-[380px] rounded-2xl border p-6 theme-border"
                style={{
                  background: "var(--surface)",
                  scrollSnapAlign: "start",
                }}
              >
                <h3 className="mb-2 text-2xl font-semibold tracking-tight theme-text">
                  {section.title}
                </h3>

                <p className="mb-6 text-sm theme-muted">
                  {section.description}
                </p>

                <ul className="flex flex-wrap gap-2">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border px-3 py-1 text-sm font-medium theme-chip"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
