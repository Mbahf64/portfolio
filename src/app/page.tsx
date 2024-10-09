"use client";
import { useEffect } from "react";
import Hero from "./hero";
import Header from "./header";
import WhatIDo from "./whatIDo";
import LenisScroll from "../components/ui/LenisScroll";
import Mystory from "./myStory";
import Project from "./project";
import Getintouch from "./getInTouch";

const page = () => {
  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;

  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);

  return (
    <div className="w-full h-full div">
     <LenisScroll>
      <Header />
      <Hero />
      <WhatIDo />
      <Mystory />
      <Project />
      <Getintouch />
      </LenisScroll>
    </div>
  );
};

export default page;
