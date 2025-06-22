"use client";

import React from "react";
import Link from "next/link";
import { blogs } from "@/contents/blogs";
import { motion } from "framer-motion";
import { FaCalendar, FaClock } from "react-icons/fa";
import { cardHoverSmall, fadeInUp, staggerContainer } from "@/utils/animations";

const Blog = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Tiêu đề */}
        <motion.h2
          {...fadeInUp}
          className="mb-12 text-center text-3xl font-bold"
        >
          Latest Blog Posts
        </motion.h2>

        {/* Danh sách blog */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.slug}
              className="dark:bg-dark/50 rounded-lg bg-white p-6 shadow-md"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              <Link href={`/blogs/${blog.slug}`}>
                <motion.h3
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="hover:text-primary mb-2 text-xl font-semibold transition-colors"
                >
                  {blog.title}
                </motion.h3>
              </Link>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-4 text-gray-600 dark:text-gray-300"
              >
                {blog.excerpt}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center"
                >
                  <FaCalendar className="mr-2" />
                  {new Date(blog.date).toLocaleDateString()}
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center"
                >
                  <FaClock className="mr-2" />
                  {blog.readTime}
                </motion.span>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        {/* Nút "View All" */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/blogs"
              className="bg-primary hover:bg-primary/90 inline-block rounded-lg px-8 py-3 text-white transition-colors"
            >
              View All Posts
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
