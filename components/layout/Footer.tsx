import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-canvas border-t border-rule">
      <div className="mx-auto max-w-350 px-8 lg:px-14 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-ink/40">
          &copy; {new Date().getFullYear()} SSS. Tous droits réservés.
        </p>
        <nav aria-label="Liens réseaux sociaux" className="flex items-center gap-6">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-semibold uppercase tracking-widest text-ink/40 hover:text-ink transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-semibold uppercase tracking-widest text-ink/40 hover:text-ink transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${site.email}`}
            className="text-[10px] font-semibold uppercase tracking-widest text-ink/40 hover:text-ink transition-colors"
          >
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}
