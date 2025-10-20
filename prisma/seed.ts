import prisma from '../src/lib/prisma';


async function main() {
  await prisma.project.createMany({
    data: [
      {
        title: "Gestion de membre et Assignation automatique des tâches",
        description: "Gérez vos événements et vos membres en toute simplicité. Cette application facilite l'organisation au sein d'une association. Création des événements, assignation des tâches aux membres manuellement ou automatiquement. Pilotage des rôles, suivi de l’implication de chacun et centralisation de toutes les informations essentielles dans un outil intuitif et performant. Un gain de temps et une gestion optimisée.",
        image_url: "https://00akrvgbvn.ufs.sh/f/KhVh7a2ycu1lvcon4E4tCgZ0UarNXJ7dDc5L6QFfnjkzqoxO",
        github_url: "https://gitlab.com/nirina_project/membre_gestion.git",
        slug:"gestion-membre-assignation-taches"
      },
      {
        title: "Application de gestion d'événements",
        description: "Plateforme complète de gestion et de réservation d'événements, conçue pour mettre en relation organisateurs et participants. Développée avec le framework PHP Symfony, l'application garantit une architecture backend robuste et sécurisée. L'affichage est géré par Twig, assurant une séparation claire des préoccupations, et l'interface utilisateur est stylisée avec Bootstrap pour un design responsive et professionnel.",
        image_url: "https://00akrvgbvn.ufs.sh/f/KhVh7a2ycu1lqSUYNWHqElWy3taiZMcNsw7SPvOmTzr6eu2n",
        github_url: "https://gitlab.com/nirina_project/gest_evenement.git",
        slug:"application-gestion-evenements"
      },
      {
        title: "Gestion de Stock",
        description: "Première version d'une application de gestion de stock, développée dans une approche PHP Orienté Objet (POO). Ce projet a servi de base pour maîtriser les fondamentaux du développement backend en PHP (CRUD, gestion de base de données). L'application permet d'effectuer les opérations basiques de suivi de stock (ajout, consultation, mise à jour de produits).",
        image_url: "https://00akrvgbvn.ufs.sh/f/KhVh7a2ycu1l1OV2EDIbaM3jW0uDA5wvOnXrtQxVNqehsG8B",
        github_url: "https://gitlab.com/nirina_project/geststock.git",
        slug:"gestion-de-stock"
      },
      {
        title: "ToDo List",
        description: "Application ToDo List complète, développée en utilisant PHP pour une gestion robuste du backend. L'interface est conçue avec Tailwind CSS (design moderne, entièrement responsive) et les interactions (ajout/suppression instantanés) sont assurées par JavaScript, offrant une expérience utilisateur fluide et réactive.",
        image_url: "https://00akrvgbvn.ufs.sh/f/KhVh7a2ycu1lYrk5MiurnmQKOaJqXzue4hyFLp9fHWN2EC7j",
        github_url: "https://gitlab.com/nirina_project/todolist.git",
        slug:"todo-list"
      },
    ]
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
