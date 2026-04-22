export type SkillCard = {
  title: string;
  description: string;
};

export const skillCards: SkillCard[] = [
  {
    title: "Backend PHP/Symfony",
    description:
      "Développement et maintenance d'applications backend robustes avec PHP 8, Symfony, API Platform et architectures web sécurisées.",
  },
  {
    title: "API REST",
    description:
      "Conception d'API REST documentées, maintenables et adaptées à des besoins métiers exigeants.",
  },
  {
    title: "Performance & Qualité",
    description:
      "Optimisation SQL, tests automatisés, CI/CD, refactoring et amélioration continue de la stabilité applicative.",
  },
];

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Backend & Écosystème",
    items: [
      "PHP 8",
      "Symfony",
      "API Platform",
      "API REST/JSON",
      "MySQL",
      "PostgreSQL",
      "Optimisation SQL",
    ],
  },
  {
    title: "Architecture & Qualité",
    items: ["SOLID", "Clean Code", "TDD/BDD", "PHPUnit", "PHPStan", "Psalm"],
  },
  {
    title: "DevOps & Delivery",
    items: [
      "Docker",
      "Git",
      "GitLab CI/CD",
      "Pipelines",
      "Composer",
      "Webpack",
      "SonarQube",
    ],
  },
  {
    title: "Méthodes & Collaboration",
    items: [
      "Agile",
      "Scrum",
      "Kanban",
      "Code review",
      "Documentation technique",
      "UML",
    ],
  },
];
