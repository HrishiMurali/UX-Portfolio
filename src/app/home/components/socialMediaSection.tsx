import React from "react";
import Card from "@/app/components/card/card";
export const SocialMediaSection = () => {
  const socialMediaList = [
    { label: "Behance", url: "" },
    { label: "Dribbble", url: "" },
    { label: "Instagram", url: "" },
    { label: "Twitter", url: "" },
    { label: "Artstation", url: "" },
    { label: "LinkedIn", url: "" },
  ];
  return (
    <div className="flex flex-row gap-4 w-full justify-between">
      {socialMediaList.map((media, index) => (
        <Card
          key={index}
          text={media.label}
          textStyle="text-[#C7C7BB] text-[32px]"
          style="bg-[#0D0D0D] p-[15px] rounded-[40px] w-[200px] flex justify-center items-center"
        />
      ))}
    </div>
  );
};
