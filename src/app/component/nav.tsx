'use client'
import { motion } from "framer-motion"
import Link from "next/link";

const linkVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

export default function NavBar(){
    return(
        <header className="container mx-auto px-4 py-6">
        <motion.nav
          className="flex items-center justify-between"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <Link href="/" className="text-2xl font-mono text-sky-600 hover:text-sky-500 transition-colors">
            {"{A}"}
          </Link>
          <ul className="flex gap-6">
            {["Home", "Projects", "About"].map((item) => (
              <motion.li key={item} whileHover="hover" variants={linkVariants}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="hover:text-sky-500 transition-colors"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
        <motion.hr
          className="h-px mt-3 bg-gray-200 border-0 dark:bg-gray-700"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5 }}
        />
      </header>
    )
}