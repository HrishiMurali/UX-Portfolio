import React from "react";
import Card from "@/app/components/card/card";
import Image from "next/image";
import { constants } from "@/app/shared/constants";
import experience from "../../../../public/experience.png";

export const ExperienceSection = () => {
  return (
    <div className="flex flex-col justify-between experience-section gap-8 h-full">
      <div className="relative experience-img ">
        <div className="absolute left-[50%] top-[10%] translate-x-[-50%] flex justify-center items-center flex-col gap-4 w-full">
          <div>
            <span className="text-black text-5xl xl:text-6xl font-bold">
              {constants.years}
            </span>
          </div>
          <div className="text-black text-3xl">
            <span>{constants.ofExperience}</span>
          </div>
        </div>
        <Image
          className="w-full rounded-[40px] "
          src={experience}
          alt="experience"
        />
      </div>
      <div className="experience-img h-full flex justify-center items-center">
        <Card
          text={constants.description}
          textStyle="text-[#C7C7BB] text-[12px] md:text-xl 2xl:text-3xl p-6 2xl:p-10 text-center"
          style="flex justify-center items-center bg-[#0D0D0D] text-2xl rounded-[40px] w-full h-full"
        />
      </div>
    </div>
  );
};
