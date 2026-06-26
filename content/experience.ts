export type Experience = {
  company: string;
  period: string;
  role: string;
  location: string;
  achievements: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    company: "Kilifa Consulting",
    period: "Juin 2024 – Fév. 2026",
    role: "Développeur Backend",
    location: "Colombes",
    achievements: [
      "Conception et développement du backend avec Symfony 7 et API Platform",
      "Modélisation et optimisation PostgreSQL : index, requêtes complexes, stabilité des temps de réponse",
      "Mise en place d'une chaîne GitLab CI/CD complète avec PHPUnit, PHPStan, quality gate, build et déploiement Docker",
      "Implémentation d'une authentification JWT et gestion RBAC pour sécuriser les accès API",
    ],
    tags: ["Symfony 7", "API Platform", "PostgreSQL", "JWT/RBAC", "GitLab CI/CD", "Docker"],
  },
  {
    company: "Link Mobility",
    period: "Oct. 2023 – Mai 2024",
    role: "Développeur Fullstack",
    location: "Riorges",
    achievements: [
      "Développement et maintenance d'un backend Symfony pour une API RCS à fort volume d'échanges",
      "Optimisation des pipelines GitLab CI/CD et refactoring ciblé du legacy",
      "Renforcement de la robustesse via tests automatisés et monitoring",
      "Collaboration étroite avec les équipes produit et UX",
    ],
    tags: ["PHP 8", "Symfony", "API REST", "GitLab CI/CD", "Docker"],
  },
  {
    company: "Randstad Digital",
    period: "Fév. 2022 – Sept. 2023",
    role: "Développeur PHP / Drupal",
    location: "Lyon",
    achievements: [
      "Analyse approfondie des performances backend et SQL sur des services critiques",
      "Réduction de la latence des services critiques d'environ 20 %",
      "Standardisation et refactoring de modules en composants réutilisables documentés",
      "Delivery industriel avec GitLab CI/CD, revues de code et tests automatisés",
    ],
    tags: ["PHP", "Drupal", "MySQL", "SQL", "GitLab CI/CD"],
  },
  {
    company: "IAD Territoire Digital",
    period: "Nov. 2018 – Sept. 2021",
    role: "Développeur d'application",
    location: "Besançon",
    achievements: [
      "Augmentation de la couverture de tests PHPUnit de 20 % à 80 %",
      "Réduction des régressions sur les fonctionnalités critiques",
      "Supervision technique d'une mini-équipe de 2 développeurs juniors",
      "Intégration SuiteCRM",
    ],
    tags: ["PHP", "Symfony", "PHPUnit", "SuiteCRM", "MySQL"],
  },
];
