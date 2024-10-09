"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WhatIDo = () => {
  const section1Ref = useRef<HTMLDivElement | null>(null); // Reference for first section text
  const section2Ref = useRef<HTMLDivElement | null>(null); // Reference for second section text

  useEffect(() => {
    // Smooth fade-in and scale-up for section 1
    gsap.fromTo(
      section1Ref.current,
      {
        opacity: 0,
        y: 50, // Slightly lower position for parallax feel
        scale: 0.95, // Slightly scaled down
      },
      {
        opacity: 1,
        y: 0, // Move to its normal position
        scale: 1, // Scale up to normal size
        duration: 1, // Fast but elegant
        ease: "power2.out", // Smooth and classy easing
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top 80%", // Start the animation when 80% of the viewport is reached
          end: "top 60%", // End the animation as it scrolls further
          scrub: 0.5, // Slightly scrubbed for smoothness
        },
      }
    );

    // Same effect for section 2
    gsap.fromTo(
      section2Ref.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 80%",
          end: "top 60%",
          scrub: 0.5,
        },
      }
    );
  }, []);

  return (
    <div className="what-i-do-content flex items-center justify-center mt-20">
      <div className="w-[90vw] lg:w-[80vw] h-[100vh] bg-slate-100 flex items-center justify-center relative">
        {/* Main content */}
        <div className="w-[70vw] lg:w-[70vw] h-[90vh] flex flex-col items-center justify-between relative">
          {/* First Section */}
          <div ref={section1Ref} className="flex flex-col gap-8 text-center">
            <p className="noto-serif text-xl font-semibold">
              Engineering ideas into reality,<br />{" "}
              <span>crafting living experiences.</span>
            </p>
            <p className="comic-neue">
              I create human-centered products that deliver unique and memorable digital journeys.
            </p>
          </div>

          {/* Second Section */}
          <div ref={section2Ref} className="flex flex-col gap-8 text-center">
            <p className="noto-serif text-xl font-semibold">
              Building seamless web solutions that bring concepts to life.
            </p>
            <p className="comic-neue">
              Strategic, user-focused solutions designed for exceptional experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
