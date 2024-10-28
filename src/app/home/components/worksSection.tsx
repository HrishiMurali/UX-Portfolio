import React from "react";
import Card from "@/app/components/card/card";
import { constants } from "@/app/shared/constants";
import Image from "next/image";
import phones from "../../../../public/Frame 13.png";
import laptop from "../../../../public/Frame 1.png";
import bluePhones from "../../../../public/Frame 13 (1).png";
import SummaryCard from "../../components/summaryCard/SummaryCard";
import screen from "../../../../public/Frame 18.png";
import carDetail from "../../../../public/Frame 21.png";
export const WorksSection = () => {
  return (
    <>
      {/* heading */}
      <Card
        text={constants.worksOfArt}
        textStyle={"text-[#C7C7BB] text-[40px]"}
        style="bg-[#0D0D0D]  w-full   rounded-[40px] min-h-[70px] flex justify-start items-center pl-[40px]"
      />
      <div className="flex flex-row">
        <Image
          className=" w-[50%] min-h-[604px] rounded-tl-[40px] rounded-bl-[40px]"
          alt="phones"
          src={phones}
        />

        <SummaryCard
          title={constants.standardAutomobile}
          content={constants.standardAutomobileContent}
          containerStyle=" w-[50%] p-[25px] bg-[#0D0D0D] rounded-tr-[40px] rounded-br-[40px] text-[#C7C7BB] "
          titleStyle="p-[25px] text-[40px] font-bold"
          contentStyle="p-[25px]  text-[32px]"
        />
      </div>

      <div className="flex flex-row gap-4">
        <div className="flex flex-col w-[50%] gap-4">
          <Image
            className=" w-full h-[605px] rounded-[40px]"
            alt="laptop"
            src={laptop}
            height={605}
          />
          <SummaryCard
            title={constants.smartSchedule}
            content={constants.smartScheduleContent}
            containerStyle="p-[25px] bg-[#0D0D0D] rounded-tr-[40px] rounded-br-[40px] text-[#C7C7BB] min-h-[350px]"
            titleStyle="p-[25px] text-[40px] font-bold"
            contentStyle="p-[25px]  text-[32px]"
          />
        </div>

        <div className="flex flex-col w-[50%] gap-4">
          <Image
            className=" w-full h-[605px] rounded-[40px]"
            alt="experience"
            src={bluePhones}
            height={605}
          />
          <SummaryCard
            title={constants.luxuryAutomobile}
            content={constants.luxuryContent}
            containerStyle="p-[25px] bg-[#0D0D0D] rounded-[40px] text-[#C7C7BB] min-h-[350px]"
            titleStyle="p-[25px] text-[40px] font-bold"
            contentStyle="p-[25px] text-[32px] "
          />
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <div className="flex flex-col w-[50%]">
          <Image
            className=" w-full h-[605px] rounded-[40px]"
            alt="laptop"
            src={screen}
            height={605}
          />
          <SummaryCard
            title={constants.portOperation}
            content={constants.portOperationContent}
            containerStyle="p-[25px] bg-[#0D0D0D] rounded-tr-[40px] rounded-br-[40px] text-[#C7C7BB] min-h-[350px]"
            titleStyle="p-[25px] text-[40px] font-bold"
            contentStyle="p-[25px]  text-[32px]"
          />
        </div>

        <div className="flex flex-col w-[50%]">
          <Image
            className=" w-full h-[605px] rounded-[40px]"
            alt="experience"
            src={carDetail}
            height={605}
          />
          <SummaryCard
            title={constants.usedCar}
            content={constants.usedCarContent}
            containerStyle="p-[25px] bg-[#0D0D0D] rounded-[40px] text-[#C7C7BB] min-h-[350px]"
            titleStyle="p-[25px] text-[40px] font-bold"
            contentStyle="p-[25px] text-[32px] "
          />
        </div>
      </div>
    </>
  );
};
