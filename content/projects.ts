export type Project = {
  title: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "API RCS & backend de messagerie",
    summary:
      "Développement d'un backend en PHP/Symfony exposant des API REST robustes pour un canal de messagerie enrichie, avec une forte exigence de traçabilité et de stabilité en production.",
    highlights: [
      "Conception et implémentation d'un backend résilient pour une API RCS",
      "Adaptation continue aux spécifications du canal",
      "Intégration au frontend et suivi de la qualité produit",
    ],
    tags: ["PHP 8", "Symfony", "API REST", "GitLab CI/CD"],
  },
  {
    title: "Optimisation d'un backend PHP/Drupal",
    summary:
      "Intervention sur un backend PHP/Drupal pour optimiser l'architecture, les requêtes SQL et la performance globale de services critiques.",
    highlights: [
      "Réduction de 20 % de la latence des services critiques",
      "Refactoring de modules réutilisables",
      "Delivery plus fiable via GitLab CI/CD",
    ],
    tags: ["PHP", "Drupal", "SQL", "CI/CD"],
  },
  {
    title: "Qualité et tests automatisés Symfony",
    summary:
      "Renforcement de la qualité logicielle d'une application Symfony avec une montée en puissance des tests et une meilleure maintenabilité du code.",
    highlights: [
      "Passage de 20 % à 80 % de couverture de tests",
      "Supervision technique d'une mini-équipe de 2 développeurs",
      "Intégration et adaptation autour de SuiteCRM",
    ],
    tags: ["Symfony", "PHPUnit", "SuiteCRM", "TDD"],
  },
];
