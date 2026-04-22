"use client";

import { useState } from "react";
import { site } from "@/content/site";

const navLinks = [
  { href: "#projets", label: "Projets" },
  { href: "#experience", label: "Expérience" },
  { href: "#a-propos", label: "À propos" },
  { href: "#competences", label: "Compétences" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-canvas/90 backdrop-blur-sm">
      <div className="mx-auto max-w-350 px-8 lg:px-14 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-bold tracking-widest text-ink uppercase hover:text-accent transition-colors"
          aria-label="Retour en haut de page"
        >
          SSS.
        </a>

        <nav
          aria-label="Navigation principale"
          className="hidden md:flex items-center gap-10"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-semibold uppercase tracking-widest text-ink/60 hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-ink hover:text-accent transition-colors"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 2L16 16M16 2L2 16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 5h14M2 9h14M2 13h14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="md:hidden bg-canvas border-t border-rule">
          <nav
            aria-label="Navigation mobile"
            className="mx-auto max-w-350 px-8 py-6 flex flex-col gap-5"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-semibold uppercase tracking-widest text-ink/60 hover:text-ink transition-colors"
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
