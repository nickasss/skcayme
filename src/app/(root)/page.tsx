"use client";

import AboutLandingPage from "@/components/landingpage/AboutLandingPage";
import HeroSection from "@/components/landingpage/HeroSection";
import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-col w-full h-screen ">
      <HeroSection />
      <AboutLandingPage />
    </div>
  );
};

export default LandingPage;
