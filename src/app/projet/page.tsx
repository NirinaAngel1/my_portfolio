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
    id: proj.id,
    title: proj.title,
    description: proj.description ?? "",
    image_url: proj.image_url ?? "/placeholder.jpg",
    github_url: proj.github_url ?? "#",
    slug: proj.slug ?? "",
  }));
 
  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  );
}