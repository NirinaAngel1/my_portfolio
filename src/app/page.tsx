"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {Github, Linkedin, Facebook, Gitlab} from "lucide-react";

export default function HomePage(){
  const containerVariants : Variants = {
    hidden:{opacity:0},
    visible:{
      opacity:1,
      transition:{
        staggerChildren:0.2
      },
    },
  };

  const itemVariants : Variants = {
    hidden:{opacity:0, y:20},
    visible:{
      opacity:1,
      y:0,
      transition:{
        type:"spring",
        stiffness:50,
      },
    },
  };

  return (
    <motion.section
    className="flex flex-col items-center justify-center h-full text-center px-4 py-12"
    variants={containerVariants}
    initial="hidden"
    animate="visible">
      <motion.div
      variants={itemVariants}
      className="mb-8">
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl mx-auto border-2 border-amber-400">
          <Image
          src="/Moi.jpg"
          alt="Photo de profil"
          width={192}
          height={192}
          className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
      <motion.h1
      variants={itemVariants}
      className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4"
      >
        Nirina, Développeur Web Full-Stack
      </motion.h1>
      <motion.p
      variants={itemVariants}
      className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
      >
        Transformant  les idées en expériences numériques élégantes et performantes.
      </motion.p>

      <motion.div
      variants={itemVariants}
      className="flex flex-col sm:flex-row items-center gap-4 mb-8"
      >
        <Link href="/projects" passHref>
          <motion.button
          whileHover={{ scale: 1.05}}
        whileTap={{ scale: 0.95 }}
          className="bg-amber-400 text-gray-900 font-semibold px-6 py-3 rounded-md shadow hover:bg-black hover:text-amber-400 hover:border-1 border-amber-400 transition-colors w-full sm:w-auto"
          >
          Découvrir mes Projets
          </motion.button>
        </Link>
         <Link href="/projects" passHref>
          <motion.button
          whileHover={{ scale: 1.05}}
        whileTap={{ scale: 0.95 }}
          className="text-amber-400 font-semibold py-3 px-8 rounded-md border border-amber-400 hover:bg-amber-400 hover:text-gray-900 transition-colors"
          >
          À propos de moi
          </motion.button>
        </Link>
      </motion.div>
      <motion.div variants={itemVariants} className="flex gap-6">
        <a
          href="https://github.com/votre-compte"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github
            size={32}
            className="text-gray-400 hover:text-white transition-colors"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/votre-compte"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin
            size={32}
            className="text-gray-400 hover:text-white transition-colors"
          />
        </a>
        <a
          href="https://twitter.com/votre-compte"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <Facebook
            size={32}
            className="text-gray-400 hover:text-white transition-colors"
          />
        </a>
      </motion.div>
    </motion.section>
  )

}