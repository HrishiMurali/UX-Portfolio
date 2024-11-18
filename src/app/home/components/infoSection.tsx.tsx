import React from "react";
import Card from "@/app/components/card/card";
import { constants } from "@/app/shared/constants";
export const InfoSection = () => {
  return (
    <Card
      text={constants.shapeExperience}
      textStyle={"text-[#C7C7BB]  text-[48px] w-[517px] info-text"}
      style="flex justify-start items-end bg-[#0D0D0D] p-[25px] rounded-[40px]  w-full min-h-[500px] pl-[35px] info-section"
    />
  );
};
