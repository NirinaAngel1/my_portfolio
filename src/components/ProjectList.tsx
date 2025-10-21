"use client";

import React, { useState } from 'react';
import { motion, Variants } from "framer-motion";
import ProjectCard from "@/components/projectCard";
import ProjectListItem from './ProjectListItem'; // Assurez-vous que ce composant est bien défini
import { LayoutList, Grid2X2 } from "lucide-react"; // Importation de Grid2X2 pour la clarté

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const contentItemsVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

type Project = {
  id: bigint;
  title: string;
  description: string;
  github_url: string;
  image_url: string;
  slug: string;
}

type Props = {
  projects: Project[];
}

export default function ProjectList({ projects }: Props) {

  const [isInList, setIsInList] = useState(false);

  const toggleView = () => {
    setIsInList(!isInList);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-12 min-h-screen bg-gray-900/50 text-white"
    >
      {/* Correction de la classe du div d'en-tête */}
      <div className='flex justify-between items-start'>
        <motion.h1
          variants={contentItemsVariants}
          className="text-4xl sm:text-5xl font-extrabold text-amber-400 mb-10 text-left" // Alignement corrigé pour laisser de la place au bouton
        >
          Mes projets réalisés
        </motion.h1>

        {/* Bouton pour basculer la vue */}
        <button
          onClick={toggleView}
          className="self-start mt-4 hover:scale-110 transition-transform duration-200 text-amber-200 hover:text-amber-400"
          aria-label={isInList ? "Afficher en grille" : "Afficher en liste"}
        >
          {isInList ? (
            // Affiche l'icône de grille (Grid2X2) quand on est en mode Liste
            <Grid2X2 size={26} className='cursor-pointer' />
          ) : (
            // Affiche l'icône de liste (LayoutList) quand on est en mode Carte
            <LayoutList size={26} className='cursor-pointer' />
          )}
        </button>
      </div>

      {/* Correction de la structure conditionnelle de rendu */}
      {isInList ? (
        // --- AFFICHAGE EN LISTE (Mode isInList = true) ---
        <motion.div
          variants={contentItemsVariants}
          className="bg-gray-800 p-6 rounded-lg space-y-0" // Utiliser space-y-4 dans le div intérieur si nécessaire
        >
          {projects.map((project) => (
            // Utilisation de .toString() pour une clé valide si 'id' est un BigInt
            <ProjectListItem key={project.id.toString()} project={project} />
          ))}
        </motion.div>
      ) : (
        // --- AFFICHAGE EN GRILLE/CARTES (Mode isInList = false) ---
        <motion.div variants={contentItemsVariants} className="bg-gray-800 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-4">
            {projects.map((proj) => (
              <ProjectCard
                id={proj.id}
                key={proj.id.toString()} // Utilisation de .toString() pour une clé valide si 'id' est un BigInt
                title={proj.title}
                description={proj.description}
                githubLink={proj.github_url}
                image={proj.image_url}
                slug={proj.slug}
              />
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};