"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#expertise", label: "Expertise" },
  { href: "#etudes-de-cas", label: "Études de cas" },
  { href: "#methode", label: "Méthode" },
  { href: "#parcours", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-canvas/95 backdrop-blur-sm border-b border-rule/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-350 px-8 lg:px-14 h-16 flex items-center justify-between">
        <a
          href="#accueil"
          className="text-[11px] font-semibold tracking-[0.2em] text-ink uppercase hover:text-accent transition-colors duration-200"
          aria-label="Retour à l'accueil"
        >
          SSS.
        </a>

        <nav
          aria-label="Navigation principale"
          className="hidden md:flex items-center gap-9"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/50 hover:text-ink transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden p-3 -mr-3 text-ink hover:text-accent transition-colors"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
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

      {open && (
        <div id="mobile-nav" className="md:hidden bg-canvas border-t border-rule">
          <nav
            aria-label="Navigation mobile"
            className="mx-auto max-w-350 px-8 py-7 flex flex-col gap-5"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/50 hover:text-ink transition-colors py-1"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
