import React from "react";
import icon1 from "../../../../public/Frame 28.png";
import icon3 from "../../../../public/Frame 26.png";
import icon2 from "../../../../public/Frame 27.png";
import icon4 from "../../../../public/Frame 25.png";
import icon5 from "../../../../public/Frame 24.png";
import icon6 from "../../../../public/Frame 23.png";
import icon7 from "../../../../public/Frame 22.png";
import Image from "next/image";

export const ExepertiseSection = () => {
  const iconList = [icon1, icon2, icon3, icon4, icon5, icon6, icon7];

  return (
    <div className="bg-[#0D0D0D] p-10 text-2xl rounded-[40px]  w-full min-h-[300px] expertise-section overflow-hidden">
      <div className="text-[#C7C7BB] text-3xl expertise-text">My Expertise</div>
      <div className="flex flex-wrap expertise-img py-14">
        {iconList.map((icon, index) => (
          <Image
            className="p-6 w-32 2xl:w-36"
            src={icon}
            alt="experience"
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
