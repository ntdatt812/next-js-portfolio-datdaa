"use client";

import React from "react";
import { FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

// Animation presets
const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

const fadeInDown = {
  initial: { opacity: 0, y: -30 },
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

const cardHover = {
  whileHover: { scale: 1.03 },
  transition: { type: "spring", stiffness: 300 } as const,
};

const cardHoverSmall = {
  whileHover: { scale: 1.02 },
  transition: { type: "spring", stiffness: 250 } as const,
};

const AboutPage = () => {
  return (
    <div className="container mx-auto max-w-7xl py-20">
      <motion.h1
        {...fadeInDown}
        className="mb-8 text-center text-4xl font-bold"
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section {...fadeIn} transition={{ delay: 0.2 }} className="mb-16">
        <p className="text-secondary mx-auto max-w-3xl text-center text-lg">
          Tôi là một lập trình viên Full Stack đầy đam mê, có chuyên môn trong
          việc xây dựng các ứng dụng web hiện đại. Với nền tảng vững chắc về cả
          công nghệ frontend và backend, tôi tạo ra trải nghiệm người dùng mượt
          mà và các giải pháp phía máy chủ mạnh mẽ.
        </p>
      </motion.section>

      {/* Skills */}
      <motion.section {...fadeIn} transition={{ delay: 0.2 }} className="mb-16">
        <motion.h2 {...fadeInUp} className="section-title">
          Skills
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Frontend */}
          <motion.div
            variants={fadeInUp}
            {...cardHover}
            className="dark:bg-dark/50 rounded-lg bg-white p-6 shadow-md"
          >
            <FaCode className="text-primary mb-4 h-8 w-8" />
            <h3 className="mb-2 text-xl font-semibold">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>Typescript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS</li>
            </ul>
          </motion.div>

          {/* Backend */}
          <motion.div
            variants={fadeInUp}
            {...cardHover}
            className="dark:bg-dark/50 rounded-lg bg-white p-6 shadow-md"
          >
            <FaLaptopCode className="text-primary mb-4 h-8 w-8" />
            <h3 className="mb-2 text-xl font-semibold">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Express</li>
              <li>Nest.js</li>
              <li>MongoDB</li>
              <li>SQL Server</li>
            </ul>
          </motion.div>

          {/* Tools */}
          <motion.div
            variants={fadeInUp}
            {...cardHover}
            className="dark:bg-dark/50 rounded-lg bg-white p-6 shadow-md"
          >
            <FaGraduationCap className="text-primary mb-4 h-8 w-8" />
            <h3 className="mb-2 text-xl font-semibold">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>CI/CD</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience */}
      <motion.section {...fadeIn} transition={{ delay: 0.4 }} className="mb-16">
        <motion.h2 {...fadeInUp} className="section-title">
          Experiences
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="mx-auto max-w-3xl space-y-8"
        >
          <motion.div
            variants={fadeInUp}
            {...cardHoverSmall}
            className="dark:bg-dark/50 rounded-lg bg-white p-6 shadow-md"
          >
            <h3 className="mb-2 text-xl font-semibold">
              Junior Full Stack Developer
            </h3>
            <p className="text-primary mb-2">
              LIGHT ROAD LIMITED COMPANY (LRCO) — Present
            </p>
            <ul className="text-secondary list-inside list-disc space-y-2">
              <li>
                Developed and maintained web applications using React and
                Node.js
              </li>
              <li>
                Collaborated with cross-functional teams to deliver scalable
                solutions
              </li>
              <li>Implemented RESTful APIs and improved system performance</li>
              <li>
                Utilized Git and Agile methodologies for project management
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education */}
      <motion.section {...fadeIn} transition={{ delay: 0.6 }} className="mb-16">
        <motion.h2 {...fadeInUp} className="section-title">
          Education
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="mx-auto max-w-3xl space-y-8"
        >
          <motion.div
            variants={fadeInUp}
            {...cardHoverSmall}
            className="dark:bg-dark/50 rounded-lg bg-white p-6 shadow-md"
          >
            <h3 className="mb-2 text-xl font-semibold">
              Bachelor of Science in Software Engineering
            </h3>
            <p className="text-primary mb-2">
              HONG DUC UNIVERSITY • 2021 – 2025
            </p>
            <p className="text-secondary">
              Graduated with honors. Focused on software engineering, web
              development, and information systems.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
