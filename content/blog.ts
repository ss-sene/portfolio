export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "code"; lang: string; lines: string[] }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  slug: string;
  tags: string[];
  content: ContentBlock[];
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
    content: [
      {
        type: "p",
        text: "Quand j'ai rejoint Link Mobility, l'API existante avait grandi vite. Trop vite. Les endpoints se nommaient comme ça venait, les erreurs retournaient parfois du HTML au lieu de JSON, et personne ne savait exactement quelle version était en production. On a décidé de repartir sur des bases propres. Voilà ce qu'on a mis en place, et pourquoi.",
      },
      { type: "h2", text: "Conventions de nommage" },
      {
        type: "p",
        text: "La première chose qui frappe quand on reprend une API mal nommée, c'est qu'on passe plus de temps à lire la doc qu'à coder. On avait des endpoints comme /getMessage, /doSendSms, /getListUsers. Du verbe partout, aucune cohérence.",
      },
      {
        type: "p",
        text: "La règle qu'on a adoptée : les ressources sont des noms au pluriel, les verbes viennent du protocole HTTP.",
      },
      {
        type: "code",
        lang: "bash",
        lines: [
          "GET    /messages          # liste",
          "POST   /messages          # création",
          "GET    /messages/{id}     # détail",
          "PATCH  /messages/{id}     # modification partielle",
          "DELETE /messages/{id}     # suppression",
        ],
      },
      {
        type: "p",
        text: "Avec API Platform, ça se configure directement dans l'attribut #[ApiResource]. Pas de contrôleur à écrire pour les opérations CRUD de base. Ce qui libère du temps pour les cas non standards — et il y en a toujours.",
      },
      {
        type: "p",
        text: "Pour les actions qui ne rentrent pas dans ce schéma (envoyer un message, annuler une livraison), on a utilisé des opérations personnalisées :",
      },
      {
        type: "code",
        lang: "php",
        lines: [
          "#[Post(",
          "    uriTemplate: '/messages/{id}/send',",
          "    controller: SendMessageController::class,",
          ")]",
        ],
      },
      {
        type: "p",
        text: "Ce n'est pas parfait. Certains puristes REST diront qu'on devrait modéliser ça autrement. En pratique, ça reste lisible et l'équipe comprend ce que fait l'endpoint sans ouvrir le contrôleur.",
      },
      { type: "h2", text: "Gestion des erreurs" },
      {
        type: "p",
        text: "Le problème avec les erreurs, c'est qu'on n'y pense pas au début. On code le chemin heureux, tout fonctionne, et on découvre les cas d'erreur en production.",
      },
      {
        type: "p",
        text: "Deux choses qu'on a standardisées. D'abord, les codes HTTP plutôt que des codes maison. On avait une convention héritée qui retournait toujours 200 avec un champ status dans le corps. Ça complique tout : les clients doivent parser le corps pour savoir si la requête a réussi, les outils de monitoring comptent tout en succès.",
      },
      {
        type: "p",
        text: "On est passé aux codes standard. 404 pour une ressource introuvable. 422 pour une validation qui échoue. 409 pour un conflit métier.",
      },
      {
        type: "p",
        text: "Ensuite, un format d'erreur uniforme. API Platform utilise le format RFC 7807 (Problem Details) par défaut. On l'a gardé tel quel :",
      },
      {
        type: "code",
        lang: "json",
        lines: [
          "{",
          '  "type": "/errors/validation",',
          '  "title": "Validation Failed",',
          '  "status": 422,',
          '  "violations": [',
          "    {",
          '      "propertyPath": "phoneNumber",',
          '      "message": "This value is not a valid phone number."',
          "    }",
          "  ]",
          "}",
        ],
      },
      {
        type: "p",
        text: "Les clients API savent toujours où chercher le message d'erreur. Ça paraît simple. C'est surtout régulier.",
      },
      { type: "h2", text: "Versioning" },
      {
        type: "p",
        text: "On a évité le versioning dans l'URL (/v1/messages) parce que ça multiplie le code à maintenir. À la place, on a utilisé des groupes de sérialisation pour faire évoluer les représentations sans casser les anciens clients.",
      },
      {
        type: "code",
        lang: "php",
        lines: [
          "#[Groups(['message:read:v1', 'message:read:v2'])]",
          "private string $content;",
          "",
          "#[Groups(['message:read:v2'])]",
          "private ?string $metadata;",
        ],
      },
      {
        type: "p",
        text: "Ça a ses limites. Pour des changements vraiment cassants (renommer une ressource, changer la structure d'un identifiant), le versioning d'URL reste la seule option saine. Mais ça ne s'est pas présenté.",
      },
      { type: "h2", text: "Documentation automatique" },
      {
        type: "p",
        text: "API Platform génère Swagger et OpenAPI à partir des attributs PHP. Ce qu'on a fait en plus : renseigner description et summary sur chaque opération, et ajouter des exemples dans #[ApiProperty].",
      },
      {
        type: "code",
        lang: "php",
        lines: [
          "#[ApiProperty(",
          "    description: 'Contenu du message RCS, texte brut ou HTML.',",
          "    example: 'Bonjour, votre colis sera livré demain.',",
          ")]",
          "private string $content;",
        ],
      },
      {
        type: "p",
        text: "La documentation devient une conséquence du code, pas quelque chose qu'on écrit à part et qu'on oublie de mettre à jour. En pratique, l'équipe front consultait la doc Swagger quotidiennement pendant l'intégration. Zéro question sur le format des requêtes.",
      },
      {
        type: "p",
        text: "Ce qui prend du temps, c'est d'être discipliné sur les descriptions. Le premier mois, on les remplissait à moitié. On s'y est mis sérieusement quand un collègue front a passé une heure à débugger une erreur 422 parce que le champ attendu n'était pas documenté. Après ça, les PR qui ajoutaient des propriétés sans description ne passaient plus la review.",
      },
    ],
  },
  {
    title: "Optimiser les requêtes SQL dans une application Drupal",
    excerpt:
      "Analyse des problèmes de performance SQL rencontrés sur un projet Drupal et méthodologie pour les identifier, les prioriser et les corriger efficacement.",
    date: "22 juil. 2025",
    readingTime: "5 min",
    slug: "optimisation-sql-drupal",
    tags: ["SQL", "Drupal", "Performance"],
    content: [
      {
        type: "p",
        text: "Chez Randstad Digital, on gérait une application Drupal qui accumulait de la donnée depuis plusieurs années. Les premières pages se chargeaient en 4 secondes. Sur mobile, c'était encore pire. On ne savait pas exactement où se perdait le temps.",
      },
      {
        type: "p",
        text: "Voilà comment on a réduit la latence de 20 % en quelques semaines, sans refondre l'architecture.",
      },
      { type: "h2", text: "Trouver où ça coince vraiment" },
      {
        type: "p",
        text: "Le réflexe, c'est d'ouvrir le profiler Symfony et de regarder les requêtes lentes. C'est utile, mais incomplet. Le profiler montre les requêtes une par une. Il ne montre pas facilement les patterns qui se répètent à travers une page entière.",
      },
      {
        type: "p",
        text: "On a activé le slow query log MySQL :",
      },
      {
        type: "code",
        lang: "sql",
        lines: [
          "SET GLOBAL slow_query_log = 'ON';",
          "SET GLOBAL long_query_time = 0.1;  -- toute requête > 100ms",
          "SET GLOBAL slow_query_log_file = '/var/log/mysql/slow.log';",
        ],
      },
      {
        type: "p",
        text: "Puis on a utilisé mysqldumpslow pour agréger les résultats :",
      },
      {
        type: "code",
        lang: "bash",
        lines: ["mysqldumpslow -s t -t 20 /var/log/mysql/slow.log"],
      },
      {
        type: "p",
        text: "Les 20 requêtes les plus lentes en temps cumulé. C'est là qu'on a vu le problème principal : une requête sur la table node_field_data qui tournait des centaines de fois par chargement de page.",
      },
      { type: "h2", text: "Le problème Drupal qu'on avait sous-estimé" },
      {
        type: "p",
        text: "Drupal charge les entités de façon paresseuse. Chaque appel à Node::load($nid) fait une requête. Dans un affichage de liste, si on a 50 nœuds et qu'on appelle Node::load() individuellement pour chacun, on a 50 requêtes.",
      },
      {
        type: "p",
        text: "La solution existe depuis longtemps : \\Drupal::entityTypeManager()->getStorage('node')->loadMultiple($nids). Une requête pour tous les IDs. On a cherché tous les endroits dans le code custom où on chargeait des entités en boucle. Il y en avait plus qu'on ne pensait.",
      },
      {
        type: "p",
        text: "Corriger ça seul a réduit le nombre de requêtes par page d'environ 40 %.",
      },
      { type: "h2", text: "Les index qui manquaient" },
      {
        type: "p",
        text: "Une fois les requêtes identifiées, on a passé les pires à EXPLAIN :",
      },
      {
        type: "code",
        lang: "sql",
        lines: [
          "EXPLAIN SELECT n.nid, n.title",
          "FROM node_field_data n",
          "INNER JOIN node__field_region r ON n.nid = r.entity_id",
          "WHERE n.status = 1",
          "  AND n.type = 'offre'",
          "  AND r.field_region_target_id IN (12, 34, 56)",
          "ORDER BY n.created DESC;",
        ],
      },
      {
        type: "p",
        text: "Le résultat montrait un full scan sur node__field_region. 180 000 lignes. Pas d'index sur field_region_target_id. Drupal crée des index sur entity_id et bundle par défaut, pas forcément sur les colonnes de valeur des champs.",
      },
      {
        type: "code",
        lang: "sql",
        lines: [
          "ALTER TABLE node__field_region",
          "ADD INDEX idx_field_region_target (field_region_target_id);",
        ],
      },
      {
        type: "p",
        text: "Avant : 340ms. Après : 12ms. Pour cette seule requête.",
      },
      { type: "h2", text: "Prioriser les corrections" },
      {
        type: "p",
        text: "On avait une liste d'une vingtaine de points à corriger. On les a priorisés selon deux axes : fréquence d'exécution et temps de correction.",
      },
      {
        type: "ul",
        items: [
          "Requêtes exécutées souvent ET lentes : en premier",
          "Requêtes rares même si lentes : plus tard",
          "Corrections simples (index, loadMultiple) : maintenant",
          "Corrections complexes (refactoring de vues) : sprint suivant",
        ],
      },
      {
        type: "p",
        text: "Cette matrice paraît évidente. On la respecte moins qu'on le croit quand on est dans le feu de l'action. Un développeur avait commencé à réécrire un affichage complexe parce que ça serait mieux de toute façon. Le gain estimé : 80ms sur une page visitée deux fois par jour. On l'a arrêté.",
      },
      { type: "h2", text: "Ce qu'on aurait dû faire plus tôt" },
      {
        type: "p",
        text: "Activer le cache de requêtes Drupal. On l'avait désactivé en développement et personne n'avait vérifié qu'il était bien actif en production. Il ne l'était pas. Résultat : chaque chargement de page recalculait tout depuis la base.",
      },
      {
        type: "p",
        text: "Les gains SQL restent, mais sans cache, on reconstruit les mêmes résultats en base en permanence. Les deux vont ensemble.",
      },
    ],
  },
  {
    title: "Monter en couverture de tests avec PHPUnit : retour d'expérience",
    excerpt:
      "Comment passer de 20 % à 80 % de couverture de tests sur une application Symfony legacy, sans bloquer les évolutions fonctionnelles.",
    date: "10 mai 2025",
    readingTime: "6 min",
    slug: "couverture-tests-phpunit",
    tags: ["PHPUnit", "TDD", "Symfony"],
    content: [
      {
        type: "p",
        text: "Quand je suis arrivé chez IAD Territoire Digital, la couverture de tests était à 20 %. Pas parce que personne ne savait écrire des tests. Parce que l'application avait grandi sans en écrire, et que rattraper le retard semblait insurmontable. Deux ans plus tard, on était à 80 %. Ce qu'on a fait, et ce qu'on a évité.",
      },
      { type: "h2", text: "Pourquoi 20 % ne veut rien dire" },
      {
        type: "p",
        text: "Le chiffre brut de couverture est trompeur. 20 % peut signifier que les 20 % les plus simples sont testés (des getters, des constructeurs), et que la logique métier réelle n'est pas couverte.",
      },
      {
        type: "p",
        text: "Avant de toucher quoi que ce soit, on a regardé quels fichiers étaient couverts avec le rapport HTML :",
      },
      {
        type: "code",
        lang: "bash",
        lines: ["php bin/phpunit --coverage-html var/coverage"],
      },
      {
        type: "p",
        text: "Le rapport montrait que les services métier principaux, ceux qui gèrent les mandats et les transactions, avaient 0 % de couverture. Les modèles Doctrine avaient 80 %. On testait bien les choses qui n'avaient pas besoin d'être testées.",
      },
      { type: "h2", text: "Ne pas bloquer les évolutions" },
      {
        type: "p",
        text: "Le premier réflexe aurait été de geler les nouvelles fonctionnalités pour écrire des tests. On ne l'a pas fait. Pour deux raisons.",
      },
      {
        type: "p",
        text: "D'abord, le produit continuait d'évoluer. Bloquer les développements pour rattraper la dette technique ne passe pas dans une équipe avec des engagements clients.",
      },
      {
        type: "p",
        text: "Ensuite, écrire des tests sur du code legacy sans le toucher, c'est long et décourageant. On finit par tester le code tel qu'il est, y compris ses défauts, et les tests deviennent fragiles.",
      },
      {
        type: "p",
        text: "Ce qu'on a fait : règle du boy scout appliquée aux tests. Toute classe touchée dans le cadre d'un développement normal repartait avec des tests. On ne cherchait pas à tout couvrir d'un coup. On profitait de chaque modification pour ajouter des tests sur ce qu'on touchait.",
      },
      {
        type: "p",
        text: "Les nouvelles fonctionnalités avaient une règle : 80 % de couverture avant merge. Pas 100 %, parce que certaines branches sont raisonnablement impossibles à atteindre sans contorsions inutiles.",
      },
      { type: "h2", text: "Par où commencer sur le legacy" },
      {
        type: "p",
        text: "On a sélectionné les classes à tester en priorité avec deux critères : fréquence de modification et criticité métier. Le service de commission, modifié toutes les deux semaines et directement lié aux revenus, est passé en premier.",
      },
      {
        type: "p",
        text: "Pour chaque classe, on a d'abord écrit des tests de caractérisation. Pas des tests qui vérifient que le code fait ce qu'il devrait faire, mais des tests qui documentent ce qu'il fait actuellement :",
      },
      {
        type: "code",
        lang: "php",
        lines: [
          "public function testCalculateCommissionReturnsExpectedValue(): void",
          "{",
          "    $service = new CommissionService();",
          "    $result = $service->calculate(1000, 'standard');",
          "",
          "    // On ne sait pas si c'est juste,",
          "    // mais c'est ce que le code fait aujourd'hui",
          "    $this->assertSame(85.0, $result);",
          "}",
        ],
      },
      {
        type: "p",
        text: "Si le test passe, on a une baseline. Si on casse quelque chose en refactorant, le test échoue. C'est le but.",
      },
      { type: "h2", text: "Les dépendances externes" },
      {
        type: "p",
        text: "Le gros problème du legacy, c'est le code qui appelle directement des services externes : envoi d'email, appels API, accès fichier. Impossible de tester sans les mocker.",
      },
      {
        type: "p",
        text: "Dans notre cas, beaucoup de classes instanciaient leurs dépendances directement avec new. Pas d'injection de dépendances, pas de possibilité de substituer un mock. On a refactorisé progressivement : ajouter l'injection par constructeur là où on passait de toute façon, sans réécrire les classes entières.",
      },
      {
        type: "code",
        lang: "php",
        lines: [
          "$mailer = $this->createMock(MailerInterface::class);",
          "$mailer->expects($this->once())",
          "    ->method('send')",
          "    ->with($this->isInstanceOf(Email::class));",
          "",
          "$service = new NotificationService($mailer);",
          "$service->notifyAgent($mandate);",
        ],
      },
      { type: "h2", text: "Ce que ça a changé" },
      {
        type: "p",
        text: "Arriver à 80 % a pris environ 18 mois de travail régulier, pas d'effort héroïque. Ce qui a changé concrètement : les régressions détectées en CI avant de toucher la production. Avant, on les découvrait en production ou pendant les tests manuels.",
      },
      {
        type: "p",
        text: "Ce qui n'a pas changé : les bugs liés à l'intégration entre services, les edge cases métier que personne n'avait pensé à tester, les problèmes de performance. Les tests unitaires ne couvrent pas tout. C'est un outil parmi d'autres, pas une garantie.",
      },
      {
        type: "p",
        text: "Le chiffre de 80 % est arbitraire. La vraie question c'est : est-ce que les parties critiques sont couvertes ? Si oui, le nombre importe peu.",
      },
    ],
  },
];
