"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { FileUser } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Trigger the visibility when the component mounts
  }, []);

  useEffect(() => {
    // GSAP animation for the border pulsing effect
    gsap.to(".border-container", {
      scale: 1.05, // Slight scaling for pulse effect
      repeat: -1,
      yoyo: true, // Reverses the animation for a smooth pulse
      duration: 2, // Time for each pulse cycle
      ease: "power1.inOut", // Smooth easing for a natural feel
    });
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

          <div className="relative flex justify-center items-center">
            {/* Elegant border with pulsating gradient */}
            <div className="border-container relative w-[190px] h-[190px] rounded-full p-1 bg-gradient-to-r from-green-500 via-indigo-500 to-cyan-400 animate-elegant-glow">
              {/* Static profile image */}
              <Image
  className="w-full h-full rounded-full"
  src="/Favour.jpg"
  alt="profile"
  width={190}
  height={190} // You need to specify the width and height
/>
            </div>
          </div>

          {/* Text content */}
          <div className="flex flex-col gap-7">
            {/* Greeting text */}
            <p
              className={`text-center text-transparent zen-dots bg-clip-text bg-gradient-to-r from-green-500 via-indigo-500 to-cyan-400 text-3xl lg:text-5xl font-semibold transition-opacity duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Hi, I&apos;m Favour Mba
            </p>

            {/* Description text */}
            <p
              className={`w-[80vw] lg:w-[70vw] 2xl:w-[55vw] text-center text-[32px] Manrope transition-opacity duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              A Software Engineer with 2+ YOE building products across Fintech,
              Social Media, Fashion, Healthcare, and AI. Expert in developing
              and maintaining robust software applications.
            </p>
          </div>
        </div>

        <div className={`flex justify-center items-center gap-[3rem] mt-10`}>
          {/* First Word */}
          <a
            href="your-resume-link.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`flex items-center gap-2 group hover:cursor-pointer transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <FileUser className="w-8 h-8 text-gray-500 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:text-[#1DA1F2]" />
              <span className="hidden lg:flex text-[20px] font-medium Manrope transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:text-[#1DA1F2]">
                Resume
              </span>
            </div>
          </a>

          {/* Second Word */}
          <a
            href="https://www.linkedin.com/in/mbafavour/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`flex items-center gap-2 group hover:cursor-pointer transition-all duration-1000 delay-200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <FaLinkedinIn className="w-8 h-8 text-gray-500 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:text-[#1DA1F2]" />
              <span className="hidden lg:flex text-[20px] font-medium Manrope transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:text-[#1DA1F2]">
                Linkedin
              </span>
            </div>
          </a>

          {/* Third Word */}
          <a
            href="https://x.com/favourchima_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`flex items-center gap-2 group hover:cursor-pointer transition-all duration-1000 delay-400 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <FaXTwitter className="w-8 h-8 text-gray-500 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:text-[#1DA1F2]" />
              <span className="hidden lg:flex text-[20px] font-medium Manrope transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:text-[#1DA1F2]">
                Twitter
              </span>
            </div>
          </a>

          {/* Fourth Word */}
          <a href="mailto:mbahf64@gmail.com">
            <div
              className={`flex items-center gap-2 group hover:cursor-pointer transition-all duration-1000 delay-600 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <MdOutlineEmail className="w-8 h-8 text-gray-500 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:text-[#1DA1F2]" />
              <span className="hidden lg:flex text-[20px] font-medium Manrope transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:text-[#1DA1F2]">
                Email
              </span>
            </div>
          </a>

          <a
            href="https://github.com/Mbahf64"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`flex items-center gap-2 group hover:cursor-pointer transition-all duration-1000 delay-600 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <FiGithub className="w-8 h-8 text-gray-500 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:text-[#1DA1F2]" />
              <span className="hidden lg:flex text-[20px] font-medium Manrope transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:text-[#1DA1F2]">
                Github
              </span>
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
