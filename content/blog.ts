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
  isoDate: string;
  updatedAt?: string;
  readingTime: string;
  slug: string;
  tags: string[];
  content: ContentBlock[];
};

const _blogPosts: BlogPost[] = [
  {
    title:
      "Reconversion développeur vers l'IA : pourquoi le marché du dev se tend et comment devenir AI Engineer en 2026",
    excerpt:
      "Le marché dev se polarise et les offres IA progressent dans un contexte global en recul. Tour d'horizon des données réelles et roadmap 12 mois pour un dev backend qui veut devenir AI Engineer, du premier projet RAG à la certification cloud.",
    date: "3 juin 2026",
    isoDate: "2026-06-03",
    readingTime: "10 min",
    slug: "reconversion-dev-ia-ai-engineer-2026",
    tags: ["IA", "Carrière", "Roadmap"],
    content: [
      {
        type: "p",
        text: "Cet article est écrit du point de vue d'un développeur backend Symfony. Pas d'un data scientist, pas d'un ML researcher — d'un dev qui conçoit des APIs REST, optimise des requêtes PostgreSQL et industrialise des pipelines CI/CD. Ce contexte change beaucoup la façon de lire le marché IA et la façon d'y entrer.",
      },
      {
        type: "p",
        text: "En 2026, le développement logiciel reste demandé, mais le marché est devenu plus sélectif. Les entreprises ciblent davantage des profils capables de gérer cloud, data et IA embarquée que des \"développeurs web généralistes\". France Travail estime qu'en 2024, environ 77 800 projets de recrutement concernaient le numérique, avec plus de 424 000 offres publiées sur francetravail.fr sur les trois premiers trimestres, mais 85 % des recrutements étaient jugés \"difficiles\" par les employeurs (France Travail, 2025).",
      },
      {
        type: "p",
        text: "Les offres mentionnant explicitement l'IA progressent, alors que le volume global d'offres en France est retombé au niveau de février 2020 (Indeed Hiring Lab, 2026). Pour un développeur backend, c'est moins une reconversion qu'une extension du métier : on ne fait plus seulement des APIs, on orchestre des LLM, du RAG et des pipelines data/IA en production.",
      },
      {
        type: "h2",
        text: "Marché du développement : tension et spécialisation plutôt que \"fin du dev\"",
      },
      {
        type: "p",
        text: "France Travail décrit un secteur numérique dynamique mais polarisé : beaucoup de besoins, mais une difficulté forte à trouver les bons profils (France Travail, 2025). Le marché IT français est à deux vitesses : l'édition logicielle, le cloud, le SaaS et la data/IA continuent de croître, tandis que des segments plus traditionnels ralentissent et deviennent plus compétitifs (LeMagIT 2025, Hitechpros 2026).",
      },
      {
        type: "p",
        text: "Une étude d'O'Clock pointe un paradoxe : il manquerait encore environ 50 000 développeurs en France, alors que près de 30 000 nouveaux diplômés arrivent chaque année sur le marché (O'Clock, 2025). La tension est moins sur le volume global que sur la spécialisation : développeurs généralistes juniors d'un côté, profils cloud/data/IA ou seniors de l'autre.",
      },
      {
        type: "h2",
        text: "Offres IA en hausse dans un marché global en recul",
      },
      {
        type: "p",
        text: "Indeed Hiring Lab confirme que le volume global d'offres en France est retombé au niveau de février 2020 en 2026, après un pic post-Covid (Indeed Hiring Lab, 2026). Mais les annonces mentionnant l'IA suivent une trajectoire inverse : 21 % des offres en développement informatique contiennent des termes liés à l'IA, 15 % en administration systèmes/réseaux, 12 % dans la banque-finance (Indeed Hiring Lab France, avril 2026).",
      },
      {
        type: "p",
        text: "À l'échelle mondiale, le Global AI Jobs Barometer de PwC fait état d'une hausse de 273 % des offres liées à l'IA dans certains secteurs sur la dernière décennie (PwC, 2025). Des analyses comme celle d'Adapte-toi confirment cette dynamique en France, avec un marché IA parmi les plus actifs à horizon 2026 (Adapte-toi, 2026).",
      },
      {
        type: "h2",
        text: "Nuances du marché IA : qui profite réellement de cette vague ?",
      },
      {
        type: "h3",
        text: "IA recrute, mais surtout les profils expérimentés",
      },
      {
        type: "p",
        text: "Un décryptage du Figaro s'appuyant sur ManpowerGroup indique que 72 % des entreprises déclarent avoir des difficultés à recruter des profils maîtrisant l'IA (Le Figaro / ManpowerGroup, 2026). La pénurie concerne les profils capables de concevoir et déployer des solutions IA de bout en bout, pas ceux ayant simplement suivi un MOOC (OPIIEC, 2025).",
      },
      {
        type: "p",
        text: "Les grilles salariales publiées par Talma AI et Factoriel placent les niveaux de rémunération les plus élevés précisément sur les rôles qui combinent software engineering et IA appliquée : ML Engineer, LLM Engineer, GenAI Engineer (Talma AI 2026, Factoriel 2026).",
      },
      {
        type: "h3",
        text: "Forte concurrence sur l'entry-level IA",
      },
      {
        type: "p",
        text: "Les parcours \"devenir Data Scientist / ML Engineer\" attirent beaucoup de candidats en reconversion, mais seuls ceux ayant un portfolio solide et des compétences techniques réelles sortent du lot (BGB Formation 2025/2026, Studeria 2026). Il existe une vraie saturation de profils juniors IA purement théoriques, sans projets concrets. Ce n'est pas le marché que la communication de certaines formations IA laisse entendre.",
      },
      {
        type: "h3",
        text: "Importance du portfolio réel",
      },
      {
        type: "p",
        text: "Plusieurs analyses orientées carrière insistent sur 3 à 5 projets IA publiés sur GitHub pour les profils en reconversion (Adapte-toi 2026, BGB Formation 2026). Le \"projet portfolio numéro 1\" attendu par les recruteurs est souvent un assistant documentaire RAG, précisément parce qu'il illustre LLM, vector DB, backend et déploiement dans un même projet (Johan Puisais, 2026).",
      },
      {
        type: "h2",
        text: "L'IA comme extension naturelle du backend moderne",
      },
      {
        type: "p",
        text: "Pour un développeur backend, passer à l'IA ne ressemble pas vraiment à une reconversion. Tu ajoutes une couche LLM/RAG/agents à un socle d'APIs, de data et de cloud que tu connais déjà.",
      },
      {
        type: "p",
        text: "Le Réacteur explique que la valeur vient de plus en plus des développeurs \"augmentés par l'IA\", capables à la fois de maîtriser les fondamentaux du logiciel et d'intégrer l'IA dans leurs workflows (Le Réacteur, 2026). Google Cloud confirme cette vision dans ses rapports sur les tendances IA : la demande se concentre sur des cas d'usage concrets (agents, copilotes, recherche intelligente) intégrés dans des systèmes existants (Google Cloud AI Trends, 2025).",
      },
      {
        type: "p",
        text: "Pour un dev déjà à l'aise avec FastAPI/Django, Docker, SQL et CI/CD, les briques IA s'intègrent assez naturellement :",
      },
      {
        type: "ul",
        items: [
          "Appels LLM via API (OpenAI, Claude, Mistral)",
          "Conception d'un RAG : embeddings, vector DB, retrieval",
          "Agents IA qui orchestrent des outils : APIs métier, bases, services internes",
        ],
      },
      {
        type: "h2",
        text: "Opportunités et salaires : pourquoi la montée en IA change la donne",
      },
      {
        type: "p",
        text: "Les grilles publiées par Factoriel pour Paris/Île-de-France indiquent pour 2026 des salaires juniors (0-2 ans) en IA/ML généralement autour de 52-62 k€ pour un LLM / GenAI Engineer, avec des confirmés à 70-90 k€ et des seniors jusqu'à 120-160 k€ (Factoriel, 2026). Talma AI publie des fourchettes similaires : Data Scientist à 50-70 k€ en junior, ML Engineer à 60-80 k€ (Talma AI, 2026).",
      },
      {
        type: "p",
        text: "Glassdoor donne un salaire moyen d'environ 51 500 € pour un AI Engineer en France (2025), autour de 54 000 € à Paris (Glassdoor, 2025). Un article de Smart-Way sur le portage salarial Data & IA évoque des TJM de 750 à 1 500 €/jour pour les profils data/IA expérimentés en 2026 (Smart-Way, 2026).",
      },
      {
        type: "p",
        text: "Johan Puisais évoque une \"prime IA\" de l'ordre de +50-60 % par rapport à un développeur classique pour les profils capables de déployer du RAG et des agents en production (Johan Puisais, 2026). Le chiffre précis varie selon les sources, mais toutes placent les profils Data/IA bien outillés dans la fourchette haute des salaires IT.",
      },
      {
        type: "h2",
        text: "Roadmap 12 mois : de développeur backend à AI Engineer appliqué",
      },
      {
        type: "p",
        text: "Cette roadmap s'adresse à un dev backend avec 3 à 5 ans d'expérience qui veut évoluer vers AI Engineer ou GenAI Engineer en gardant un ancrage terrain.",
      },
      {
        type: "h3",
        text: "Mois 1-3 : solidifier le socle Python / backend / data",
      },
      {
        type: "p",
        text: "Objectif : être à l'aise pour construire une API Python propre et manipuler des données pour l'IA.",
      },
      {
        type: "p",
        text: "Côté backend : FastAPI (ou Django/DRF) pour les APIs REST, validation Pydantic, tests unitaires. Côté données : Pandas ou Polars, SQL avancé, bonnes pratiques de nettoyage. Infra : Docker, Git, pipeline CI simple avec tests et lint.",
      },
      {
        type: "p",
        text: "A ce stade, le critère est simple : une API Python déployée (projet perso ou conteneurisé), des tests de base qui passent, et la capacité à charger et explorer un dataset CSV ou SQL sans blocage.",
      },
      {
        type: "h3",
        text: "Mois 4-6 : premiers projets LLM / RAG visibles",
      },
      {
        type: "p",
        text: "Objectif : passer de \"j'utilise un LLM\" à \"je livre un produit IA simple de bout en bout\".",
      },
      {
        type: "p",
        text: "Appels API OpenAI, Claude ou Mistral, embeddings, vector DB parmi Qdrant, pgvector ou Weaviate. LangChain ou LlamaIndex pour les chaînes simples et le RAG basique. Deux projets concrets : un assistant documentaire (upload PDF, questions/réponses sur les documents) et un chatbot métier (FAQ interne ou documentation d'un produit). Les deux Dockerisés, avec variables d'environnement et configuration propre.",
      },
      {
        type: "p",
        text: "A ce stade : deux projets IA complets sur GitHub avec README et instructions d'installation, une démo utilisable, et la capacité à expliquer l'architecture sur un schéma simple (API, LLM, vector DB, stockage).",
      },
      {
        type: "h3",
        text: "Mois 7-9 : robustesse, MLOps léger et agents IA",
      },
      {
        type: "p",
        text: "Objectif : se rapprocher du niveau attendu en production.",
      },
      {
        type: "p",
        text: "Sur la robustesse : logging structuré, gestion des erreurs, métriques de base, stratégies de réduction des coûts LLM par cache ou arbitrage entre modèles locaux et API. Sur le MLOps : versionning des prompts, jeux de tests avec des questions/réponses de référence, suivi du taux de réponses pertinentes. Et un agent IA qui appelle au moins un outil externe de manière fiable : API interne, base SQL, service tiers.",
      },
      {
        type: "p",
        text: "A ce stade : un projet monitoré avec logs et métriques, et la capacité à justifier les choix techniques sur la latence, les coûts et la qualité des réponses.",
      },
      {
        type: "h3",
        text: "Mois 10-12 : spécialisation, validation externe et positionnement",
      },
      {
        type: "p",
        text: "Objectif : transformer tout ça en profil lisible pour le marché.",
      },
      {
        type: "p",
        text: "Choisir une spécialisation franche : AI Engineer orienté RAG/chatbots, orienté data/analytics (\"chat with data\"), ou orienté automation/AIOps. Passer une certification cloud/IA reconnue, par exemple le parcours Microsoft AI Engineer (successeur de AI-102) ou l'équivalent AWS/GCP, pour montrer la capacité à déployer dans un écosystème industriel (Microsoft, 2025-2026).",
      },
      {
        type: "p",
        text: "Repositionner le CV en \"AI Backend Engineer / GenAI Engineer\", mettre en avant trois projets IA sur GitHub, publier un post LinkedIn qui raconte la transition et les choix techniques concrets.",
      },
      {
        type: "p",
        text: "Pour entrer dans le niveau \"AI Engineer confirmé\" : trois projets bien documentés dont au moins un proche de conditions réelles (auth, logs, monitoring basique), une certification ou une contribution équivalente, et la capacité à raconter de A à Z un système IA conçu de bout en bout, du contexte métier jusqu'aux limites.",
      },
    ],
  },
  {
    title: "Authentification JWT dans une API Symfony avec API Platform : mise en place et sécurité",
    excerpt:
      "Retour d'expérience sur la mise en place d'une authentification JWT dans une API Symfony 7 avec API Platform : configuration LexikJWT, gestion des tokens, RBAC et erreurs courantes à éviter en production.",
    date: "20 juin 2026",
    isoDate: "2026-06-20",
    readingTime: "9 min",
    slug: "authentification-jwt-symfony-api-platform",
    tags: ["Symfony", "JWT", "Sécurité"],
    content: [
      {
        type: "p",
        text: "Sur le projet Kilifa, on avait besoin d'une authentification robuste pour une API documentaire exposée à plusieurs types d'utilisateurs avec des droits différents. On a choisi JWT avec LexikJWTAuthenticationBundle et une gestion RBAC côté API Platform. Voilà ce qu'on a mis en place, et surtout ce qu'on a évité.",
      },
      {
        type: "h2",
        text: "Pourquoi JWT plutôt que les sessions",
      },
      {
        type: "p",
        text: "Une API REST est sans état par définition. Les sessions côté serveur cassent ce principe : elles introduisent un état côté backend, compliquent le passage à l'échelle et posent des problèmes dès qu'on a plusieurs instances. JWT résout ça proprement — le token porte lui-même les informations nécessaires et le serveur n'a rien à stocker.",
      },
      {
        type: "p",
        text: "Ce n'est pas une solution universelle. JWT a ses contraintes : révocation non triviale, taille du payload qui influe sur chaque requête, clé secrète à protéger. Sur une API avec des sessions longues et un besoin de révocation immédiate, des alternatives existent. Pour notre cas — API consommée par des clients front et mobiles, sessions courtes, déploiement Docker — JWT était le bon choix.",
      },
      {
        type: "h2",
        text: "Installation et configuration LexikJWT",
      },
      {
        type: "p",
        text: "L'installation commence par le bundle et la génération des clés RSA. On évite les clés symétriques (HMAC) en production : une fuite de la clé secrète permet de signer n'importe quel token.",
      },
      {
        type: "code",
        lang: "bash",
        lines: [
          "composer require lexik/jwt-authentication-bundle",
          "",
          "# Générer les clés RSA (asymétrique — recommandé)",
          "php bin/console lexik:jwt:generate-keypair",
          "# Crée config/jwt/private.pem et config/jwt/public.pem",
        ],
      },
      {
        type: "p",
        text: "La configuration dans lexik_jwt_authentication.yaml :",
      },
      {
        type: "code",
        lang: "yaml",
        lines: [
          "lexik_jwt_authentication:",
          "    secret_key: '%env(resolve:JWT_SECRET_KEY)%'",
          "    public_key: '%env(resolve:JWT_PUBLIC_KEY)%'",
          "    pass_phrase: '%env(JWT_PASSPHRASE)%'",
          "    token_ttl: 3600  # 1 heure — adapter selon le besoin",
        ],
      },
      {
        type: "p",
        text: "Les chemins des clés et la passphrase viennent des variables d'environnement. Les fichiers .pem ne doivent jamais être versionnés — on les injecte via les secrets CI/CD ou un vault.",
      },
      {
        type: "h2",
        text: "Sécuriser le firewall Symfony",
      },
      {
        type: "p",
        text: "Le point d'entrée de l'authentification est un endpoint /api/login qui reçoit les credentials et retourne le token. Il faut le déclarer comme route publique et configurer le guard JWT sur les routes protégées.",
      },
      {
        type: "code",
        lang: "yaml",
        lines: [
          "# config/packages/security.yaml",
          "security:",
          "    firewalls:",
          "        login:",
          "            pattern: ^/api/login",
          "            stateless: true",
          "            json_login:",
          "                check_path: /api/login",
          "                username_path: email",
          "                password_path: password",
          "                success_handler: lexik_jwt_authentication.handler.authentication_success",
          "                failure_handler: lexik_jwt_authentication.handler.authentication_failure",
          "",
          "        api:",
          "            pattern: ^/api",
          "            stateless: true",
          "            jwt: ~",
          "",
          "    access_control:",
          "        - { path: ^/api/login, roles: PUBLIC_ACCESS }",
          "        - { path: ^/api/docs, roles: PUBLIC_ACCESS }",
          "        - { path: ^/api, roles: IS_AUTHENTICATED_FULLY }",
        ],
      },
      {
        type: "p",
        text: "Le stateless: true est essentiel — il désactive la session Symfony sur ce firewall. Sans ça, Symfony essaie de persister la session même sur une API REST.",
      },
      {
        type: "h2",
        text: "RBAC avec API Platform",
      },
      {
        type: "p",
        text: "Sur Kilifa, on avait trois rôles : ROLE_USER (lecture seule), ROLE_MANAGER (lecture et écriture), ROLE_ADMIN (tout). API Platform permet de définir les accès directement dans l'attribut #[ApiResource] via security.",
      },
      {
        type: "code",
        lang: "php",
        lines: [
          "#[ApiResource(",
          "    operations: [",
          "        new GetCollection(security: 'is_granted(\"ROLE_USER\")'),",
          "        new Get(security: 'is_granted(\"ROLE_USER\")'),",
          "        new Post(security: 'is_granted(\"ROLE_MANAGER\")'),",
          "        new Put(",
          "            security: 'is_granted(\"ROLE_MANAGER\") and object.getOwner() == user',",
          "        ),",
          "        new Delete(security: 'is_granted(\"ROLE_ADMIN\")'),",
          "    ]",
          ")]",
          "class Document",
          "{",
          "    // ...",
          "}",
        ],
      },
      {
        type: "p",
        text: "Le security sur Put combine le rôle ET la propriété de la ressource. C'est l'approche la plus granulaire — on évite de tout centraliser dans un voter si la logique reste simple.",
      },
      {
        type: "p",
        text: "Pour les cas plus complexes (droits dépendant du contexte métier, de l'état de la ressource), on bascule vers des Voters Symfony dédiés. L'attribut security peut appeler is_granted() avec n'importe quel voter.",
      },
      {
        type: "h2",
        text: "Ajouter des données au token JWT",
      },
      {
        type: "p",
        text: "Par défaut, le token contient uniquement le username. Pour éviter des appels base de données à chaque requête pour récupérer les rôles ou l'ID utilisateur, on enrichit le payload via un event listener.",
      },
      {
        type: "code",
        lang: "php",
        lines: [
          "// src/EventListener/JWTCreatedListener.php",
          "class JWTCreatedListener",
          "{",
          "    public function onJWTCreated(JWTCreatedEvent $event): void",
          "    {",
          "        $user = $event->getUser();",
          "        $payload = $event->getData();",
          "",
          "        $payload['id'] = $user->getId();",
          "        $payload['roles'] = $user->getRoles();",
          "",
          "        $event->setData($payload);",
          "    }",
          "}",
        ],
      },
      {
        type: "p",
        text: "Attention à ce qu'on met dans le payload : il est signé mais pas chiffré. Tout ce qui est dans le token est lisible par le client. On n'y met jamais de données sensibles (mot de passe hashé, informations personnelles).",
      },
      {
        type: "h2",
        text: "Refresh token et révocation",
      },
      {
        type: "p",
        text: "Un token JWT expiré force l'utilisateur à se reconnecter. Pour éviter ça sans allonger le TTL (ce qui augmente le risque en cas de fuite), on ajoute un refresh token avec gsprojekt/jwt-refresh-token-bundle.",
      },
      {
        type: "p",
        text: "Le flux est simple : le client reçoit un access token (TTL court, 1h) et un refresh token (TTL long, 30 jours, stocké en base). Quand l'access token expire, le client échange le refresh token contre un nouvel access token sans passer par /login.",
      },
      {
        type: "p",
        text: "La révocation reste le point faible de JWT. Si un access token est volé et n'a pas encore expiré, on ne peut pas l'invalider sans maintenir une blacklist côté serveur — ce qui réintroduit de l'état. Notre compromis : TTL court (1h) pour limiter la fenêtre d'exposition, révocation du refresh token en base en cas de déconnexion explicite.",
      },
      {
        type: "h2",
        text: "Erreurs courantes en production",
      },
      {
        type: "ul",
        items: [
          "Clés RSA versionnées dans le dépôt : les injecter via les secrets CI/CD ou un vault, jamais dans le code.",
          "TTL trop long : un token valable 24h ou plus est un risque. 1h avec refresh token est un bon équilibre.",
          "Pas de validation de l'audience (aud) : si l'API est consommée par plusieurs clients, valider que le token est bien destiné à ce service.",
          "Erreurs 401 opaques : configurer un entry_point clair qui retourne du JSON, pas une page HTML, pour ne pas bloquer les clients API.",
          "Oublier stateless: true : Symfony crée silencieusement une session, ce qui masque les problèmes et casse les déploiements multi-instances.",
        ],
      },
      {
        type: "p",
        text: "Sur Kilifa, l'authentification JWT a tenu sans incident sur toute la durée du projet. Le principal travail a été la configuration initiale et la mise en place des tests d'intégration sur les endpoints protégés — pas le JWT lui-même, qui reste simple à opérer une fois bien configuré.",
      },
    ],
  },
  {
    title: "Structurer une API REST robuste avec Symfony et API Platform",
    excerpt:
      "Retour d'expérience sur la mise en place d'une API REST fiable : conventions de nommage, gestion des erreurs, versioning et documentation automatique.",
    date: "15 sept. 2025",
    isoDate: "2025-09-15",
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
    isoDate: "2025-07-22",
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
    isoDate: "2025-05-10",
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

export const blogPosts = [..._blogPosts].sort((a, b) =>
  b.isoDate.localeCompare(a.isoDate)
);
