export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend & APIs",
    items: [
      "PHP 8",
      "Symfony 6 / 7",
      "API Platform",
      "REST / JSON",
      "Doctrine ORM",
      "Symfony Messenger",
    ],
  },
  {
    title: "Data & performance",
    items: [
      "PostgreSQL",
      "MySQL",
      "Optimisation SQL",
      "Indexation",
      "Analyse de requêtes",
      "Stabilité des temps de réponse",
    ],
  },
  {
    title: "Qualité logicielle",
    items: [
      "PHPUnit",
      "TDD / BDD",
      "PHPStan",
      "Psalm",
      "SOLID",
      "DDD",
      "Clean Code",
    ],
  },
  {
    title: "Delivery & environnement",
    items: [
      "Docker",
      "Docker Compose",
      "Git",
      "GitLab CI/CD",
      "Pipelines build / test / deploy",
    ],
  },
  {
    title: "Méthodes & collaboration",
    items: [
      "Agile Scrum / Kanban",
      "Code review",
      "Documentation technique",
      "Collaboration produit / UX",
      "Coordination technique",
    ],
  },
];

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
