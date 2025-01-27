import { motion } from "framer-motion"

export function ProjectSkeleton() {
  return (
    <div className="border border-gray-700 rounded-lg p-6 animate-pulse">
      <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-700 rounded w-full mb-4"></div>
      <div className="h-4 bg-gray-700 rounded w-5/6 mb-4"></div>
      <div className="flex gap-2 mb-4">
        <div className="h-6 bg-gray-700 rounded w-20"></div>
        <div className="h-6 bg-gray-700 rounded w-20"></div>
      </div>
      <div className="h-4 bg-gray-700 rounded w-1/4"></div>
    </div>
  )
}