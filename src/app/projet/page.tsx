// app/projet/page.tsx
import React from "react";
import prisma from "@/lib/prisma"; 
import ProjectList from "@/components/ProjectList"; 
export default async function ProjectPage() {
  const projects = await prisma.project.findMany({
    orderBy: {
      created_at:"desc",
    }
  });

 
  return (
    <div>
      <>
      {console.log("Les projets : ",projects)}
      </>
      <ProjectList projects={projects} />
    </div>
  );
}