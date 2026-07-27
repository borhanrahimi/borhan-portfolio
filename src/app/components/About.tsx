const values = [
  {
    title: "Clarity",
    text: "Useful dashboards, understandable interfaces, and readable code.",
  },
  {
    title: "Reliability",
    text: "Systems that are observable, predictable, and easier to troubleshoot.",
  },
  {
    title: "Craft",
    text: "Careful engineering, strong collaboration, and polished user experiences.",
  },
];

const timeline = [
  {
    label: "Foundation",
    text: "Developed a strong computer science foundation at UTSA while building full-stack, database, and Android projects.",
  },
  {
    label: "Collaboration",
    text: "Worked with H-E-B Digital in a production-style university partnership using React, TypeScript, FastAPI, PostgreSQL, and Agile workflows.",
  },
  {
    label: "Today",
    text: "Supporting Costco IT’s Observability Platform Engineering team with Dynatrace, DQL, dashboards, monitoring, automation, and reliability work.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 theme-surface-2"
    >
      <div className="max-w-4xl w-full py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-6xl tracking-tight font-semibold theme-text">
              About Me
            </h2>
            <p className="mt-3 text-sm md:text-base theme-muted">
              Computer Science, UTSA • Costco IT • Platform & full-stack engineering
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="/Borhan_Rahimi_RESUME.pdf"
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

        <p className="text-xl md:text-2xl leading-relaxed mb-7 theme-muted">
          I’m a software engineer with experience across observability platforms and
          full-stack development. I enjoy turning complex systems into clear,
          actionable information and building software that teams can trust.
        </p>

        <p className="text-xl md:text-2xl leading-relaxed mb-12 theme-muted">
          My current work centers on enterprise monitoring and operational visibility,
          while my project background spans responsive interfaces, REST APIs,
          authentication, payments, and relational and document databases.
        </p>

        <div
          aria-hidden="true"
          className="h-px w-full mb-12"
          style={{ background: "var(--border)" }}
        />

        <div className="mb-14">
          <h3 className="text-sm uppercase tracking-widest theme-muted mb-5">
            What I value
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border p-6 theme-border"
                style={{ background: "var(--surface)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    aria-hidden="true"
                    className="inline-block h-2 w-2 rounded-full"
                    style={{ background: "var(--accent)" }}
                  />
                  <h4 className="theme-text font-semibold text-base md:text-lg">
                    {value.title}
                  </h4>
                </div>
                <p className="text-base md:text-lg theme-muted leading-relaxed">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-widest theme-muted mb-6">
            My path
          </h3>

          <div className="space-y-6">
            {timeline.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border p-6 theme-border"
                style={{ background: "var(--surface)" }}
              >
                <h4 className="text-xs uppercase tracking-widest theme-muted mb-2">
                  {item.label}
                </h4>
                <p className="text-lg md:text-xl theme-muted leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
