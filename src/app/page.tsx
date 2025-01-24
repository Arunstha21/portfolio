"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import TechStack from "./component/techStack"
import CustomCursor from "./component/customCursor"

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <div className="flex flex-col min-h-screen p-8 md:px-32 xl:px-64">
      <CustomCursor />
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-mono text-sky-600 hover:text-sky-500 transition-colors">
            {"{A}"}
          </Link>
          <ul className="flex gap-6">
            {["Home", "Projects", "About"].map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="hover:text-sky-500 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div className="max-w-3xl mx-auto mb-24" variants={containerVariants} initial="hidden" animate="visible">
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-sky-600 mb-2">
            Hey there! I&apos;m-
          </motion.p>
          <motion.h1 variants={itemVariants} className="mb-6 text-5xl md:text-7xl font-bold">
            <span className="hover:text-sky-400 transition-colors">Arun</span>{" "}
            <span className="hover:text-sky-400 transition-colors">Shrestha.</span>
          </motion.h1>
          <motion.div variants={itemVariants} className="mb-8 text-xl md:text-2xl">
            <span className="font-semibold">Full Stack Web Developer.</span>{" "}
            <span className="text-gray-400">
              Crafting dynamic web applications with a love for coding and problem-solving.
            </span>
          </motion.div>
          <motion.div variants={itemVariants} className="mb-12 text-gray-300">
            <p className="flex items-center gap-2">
              <Rocket className="h-5 w-5 text-sky-600" />
              Currently specializing in TypeScript (React / Next.js)
            </p>
          </motion.div>
          <motion.div
  variants={itemVariants}
  className="flex flex-wrap gap-4 mb-16"
>
  {[
    { href: "https://github.com/Arunstha21", icon: Github, label: "Github" },
    { href: "https://www.linkedin.com/in/rangotengo/", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:me@arunshrestha.info.np", icon: Mail, label: "Email" },
  ].map((link) => (
    <Link key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
      <Button
        variant="outline"
        size="lg"
        className="gap-2 px-6 py-3 rounded-full border-2 border-sky-800 hover:border-sky-600 text-white hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-600 hover:text-white hover:shadow-lg transition-all"
      >
        <link.icon className="h-5 w-5" />
        {link.label}
      </Button>
    </Link>
  ))}
</motion.div>

        </motion.div>
        <TechStack />
      </main>
    </div>
  )
}

