 "use client";

import React from 'react';
import { motion, Variants } from "framer-motion";
import ProjectCard from "@/components/projectCard";

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
    transition: { duration: 0.6, ease: "easeOut"},
  },
};

type Project = {
  id:string;
  title:string;
  description:string;
  github_url:string;
  image_url:string;
  slug:string;
}

type Props = {
  projects : Project[];
}

export default function ProjectList ({projects} : Props){
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-12 min-h-screen text-white"
    >
      <motion.h1
        variants={contentItemsVariants}
        className="text-4xl sm:text-5xl font-extrabold text-center text-amber-400 mb-10"
      >
        Mes projets réalisés
      </motion.h1>
      <motion.div variants={contentItemsVariants} className="bg-gray-800/60 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-4">
          {projects.map((proj) => (
            <ProjectCard
                key={proj.id}
                title={proj.title}
                description={proj.description}
                githubLink={proj.github_url}
                image={proj.image_url}
                slug={proj.slug}
              />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}; 