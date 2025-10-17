// components/ProjectList.tsx
"use client";

import React from 'react';
import { motion, Variants } from "framer-motion";
import ProjectCard from './projectCard';

// Les variants du conteneur global (la liste elle-même)
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      // staggerChildren: 0.1, // Stagger peut être géré par whileInView sur les cartes individuelles
    },
  },
};

// Les variants pour les éléments qui ne sont pas des cartes (titre, cadre gris)
const contentItemsVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Mettez à jour ce type pour qu'il corresponde au modèle Prisma `Project` et à l'interface `Project` de ProjectCard
type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string; // Correspond à ProjectCard
  githubUrl: string; // Correspond à ProjectCard
  liveUrl?: string | null; // Correspond à ProjectCard
  slug: string;
  technologies: string[];
  category?: string | null;
};

type Props = {
  projects: Project[];
};

export default function ProjectList({ projects }: Props) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-12 bg-gray-900 min-h-screen text-white" // Ajout de bg-gray-900 et min-h-screen
    >
      <motion.h1
        variants={contentItemsVariants} // Utilise les variants pour les éléments de contenu
        className="text-4xl sm:text-5xl font-extrabold text-center text-amber-400 mb-10"
      >
        Mes projets réalisés
      </motion.h1>

      <motion.div variants={contentItemsVariants} className="bg-gray-800/60 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-4">
          {projects.map((proj) => (
            <ProjectCard
              key={proj.id}
              id={proj.id} // Assurez-vous de passer l'ID
              title={proj.title}
              description={proj.description}
              githubUrl={proj.githubUrl} // Utilisez githubUrl
              imageUrl={proj.imageUrl} // Utilisez imageUrl
              liveUrl={proj.liveUrl}
              slug={proj.slug}
              technologies={proj.technologies}
              category={proj.category}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}