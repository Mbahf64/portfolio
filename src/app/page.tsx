"use client";
import React from "react";
import Hero from "./hero";
import Header from "./header";
import WhatIDo from "./whatIDo";
import LenisScroll from "../components/ui/LenisScroll";
import Mystory from "./myStory";
import Project from "./project";
import Getintouch from "./getInTouch";

const page = () => {
 

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
