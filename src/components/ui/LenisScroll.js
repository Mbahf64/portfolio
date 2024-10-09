// components/LenisScroll.js

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const LenisScrollComponent = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    let lenis;

    if (typeof window !== "undefined") {
      // Initialize Lenis with more "slippery" settings
      lenis = new Lenis({
        duration: 1.8, // Increase duration for more slippery effect
        easing: (t) => 1 - Math.pow(1 - t, 3),

        smooth: true,
        smoothTouch: true, // Ensure smooth scrolling on touch devices
      });

      // Animation frame loop for smooth scroll
      const scrollFn = (time) => {
        lenis.raf(time);
        requestAnimationFrame(scrollFn);
      };
      requestAnimationFrame(scrollFn);
    }

    return () => {
      if (lenis) lenis.destroy(); // Cleanup when component unmounts
    };
  }, []);

  return <div ref={scrollRef}>{children}</div>;
};

export default LenisScrollComponent;
