"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface TechItem {
  name: string
  logo: string
  description: string
  link: string
  class?: string
}

const techStack: TechItem[] = [
  {
    name: "React",
    logo: "./react.svg",
    description: "UI Component Library",
    link: "https://reactjs.org/",
  },
  {
    name: "Node.js",
    logo: "./nodejs.svg",
    description: "JavaScript Runtime Environment",
    link: "https://nodejs.org/",
  },
  {
    name: "MongoDB",
    logo: "./mongodb.svg",
    description: "NoSQL Database System",
    link: "https://www.mongodb.com/",
    class: "bg-white rounded-full",
  },
  {
    name: "TypeScript",
    logo: "./typescript.svg",
    description: "Typed JavaScript Superset",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Next.js",
    logo: "./nextjs.svg",
    description: "React Framework for Full Stack",
    link: "https://nextjs.org/",
    class: "invert",
  },
  {
    name: "Tailwind CSS",
    logo: "./tailwindcss.svg",
    description: "Utility-First CSS Framework",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Shadcn/ui",
    logo: "./shadcn.svg",
    description: "UI Component Library",
    link: "https://ui.shadcn.com/",
    class: "bg-white rounded-full",
  },
  {
    name: "Chat GPT",
    logo: "./chatgpt.svg",
    description: "AI Language Model",
    link: "https://chat.openai.com/",
    class: "invert",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
}

export default function TechStack() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.section
      ref={ref}
      className="py-16"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.h1 variants={itemVariants} className="text-6xl font-bold text-center mb-16">
        Tech Stack
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
        {techStack.map((tech) => (
          <motion.div key={tech.name} variants={itemVariants}>
            <Link
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 transition-all duration-300"
            >
              <motion.div
                className="flex items-center gap-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-12 h-12 relative flex-shrink-0">
                  <Image
                    src={tech.logo || "/placeholder.svg"}
                    alt={`${tech.name} logo`}
                    fill
                    className={`object-contain ${tech.class}`}
                  />
                </div>
                <div className="flex-grow">
                  <div>
                    <h3 className="text-lg font-medium group-hover:text-sky-500 transition-colors">{tech.name}</h3>
                    <p className="text-sm text-gray-500">{tech.description}</p>
                  </div>
                  <motion.div
                    className="h-px bg-gray-200 mt-4 group-hover:bg-sky-500 transition-colors"
                    whileHover={{ scaleX: 1.05, originX: 0 }}
                  />
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

