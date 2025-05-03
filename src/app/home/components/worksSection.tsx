import React from "react";
import Card from "@/app/components/card/card";
import { constants } from "@/app/shared/constants";
import Image from "next/image";
import phones from "../../../../public/Frame 13.png";
import laptop from "../../../../public/laptop.png";
import bluePhones from "../../../../public/iPhone 15 Pro (2) 1.png";
import SummaryCard from "../../components/summaryCard/SummaryCard";
import screen from "../../../../public/Frame 18.png";
import carDetail from "../../../../public/Frame 21.png";

// Import custom CSS
import "./css/workSection.css";

export const WorksSection = () => {
  return (
    <>
      {/* First Section */}
      <div className="work-section-1">
        <Card
          text={constants.worksOfArt}
          textStyle="text-[#C7C7BB] text-[40px] work-1-text"
          style="p-[20px] bg-[#0D0D0D] mb-[15px] rounded-[40px]"
        />
        <div className="flex flex-col 2xl:flex-row overflow-hidden h-[600px] 2xl:h-[600px]">
          <div className="flex-[50%] work-1-img-container">
            <Image
              className="work-1-img w-full h-full object-cover rounded-[40px]"
              alt="phones"
              color="blue"
              src={phones}
            />
          </div>

          <SummaryCard
            title={constants.standardAutomobile}
            content={constants.standardAutomobileContent}
            containerStyle="flex-[50%] work-1-summary flex flex-col justify-between"
            titleStyle="p-[2px] text-3xl xl:text-[40px] font-bold work-1-summary-text"
            contentStyle="p-[2px] text-[32px] work-1-summary-text"
            buttonStyle="work-1-summary-button"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 work-section-2 overflow-hidden h-full">
        {/* Images Row */}
        <div className="flex flex-row gap-4 w-full">
          <div className="flex-1 work-2-img-container">
            <Image
              className="w-full object-cover  work-2-img"
              alt="laptop"
              src={laptop}
            />
          </div>
          <div className="flex-1 work-3-img-container">
            <Image
              className="w-full h-[80%] object-cover work-3-img"
              alt="bluePhones"
              src={bluePhones}
            />
          </div>
        </div>

        {/* Cards Row */}
        <div className="flex flex-row gap-4 w-full">
          <div className="flex-1">
            <SummaryCard
              title={constants.smartSchedule}
              content={constants.smartScheduleContent}
              containerStyle="h-full w-full work-2-summary"
              titleStyle="text-[40px] font-bold work-2-summary-text"
              contentStyle="text-[32px] work-2-summary-text"
              buttonStyle="work-2-summary-button"
            />
          </div>
          <div className="flex-1">
            <SummaryCard
              title={constants.luxuryAutomobile}
              content={constants.luxuryContent}
              containerStyle="h-full w-full work-3-summary"
              titleStyle="text-[40px] font-bold work-3-summary-text"
              contentStyle="text-[32px] work-3-summary-text"
              buttonStyle="work-3-summary-button"
            />
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="flex flex-col gap-4 work-section-3 overflow-hidden h-full">
        {/* Images Row */}
        <div className="flex flex-row gap-4 w-full">
          <div className="flex flex-1 work-4-img-container items-center">
            <Image
              className="w-full h-[80%] object-cover work-4-img "
              alt="laptop"
              src={screen}
              height={605}
            />
          </div>
          <div className="flex flex-1 work-5-img-container items-center">
            <Image
              className="w-full  h-[80%]  object-cover work-5-img "
              alt="experience"
              src={carDetail}
              height={605}
            />
          </div>
        </div>

        {/* Cards Row */}
        <div className="flex flex-row gap-4 w-full">
          <div className="flex-1">
            <SummaryCard
              title={constants.portOperation}
              content={constants.portOperationContent}
              containerStyle="h-full w-full work-4-summary"
              titleStyle="text-[40px] font-bold work-4-summary-text"
              contentStyle="text-[32px] work-4-summary-text"
              buttonStyle="work-4-summary-button"
            />
          </div>
          <div className="flex-1">
            <SummaryCard
              title={constants.usedCar}
              content={constants.usedCarContent}
              containerStyle="h-full w-full work-5-summary"
              titleStyle="text-[40px] font-bold work-5-summary-text"
              contentStyle="text-[32px] work-5-summary-text"
              buttonStyle="work-5-summary-button"
            />
          </div>
        </div>
      </div>
    </>
  );
};
