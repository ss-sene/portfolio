import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg" style={{ padding: "36px 0" }}>
      <div
        className="mx-auto max-w-[1200px] px-5 lg:px-11"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="flex items-center gap-3">
          <span
            className="bg-accent text-on-accent font-display"
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "7px",
              display: "grid",
              placeItems: "center",
              fontSize: "15px",
            }}
          >
            S
          </span>
          <span className="text-muted" style={{ fontSize: "13.5px" }}>
            Serigne Saliou Sene — Ingénieur Backend &amp; APIs
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a href="/privacy" className="font-mono text-faint hover:text-muted transition-colors" style={{ fontSize: "11.5px", textDecoration: "none" }}>
            Confidentialité
          </a>
          <span className="font-mono text-faint" style={{ fontSize: "11.5px" }}>
            &copy; {new Date().getFullYear()} · {site.location.split("/")[0].trim()}, France
          </span>
        </div>
      </div>
    </footer>
  );
}
