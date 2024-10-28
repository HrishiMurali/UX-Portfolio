import React from "react";
import { ExeperienceSection } from "./components/experienceSection";
import { InfoSection } from "./components/infoSection.tsx";
import { ExepertiseSection } from "./components/expertiseSection";
import { SocialMediaSection } from "./components/socialMediaSection";
import { WorksSection } from "./components/worksSection";
import { HeroSection } from "./components/heroSection";
import { ContactSection } from "./components/contactSection";

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex  flex-row  gap-4 p-[10px]">
        <HeroSection />
        <ExeperienceSection />
      </div>
      <div className="flex flex-row gap-4">
        <InfoSection />
        <ExepertiseSection />
      </div>
      <SocialMediaSection />
      <WorksSection />
      <ContactSection />
    </div>
  );
};

export default Home;
