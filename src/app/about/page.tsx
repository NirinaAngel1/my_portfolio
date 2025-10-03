"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {Briefcase, Code, GraduationCap, Heart, Users, Star } from "lucide-react";

const containerVariants : Variants = {
    hidden:{opacity:0},
    visible:{
      opacity:1,
      transition:{
        staggerChildren:0.1
      },
    },
  };

const itemsVariants : Variants = {
    hidden:{opacity:0, y:30},
    visible:{
        opacity:1,
        y:0,
        transition:{duration:0.6, ease:"easeOut"        },
    },
}

const skillVariants : Variants = {
    hidden:{opacity:0, scale:0.8},
    visible:{opacity:1, scale:1, transition:{duration:0.5, type:"spring", stiffness:150}},
}

export default function AboutPage(){

    const experiences = [
        {
            role:"Développeur Web Junior (Projets personnels)",
            company:"Projets Indépendants",
            duration:"En cours",
            description:"Conception, développement et déploiement d'applications web complètes, démontrant une expertise dans les technologies modernes de développement.",
            skills:["PHP", "POO", "Symfony", "Javascript", "React", "Next.js", "MySQL", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
            icon:<Code className="w-6 h-6 text-amber-400"/>,
        },
        {
            role:"Superviseur d'équipe BPO & Graphiste",
            company:"ABL Outsourcing",
            duration:"Mai 2020 - Aujourd'hui",
            description : "Gestion d'une équipe de 15 personnes, coordination des opérations quotidiennes, et création de supports visuels pour améliorer la communication interne et externe.",
            skills:["Gestion d'équipe", "Communication", "Leadership", "Adobe Photoshop", "Adobe Illustrator", "Canva"],
            icon:<Users className="w-6 h-6 text-amber-400"/>,
        },
        {
            role:"Manager d'équipe BPO",
            company:"Outsourcia",
            duration:"2011-2018",
            description :"Encadrement de collaborateurs, planification et suivi de projets, évaluation des performances et résolution de problématiques opérationnelles.",
            skills:["Gestion d'équipe", "Planification", "Résolution de problèmes", "Communication"],
            icon:<Briefcase className="w-6 h-6 text-amber-400"/>,
        },
    ];

    const formations = [
        {
            organisme: "Tana IT Training",
            lieu: "Analamahitsy",
            periode: "Mai 2023 - Février 2025",
            titre: "Spécialisation en Développement Informatique et Conception de Solutions Logicielles",
            details: "Acquisition de compétences solides en **algorithmique**, **bases de la programmation**, et méthodologies de **conception logicielle**. Inclut également des modules de 'soft skills' pour l'intégration professionnelle.",
            competences: ["Algorithmique", "Bases de la programmation", "Conception logicielle", "Soft skills"],
        },
        {
      organisme: "CCF Harmony",
      lieu: "Ivandry",
      periode: "2024",
      titre: "Communication Interne & Externe",
      details: "Formation ciblée sur l'optimisation des flux d'information et des stratégies d'échange au sein et à l'extérieur de l'organisation.",
      competences: ["Communication Stratégique", "Rédaction Professionnelle", "Gestion des parties prenantes"],
    },
    {
      organisme: "CCF Harmony",
      lieu: "Ivandry",
      periode: "2022",
      titre: "Fondamentaux du Management",
      details: "Apprentissage des principes de base de la gestion d'équipe, de la planification des tâches et du suivi des performances.",
      competences: ["Planification", "Suivi de performance", "Délégation", "Encadrement"],
    },
    {
      organisme: "CCF Harmony",
      lieu: "Ivandry",
      periode: "2021",
      titre: "Leadership & Intelligence Émotionnelle",
      details: "Développement des capacités de leadership et de la conscience émotionnelle pour une meilleure gestion des relations interpersonnelles et une motivation accrue des équipes.",
      competences: ["Leadership", "Intelligence Émotionnelle", "Gestion de conflit", "Motivation d'équipe"],
    },
    ];

    const technologies = [
        // Frontend
    { name: "React.js", icon: "devicon-react-original", level: "Intermédiaire" },
    { name: "JavaScript", icon: "devicon-javascript-plain", level: "Avancé" },
    { name: "Next.js", icon: "devicon-nextjs-plain", level: "Intermédiaire" }, // Ajouté avec niveau intermédiaire par défaut
    { name: "TypeScript", icon: "devicon-typescript-plain", level: "Intermédiaire" }, // Ajusté pour cohérence
    
    // Backend & Langages
    { name: "PHP", icon: "devicon-php-plain", level: "Avancé" },
    { name: "POO (Programmation Orientée Objet)", icon: "devicon-php-plain", level: "Intermédiaire" },
    { name: "Symfony", icon: "devicon-symfony-original", level: "Intermédiaire" },
        
    // Base de données
    { name: "MySQL", icon: "devicon-mysql-plain", level: "Avancé" },
        
    // CSS & Frameworks
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", level: "Avancé" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain", level: "Intermédiaire" }, // Ajouté avec niveau intermédiaire
    
    // Template Engine
    { name: "Twig", icon: "devicon-twig-plain", level: "Avancé" }, // Ajouté
    
    // Outils & Autres
    { name: "API REST", icon: "devicon-confluence-plain", level: "Avancé" }, // Ajouté
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
                className="text-5xl font-extrabol text-center text-amber-400 mb-10"
            >À Propos de Moi</motion.h1>

            <div className="flex flex-col lg:flex-row gap-12 items-start">
                {/* photo et présentation */}
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
                        Développeur Web Full-Stack passionné, fort de plusieurs années d'expérience en management d'équipe et supervision. Mon parcours polyvalent me confère une vision stratégique et une approche rigoureuse pour concrétiser des projets innovants.
                    </p>
                    <motion.a
                        href="/CV_Nirina_Angelin.pdf"
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 bg-amber-400 hover:bg-amber-600 text-gray-900 font-bold py-y px-6 rounded-full shadow-md transition-colors"
                    >
                        Télécharger mon CV
                    </motion.a>
                </motion.div>
                {/* parcours, compétences, expériences et formations */}
                <div className="lg:w-2/3 flex flex-col gap-12">
                    <motion.div
                        variants={itemsVariants}
                        className="bg-gray-800 p-8 rounded-lg shadow-xl"
                    >
                        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3"><GraduationCap size={32}/>Parcours & Compétences</h2>
                        <p className="text-lg mb-4 text-center text-gray-300">
                            J'ai débuté mon parcours professionnel chez Outsourcia où j'ai rapidement progressé pour devenir Manager d'équipe BPO et Graphiste. J'ai ensuite consolidé mon expertise en rejoignant ABL Outsourcing en tant que Superviseur d'Équipe, développant mes compétences en leadership et en gestion de projet multidisciplinaire. Aujourd'hui, je capitalise sur cette solide base managériale en y fusionnant ma passion et mes compétences en développement web Full-Stack (PHP/Symfony, React.js, Tailwind CSS) pour concevoir et créer des solutions logicielles complètes et performantes.
                        </p>
                        {/* expérience pros */}
                        <h3 className="text-2xl font-bold text-amber-400 mb-4">
                            expériences Professionnelles
                        </h3>
                        <div className="space-y-6">
                            {experiences.map((exp, i)=>(
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
                                        {exp.skills.map((skill, id)=>(
                                            <span key={id} className="bg-amber-500 text-gray-900 text-xs px-2 py-1 rounded-full">{skill}</span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                            {/* formations             */}
                            <h3 className="text-2xl font-bold text-amber-400 mt-8 mb-4">Formations</h3>
                            <div className="space-y-6">
                                {formations.map((formation, index) => (
    <motion.div 
        key={index} // Clé unique pour chaque élément de la liste
        variants={itemsVariants} 
        className="border-l-4 border-amber-500 pl-4 mb-6" // Ajout de mb-6 pour l'espacement
    >
        {/* Titre de la formation */}
        <h4 className="text-xl font-semibold text-white">
            {formation.titre}
        </h4>
        
        {/* Période et Organisme/Lieu */}
        <p className="text-gray-400 italic mb-1">
            {formation.organisme} ({formation.lieu}) | {formation.periode}
        </p>
        
        {/* Détails de la formation */}
        <p className="text-gray-300">
            {formation.details}
        </p>
        
        {/* Optionnel : Afficher les compétences clés de la formation */}
        {formation.competences && formation.competences.length > 0 && (
            <p className="text-sm text-gray-500 mt-2">
                Compétences clés : {formation.competences.join(', ')}
            </p>
        )}
    </motion.div>
))}
                            </div>
                    </motion.div>
                </div>
            </div>

        </motion.div>
    )


      
}