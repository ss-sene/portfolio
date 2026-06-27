"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/#cas", label: "Études de cas" },
  { href: "/#methode", label: "Méthode" },
  { href: "/#parcours", label: "Parcours" },
  { href: "/blog", label: "Blog" },
];

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  function toggleDark() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        background: "color-mix(in srgb,var(--bg) 84%,transparent)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        className="mx-auto max-w-[1200px] w-full px-5 lg:px-11 flex items-center justify-between"
        style={{ height: "66px", gap: "20px" }}
      >
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-3 shrink-0"
          aria-label="Retour à l'accueil"
          style={{ textDecoration: "none" }}
        >
          <span
            className="font-display font-medium text-on-accent bg-accent grid place-items-center shrink-0"
            style={{ width: "34px", height: "34px", borderRadius: "8px", fontSize: "18px" }}
          >
            S
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-ink" style={{ fontSize: "13px", fontWeight: 600, letterSpacing: ".01em" }}>
              Serigne S. Sene
            </span>
            <span className="font-mono text-faint" style={{ fontSize: "10px", letterSpacing: ".1em", textTransform: "uppercase" }}>
              Backend &amp; APIs
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          id="navDesktop"
          aria-label="Navigation principale"
          className="hidden md:flex items-center"
          style={{ gap: "30px" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted hover:text-ink transition-colors duration-200"
              style={{ fontSize: "14px", fontWeight: 500, textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: theme toggle + CTA + burger */}
        <div className="flex items-center" style={{ gap: "10px" }}>
          <button
            type="button"
            onClick={toggleDark}
            className="flex items-center justify-center text-muted hover:text-ink transition-colors border border-line-strong"
            style={{ width: "38px", height: "38px", borderRadius: "8px", background: "transparent", cursor: "pointer" }}
            aria-label={dark ? "Passer en mode clair" : "Passer en mode sombre"}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          <a
            id="headerCta"
            href="#contact"
            className="font-semibold text-on-accent bg-accent hidden md:inline-flex items-center"
            style={{ fontSize: "14px", padding: "10px 18px", borderRadius: "8px", textDecoration: "none" }}
          >
            Planifier un échange
          </a>

          <button
            type="button"
            className="md:hidden flex items-center justify-center text-ink"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            style={{ width: "38px", height: "38px", background: "transparent", border: "none", cursor: "pointer" }}
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-line bg-bg"
        >
          <nav
            aria-label="Navigation mobile"
            className="mx-auto max-w-[1200px] px-5 py-6 flex flex-col"
            style={{ gap: "4px" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted hover:text-ink transition-colors"
                style={{ fontSize: "16px", padding: "10px 0", textDecoration: "none" }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="font-semibold text-on-accent bg-accent text-center"
              style={{ fontSize: "16px", padding: "14px 24px", borderRadius: "8px", marginTop: "16px", textDecoration: "none" }}
              onClick={() => setOpen(false)}
            >
              Planifier un échange
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
