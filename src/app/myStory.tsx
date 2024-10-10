"use client";
import { motion } from "framer-motion";

const whatIDo = () => {
  return (
    <div className="what-i-do-content flex items-center justify-center mt-20" id="my-story">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }} // Start invisible and smaller
        animate={{ opacity: 1, scale: 1 }} // Animate to full size and visibility
        transition={{ duration: 1.2, ease: "easeInOut" }} // Smooth animation over 1.2s
      >
        <div className="w-full lg:w-[60vw] h-full flex lg:flex-row flex-col items-center  justify-center">
          <div className="w-full lg:w-[65vw] h-full flex lg:flex-row flex-col items-center gap-6 lg:gap-9">
            <div className="w-[90vw] lg:w-[30vw] h-full">
              <p className="text-[24px] lg:text-[3rem] noto-serif font-normal lg:font-bold text-left lg:leading-none">
                MY<br className="lg:hidden" /> STORY
              </p>
            </div>

            <div className="w-[90vw] lg:w-[70vw] h-full flex flex-col gap-[1rem] lg:gap-[4rem] comic-neue">
              <p className="text-[16px] lg:text-[24px] text-left">
                Hello! My name is Favour, I am experienced in converting ideas
                into scalable software products and building solutions that run
                on the internet. Over the last 2 years, I&apos;ve developed products
                for businesses, with a focus on top-notch
                quality, accessibility, compatibility, and enjoyable user
                experiences.
              </p>

              <p className="text-[16px] lg:text-[24px] text-left">
                What I work with: <br />
                Languages: JavaScript, TypeScript. <br />
                Technologies: ReactJS, Redux, Next.js, Node.js, Express, Git &amp;
                GitHub, E2E Testing/Playwright/Cypress, Redis,
                TailwindCSS, Firebase, MongoDB, Git, Netlify, Vercel, Figma.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default whatIDo;
