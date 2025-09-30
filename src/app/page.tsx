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
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl mx-auto border-4 border-amber-400">
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
    </motion.section>
  )

}