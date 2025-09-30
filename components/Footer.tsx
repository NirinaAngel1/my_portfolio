"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone
} from "lucide-react";
import React from "react";

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://twitter.com/votre-compte", icon: <Twitter size={20} /> },
    { href: "https://www.linkedin.com/in/votre-compte", icon: <Linkedin size={20} /> },
    { href: "https://github.com/votre-compte", icon: <Github size={20} /> },
    { href: "https://www.facebook.com/votre-page", icon: <Facebook size={20} /> },
    { href: "https://www.instagram.com/votre-compte", icon: <Instagram size={20} /> },
  ];

  const legalLinks = [
    { href: "/mentions-legales", label: "Mentions Légales" },
    { href: "/politique-de-confidentialite", label: "Politique de Confidentialité" },
    { href: "/conditions-d-utilisation", label: "Conditions d'Utilisation" },
  ];

  const mainLinks = [
    { href: "/", label: "Accueil"},
    { href: "/about", label: "À propos"},
    { href: "/contact", label: "Contact"},
    { href: "/projet", label: "Mes Projets"},
  ];

  const linkClasses = (href) =>
    `flex items-center gap-2 px-2 py-1 rounded-md transition-colors ${
      pathname === href ? "text-gray-300 font-semibold" : "hover:text-white text-gray-200"
    }`;

  return (
    <footer className="bg-gray-950 text-gray-300 shadow-lg py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Colonne 1: Logo et Description */}
        <div>
          <h3 className="text-xl font-bold text-amber-500 mb-4">Qui suis-je ?</h3>
          <p className="text-sm">
            Développeur web passionné, je transforme vos idées en solutions numériques
            performantes et élégantes. Découvrez mes projets et n'hésitez pas à me contacter.
          </p>
          <div className="flex gap-4 mt-4">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Colonne 2: Liens de navigation */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
          <nav className="flex flex-col gap-2">
            {mainLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={linkClasses(href)}>
                <span>{label}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Colonne 3: Liens légaux et de contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Informations</h4>
          <nav className="flex flex-col gap-2">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white text-gray-400">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 text-gray-400">
            {/* Ligne corrigée */}
            <p className="flex items-center gap-2 text-sm"><Mail size={20} /> <a href="mailto:angen1r@yahoo.fr" className="hover:text-white"> : angen1r@yahoo.fr</a></p>
            {/* Ligne corrigée */}
            <p className="flex items-center gap-2 text-sm"><Phone size={20} /> <a href="tel:+261341227314" className="hover:text-white"> : +261 34 12 273 14</a></p>
          </div>
        </div>
      </div>

      {/* Bandeau inférieur du footer */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="container mx-auto px-6 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Nirina Portfolio. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}