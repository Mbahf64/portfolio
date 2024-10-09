"use client"

import { useEffect, useState } from "react";
import Particles from "../components/ui/particles";
import { useTheme } from "next-themes";

const ParticlesBackground = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("colors");

  // Define an array of colors
  const colors = ["#09BC8A", "#6948E1", "#5AC0DD"];

  // Set random color from the array when the theme changes
  useEffect(() => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  }, [theme]);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-white">
      <Particles
        className="absolute inset-0 z-0" // Full page background
        quantity={50}
        ease={100}
        color={color} // Particles color (random)
        refresh
      />
    </div>
  );
};

export default ParticlesBackground;
