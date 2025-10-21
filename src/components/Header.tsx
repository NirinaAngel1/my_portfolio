"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {Menu, X, Home, User, Briefcase, Mail} from "lucide-react";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Accueil", icon: <Home size={16}/> },
        { href: "/about", label: "À propos", icon: <User size={16}/> },
        { href: "/contact", label: "Contact", icon: <Mail size={16}/> },
        { href: "/projet", label: "Mes Projets", icon: <Briefcase size={16}/> },
    ]


    const linkClasses = (href:string)=>
        `flex items-center gap-2 px-2 py-1 rounded-md transitions-colors ${
            pathname === href
            ? "text-white font-semibold bg-amber-400 rounded p-3"
            : "hover:text-amber-400 text-amber-200 border-r-1 "
        }`;

        const mobileNavVariants : Variants = {
            closed : {
                opacity:0,
                height:0,
                paddingTop:0,
                paddingBottom:0,
                transition:{
                    duration:0.6,
                    ease:"linear",
                    when:"afterChildren"
                },
            },
            open:{
                opacity:1,
                height:"auto",
                paddingTop:12,
                paddingBottom:12,
                transition:{
                    duration:0.6,
                    ease:"linear",
                    when:"beforeChildren"
                },
            }
        }

    return(
        <header className="bg-gray-950 text-white shadow">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                {/* logo et titre */}
                <Link href="/">
                <Image
                src="https://00akrvgbvn.ufs.sh/f/KhVh7a2ycu1lfP4K2bo9DlwzWkyNqJE63GBH5MuFrQCUASh0"
                alt="logo_portfolio"
                width={150}
                height={200}
                priority
                className="cursor-pointer"
                />
                </Link>    
                {/* menu de navigation */}
                {/* menu desktop */}
                <nav className="hidden md:flex gap-8">
                    {links.map(({href, label, icon})=>(
                        <Link key={href} href={href} className={linkClasses(href)}>
                            {icon}
                            <span className="hidden sm:inline">{label}</span>
                        </Link>
                    ))}
                    </nav>
                {/* bouton burger menu */}
                <button
                    className="md:hidden p-2 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={()=>setIsOpen(!isOpen)}
                    aria-label="Menu"
                >
                    {isOpen?<X size={24}/>:<Menu size={24}/>}
                </button>
            </div>
            {/* menu mobile */}
            {/* <nav className="md:hidden flex flex-col gap-4 px-6 py-4 bg-gray-800 transition-max-height duration-300 ease-in-out overflow-hidden" style={{maxHeight: isOpen?"200px":"0"}}> */}
            <motion.nav
            className="md:hidden flex flex-col gap-4  bg-gray-800 overflow-hidden px-6"
            initial="closed"
            animate={isOpen?"open":"closed"}
            variants={mobileNavVariants}
            >
                {links.map(({href, label, icon})=>(
                    <Link
                    key={href}
                    href={href}
                    className={linkClasses(href)}
                    onClick={()=>setIsOpen(false)}
                    >
                        {icon}
                        <span>{label}</span>
                    </Link>
                ))}
            </motion.nav>
        </header>
    )
}