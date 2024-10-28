import React from "react";
import Card from "@/app/components/card/card";
import Image from "next/image";
import { constants } from "@/app/shared/constants";
import experience from "../../../../public/experience.png";

export const ExeperienceSection = () => {
  return (
    <div className="flex  flex-col gap-4">
      <div className="relative">
        <div className="absolute left-[50%] top-[35px] translate-x-[-50%] flex justify-center items-center flex-col gap-4">
          <div>
            <span className="text-black text-[74px] font-bold">
              {constants.years}
            </span>
          </div>
          <div className="text-black text-[32px]">
            <span>{constants.ofExperience}</span>
          </div>
        </div>
        <Image
          className="w-full min-h-[421px] rounded-[40px]"
          src={experience}
          alt="experience"
        />
      </div>

      <Card
        text={constants.description}
        textStyle={"text-[#C7C7BB] text-[32px]"}
        style="flex justify-center items-center bg-[#0D0D0D] p-[25px] text-2xl rounded-[40px]  w-full min-h-[300px]"
      />
    </div>
  );
};
