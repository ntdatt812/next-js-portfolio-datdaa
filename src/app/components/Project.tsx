"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/contents/projects";
import { cardHoverSmall, fadeInUp, staggerContainer } from "@/utils/animations";

const Project = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.h2
          {...fadeInUp}
          className="mb-12 text-center text-3xl font-bold"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="dark:bg-dark/50 rounded-lg bg-white p-6 shadow-md"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              <div className="relative mb-4 aspect-video overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <motion.h3
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mb-2 text-xl font-semibold"
              >
                {project.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-4 text-gray-600 dark:text-gray-300"
              >
                {project.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-4 flex flex-wrap gap-2"
              >
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-secondary hover:text-primary flex items-center gap-2 transition-colors"
                >
                  <FaGithub className="h-5 w-5" />
                  <span>Code</span>
                </motion.a>
                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-secondary hover:text-primary flex items-center gap-2 transition-colors"
                >
                  <FaExternalLinkAlt className="h-5 w-5" />
                  <span>Live Demo</span>
                </motion.a>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
