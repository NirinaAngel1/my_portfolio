import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {  Github } from "lucide-react";

type Project = {
  id: bigint;
  title: string;
  description: string;
  github_url: string;
  image_url: string;
  slug: string;
}

type Props = {
  projects : Project[];
}

const contentItemsVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut"},
  },
};
const ProjectListItem = ({ project }: { project: Project }) => {
  return (
    <motion.div
      variants={contentItemsVariants}
      className="w-full border-b border-gray-700 hover:bg-gray-700/50 transition-colors duration-200"
    >
      <Link href={`/projet/${project.slug}`} className="block p-4 sm:p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex-grow">
          <h2 className="text-xl font-bold text-amber-400 hover:text-amber-300 transition-colors">
            {project.title}
          </h2>
          <p className="text-gray-300 mt-1 line-clamp-2 md:line-clamp-1">
            {project.description}
          </p>
        </div>
        <div className="text-sm text-gray-400 mt-2 md:mt-0 md:ml-4 flex-shrink-0">
          <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-xs font-semibold">
            {project.slug}
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectListItem;