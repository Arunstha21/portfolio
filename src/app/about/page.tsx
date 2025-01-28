"use client"

import { motion } from "framer-motion"
import Image from "next/image"

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
  },
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-3xl mx-auto">
        <motion.h1 className="text-4xl font-bold mb-8" variants={itemVariants}>
          About Me
        </motion.h1>
        <motion.div className="flex flex-col md:flex-row items-center gap-8 mb-8" variants={itemVariants}>
          <Image src="/placeholder.svg" alt="Arun Shrestha" width={200} height={200} className="rounded-full" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Arun Shrestha</h2>
            <p className="text-gray-400">Full Stack Web Developer</p>
          </div>
        </motion.div>
        <motion.p className="mb-6" variants={itemVariants}>
          I'm a passionate full stack web developer with a love for creating dynamic and user-friendly web applications.
          With expertise in modern web technologies. I'm always eager to learn and adapt to new challenges.
        </motion.p>
        <motion.p variants={itemVariants}>
          I'm always excited to take on new challenges and contribute to innovative projects. Feel free to reach out if
          you'd like to collaborate or just have a chat about web development!
        </motion.p>
      </motion.div>
    </div>
  )
}

