"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import { motion } from "framer-motion";
import { LuExternalLink } from "react-icons/lu";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<HTMLDivElement[]>([]); // To store all project div refs
  const helloRefs = useRef<HTMLDivElement[]>([]); // To store all "hello" div refs

  // To add refs to all project elements
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  // To add refs to "hello" divs
  const addHelloRefs = (el: HTMLDivElement) => {
    if (el && !helloRefs.current.includes(el)) {
      helloRefs.current.push(el);
    }
  };

  useEffect(() => {
    // GSAP animation for the section intro
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "elastic.out(1, 0.75)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Staggered animations for project cards on scroll
    projectRefs.current.forEach((projectRef) => {
      if (projectRef) {
        const screenWidth = window.innerWidth;
        let startValue = screenWidth > 1024 ? "top 5%" : "top 10%"; // Adjust start value for different screen sizes

        gsap.fromTo(
          projectRef,
          { opacity: 0, y: 50 }, // Start from 50px below the final position
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: projectRef,
              start: startValue, // Show cards earlier
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Wiggle effect on hover for "hello" divs
    helloRefs.current.forEach((helloRef) => {
      if (helloRef) {
        // Create the wiggle animation with hover effect
        let wiggleTimeline = gsap.to(helloRef, {
          rotation: 5, // Rotate 5 degrees
          duration: 0.2,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
          paused: true, // Initially paused
        });

        // Add hover event to play animation
        helloRef.addEventListener("mouseenter", () => {
          wiggleTimeline.play(); // Start wiggle on hover
        });

        helloRef.addEventListener("mouseleave", () => {
          wiggleTimeline.pause(); // Pause wiggle on hover off
          gsap.to(helloRef, {
            rotation: 0, // Reset to original position
            duration: 0.2,
            ease: "power1.out",
          });
        });
      }
    });
  }, []);

  return (
    <div className="what-i-do-content flex items-center justify-center my-24">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        ref={sectionRef}
      >
        <div className="w-[90vw] lg:w-[65vw] h-full flex items-center justify-center">
          <div className="w-full h-full flex flex-col items-center gap-12">
            <p className="w-full text-[32px] lg:text-[3rem] noto-serif font-bold text-left leading-none">
              My Projects
            </p>

            <div className="w-full h-full flex flex-col gap-[5rem] comic-neue">
              <div className="flex flex-col lg:flex-row w-full lg:h-[50vh] lg:gap-9" ref={addToRefs}>
                <div
                  className="w-[90vw] lg:w-[60vw] h-[30vh] lg:h-full border-2 border-black rounded-lg"
                  ref={addHelloRefs}
                >
                  helllo
                </div>

                <div className="w-[90vw] lg:w-[40vw] text-left flex flex-col gap-5">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-end lg:items-start lg:flex-col justify-center gap-1">
                      <p className="text-[1rem] font-semibold">01</p>
                      <p className="text-[24px] lg:text-[3rem] noto-serif font-bold">Roamie</p>
                    </div>
                    <LuExternalLink className="w-5 h-5 flex lg:hidden" />
                  </div>
                  <p className="text-[1rem] font-semibold">
                    This is an eCommerce web application designed for purchasing
                    customized glasses and eyewear. <br /> Tools: Typescript, Nextjs,
                    Redux, TailwindCss, Playwright/Jest, Laravel, Git & Github,
                    Vercel
                  </p>
                  <LuExternalLink className="w-7 h-7 hidden lg:flex" />
                </div>
              </div>

              <div className="flex flex-col-reverse lg:flex-row w-full lg:h-[50vh] gap-9" ref={addToRefs}>
                <div
                  className="w-[90vw] lg:w-[40vw] text-left flex flex-col gap-5"
                >
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-end lg:items-start lg:flex-col justify-center gap-1">
                      <p className="text-[1rem] font-semibold">02</p>
                      <p className="text-[24px] lg:text-[3rem] noto-serif font-bold">Roamie</p>
                    </div>
                    <LuExternalLink className="w-5 h-5 flex lg:hidden" />
                  </div>
                  <p className="text-[1rem] font-semibold">
                    This is an eCommerce web application designed for purchasing
                    customized glasses and eyewear. <br /> Tools: Typescript, Nextjs,
                    Redux, TailwindCss, Playwright/Jest, Laravel, Git & Github,
                    Vercel
                  </p>
                  <LuExternalLink className="w-7 h-7 hidden lg:flex" />
                </div>

                <div
                  className="w-[90vw] lg:w-[60vw] h-[30vh] lg:h-full border-2 border-black rounded-lg"
                  ref={addHelloRefs}
                >
                  helllo
                </div>
              </div>

              <div className="flex flex-col lg:flex-row w-full lg:h-[50vh] gap-9" ref={addToRefs}>
                <div
                  className="w-[90vw] lg:w-[60vw] h-[30vh] lg:h-full border-2 border-black rounded-lg"
                  ref={addHelloRefs}
                >
                  helllo
                </div>

                <div className="w-[90vw] lg:w-[40vw] text-left flex flex-col gap-5">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-end lg:items-start lg:flex-col justify-center gap-1">
                      <p className="text-[1rem] font-semibold">03</p>
                      <p className="text-[24px] lg:text-[3rem] noto-serif font-bold">Roamie</p>
                    </div>
                    <LuExternalLink className="w-5 h-5 flex lg:hidden" />
                  </div>
                  <p className="text-[1rem] font-semibold">
                    This is an eCommerce web application designed for purchasing
                    customized glasses and eyewear. <br /> Tools: Typescript, Nextjs,
                    Redux, TailwindCss, Playwright/Jest, Laravel, Git & Github,
                    Vercel
                  </p>
                  <LuExternalLink className="w-7 h-7 hidden lg:flex" />
                </div>
              </div>

              <div className="flex flex-col-reverse lg:flex-row w-full lg:h-[50vh] gap-9" ref={addToRefs}>
                <div
                  className="w-[90vw] lg:w-[40vw] text-left flex flex-col gap-5"
                >
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-end lg:items-start lg:flex-col justify-center gap-1">
                      <p className="text-[1rem] font-semibold">04</p>
                      <p className="text-[24px] lg:text-[3rem] noto-serif font-bold">Roamie</p>
                    </div>
                    <LuExternalLink className="w-5 h-5 flex lg:hidden" />
                  </div>
                  <p className="text-[1rem] font-semibold">
                    This is an eCommerce web application designed for purchasing
                    customized glasses and eyewear. <br /> Tools: Typescript, Nextjs,
                    Redux, TailwindCss, Playwright/Jest, Laravel, Git & Github,
                    Vercel
                  </p>
                  <LuExternalLink className="w-7 h-7 hidden lg:flex" />
                </div>

                <div
                  className="w-[90vw] lg:w-[60vw] h-[30vh] lg:h-full border-2 border-black rounded-lg"
                  ref={addHelloRefs}
                >
                  helllo
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
