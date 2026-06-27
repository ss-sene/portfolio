import type { Metadata } from "next";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `Politique de confidentialité — ${site.name}`,
  description: "Informations sur le traitement des données personnelles collectées via ce site.",
  alternates: { canonical: `${site.url}/privacy` },
  robots: { index: false, follow: false },
});

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-bg pb-24">
      <div style={{ padding: "clamp(48px,7vw,96px) 0 clamp(36px,5vw,56px)", borderBottom: "1px solid var(--line)" }}>
        <div className="mx-auto max-w-[860px] w-full px-5 lg:px-11">
          <h1 className="font-display font-medium text-ink" style={{ fontSize: "clamp(28px,4vw,46px)", lineHeight: 1.1, margin: 0 }}>
            Politique de confidentialité
          </h1>
          <p className="text-faint" style={{ marginTop: "12px", fontSize: "14px" }}>
            Dernière mise à jour : 27 juin 2026
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[860px] w-full px-5 lg:px-11" style={{ paddingTop: "clamp(40px,5vw,64px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

          <section>
            <h2 className="font-display font-medium text-ink" style={{ fontSize: "22px", margin: "0 0 14px" }}>
              Responsable du traitement
            </h2>
            <p className="text-muted" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              Serigne Saliou SENE<br />
              Sarcelles, Île-de-France, France<br />
              Email : <a href={`mailto:${site.email}`} className="text-accent" style={{ textDecoration: "none" }}>{site.email}</a>
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-ink" style={{ fontSize: "22px", margin: "0 0 14px" }}>
              Données collectées
            </h2>
            <p className="text-muted" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              Ce site ne collecte aucune donnée personnelle via des formulaires. Les seules données susceptibles d&rsquo;être traitées sont :
            </p>
            <ul className="text-muted" style={{ fontSize: "16px", lineHeight: 1.7, paddingLeft: "20px", marginTop: "12px" }}>
              <li>Les données de navigation anonymisées collectées par Vercel Analytics (audience, pages vues) — sans cookies, sans identifiant personnel.</li>
              <li>Les données transmises volontairement par email lors d&rsquo;un contact direct à l&rsquo;adresse ci-dessus.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-medium text-ink" style={{ fontSize: "22px", margin: "0 0 14px" }}>
              Finalité du traitement
            </h2>
            <p className="text-muted" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              Les données de contact (email, nom) transmises volontairement sont utilisées uniquement pour répondre aux demandes d&rsquo;information professionnelle. Elles ne sont ni revendues, ni transmises à des tiers, ni utilisées à des fins commerciales.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-ink" style={{ fontSize: "22px", margin: "0 0 14px" }}>
              Durée de conservation
            </h2>
            <p className="text-muted" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              Les échanges par email sont conservés le temps nécessaire à la relation professionnelle, et au maximum 3 ans à compter du dernier contact.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-ink" style={{ fontSize: "22px", margin: "0 0 14px" }}>
              Vos droits (RGPD)
            </h2>
            <p className="text-muted" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              Conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679), vous disposez des droits suivants :
            </p>
            <ul className="text-muted" style={{ fontSize: "16px", lineHeight: 1.7, paddingLeft: "20px", marginTop: "12px" }}>
              <li>Droit d&rsquo;accès à vos données personnelles</li>
              <li>Droit de rectification</li>
              <li>Droit à l&rsquo;effacement (&laquo; droit à l&rsquo;oubli &raquo;)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit d&rsquo;opposition</li>
            </ul>
            <p className="text-muted" style={{ fontSize: "16px", lineHeight: 1.7, marginTop: "12px" }}>
              Pour exercer ces droits, contactez : <a href={`mailto:${site.email}`} className="text-accent" style={{ textDecoration: "none" }}>{site.email}</a>
            </p>
            <p className="text-muted" style={{ fontSize: "16px", lineHeight: 1.7, marginTop: "12px" }}>
              Vous avez également le droit de déposer une réclamation auprès de la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-accent" style={{ textDecoration: "none" }}>www.cnil.fr</a>
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-ink" style={{ fontSize: "22px", margin: "0 0 14px" }}>
              Cookies
            </h2>
            <p className="text-muted" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              Ce site n&rsquo;utilise pas de cookies de traçage ou publicitaires. Vercel Analytics fonctionne sans cookies, via une empreinte anonyme côté serveur.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-ink" style={{ fontSize: "22px", margin: "0 0 14px" }}>
              Hébergement
            </h2>
            <p className="text-muted" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              Ce site est hébergé par Vercel Inc. (340 Pine Street, Suite 701, San Francisco, CA 94104, USA). Les données de navigation peuvent être traitées sur des serveurs situés hors de l&rsquo;UE. Vercel est certifié conforme au cadre DPF UE–États-Unis.
            </p>
          </section>
        </div>

        <div style={{ marginTop: "56px", paddingTop: "32px", borderTop: "1px solid var(--line)" }}>
          <a href="/" className="text-faint hover:text-accent transition-colors" style={{ fontSize: "13px", textDecoration: "none" }}>
            ← Retour à l&rsquo;accueil
          </a>
        </div>
      </div>
    </main>
  );
}
