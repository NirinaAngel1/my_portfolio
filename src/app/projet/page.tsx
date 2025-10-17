// app/projet/page.tsx
import React from "react";
import prisma from "@/lib/prisma"; 
import ProjectList from "@/components/ProjectList"; 
export default async function ProjectPage() {
  const rawProjects = await prisma.project.findMany({
    orderBy: {
      created_at:"desc",
    }
  });

   const projects = rawProjects.map((proj) => ({
    ...proj,
    id: proj.id.toString(), 
    slug: proj.slug ?? proj.title.toLowerCase().replace(/\s+/g, "-"), 
  }));
 
  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  );
}