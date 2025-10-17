// components/ProjectCard.tsx
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Gitlab, Github, ExternalLink } from "lucide-react"; // Ajout de ExternalLink pour un liveUrl

interface Project {
  id: string; // Ajouté pour la clé
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  slug: string;
  }

// Les variants de la carte (Contrôlés par le parent ProjectList ou whileInView)
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 }, // Ajusté le y pour une entrée plus basse
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: {
    scale: 1.03,
    boxShadow: "0 10px 15px rgba(251, 191, 36, 0.4)", // Ombre ambre au survol
    transition: { duration: 0.2 },
  },
};

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  imageUrl, // Utilisez imageUrl
  githubUrl, // Utilisez githubUrl
  liveUrl, // Utilisez liveUrl
  slug,
  technologies,
  category
}) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover" // Déclenche l'animation de hover
      className="rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white
                 flex flex-col h-full border border-gray-700
                 transition-transform duration-300 ease-in-out" // Supprimé le hover transform du className, géré par Framer Motion
    >
      {/* NOUVEAU: Conteneur d'image avec `relative` et hauteur fixe */}
      <div className="relative w-full h-48 sm:h-56 overflow-hidden">
        <Image
          src={imageUrl} // Utilisez imageUrl
          alt={`image de ${title}`}
          fill
          className="object-cover transition-transform duration-300 ease-in-out" // Le scale au hover est sur la carte entière
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>

      <div className="p-6 flex flex-col flex-grow"> {/* flex-grow pour pousser les liens vers le bas */}
        {category && (
            <span className="text-xs text-gray-400 mb-1 italic text-center">
                {category}
            </span>
        )}
        <h3
          className="text-2xl font-bold text-amber-400 text-center uppercase mb-3" // Taille plus grande
        >
          {title}
        </h3>
        <p className="text-gray-300 text-base mb-4 flex-grow line-clamp-3">
          {description}
        </p>

        {/* Technologies Tags */}
        <div className="flex flex-wrap gap-2 mb-4 mt-auto justify-center"> {/* justify-center pour aligner */}
            {technologies.map((tech, index) => (
                <span
                    key={index}
                    className="bg-gray-700 text-gray-200 text-xs px-3 py-1 rounded-full"
                >
                    {tech}
                </span>
            ))}
        </div>

        <div
          className="flex gap-4 mt-auto justify-center" // mt-auto pour pousser les boutons en bas, justify-center pour le centrage
        >
          <Link
            href={`/projects/${slug}`}
            className="flex-grow text-center bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-2 px-4 rounded transition duration-150 ease-in-out"
          >
            Voir les détails
          </Link>

          {githubUrl && ( // Affiche le lien GitHub seulement s'il existe
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lien vers le dépôt GitHub"
              className="flex items-center justify-center w-10 h-10 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-colors"
            >
              <Github size={20} />
            </a>
          )}
          
          {liveUrl && ( // Affiche le lien Live seulement s'il existe
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lien vers la démo live du projet"
              className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;