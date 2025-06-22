"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, scaleIn } from "@/utils/animations";

const Hero = () => {
  return (
    <section className="container mx-auto max-w-7xl px-4 py-28">
      <div className="mx-auto max-w-3xl text-center">
        {/* Avatar */}
        <motion.div
          {...scaleIn}
          transition={{ delay: 0.2 }}
          className="mb-4 flex flex-col items-center"
        >
          <Image
            src="/profile.avif"
            alt="profile image"
            width={100}
            height={100}
            className="ring-primary mb-4 h-32 w-32 rounded-full object-cover ring-2"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeInUp}
          transition={{ delay: 0.3 }}
          className="mb-6 text-4xl leading-tight font-extrabold md:text-6xl"
        >
          Hi, I&apos;am{" "}
          <motion.span
            className="text-primary"
            aria-label="Name highlight"
            {...fadeIn}
            transition={{ delay: 0.8 }}
          >
            Dat Daa
          </motion.span>
        </motion.h1>

        {/* Skill */}
        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="mb-10 text-xl font-medium text-gray-600 md:text-2xl dark:text-gray-300"
        >
          Full Stack Developer
        </motion.p>

        {/* Social Media */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.5 }}
          className="mb-8 flex justify-center space-x-4"
          aria-label="Social media links"
        >
          <motion.a
            href="https://github.com/ntdatt812"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary text-2xl text-gray-600 transition-colors duration-300 dark:text-gray-300"
            aria-label="GitHub"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.5 }}
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://facebook.com/ntdat812"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary text-2xl text-gray-600 transition-colors duration-300 dark:text-gray-300"
            aria-label="Facebook"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.5 }}
          >
            <FaFacebook />
          </motion.a>

          <motion.a
            href="https://youtube.com/ntdat812"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary text-2xl text-gray-600 transition-colors duration-300 dark:text-gray-300"
            aria-label="YouTube"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.5 }}
          >
            <FaYoutube />
          </motion.a>
        </motion.div>

        {/* Call to Actions */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.6 }}
          className="flex flex-col gap-4 md:flex-row md:justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/projects"
              className="bg-primary hover:bg-primary/80 inline-block w-full rounded-lg px-8 py-3 text-center text-white transition-colors md:w-auto"
            >
              View Projects
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-block w-full rounded-lg bg-gray-500 px-8 py-3 text-center text-gray-800 transition-colors hover:bg-gray-300 hover:text-gray-700 md:w-auto"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
