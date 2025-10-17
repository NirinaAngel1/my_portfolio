import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {  Github } from "lucide-react"; 


interface Project {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  slug: string;
}


const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 }, 
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover:{
    scale: 1.03,
    boxShadow:"0 10px 15px rgba(251, 191, 36, 0.4)",
    transition:{ duration:0.3}
  }
};


const ProjectCard: React.FC<Project> = ({
  title,
  description,
  image,
  githubLink,
  slug,
}) => {
  return (
      <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="rounded-lg overflow-hidden shadow-lg bg-gray-200 text-white
                 flex flex-col h-full border-2 border-amber-100
                 transition-transform duration-300 ease-in-out p-2"
    >
      <div className="relative w-full h-48 sm:h-56 overflow-hidden">
        <Image
          src={image}
          alt={`image de ${title}`}
          fill
          className="object-cover transition-transform duration-300 ease-in-out rounded"
          sizes="(max-width : 768px) 100w, (max-width:1200px) 50vw, 33vw"
          priority={false}
        />
        </div>
      <div className="px-6 py-4">
        <h3
          className="text-lg font-semibold text-amber-400 text-center uppercase mb-4"
        >
          {title}
        </h3>
        <p className="text-gray-600 text-base overflow-hidden line-clamp-3">
          {description}
        </p>
      </div>
      <div
        className="px-6 pt-4 flex justify-between items-center space-x-2 mb-4"
      >
        <Link
          href={`/projects/${slug}`}
          className="flex-grow text-center bg-amber-400 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out"
        >
          Voir les détails
        </Link>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-none text-center bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out text-sm"
        >
         <Github size={22} />
        </a>
      </div>
    </motion.div>
  );
};
export default ProjectCard