"use client";

import { useMemo } from "react";

export default function Footer() {
    const year = useMemo(() => new Date().getFullYear(), []);

    return (
        <footer className="py-12 px-6 md:px-12 border-t theme-bg theme-border">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="theme-muted">
                    © {year} Borhan Rahimi. All rights reserved.
                </p>

                <div className="flex gap-6 text-sm">
                    <a
                        href="#"
                        className="theme-muted hover:opacity-80 transition-opacity"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/borhanrahimi"
                        target="_blank"
                        rel="noreferrer"
                        className="theme-muted hover:opacity-80 transition-opacity"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}
