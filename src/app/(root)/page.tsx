"use client";

import AboutLandingPage from "@/components/landingpage/AboutSection";
import FeaturedProjectsSection from "@/components/landingpage/FeaturedProjectsSection";
import HeroSection from "@/components/landingpage/HeroSection";
import ServicesSection from "@/components/landingpage/ServicesSection";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <AboutLandingPage />
      <ServicesSection />
      <FeaturedProjectsSection />
    </div>
  );
};

export default LandingPage;
