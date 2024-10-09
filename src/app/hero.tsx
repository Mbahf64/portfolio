"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { FileUser } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";



export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Trigger the visibility when the component mounts
  }, []);

  return (
    <div className="lg:h-[80vh] w-full flex flex-col  items-center justify-center mt-[5rem]">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }} // Start invisible and smaller
        animate={{ opacity: 1, scale: 1 }} // Animate to full size and visibility
        transition={{ duration: 1.2, ease: "easeInOut" }} // Smooth animation over 1.2s
      >
        <div className="w-full flex flex-col items-center justify-center gap-[3rem]">
          {/* Profile image */}
          <img
            className={`w-[154px] h-[153.4px] transition-opacity duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            src="/Profile.avif"
            alt="profile"
          />

          {/* Text content */}
          <div className="flex flex-col gap-7">
            {/* Greeting text */}
            <p
              className={`text-center text-transparent zen-dots bg-clip-text bg-gradient-to-r from-green-500 via-indigo-500 to-cyan-400 text-3xl lg:text-5xl font-semibold transition-opacity duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Hi, I'm Favour Mba
            </p>

            {/* Description text */}
            <p
              className={`w-[80vw] lg:w-[70vw] 2xl:w-[55vw] text-center text-[32px] Manrope transition-opacity duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              A Software Engineer with 2+ YOE building products across Fintech,
              Social Media, Fashion, Healthcare, and AI. Expert in developing and maintaining robust software applications.
            </p>
          </div>
        </div>

        <div className={`flex justify-center items-center gap-[3rem] mt-10`}>
          {/* First Word */}
          <div
            className={`flex items-center gap-2 group hover:cursor-pointer transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <FileUser className="w-6 h-6 text-gray-500 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:text-indigo-500" />
            <span className="hidden lg:flex text-[20px] font-medium Manrope transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:text-indigo-500">
              Resume
            </span>
          </div>

          {/* Second Word */}
          <div
            className={`flex items-center gap-2 group hover:cursor-pointer transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <FaLinkedin className="w-6 h-6 text-gray-500 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:text-indigo-500" />
            <span className="hidden lg:flex text-[20px] font-medium Manrope transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:text-indigo-500">
              Linkedin
            </span>
          </div>

          {/* Third Word */}
          <div
            className={`flex items-center gap-2 group hover:cursor-pointer transition-all duration-1000 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <FaSquareXTwitter className="w-6 h-6 text-gray-500 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:text-indigo-500" />
            <span className="hidden lg:flex text-[20px] font-medium Manrope transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:text-indigo-500">
              Twitter
            </span>
          </div>

          {/* Fourth Word */}
          <div
            className={`flex items-center gap-2 group hover:cursor-pointer transition-all duration-1000 delay-600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <MdEmail className="w-6 h-6 text-gray-500 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:text-indigo-500" />
            <span className="hidden lg:flex text-[20px] font-medium Manrope transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:text-indigo-500">
              Email
            </span>
          </div>

          <div
            className={`flex items-center gap-2 group hover:cursor-pointer transition-all duration-1000 delay-600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <FaGithubSquare className="w-6 h-6 text-gray-500 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:text-indigo-500" />
            <span className="hidden lg:flex text-[20px] font-medium Manrope transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:text-indigo-500">
              Github
            </span>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
