import React, { useEffect } from "react";
import gsap from "gsap";

const Header: React.FC = () => {
  useEffect(() => {
    // GSAP hover animations for nav items
    const navItems = document.querySelectorAll<HTMLElement>('.nav-item');

    navItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        gsap.to(item, {
          scale: 1.1,
          color: "#1DA1F2", // Change color on hover
          duration: 0.3,
          ease: "power2.out",
        });
      });

      item.addEventListener('mouseleave', () => {
        gsap.to(item, {
          scale: 1,
          color: "black", // Revert to original color
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Clean up event listeners on component unmount
    return () => {
      navItems.forEach(item => {
        item.removeEventListener('mouseenter', () => {});
        item.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full flex items-center justify-center mt-5">
      <div
        className="w-[199px] lg:w-[698px] h-[56px] border-[1.5px] border-black rounded-[100px] 
      bg-white flex items-center justify-center lg:justify-between px-8 sticky z-10"
      >
        <p className="zen-dots text-[16px]">Mba Favour</p>

        <div className="hidden lg:flex gap-5">
          <p
            className="Manrope text-[16px] font-semibold cursor-pointer nav-item"
            onClick={() => scrollToSection('my-story')} // Scroll to My Story
          >
            My Story
          </p>
          <p
            className="Manrope text-[16px] font-semibold cursor-pointer nav-item"
            onClick={() => scrollToSection('my-projects')} // Scroll to My Projects
          >
            My Projects
          </p>
          <a
            href="https://docs.google.com/document/d/1NvQJGm_J7FTbZmLykkHqErBL2t4_cj2iuQzyvIYajm8/edit?tab=t.0" // Link to your resume
            target="_blank"
            rel="noopener noreferrer"
            className="Manrope text-[16px] font-semibold cursor-pointer nav-item"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
