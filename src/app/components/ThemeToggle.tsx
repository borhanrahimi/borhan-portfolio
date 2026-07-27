"use client";

import { useEffect, useRef, useState } from "react";

type Theme = "classic" | "neon";

const themes: Record<
  Theme,
  { label: string; subtitle: string; color: string }
> = {
  classic: {
    label: "Classic",
    subtitle: "Light and minimal",
    color: "#ffffff",
  },
  neon: {
    label: "Neon",
    subtitle: "Dark with green accents",
    color: "#1db954",
  },
};

function applyTheme(theme: Theme) {
  if (theme === "neon") {
    document.documentElement.setAttribute("data-theme", "neon");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("classic");
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("site-theme");
    const initialTheme: Theme = saved === "neon" ? "neon" : "classic";
    const frame = requestAnimationFrame(() => {
      setTheme(initialTheme);
      applyTheme(initialTheme);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    function closeMenu(event: MouseEvent) {
      if (
        wrapRef.current &&
        !wrapRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", closeMenu);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeMenu);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  function selectTheme(nextTheme: Theme) {
    setTheme(nextTheme);
    applyTheme(nextTheme);
    localStorage.setItem("site-theme", nextTheme);
    setOpen(false);
  }

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold theme-border theme-text"
        style={{ background: "var(--surface)" }}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Select color theme. Current theme: ${themes[theme].label}`}
      >
        <span
          aria-hidden="true"
          className="h-3 w-3 rounded-full border theme-border"
          style={{ background: themes[theme].color }}
        />
        <span className="hidden md:inline">{themes[theme].label}</span>
        <span aria-hidden="true">▾</span>
      </button>

      {open && (
        <div
          className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-xl border p-1 shadow-xl theme-border"
          style={{ background: "var(--surface)" }}
          role="menu"
          aria-label="Color theme"
        >
          {(Object.keys(themes) as Theme[]).map((themeKey) => {
            const option = themes[themeKey];
            const active = themeKey === theme;

            return (
              <button
                key={themeKey}
                type="button"
                onClick={() => selectTheme(themeKey)}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left hover:opacity-80 theme-text"
                style={{
                  background: active ? "var(--surface-2)" : "transparent",
                }}
                role="menuitemradio"
                aria-checked={active}
              >
                <span
                  aria-hidden="true"
                  className="h-4 w-4 rounded-full border theme-border"
                  style={{ background: option.color }}
                />
                <span className="flex-1">
                  <span className="block font-semibold">{option.label}</span>
                  <span className="block text-xs theme-muted">
                    {option.subtitle}
                  </span>
                </span>
                {active && <span aria-hidden="true">✓</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
