// app/contact/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, Linkedin, Github, Gitlab, Send } from "lucide-react"; // Ajout de l'icône Send
import { motion, Variants } from "framer-motion";

export default function ContactPage() {
  // État pour gérer les valeurs du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Gère les changements dans les champs du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Gère la soumission du formulaire (pour l'instant, juste un log)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ici, vous intégreriez la logique d'envoi à une API ou un service tiers
    console.log("Formulaire soumis:", formData);
    alert("Formulaire soumis ! (La logique d'envoi n'est pas encore implémentée)");
    // Optionnel: Réinitialiser le formulaire après soumission
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4 sm:p-8"
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl sm:text-5xl font-extrabold text-amber-400 mb-8 text-center"
      >
        Contactez-moi
      </motion.h1>

      {/* SECTION : Autres moyens de contact (vos informations initiales) */}
      <motion.div
        variants={itemVariants}
        className="bg-gray-800 p-6 sm:p-10 rounded-lg shadow-2xl max-w-lg w-full text-center border border-gray-700 mb-12" // Ajout de mb-12 pour espacer le formulaire
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Autres Contacts</h2>
        <p className="text-lg sm:text-xl mb-6 text-gray-300">
          Vous pouvez me contacter via les moyens suivants :
        </p>

        <ul className="space-y-4 text-left mx-auto max-w-sm">
          <motion.li variants={itemVariants} className="flex items-center justify-center sm:justify-start gap-3 text-lg text-gray-200">
            <Mail size={24} className="text-blue-400 flex-shrink-0" />
            <span className="flex-grow">Email :</span>
            <div className="flex flex-col sm:items-center sm:space-x-2 text-right">
              <Link href="mailto:angen3r@gmail.com" className="hover:text-amber-400 transition-colors text-sm sm:text-base">
                angen3r@gmail.com
              </Link>
              <Link href="mailto:angen1r@yahoo.fr" className="hover:text-amber-400 transition-colors text-sm sm:text-base">
                angen1r@yahoo.fr
              </Link>
            </div>
          </motion.li>

          <motion.li variants={itemVariants} className="flex items-center justify-center sm:justify-start gap-3 text-lg text-gray-200">
            <Phone size={24} className="text-green-400 flex-shrink-0" />
            <span className="flex-grow">Téléphone :</span>
            <div className="flex flex-col sm:items-center sm:space-x-2 text-right">
              <Link href="tel:+261339455710" className="hover:text-amber-400 transition-colors text-sm sm:text-base">
                +261 33 94 557 10
              </Link>
              <Link href="tel:+261341227314" className="hover:text-amber-400 transition-colors text-sm sm:text-base">
                +261 34 12 273 14
              </Link>
            </div>
          </motion.li>

          <motion.li variants={itemVariants} className="flex items-center justify-center sm:justify-start gap-3 text-lg text-gray-200">
            <Linkedin size={24} className="text-blue-600 flex-shrink-0" />
            <span className="flex-grow">LinkedIn :</span>
            <Link
              href="https://www.linkedin.com/in/nirina-angelin-razafimandimb/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors text-sm sm:text-base underline"
            >
              Mon profil LinkedIn
            </Link>
          </motion.li>

          <motion.li variants={itemVariants} className="flex items-center justify-center sm:justify-start gap-3 text-lg text-gray-200">
            <Github size={24} className="text-purple-400 flex-shrink-0" />
            <span className="flex-grow">GitHub :</span>
            <Link
              href="https://github.com/NirinaAngel1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors text-sm sm:text-base underline"
            >
              Lien GitHub
            </Link>
          </motion.li>

          <motion.li variants={itemVariants} className="flex items-center justify-center sm:justify-start gap-3 text-lg text-gray-200">
            <Gitlab size={24} className="text-orange-500 flex-shrink-0" />
            <span className="flex-grow">GitLab :</span>
            <Link
              href="https://gitlab.com/Nirina_Angel1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors text-sm sm:text-base underline"
            >
              Lien GitLab
            </Link>
          </motion.li>
        </ul>
      </motion.div>

      {/* NOUVELLE SECTION : Formulaire de Contact (maintenant en dessous) */}
      <motion.div
        variants={itemVariants}
        className="bg-gray-800 p-6 sm:p-10 rounded-lg shadow-2xl max-w-lg w-full border border-gray-700 mt-12" // Ajout de mt-12 pour l'espacement
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Envoyer un Message</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-700 border-gray-600 focus:border-transparent"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-700 border-gray-600 focus:border-transparent"
              placeholder="Votre email"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-gray-300 text-sm font-bold mb-2">
              Sujet
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-700 border-gray-600 focus:border-transparent"
              placeholder="Sujet du message"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-700 border-gray-600 focus:border-transparent resize-y"
              placeholder="Votre message"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-gray-800 flex items-center justify-center gap-2"
          >
            Envoyer
            <Send size={20} />
          </motion.button>
        </form>
      </motion.div>
    </motion.main>
  );
}