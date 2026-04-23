import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const securityHeaders = [
  // Empêche le clickjacking — la page ne peut pas être encadrée dans une iframe
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // Empêche le MIME sniffing des réponses
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Limite les informations de referrer envoyées aux sites tiers
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Restreint l'accès aux APIs sensibles du navigateur
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Force HTTPS pendant 2 ans — actif uniquement une fois déployé sur HTTPS
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Content Security Policy — restreint les sources autorisées
  // Google Fonts requiert fonts.googleapis.com (CSS) et fonts.gstatic.com (fichiers fonte)
  // 'unsafe-inline' est requis par Next.js (hydratation) et le JSON-LD inline
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data:",
      "connect-src 'self'",
      "media-src 'none'",
      "object-src 'none'",
      "frame-src 'none'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // Supprime l'en-tête X-Powered-By qui expose la stack technique
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
