import React from "react";
import icon1 from "../../../../public/Frame 28.png";
import icon2 from "../../../../public/Frame 27.png";
import icon3 from "../../../../public/Frame 26.png";
import icon4 from "../../../../public/Frame 25.png";
import icon5 from "../../../../public/Frame 24.png";
import icon6 from "../../../../public/Frame 23.png";
import icon7 from "../../../../public/Frame 22.png";
import Image from "next/image";
import "./css/expertiseSection.css";

export const ExpertiseSection = () => {
  const iconList = [icon1, icon2, icon3, icon4, icon5, icon6, icon7];

  return (
    <div className="expertise-section">
      <div className="expertise-title">My Expertise</div>
      <div className="expertise-icons">
        {iconList.map((icon, index) => (
          <Image
            className="expertise-icon"
            src={icon}
            alt="experience"
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
