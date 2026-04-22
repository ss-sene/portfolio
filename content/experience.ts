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
    company: "Link Mobility",
    period: "Oct. 2023 – Nov. 2025",
    role: "Développeur Fullstack",
    location: "Riorges",
    achievements: [
      "Conception et implémentation d'un backend résilient pour une API RCS",
      "Automatisation CI/CD GitLab avec réduction du temps de build de 30 %",
      "Amélioration de la robustesse du code existant et réduction des régressions en production",
    ],
    tags: ["PHP 8", "Symfony", "API REST", "GitLab CI/CD", "Docker"],
  },
  {
    company: "Randstad Digital",
    period: "Fév. 2022 – Sept. 2023",
    role: "Développeur PHP/Drupal",
    location: "Lyon",
    achievements: [
      "Optimisation de l'architecture backend Drupal et des requêtes SQL",
      "Réduction de 20 % de la latence des services critiques",
      "Pilotage du delivery et de la QA via CI/CD",
      "Refactoring de modules mutualisables documentés",
    ],
    tags: ["PHP", "Drupal", "MySQL", "SQL", "GitLab CI/CD"],
  },
  {
    company: "IAD Territoire Digital",
    period: "Nov. 2018 – Sept. 2021",
    role: "Développeur d'application",
    location: "Besançon",
    achievements: [
      "Augmentation de la couverture de tests de 20 % à 80 % via PHPUnit",
      "Supervision technique d'une mini-équipe de 2 développeurs juniors",
      "Intégration SuiteCRM",
    ],
    tags: ["PHP", "Symfony", "PHPUnit", "SuiteCRM", "MySQL"],
  },
];
