"use client"; // Ensure this is a client component for hooks
import React, { useEffect } from "react";
import { homeAnimations } from "./animations/homeAnimations"; // Import the animations

import { ExeperienceSection } from "./components/experienceSection";
import { ExepertiseSection } from "./components/expertiseSection";
import { WorksSection } from "./components/worksSection";
import { HeroSection } from "./components/heroSection";
import { ContactSection } from "./components/contactSection";
import { InfoSection } from "./components/infoSection.tsx";

const Home = () => {
  useEffect(() => {
    homeAnimations(); // Trigger the animations here
  }, []);

  return (
    <div className="flex flex-col gap-4 my-2">
      <div className="flex gap-4 p-[10px] flex-wrap xl:flex-nowrap">
        <HeroSection />
        <ExeperienceSection />
      </div>
      <div className="flex flex-row gap-4 justify-between info-expertise">
        <InfoSection />
        <ExepertiseSection />
      </div>
      <WorksSection />
      <ContactSection />
    </div>
  );
};

export default Home;
