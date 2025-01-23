"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap"; // Import GSAP
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

const GetInTouch = () => {
  const textRef = useRef(null); // Create a ref for the text element



  useEffect(() => {
    const shakeAnimation = () => {
      const animationTimeline = gsap.timeline({
        repeat: -1, // Infinite loop
        repeatDelay: 5, // Pause for 5 seconds before repeating
      });

      animationTimeline
        .to(textRef.current, {
          x: 5, // Shake to the right
          duration: 0.1,
          ease: "power1.inOut",
        })
        .to(textRef.current, {
          x: -5, // Shake to the left
          duration: 0.1,
          ease: "power1.inOut",
        })
        .to(textRef.current, {
          x: 0, // Back to the original position
          duration: 0.1,
          ease: "power1.inOut",
        });
    };

    shakeAnimation(); // Initialize the shaking animation
  }, []);

  const inputStyles =
    "w-full bg-transparent border-b border-black text-black pb-2 focus:outline-none pt-8 focus:border-black transition-all peer outline-none ring-0 focus:ring-0";

  return (
    <div className="what-i-do-content flex items-center justify-center ">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }} // Start invisible and smaller
        animate={{ opacity: 1, scale: 1 }} // Animate to full size and visibility
        transition={{ duration: 1.2, ease: "easeInOut" }} // Smooth animation over 1.2s
      >
        <div className="w-[90vw] lg:w-[80vw] h-full flex flex-col gap-20">
          <div className="flex flex-col w-full items-center justify-start">
            <p className="noto-serif text-[32px] lg:text-[3rem] font-semibold">
              Get In Touch!
            </p>
            <p className="comic-neue lg:text-[1.5rem] text-[18px] w-[90vw] lg:w-[60vw] ">
              I&apos;m currently open to joining a new team of creative developers.
              Also, if you have a question, proposal, idea or just want to say
              hi, go ahead.
            </p>
          </div>

          <div className="w-full h-full flex flex-col lg:flex-row items-start justify-center gap-[3rem] lg:gap-9 ">
            <div className="w-[45vh] h-full noto-serif flex flex-col gap-5 items-start justify-start">
              <div className="flex gap-3 items-center">
                <FaLocationDot className="w-5 h-5" />
                <p className="text-[1rem]">Port Harcourt, Nigeria</p>
              </div>

              <div className="flex gap-3 items-center">
                <IoCallSharp className="w-5 h-5" />
                <p className="text-[1rem]">+234 810 1054 679</p>
              </div>

              <div className="flex gap-3 items-center">
                <MdEmail className="w-5 h-5" />
                <p className="text-[1rem]">Mbahf64@gmail.com</p>
              </div>
            </div>

            <div className="w-[90vw] lg:w-[55vw] h-full flex flex-col gap-[4rem] comic-neue">
              <form className="w-full max-w-[100vw] lg:max-w-[55vw] space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Name Field */}
                  <div className="relative flex flex-col gap-11">
                    <input
                      type="text"
                      id="name"
                      required
                      className={inputStyles}
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 -top-3.5 text-black text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-0 peer-focus:-top-3.5 peer-focus:text-sm"
                    >
                      Name
                    </label>
                  </div>

                  {/* Email Field */}
                  <div className="relative flex flex-col gap-11">
                    <input
                      type="email"
                      id="email"
                      required
                      className={inputStyles}
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-black text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-0 peer-focus:-top-3.5 peer-focus:text-sm"
                    >
                      Email address
                    </label>
                  </div>
                </div>

                {/* Subject Field */}
                <div className="relative mt-8 flex flex-col gap-11">
                  <input
                    type="text"
                    id="subject"
                    required
                    className={inputStyles}
                  />
                  <label
                    htmlFor="subject"
                    className="absolute left-0 -top-3.5 text-black text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-0 peer-focus:-top-3.5 peer-focus:text-sm"
                  >
                    Subject
                  </label>
                </div>

                {/* Message Field */}
                <div className="relative mt-8 flex flex-col gap-11">
                  <textarea
                    id="message"
                    required
                    rows="4"
                    className={`${inputStyles} resize-none`}
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-0 -top-3.5 text-black text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-0 peer-focus:-top-3.5 peer-focus:text-sm"
                  >
                    Message
                  </label>
                </div>

                {/* Submit Button */}
                <div className="w-full flex items-start">
                  <button
                    type="submit"
                    className="mt-8 px-8 py-2 border border-black text-black rounded-full hover:bg-white hover:text-black transition-all duration-300 focus:outline-none"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="h-[50vh] flex flex-col items-center justify-center">
            <div className="h-[20vh] w-full flex flex-col items-center justify-center mb-10">
              <div className="flex flex-col w-full items-center justify-start mb-[3rem]">
                <p
                  ref={textRef} // Attach the ref to the text element
                  className="noto-serif lg:text-[3rem] text-[2rem] font-semibold"
                >
                  Don&apos;t be a stranger!🤙
                </p>
                <p className="comic-neue lg:text-[1.5rem] text-[18px] w-[90vw] lg:w-[60vw] ">
                  Let&apos;s connect, let&apos;s chat
                </p>
              </div>

           
                <div className="w-full flex items-center flex-col h-full gap-[3rem] mb-[3rem]">
                  <div className={`flex justify-center items-center gap-[3rem] mt-10`}>


                    {/* Second Word */}
                    <a
                      href="https://www.linkedin.com/in/mbafavour/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        className="flex items-center gap-2 group hover:cursor-pointer transition-all duration-1000 delay-600 "
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
                        className="flex items-center gap-2 group hover:cursor-pointer transition-all duration-1000 delay-600 "
                      >
                        <FaXTwitter className="w-8 h-8 text-gray-500 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:text-[#1DA1F2]" />
                        <span className="hidden lg:flex text-[20px] font-medium Manrope transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:text-[#1DA1F2]">
                          Twitter
                        </span>
                      </div>
                    </a>

                    {/* Fourth Word */}
                    <a
                     href="https://wa.me/+2348101054679?text=Hello Favour, How are you doing?"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    <div
                        className="flex items-center gap-2 group hover:cursor-pointer transition-all duration-1000 delay-600 "
                      >
                      <IoLogoWhatsapp className="w-8 h-8 text-gray-500 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:text-[#1DA1F2]" />
                        <span className="hidden lg:flex text-[20px] font-medium Manrope transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:text-[#1DA1F2]">
                          Whatsapp
                        </span>
                      </div>
                    </a>


                    <a
                      href="https://www.instagram.com/mbafavourc/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        className="flex items-center gap-2 group hover:cursor-pointer transition-all duration-1000 delay-600 "
                      >
                        <FaInstagram className="w-8 h-8 text-gray-500 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:text-[#1DA1F2]" />
                        <span className="hidden lg:flex text-[20px] font-medium Manrope transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:text-[#1DA1F2]">
                          Instagram
                        </span>
                      </div>
                    </a>


                  </div>

                  <p className="noto-serif lg:text-[1.5rem] text-[16px] w-[90vw] lg:w-[60vw] text-gray-500 mt-[3rem]">
                  © Copyright - Favour C.M {new Date().getFullYear()}
                  </p>
                </div>

           
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GetInTouch;
