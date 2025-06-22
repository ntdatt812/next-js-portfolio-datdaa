import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-white dark:bg-dark border-t border-gray-200
  dark:border-gray-800"
    >
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold t text-primary">
              DatdaaPortfolio&trade;
            </Link>
            <p className="text-sm t text-secondary mt-2">
              &copy;{new Date().getFullYear()} Nguyen Thanh Dat. All rights
              reserverd.
            </p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="/"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors
            duration-300 da"
            >
              <FaGithub />
            </Link>
            <Link
              href="/"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors
            duration-300 da"
            >
              <FaFacebook />
            </Link>
            <Link
              href="/"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors
            duration-300 da"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
