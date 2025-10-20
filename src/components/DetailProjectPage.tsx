"use client";

import React from "react";
import Image from "next/image";
import { Github, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface Project{
    id: bigint | string;
    title: string;
    description: string;
    image_url: string;
    github_url: string;
    slug: string;
}

interface Props{
    project: Project;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};


export default function DetailProjectPage({project}:Props) {
    return (
        <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen bg-gray-900 text-white py-10 px-6 flex flex-col items-center"
        >
            <motion.h1
            variants={contentVariants}
            className="text-4xl font-extrabold mb-6 text-amber-400"
            >{project.title}</motion.h1>
            <motion.div
            variants={contentVariants}
            className="bg-gray-800/70 p-6 sm:p-10 rounded-2xl shadow-lg max-w-5xl w-full"
            >
                <div className="relative w-full h-64 sm:h-96 mb-8 rounded-lg overflow-hidden">
                    <Image
                        src={project.image_url || "/placeholder.jpg"}
                        alt={project.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                    </div>
                    <motion.p
                    variants={contentVariants}
                    className="text-gray-300 text-lg leading-relaxed mb-8"
                    >{project.description}</motion.p>

                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <Link
                            href="/projet"
                            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition duration-200 ease-in-out"
                        >
                            <ArrowLeft size={20} />
                            <span>Retour aux projets</span>
                        </Link>

                        <a
                            href={project.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out"
                        >
                            <Github size={22} />
                            <span>Voir sur GitHub</span>
                        </a>
                        </div>

            </motion.div>
        </motion.div>
    )
}