// app/about/page.tsx
"use client";

import React, { useState } from "react"; // Importez useState ici
import Image from "next/image";
import {
  Briefcase,
  Code,
  GraduationCap,
  Users,
  Star,
  ChevronDown, // Importez ChevronDown
  ChevronUp, // Importez ChevronUp
} from "lucide-react";
import { motion, Variants } from "framer-motion";
// `useEffect` et `stringify` ne sont pas utilisés, peuvent être retirés
// import { useEffect } from "react";
// import { stringify } from "querystring";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemsVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const skillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: "spring", stiffness: 150 } },
};

// --- NOUVELLE VARIANTE POUR L'ANIMATION DE CONTENU DÉPLIABLE ---
const contentRevealVariants: Variants = {
  hidden: { opacity: 0, height: 0, overflow: 'hidden' }, // Important pour cacher l'overflow
  visible: { opacity: 1, height: "auto", transition: { duration: 0.4, ease: "easeOut" } },
};
// -----------------------------------------------------------------

export default function AboutPage() {
  // L'état `openSections` est bien placé ici.
  const [openSections, setOpenSections] = useState({
    experiences: true, // Laissez la première section ouverte par défaut si vous le souhaitez
    formations: false,
    technologies: false,
    softSkills: false,
  });

  // La fonction `toggleSection` est bien placée ici.
  const toggleSection = (sectionName: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
  };

  const experiences = [
    {
      role: "Développeur Web Junior (Projets personnels)",
      company: "Projets Indépendants",
      duration: "En cours",
      description:
        "Conception, développement et déploiement d'applications web complètes, démontrant une expertise dans les technologies modernes de développement.",
      skills: [
        "PHP",
        "POO",
        "Symfony",
        "Javascript",
        "React",
        "Next.js",
        "MySQL",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
      ],
      icon: <Code className="w-6 h-6 text-amber-400" />,
    },
    {
      role: "Superviseur d'équipe BPO & Graphiste",
      company: "ABL Outsourcing",
      duration: "Mai 2020 - Aujourd'hui",
      description:
        "Gestion d'une équipe de 15 personnes, coordination des opérations quotidiennes, et création de supports visuels pour améliorer la communication interne et externe.",
      skills: ["Gestion d'équipe", "Communication", "Leadership", "Adobe Photoshop", "Adobe Illustrator", "Canva"],
      icon: <Users className="w-6 h-6 text-amber-400" />,
    },
  ];

  const formations = [
    {
      organisme: "Tana IT Training",
      lieu: "Analamahitsy",
      periode: "Mai 2023 - Février 2025",
      titre: "Spécialisation en Développement Informatique et Conception de Solutions Logicielles",
      details:
        "Acquisition de compétences solides en algorithmique, bases de la programmation, et méthodologies de conception logicielle. Inclut également des modules de 'soft skills' pour l'intégration professionnelle.",
      competences: ["Algorithmique", "Bases de la programmation", "Conception logicielle", "Soft skills"],
    },
    {
      organisme: "CCF Harmony",
      lieu: "Ivandry",
      periode: "2024",
      titre: "Communication Interne & Externe",
      details:
        "Formation ciblée sur l'optimisation des flux d'information et des stratégies d'échange au sein et à l'extérieur de l'organisation.",
      competences: ["Communication Stratégique", "Rédaction Professionnelle", "Gestion des parties prenantes"],
    },
    {
      organisme: "CCF Harmony",
      lieu: "Ivandry",
      periode: "2022",
      titre: "Fondamentaux du Management",
      details:
        "Apprentissage des principes de base de la gestion d'équipe, de la planification des tâches et du suivi des performances.",
      competences: ["Planification", "Suivi de performance", "Délégation", "Encadrement"],
    },
    {
      organisme: "CCF Harmony",
      lieu: "Ivandry",
      periode: "2021",
      titre: "Leadership & Intelligence Émotionnelle",
      details:
        "Développement des capacités de leadership et de la conscience émotionnelle pour une meilleure gestion des relations interpersonnelles et une motivation accrue des équipes.",
      competences: ["Leadership", "Intelligence Émotionnelle", "Gestion de conflit", "Motivation d'équipe"],
    },
  ];

  const technologies = [
    // Frontend
    { name: "React.js", icon: "devicon-react-original", level: "Intermédiaire" },
    { name: "JavaScript", icon: "devicon-javascript-plain", level: "Avancé" },
    { name: "Next.js", icon: "devicon-nextjs-plain", level: "Intermédiaire" },
    { name: "TypeScript", icon: "devicon-typescript-plain", level: "Intermédiaire" },

    // Backend & Langages
    { name: "PHP", icon: "devicon-php-plain", level: "Avancé" },
    { name: "POO (Programmation Orientée Objet)", icon: "devicon-php-plain", level: "Intermédiaire" },
    { name: "Symfony", icon: "devicon-symfony-original", level: "Intermédiaire" },

    // Base de données
    { name: "MySQL", icon: "devicon-mysql-plain", level: "Avancé" },

    // CSS & Frameworks
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", level: "Avancé" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain", level: "Intermédiaire" },

    // Template Engine
    { name: "Twig", icon: "devicon-twig-plain", level: "Avancé" },

    // Outils & Autres
    { name: "API REST", icon: "devicon-confluence-plain", level: "Avancé" },
    { name: "Git", icon: "devicon-git-plain", level: "Avancé" },
  ];

  const softSkills = [
    { name: "Résolution de problèmes", icon: <Star size={24} /> },
    { name: "Communication efficace", icon: <Users size={24} /> },
    { name: "Adaptabilité", icon: <Code size={24} /> },
    { name: "Travail d'équipe", icon: <Briefcase size={24} /> },
    { name: "Leadership", icon: <GraduationCap size={24} /> },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-12"
    >
      <motion.h1
        variants={itemsVariants}
        className="text-5xl font-extrabold text-center text-amber-400 mb-10"
      >
        À Propos de Moi
      </motion.h1>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Section photo et présentation */}
        <motion.div
          variants={itemsVariants}
          className="lg:w-1/3 flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-xl"
        >
          <Image
            src="/Moi.jpg"
            alt="Photo de profil"
            width={250}
            height={250}
            className="rounded-full border-4 border-amber-500 mb-6 object-cover"
            priority={true}
          />
          <h2 className="text-3xl font-bold text-white mb-3">Nirina Angelin</h2>
          <p className="text-lg text-gray-300 text-center mb-4">
            Développeur Web Full-Stack passionné, fort de plusieurs années d&apos;expérience en management d&apos;équipe et supervision. Mon parcours polyvalent me confère une vision stratégique et une approche rigoureuse pour concrétiser des projets innovants.
          </p>
          <motion.a
            href="/CV_Nirina_Angelin.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 bg-amber-400 hover:bg-amber-600 text-gray-900 font-bold py-3 px-6 rounded-full shadow-md transition-colors"
          >
            Télécharger mon CV
          </motion.a>
        </motion.div>

        {/* Section principale avec parcours, compétences, expériences et formations */}
        <div className="lg:w-2/3 flex flex-col gap-8">
          <motion.div
            variants={itemsVariants}
            className="bg-gray-800 p-8 rounded-lg shadow-xl"
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <GraduationCap size={32} /> Parcours & Compétences
            </h2>
            <p className="text-lg mb-4 text-center text-gray-300">
              J&apos;ai débuté mon parcours professionnel chez Outsourcia où j&apos;ai rapidement progressé pour devenir Manager d&apos;équipe BPO et Graphiste. J'ai ensuite consolidé mon expertise en rejoignant ABL Outsourcing en tant que Superviseur d'Équipe, développant mes compétences en leadership et en gestion de projet multidisciplinaire. Aujourd'hui, je capitalise sur cette solide base managériale en y fusionnant ma passion et mes compétences en développement web Full-Stack (PHP/Symfony, React.js, Tailwind CSS) pour concevoir et créer des solutions logicielles complètes et performantes.
            </p>

            {/* Expériences Professionnelles - SECTION DÉPLIABLE */}
            <motion.div variants={itemsVariants} className="mt-8">
              <button
                onClick={() => toggleSection('experiences')}
                className="w-full flex justify-between items-center text-2xl font-bold text-amber-400 py-3 px-4 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors focus:outline-none"
              >
                Expériences Professionnelles
                {openSections.experiences ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>
              <motion.div
                variants={contentRevealVariants}
                initial="hidden"
                animate={openSections.experiences ? "visible" : "hidden"}
                className="overflow-hidden" // Crucial pour l'animation de hauteur
              >
                <div className="space-y-6 mt-4 p-4 border-t border-gray-700 pt-4"> {/* Ajout de bordure et padding */}
                  {experiences.map((exp, i) => (
                    <motion.div
                      key={i}
                      variants={itemsVariants}
                      className="border-l-4 border-amber-500 pl-4"
                    >
                      <h4 className="text-xl font-semibold text-white flex items-center">
                        <span className="flex-shrink-0 mr-2">{exp.icon}</span> {exp.role}
                      </h4>
                      <p className="text-gray-400 italic mb-1">{exp.company} | {exp.duration}</p>
                      <p className="text-gray-300 ">{exp.description}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {exp.skills.map((skill, id) => (
                          <span key={id} className="bg-amber-500 text-gray-900 text-xs px-2 py-1 rounded-full">{skill}</span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Formations - SECTION DÉPLIABLE */}
            <motion.div variants={itemsVariants} className="mt-8">
              <button
                onClick={() => toggleSection('formations')}
                className="w-full flex justify-between items-center text-2xl font-bold text-amber-400 py-3 px-4 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors focus:outline-none"
              >
                Formations
                {openSections.formations ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>
              <motion.div
                variants={contentRevealVariants}
                initial="hidden"
                animate={openSections.formations ? "visible" : "hidden"}
                className="overflow-hidden"
              >
                <div className="space-y-6 mt-4 p-4 border-t border-gray-700 pt-4">
                  {formations.map((formation, index) => (
                    <motion.div
                      key={index}
                      variants={itemsVariants}
                      className="border-l-4 border-amber-500 pl-4 mb-6"
                    >
                      <h4 className="text-xl font-semibold text-white">
                        {formation.titre}
                      </h4>
                      <p className="text-gray-400 text-sm font-semibold mb-1">
                        {formation.organisme} ({formation.lieu}) | {formation.periode}
                      </p>
                      <p className="text-gray-300">
                        {formation.details}
                      </p>
                      {formation.competences && formation.competences.length > 0 && (
                        <p className="text-sm text-gray-400 mt-2">
                          Compétences clés : {formation.competences.join(', ')}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Technologies - SECTION DÉPLIABLE */}
            <motion.div variants={itemsVariants} className="mt-8">
              <button
                onClick={() => toggleSection('technologies')}
                className="w-full flex justify-between items-center text-2xl font-bold text-amber-400 py-3 px-4 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors focus:outline-none"
              >
                Technologies
                {openSections.technologies ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>
              <motion.div
                variants={contentRevealVariants}
                initial="hidden"
                animate={openSections.technologies ? "visible" : "hidden"}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-4 p-4 border-t border-gray-700 pt-4">
                  {technologies.map((tech, id) => (
                    <motion.div
                      key={id}
                      variants={skillVariants} // Utilisez skillVariants ici pour l'animation des cartes de compétences
                      className="flex flex-col items-center bg-gray-900 p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
                    >
                      <i className={`${tech.icon} colored text-5xl mb-2`}></i>
                      <span className="text-white text-md font-semibold ">{tech.name}</span>
                      <span className="text-sm text-gray-400">{tech.level}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Soft Skills - SECTION DÉPLIABLE */}
            <motion.div variants={itemsVariants} className="mt-8">
              <button
                onClick={() => toggleSection('softSkills')}
                className="w-full flex justify-between items-center text-2xl font-bold text-amber-400 py-3 px-4 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors focus:outline-none"
              >
                Soft Skills
                {openSections.softSkills ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>
              <motion.div
                variants={contentRevealVariants}
                initial="hidden"
                animate={openSections.softSkills ? "visible" : "hidden"}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 p-4 border-t border-gray-700 pt-4">
                  {softSkills.map((skill, id) => (
                    <motion.div
                      key={id}
                      variants={skillVariants} // Utilisez skillVariants ici
                      className="flex items-center gap-3 bg-gray-900 p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
                    >
                      {skill.icon}
                      <span className="text-white text-md font-semibold">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}