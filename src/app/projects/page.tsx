"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, Lock, Unlock } from "lucide-react"
import { getGitHubRepos, type GitHubRepo } from "@/lib/github"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  
  const cardVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }
  
  const tagVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
    hover: { scale: 1.1, rotate: 3 },
  }

export default function ProjectsPage() {
  const [projects, setProjects] = useState<GitHubRepo[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const repos = await getGitHubRepos()
        setProjects(repos)
      } catch (err) {
        console.log(err)
        setError("Failed to fetch projects. Please try again later.")
      }
    }

    fetchProjects()
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
    <div className="flex-grow container mx-auto px-4 mt-4 md:px-6 lg:px-16">
      <motion.h1
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        My Projects
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div className="p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <div className="flex justify-between items-start mb-4">
                <motion.h2 className="text-xl font-semibold text-sky-400" whileHover={{ scale: 1.05, originX: 0 }}>
                  {project.name}
                </motion.h2>
                <motion.span
                  className={`px-2 py-1 rounded text-xs flex items-center ${
                    project.visibility === "public" ? "bg-green-800 text-green-200" : "bg-yellow-800 text-yellow-200"
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {project.visibility === "public" ? (
                    <Unlock className="w-3 h-3 mr-1" />
                  ) : (
                    <Lock className="w-3 h-3 mr-1" />
                  )}
                  {project.visibility}
                </motion.span>
              </div>
              <motion.p
                className="text-gray-300 mb-4 h-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.description || "No description available."}
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-2 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                  <motion.span
                    className="bg-gray-700 text-sky-200 px-2 py-1 rounded text-xs"
                    variants={tagVariants}
                    whileHover="hover"
                  >
                    {project.language}
                  </motion.span>
              </motion.div>
              {project.visibility === "public" ? <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Link
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <motion.span whileHover={{ x: 5 }}>
                    View Project
                  </motion.span>
                  <motion.div
                    whileHover={{ x: 5, rotate: 45 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </motion.div>
                </Link>
              </motion.div> : null}
            </motion.div>
          </motion.div>
        ))}
        {error && (<motion.div className="text-red-500 text-center col-span-full">{error}</motion.div> )}
      </motion.div>
    </div>
    </div>
  )
}

