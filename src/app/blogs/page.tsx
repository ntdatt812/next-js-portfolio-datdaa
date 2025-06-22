"use client";

import { blogs } from "@/contents/blogs";
import Link from "next/link";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardHoverSmall } from "@/utils/animations";

export default function Blogs() {
  return (
    <div className="container mx-auto max-w-7xl py-12">
      <motion.h1
        className="mb-8 text-center text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Blog Posts
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {blogs.map((blog, index) => (
          <motion.article
            key={index}
            className="dark:bg-dark/50 overflow-hidden rounded-lg bg-white shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <div className="p-6">
              <motion.h2
                className="mb-2 text-xl font-semibold"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {blog.title}
                </Link>
              </motion.h2>

              <motion.p
                className="text-secondary mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {blog.excerpt}
              </motion.p>

              <motion.div
                className="text-secondary flex items-center gap-4 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCalendarAlt className="h-4 w-4" />
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaClock className="h-4 w-4" />
                  <span>{blog.readTime}</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
