import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import DetailProjectPage from "@/components/DetailProjectPage";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({params}:ProjectPageProps) {
   
    const projectFromDB = await prisma.project.findUnique({
        where:{
            slug:params.slug
        }
    });

    if(!projectFromDB){
        return notFound();
    }

    const project = {
            id: projectFromDB.id.toString(),
            title: projectFromDB.title,
            description: projectFromDB.description ?? "",
            image_url: projectFromDB.image_url ?? "/placeholder.jpg",
            github_url: projectFromDB.github_url ?? "#",
            slug: projectFromDB.slug ?? "",
    }

    return (
        <DetailProjectPage project={project} />
    )
};