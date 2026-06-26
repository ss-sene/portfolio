import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-ink border-t border-paper/5">
      <div className="mx-auto max-w-350 px-8 lg:px-14 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-paper/20">
          &copy; {new Date().getFullYear()} Serigne Saliou SENE. Tous droits réservés.
        </p>
        <nav aria-label="Liens réseaux sociaux" className="flex items-center gap-6">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-semibold uppercase tracking-widest text-paper/25 hover:text-paper/60 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-semibold uppercase tracking-widest text-paper/25 hover:text-paper/60 transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${site.email}`}
            className="text-[10px] font-semibold uppercase tracking-widest text-paper/25 hover:text-paper/60 transition-colors"
          >
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}
