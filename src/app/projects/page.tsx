"use client";

import { projects } from "@/contents/projects";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

// Animations
const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15,
    },
  },
  viewport: { once: true, amount: 0.2 },
};

const cardHoverSmall = {
  whileHover: { scale: 1.02 },
  transition: { type: "spring", stiffness: 300 } as const,
};

const ProjectPage = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-20">
      <motion.h1
        className="mb-4 text-center text-4xl font-bold"
        {...fadeInDown}
      >
        My Projects
      </motion.h1>

      <motion.p
        className="text-secondary mb-24 text-center text-lg"
        {...fadeInUp}
      >
        Here are some of my recent projects. Click on the links to view the code
        or live demo.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={fadeInUp}
            {...cardHoverSmall}
            className="dark:bg-dark/50 flex flex-col overflow-hidden rounded-lg bg-white shadow-md"
          >
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative aspect-video"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
              <motion.h3
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mb-2 text-xl font-semibold"
              >
                {project.title}
              </motion.h3>

              <motion.p
                className="mb-4 text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                {project.description}
              </motion.p>

              <motion.div
                className="mb-4 flex flex-wrap gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
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
                className="mt-auto flex gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary flex items-center gap-2 transition-colors"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="h-5 w-5" />
                  <span>Code</span>
                </motion.a>
                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary flex items-center gap-2 transition-colors"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="h-5 w-5" />
                  <span>Live Demo</span>
                </motion.a>
              </motion.div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectPage;
