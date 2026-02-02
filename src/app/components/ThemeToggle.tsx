"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Theme = "apple" | "spotify";

function getSavedTheme(): Theme {
  if (typeof window === "undefined") return "apple";
  return (localStorage.getItem("theme") as Theme) || "apple";
}

function applyTheme(theme: Theme) {
  if (theme === "spotify") {
    document.documentElement.setAttribute("data-theme", "spotify");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
}

/* deterministic random */
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Drop = {
  id: number;
  size: number;
  dx: number;
  dy: number;
  delay: number;
  duration: number;
  opacity: number;
};

function makeDrops(seed: number, count = 140): Drop[] {
  const rand = mulberry32(seed);
  const drops: Drop[] = [];

  for (let i = 0; i < count; i++) {
    const angle = rand() * Math.PI * 2;
    const base = 60 + rand() * 520;
    const dist = base * (0.75 + rand() * 0.9);

    const size = 5 + rand() * 14;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist;

    drops.push({
      id: i,
      size,
      dx,
      dy,
      delay: rand() * 0.09,
      duration: 0.35 + rand() * 0.35,
      opacity: 0.22 + rand() * 0.55,
    });
  }

  return drops;
}

const ICONS: Record<Theme, { src: string; label: string; subtitle: string }> = {
  apple: {
    src: "/icons/Apple.png",
    label: "Apple",
    subtitle: "Light · Clean · Minimal",
  },
  spotify: {
    src: "/icons/Spotify.png",
    label: "Spotify",
    subtitle: "Dark · Green Accent",
  },
};

export default function ThemeToggle() {
  const reduce = useReducedMotion();
  const [theme, setTheme] = useState<Theme>("apple");
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const [burst, setBurst] = useState<{
    x: number;
    y: number;
    accent: string;
    seed: number;
    key: number;
  } | null>(null);

  useEffect(() => {
    const saved = getSavedTheme();
    setTheme(saved);
    applyTheme(saved);
  }, []);

  // close on outside click / escape
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!open) return;
      const t = e.target as Node;
      if (wrapRef.current && !wrapRef.current.contains(t)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const label = useMemo(() => `Theme: ${ICONS[theme].label}`, [theme]);

  function selectTheme(next: Theme) {
    if (next === theme) {
      setOpen(false);
      return;
    }

    setOpen(false);

    // splash from center
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;

    // accent tint only (no blackout)
    const accent = next === "spotify" ? "#1DB954" : "rgba(255,255,255,0.85)";

    if (!reduce) {
      document.documentElement.classList.add("theme-staggering");
      setBurst({ x, y, accent, seed: Date.now(), key: Date.now() });
    }

    window.setTimeout(() => {
      setTheme(next);
      localStorage.setItem("theme", next);
      applyTheme(next);
    }, reduce ? 0 : 170);

    window.setTimeout(() => {
      setBurst(null);
      document.documentElement.classList.remove("theme-staggering");
    }, reduce ? 0 : 950);
  }

  return (
    <div ref={wrapRef} className="relative inline-block">
      {/* Splash */}
      <AnimatePresence>
        {burst && (
          <DropBurst
            key={burst.key}
            x={burst.x}
            y={burst.y}
            accent={burst.accent}
            seed={burst.seed}
          />
        )}
      </AnimatePresence>

      {/* Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="rounded-full border px-4 py-2 text-sm font-semibold hover:opacity-90 inline-flex items-center gap-2"
        style={{
          borderColor: "var(--border)",
          background: "var(--surface)",
          color: "var(--text)",
        }}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span className="relative h-5 w-5 overflow-hidden rounded-md">
          <Image
            src={ICONS[theme].src}
            alt={`${ICONS[theme].label} icon`}
            fill
            sizes="20px"
            className="object-contain"
            priority
          />
        </span>

        <span>{label}</span>
        <span className="ml-1">▾</span>
      </button>

      {/* Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 10, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-56 rounded-xl border overflow-hidden shadow-lg z-50"
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
              color: "var(--text)",
            }}
            role="menu"
          >
            <MenuItem
              active={theme === "apple"}
              themeKey="apple"
              onClick={() => selectTheme("apple")}
            />
            <MenuItem
              active={theme === "spotify"}
              themeKey="spotify"
              onClick={() => selectTheme("spotify")}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MenuItem({
  active,
  themeKey,
  onClick,
}: {
  active: boolean;
  themeKey: Theme;
  onClick: () => void;
}) {
  const meta = ICONS[themeKey];

  return (
    <button
      onClick={onClick}
      className="w-full text-left px-4 py-3 hover:opacity-90"
      style={{
        background: active ? "var(--surface-2)" : "transparent",
        borderTop: "1px solid var(--border)",
      }}
      role="menuitem"
    >
      <div className="flex items-center gap-3">
        <span className="relative h-6 w-6 overflow-hidden rounded-md">
          <Image
            src={meta.src}
            alt={`${meta.label} icon`}
            fill
            sizes="24px"
            className="object-contain"
          />
        </span>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="font-semibold">{meta.label}</span>
            {active && <span className="text-xs">✓</span>}
          </div>
          <div className="text-xs opacity-70 mt-1">{meta.subtitle}</div>
        </div>
      </div>
    </button>
  );
}

function DropBurst({
  x,
  y,
  accent,
  seed,
  count = 140,
}: {
  x: number;
  y: number;
  accent: string;
  seed: number;
  count?: number;
}) {
  const drops = useMemo(() => makeDrops(seed, count), [seed, count]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0" style={{ mixBlendMode: "overlay" }}>
        {/* soft page tint */}
        <motion.div
          className="absolute rounded-full"
          style={{
            left: x,
            top: y,
            width: "170vmax",
            height: "170vmax",
            transform: "translate(-50%, -50%)",
            background: accent,
            opacity: 0.18,
            filter: "blur(140px)",
          }}
          initial={{ scale: 0.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.18 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* droplets */}
        {drops.map((d) => (
          <motion.div
            key={d.id}
            className="absolute rounded-full"
            style={{
              left: x,
              top: y,
              width: d.size * 1.6,
              height: d.size * 1.6,
              transform: "translate(-50%, -50%)",
              background:
                accent === "#1DB954"
                  ? accent
                  : "radial-gradient(circle at center, rgba(255,255,255,0.9), rgba(210,210,210,0.6))",
              opacity: d.opacity,
            }}
            initial={{ x: 0, y: 0, scale: 0.3, filter: "blur(2px)" }}
            animate={{
              x: d.dx * 2.4,
              y: d.dy * 2.4,
              opacity: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: d.duration + 0.2,
              delay: d.delay,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
