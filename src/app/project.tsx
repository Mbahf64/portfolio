"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import { motion } from "framer-motion";
import { LuExternalLink } from "react-icons/lu";
import { MdArrowForward } from "react-icons/md"; // Arrow icon import

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<HTMLDivElement[]>([]); // To store all project div refs
  const helloRefs = useRef<HTMLAnchorElement[]>([]); // To store all "hello" div refs

  // To add refs to all project elements
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  // Callback to add the anchor to the refs array
  const addHelloRefs = (el: HTMLAnchorElement | null) => {
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
            start: "top 90%", // Trigger when "My Projects" is near the top
            toggleActions: "play none none none", // Play only on scroll down
          },
        }
      );
    }

    // Staggered animations for project cards on scroll, alternating left and right
    projectRefs.current.forEach((projectRef, index) => {
      if (projectRef) {
        const screenWidth = window.innerWidth;
        const startValue = screenWidth > 1024 ? "top 80%" : "top 85%"; // Start when cards are in the viewport

        // Cards will alternate direction (left for odd indexes, right for even)
        const xValue = index % 2 === 0 ? -200 : 200;

        gsap.fromTo(
          projectRef,
          { opacity: 0, x: xValue }, // Start from the left (-x) or right (+x)
          {
            opacity: 1,
            x: 0, // Move to the center
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: projectRef,
              start: startValue, // Start after scrolling past "My Projects" text
              end: "bottom 60%", // End slightly before it goes off-screen
              toggleActions: "play reverse play reverse", // Animate in and out on scroll
              scrub: true, // Smooth scroll effect
            },
          }
        );
      }
    });

    // Wiggle effect on hover for "hello" divs
    helloRefs.current.forEach((helloRef) => {
      if (helloRef) {
        // Create the wiggle animation with hover effect
        const wiggleTimeline = gsap.to(helloRef, {
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

    // Animate the arrow back and forth
    const arrowAnimation = gsap.to(".arrow", {
      x: 10, // Move 10px to the right
      duration: 0.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    return () => {
      arrowAnimation.kill(); // Cleanup animation on unmount
    };
  }, []);

  return (
    <div
      className="what-i-do-content flex items-center justify-center my-24"
      id="my-projects"
    >
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
              {/* Project Card 1 */}

              <div
                className="flex flex-col lg:flex-row w-full lg:h-[50vh] lg:gap-9"
                ref={addToRefs}
              >
                <a
                  href="https://roamie.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[90vw] lg:w-[60vw] h-[30vh] lg:h-full max-w-full border-2 border-gray-100 rounded-lg overflow-hidden "
                  ref={addHelloRefs}
                >
                  <img
                    src="./roamie.png"
                    alt="roamie"
                    className="w-full h-full object-cover"
                  />
                </a>

                {/* <a href="https://your-external-link.com" target="_blank" rel="noopener noreferrer"> */}

                <div className="w-[90vw] lg:w-[40vw] text-left flex flex-col gap-5">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-end lg:items-start lg:flex-col justify-center gap-1">
                      <p className="text-[14px] font-medium mb-[3px]">01</p>
                      <a
                        href="https://roamie.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="text-[24px] lg:text-[3rem] noto-serif font-semibold lg:font-bold">
                          Roamie
                        </p>
                      </a>
                    </div>
                    <a
                      href="https://roamie.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LuExternalLink className="w-5 h-5 flex lg:hidden" />
                    </a>
                  </div>
                  <p className="text-[18px] font-medium">
                    This AI-powered app helps you find everything you need to
                    know about a country before you travel. <br /> Tools:
                    Typescript, Nextjs, TailwindCss, Git & Github, Vercel
                  </p>
                  <a
                    href="https://roamie.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LuExternalLink className="w-7 h-7 hidden lg:flex" />
                  </a>
                </div>
              </div>

              {/* Project Card 2 */}
              <div
                className="flex flex-col-reverse lg:flex-row w-full lg:h-[50vh] gap-9 "
                ref={addToRefs}
              >
                <div className="w-[90vw] lg:w-[40vw] text-left flex flex-col gap-5">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-end lg:items-start lg:flex-col justify-center gap-1">
                      <p className="text-[14px] font-medium mb-[3px]">02</p>
                      <a
                        href="https://seekstyle-waitlist.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="text-[24px] lg:text-[3rem] noto-serif font-semibold lg:font-bold">
                          Seek Style Waitlist
                        </p>
                      </a>
                    </div>
                    <a
                      href="https://seekstyle-waitlist.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LuExternalLink className="w-5 h-5 flex lg:hidden" />
                    </a>
                  </div>
                  <p className="text-[18px] font-medium">
                    This is the Seekstyle waitlist, designed to collect email
                    addresses from our audience ahead of our launch. <br />{" "}
                    Tools: Typescript, Nextjs, TailwindCss, Git & Github, Vercel
                  </p>
                  <a
                    href="https://seekstyle-waitlist.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LuExternalLink className="w-7 h-7 hidden lg:flex" />
                  </a>
                </div>

                <a
                  href="https://seekstyle-waitlist.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[90vw] lg:w-[60vw] h-[30vh] lg:h-full max-w-full border-2 border-gray-100 rounded-lg overflow-hidden "
                  ref={addHelloRefs}
                >
                  <img
                    src="./seek-style.png"
                    alt="seek-style"
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>

              {/* Project Card 3 */}
              <div
                className="flex flex-col lg:flex-row w-full lg:h-[50vh] gap-9"
                ref={addToRefs}
              >
                <a
                  href="https://seamsearchh.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[90vw] lg:w-[62vw] h-[30vh] lg:h-full max-w-full border-2 border-gray-100 rounded-lg overflow-hidden "
                  ref={addHelloRefs}
                >
                  <img
                    src="./seam-search.png"
                    alt="seam-search"
                    className="w-full h-full object-cover "
                  />
                </a>

                <div className="w-[90vw] lg:w-[40vw] text-left flex flex-col gap-5">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex flex-row items-end lg:items-start lg:flex-col justify-center gap-1">
                      <p className="text-[14px] font-medium mb-[3px]">03</p>
                      <a
                        href="https://seamsearchh.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="text-[24px] lg:text-[3rem] noto-serif font-semibold lg:font-bold">
                          Seam Search
                        </p>
                      </a>
                    </div>
                    <a
                      href="https://seamsearchh.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LuExternalLink className="w-5 h-5 flex lg:hidden" />
                    </a>
                  </div>
                  <p className="text-[18px] font-medium">
                    This AI-powered app helps you find the exact clothing you
                    want to buy by searching every e-commerce store for you.
                    <br /> Tools: Typescript, Nextjs, TailwindCss, Git & Github,
                    Vercel
                  </p>
                  <a
                    href="https://seamsearchh.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LuExternalLink className="w-7 h-7 hidden lg:flex" />
                  </a>
                </div>
              </div>

              {/* Project Card 4 */}
              <div
                className="flex flex-col-reverse lg:flex-row w-full lg:h-[50vh] gap-9"
                ref={addToRefs}
              >
                <div className="w-[90vw] lg:w-[40vw] text-left flex flex-col gap-5">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-end lg:items-start lg:flex-col justify-center gap-1">
                      <p className="text-[14px] font-medium mb-[3px]">04</p>
                      <a
                        href="https://humani-text-ai.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="text-[24px] lg:text-[3rem] noto-serif font-semibold lg:font-bold">
                          Humanitext
                        </p>
                      </a>
                    </div>
                    <a
                      href="https://humani-text-ai.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LuExternalLink className="w-5 h-5 flex lg:hidden" />
                    </a>
                  </div>
                  <p className="text-[18px] font-medium">
                    Your AI companion that takes your words and transforms them
                    into more natural, relatable, and human-sounding
                    expressions. Whether you&apos;re looking to paraphrase or
                    just add that personal touch.
                    <br /> Tools: Typescript, Nextjs, TailwindCss, Git & Github,
                    Vercel
                  </p>

                  <a
                    href="https://humani-text-ai.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LuExternalLink className="w-7 h-7 hidden lg:flex" />
                  </a>
                </div>

                <a
                  href="https://humani-text-ai.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[90vw] lg:w-[60vw] h-[30vh] lg:h-full max-w-full border-2 border-gray-100 rounded-lg overflow-hidden "
                  ref={addHelloRefs}
                >
                  <img
                    src="./humanie_.png"
                    alt="seam-search"
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>

              {/* Project Card 5 */}
              <div
                className="flex flex-col-reverse lg:flex-row w-full lg:h-[50vh] gap-9"
                ref={addToRefs}
              >
                <div className="w-[90vw] lg:w-[40vw] text-left flex flex-col gap-5">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-end lg:items-start lg:flex-col justify-center gap-1">
                      <p className="text-[14px] font-medium mb-[3px]">05</p>
                      <a
                        href="https://Btnomic.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="text-[24px] lg:text-[3rem] noto-serif font-semibold lg:font-bold">
                          Btnomic
                        </p>
                      </a>
                    </div>
                    <a
                      href="https://Btnomic.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LuExternalLink className="w-5 h-5 flex lg:hidden" />
                    </a>
                  </div>
                  <p className="text-[18px] font-medium">
                    Btnomic is a trading bot application designed for seamless
                    forex and crypto trading. Users simply input the amount they
                    wish to trade, select their preferred runtime, choose a
                    plan, and pick the assets they want to trade. The bot
                    generates profits at regular intervals during the trade.
                    Once the trade completes, users receive their chosen profit
                    percentage after 24 hours. <br /> Tools: Laravel, Nextjs,
                    TailwindCss, Typescript
                  </p>
                  <a
                    href="https://Btnomic.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LuExternalLink className="w-7 h-7 hidden lg:flex" />
                  </a>
                </div>
                <a
                  href="https://Btnomic.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[90vw] lg:w-[60vw] h-[30vh] lg:h-full max-w-full border-2 border-gray-100 rounded-lg overflow-hidden"
                  ref={addHelloRefs}
                >
                  <img
                    src="./06.png"
                    alt="btnomic"
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
            </div>

            {/* View more on GitHub section */}
            <a
              href="https://github.com/Mbahf64"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center mt-8">
                <p className="text-lg font-semibold">View more on my GitHub</p>
                <MdArrowForward className="arrow w-6 h-6 ml-2 animate-pulse" />
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
