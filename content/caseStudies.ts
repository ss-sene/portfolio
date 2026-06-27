export type CaseStudy = {
  id: string;
  company: string;
  role: string;
  period: string;
  yearRange: string;
  location: string;
  title: string;
  context: string;
  actions: string[];
  impact: string[];
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "kilifa",
    company: "Kilifa Consulting",
    role: "Développeur Backend",
    period: "Juin 2024 – Fév. 2026",
    yearRange: "2024 — 2026",
    location: "Colombes",
    title: "Concevoir une plateforme documentaire backend-first capable de rester stable à mesure que les usages montent",
    context: "Développement d'une plateforme documentaire avec gestion des documents, des utilisateurs, des droits et de la recherche avancée.",
    actions: [
      "Conception et développement du backend avec Symfony 7 et API Platform",
      "Modélisation et optimisation PostgreSQL, avec index et requêtes complexes",
      "Mise en place d'une chaîne GitLab CI/CD complète avec PHPUnit, PHPStan, quality gate, build et déploiement Docker",
      "Implémentation d'une authentification JWT et d'une gestion RBAC pour sécuriser les accès API",
    ],
    impact: [
      "Temps de réponse stabilisés sur un volume croissant de documents",
      "Mises en production mieux sécurisées",
      "Accès API plus sûrs et mieux maîtrisés",
      "Base technique solide pour faire évoluer la plateforme",
    ],
    tags: ["Symfony 7", "API Platform", "PostgreSQL", "JWT", "RBAC", "CI/CD"],
  },
  {
    id: "link-mobility",
    company: "Link Mobility",
    role: "Développeur Fullstack",
    period: "Oct. 2023 – Mai 2024",
    yearRange: "2023 — 2024",
    location: "Riorges",
    title: "Renforcer un backend Symfony à forte volumétrie tout en réduisant le risque de régression",
    context: "Développement et maintenance d'un backend Symfony pour une API RCS avec fort volume d'échanges.",
    actions: [
      "Développement et maintenance du backend",
      "Optimisation des pipelines GitLab CI/CD",
      "Refactoring ciblé du legacy",
      "Renforcement de la robustesse via tests automatisés et monitoring",
      "Collaboration étroite avec les équipes produit et UX",
    ],
    impact: [
      "Meilleure traçabilité des échanges",
      "Temps de build réduits",
      "Mises en production plus fiables",
      "Baisse nette des régressions en production",
    ],
    tags: ["PHP 8", "Symfony", "API RCS", "CI/CD", "Tests automatisés"],
  },
  {
    id: "randstad",
    company: "Randstad Digital",
    role: "Développeur PHP / Drupal",
    period: "Fév. 2022 – Sept. 2023",
    yearRange: "2022 — 2023",
    location: "Lyon",
    title: "Optimiser l'architecture backend et les performances SQL sur des services critiques",
    context: "Travail sur des services backend Drupal avec contraintes de performance fortes et exigences SLA.",
    actions: [
      "Analyse approfondie des performances backend et SQL",
      "Optimisation de l'architecture Drupal",
      "Réduction de la latence de services critiques d'environ 20 %",
      "Mise en place d'un delivery industriel avec GitLab CI/CD, revues de code et tests automatisés",
      "Standardisation et refactoring de modules en composants réutilisables documentés",
    ],
    impact: [
      "Meilleure tenue des services critiques",
      "Respect des SLA sécurisé",
      "Réduction du coût de développement inter-projet",
      "Onboarding des équipes facilité",
    ],
    tags: ["PHP", "Drupal", "MySQL", "Optimisation SQL", "CI/CD"],
  },
  {
    id: "iad",
    company: "IAD Territoire Digital",
    role: "Développeur d'application",
    period: "Nov. 2018 – Sept. 2021",
    yearRange: "2018 — 2021",
    location: "Besançon",
    title: "Utiliser les tests comme levier direct de fiabilité sur une application Symfony",
    context: "Travail sur une application Symfony avec besoin d'améliorer la qualité et la stabilité.",
    actions: [
      "Augmentation de la couverture de tests PHPUnit de 20 % à 80 %",
      "Réduction des régressions sur les fonctionnalités critiques",
      "Supervision technique d'une mini-équipe de 2 développeurs juniors sur l'intégration SuiteCRM",
    ],
    impact: [
      "Fiabilité nettement renforcée",
      "Meilleure maîtrise de la qualité applicative",
      "Première responsabilité technique et capacité d'accompagnement",
    ],
    tags: ["PHP", "Symfony", "PHPUnit", "TDD", "SuiteCRM"],
  },
];
