"use client";

import { FadeInView } from "./Motion";

export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center px-6 md:px-12 theme-bg"
        >
            <div className="max-w-4xl w-full py-20 text-center">
                <FadeInView>
                    <h2 className="text-4xl md:text-6xl mb-8 tracking-tight font-semibold theme-text">
                        Let&apos;s Work Together
                    </h2>
                </FadeInView>

                <FadeInView delay={0.08}>
                    <p className="text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl mx-auto theme-muted">
                        I’m always interested in internships, collaborations, and building
                        ambitious products.
                    </p>
                </FadeInView>

                <FadeInView delay={0.14}>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center items-center">
                        {/* Email */}
                        <a
                            href="mailto:rahimi.borhan2000@gmail.com"
                            className="px-8 py-4 rounded-full transition-colors font-semibold"
                            style={{ background: "var(--accent)", color: "#fff" }}
                        >
                            Email Me
                        </a>

                        {/* Resume */}
                        <a
                            href="/Borhan_Rahimi_RESUME.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 border rounded-full transition-colors font-semibold theme-border"
                            style={{ background: "var(--surface)", color: "var(--text)" }}
                        >
                            Resume
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/borhanrahimi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 border rounded-full transition-colors font-semibold theme-border"
                            style={{ background: "var(--surface)", color: "var(--text)" }}
                        >
                            LinkedIn
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/borhanrahimi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 border rounded-full transition-colors font-semibold theme-border"
                            style={{ background: "var(--surface)", color: "var(--text)" }}
                        >
                            GitHub
                        </a>
                    </div>
                </FadeInView>
            </div>
        </section>
    );
}
