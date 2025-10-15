import React from "react";
import prisma from "../../../lib/prisma.mjs";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Github, Briefcase,  } from "lucide-react";


export default async function ProjectPage(){
    const projects = await prisma.project.findMany({
    });

    return (
        <div>
            <>{
            console.log(projects)
            }</>
            <p></p>
        </div>
    )
}

