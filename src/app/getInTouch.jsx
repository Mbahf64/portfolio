"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const getinTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

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
        <div className="w-[90vw] lg:w-[80vw] h-full flex flex-col  gap-20">
          <div className="flex flex-col w-full items-center justify-start">
            <p className="noto-serif text-[3rem] font-semibold">
              Get In Touch!
            </p>
            <p className="comic-neue lg:text-[1.5rem] text-[18px] w-[90vw] lg:w-[60vw] ">
              I’m currently open to joining a new team of creative developers.
              Also, if you have a question, proposal, idea or just want to say
              hi, Go ahead.
            </p>
          </div>

          <div className="w-full h-full flex flex-col lg:flex-row items-start justify-center gap-9 ">

            <div className="w-[45vh] h-full noto-serif flex flex-col gap-5 items-start justify-start">
              {/* <p className="text-[3rem] noto-serif font-bold text-left leading-none">My Story</p> */}
              <div className="flex gap-3 items-center">
                <FaLocationDot className="w-5 h-5" />
                <p className="text-[1rem]">River State, Nigeria</p>
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
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-[100vw] lg:max-w-[55vw] space-y-12"
              >
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
                  <div className="relative  flex flex-col gap-11">
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
                    className=" mt-8 px-8 py-2 border border-black text-black rounded-full hover:bg-white hover:text-black transition-all duration-300 focus:outline-none"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="flex flex-col w-full items-center justify-start mb-[3rem]">
            <p className="noto-serif lg:text-[3rem] text-[2rem] font-semibold">
            Don't be a stranger!🤙
            </p>
            <p className="comic-neue lg:text-[1.5rem] text-[18px] w-[90vw] lg:w-[60vw] ">
            Let's connect, let's chat
            </p>
          </div>
        </div>


      </motion.div>



    </div>


  );
};

export default getinTouch;
