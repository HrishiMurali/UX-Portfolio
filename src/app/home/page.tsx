"use client"; // Ensure this is a client component for hooks
import React, { useEffect } from "react";
import { homeAnimations } from "./animations/homeAnimations"; // Import the animations

import { ExperienceSection } from "./components/experienceSection";
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
      <div className="flex gap-4 flex-wrap 2xl:flex-nowrap">
        <div className="flex-[6] min-w-[58%]">
          <HeroSection />
        </div>
        <div className="flex-[4] min-w-[40%]">
          <ExperienceSection />
        </div>
      </div>

      <div className="flex flex-row gap-4 justify-between info-expertise flex-wrap xl:flex-nowrap">
        <InfoSection />
        <ExepertiseSection />
      </div>
      <WorksSection />
      <ContactSection />
    </div>
  );
};

export default Home;
