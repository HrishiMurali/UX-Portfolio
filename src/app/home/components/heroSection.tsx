import React from "react";
import Card from "@/app/components/card/card";
import Image from "next/image";
import { resources } from "@/app/shared/resources";
import { constants } from "@/app/shared/constants";

export const HeroSection = () => {
  return (
    <div className="flex  flex-col min-w-[55vw]  p-[2px] gap-4 hero-section justify-between">
      <div className="hero-heading-container">
        <Card
          text={constants.heading1}
          textStyle={"text-[#C7C7BB] text-3xl font-bold hero-heading"}
          style="bg-[#0D0D0D]  w-full  rounded-[40px] min-h-[70px] flex justify-start items-center  p-[40px] "
        />
      </div>
      <div className="relative hero-img">
        <Image
          src={resources.homeGif}
          className="w-full min-h-[560px] bg-[#000000] rounded-[40px]"
          width={100}
          height={100}
          alt="moon"
        />
        <Card
          text={constants.heading2}
          textStyle={"text-[#C7C7BB] text-[40px] font-bold"}
          style="absolute left-[50%] bottom-[30px] translate-x-[-50%] bg-[#0D0D0D] rounded-[40px] min-w-[840px] min-h-[100px] flex justify-center items-center p-[40px]"
        />
      </div>
    </div>
  );
};
