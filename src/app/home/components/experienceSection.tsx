import React from "react";
import Card from "@/app/components/card/card";
import Image from "next/image";
import { constants } from "@/app/shared/constants";
import experience from "../../../../public/experience.png";
import "./css/experienceSection.css"; // Import the styles!

export const ExperienceSection = () => {
  return (
    <div className="experience-section">
      <div className="experience-img experience-img-container">
        <div className="experience-img-text">
          <div>
            <span className="experience-years">{constants.years}</span>
          </div>
          <div className="experience-description">
            <span>{constants.ofExperience}</span>
          </div>
        </div>
        <Image className="experience-image" src={experience} alt="experience" />
      </div>
      <div className="experience-card-container experience-img">
        <Card
          text={constants.description}
          textStyle="experience-card-text"
          style="experience-card"
        />
      </div>
    </div>
  );
};
