import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import DetailProjectPage from "@/components/DetailProjectPage";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({params}:ProjectPageProps) {
   
    const project = await prisma.project.findUnique({
        where:{
            slug:params.slug
        }
    });

    if(!project){
        return notFound();
    }

    return (
        <DetailProjectPage project={project} />
    )
    
        
};