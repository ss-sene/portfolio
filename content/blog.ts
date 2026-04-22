export type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  slug: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    title: "Structurer une API REST robuste avec Symfony et API Platform",
    excerpt:
      "Retour d'expérience sur la mise en place d'une API REST fiable : conventions de nommage, gestion des erreurs, versioning et documentation automatique.",
    date: "15 sept. 2025",
    readingTime: "7 min",
    slug: "api-rest-symfony-api-platform",
    tags: ["Symfony", "API Platform", "Architecture"],
  },
  {
    title: "Optimiser les requêtes SQL dans une application Drupal",
    excerpt:
      "Analyse des problèmes de performance SQL rencontrés sur un projet Drupal et méthodologie pour les identifier, les prioriser et les corriger efficacement.",
    date: "22 juil. 2025",
    readingTime: "5 min",
    slug: "optimisation-sql-drupal",
    tags: ["SQL", "Drupal", "Performance"],
  },
  {
    title: "Monter en couverture de tests avec PHPUnit : retour d'expérience",
    excerpt:
      "Comment passer de 20 % à 80 % de couverture de tests sur une application Symfony legacy, sans bloquer les évolutions fonctionnelles.",
    date: "10 mai 2025",
    readingTime: "6 min",
    slug: "couverture-tests-phpunit",
    tags: ["PHPUnit", "TDD", "Symfony"],
  },
];
