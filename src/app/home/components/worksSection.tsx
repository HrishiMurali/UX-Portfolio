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
      <div className="work-section-1">
        <Card
          text={constants.worksOfArt}
          textStyle={"text-[#C7C7BB] text-[40px] work-1-text"}
          style="bg-[#0D0D0D] w-full rounded-[40px] min-h-[70px] flex justify-start items-center pl-[40px] work-1-container mb-6"
        />
        <div className="flex flex-row overflow-hidden">
          <div className="work-1-img-container bg-[#EFEFEF] flex justify-center items-center w-[50%] min-h-[604px] [clip-path:inset(0_round_40px_0_0_40px)]">
            <Image
              className=" work-1-img w-full "
              alt="phones"
              color="blue"
              src={phones}
            />
          </div>

          <SummaryCard
            title={constants.standardAutomobile}
            content={constants.standardAutomobileContent}
            containerStyle=" w-[50%] p-[25px] bg-[#0D0D0D] rounded-tr-[40px] rounded-br-[40px] text-[#C7C7BB] work-1-summary"
            titleStyle="p-[25px] text-[40px] font-bold work-1-summary-text"
            contentStyle="p-[25px]  text-[32px] work-1-summary-text"
            buttonStyle="work-1-summary-button"
          />
        </div>
      </div>

      <div className="flex flex-row gap-4 work-section-2 overflow-hidden">
        <div className="flex flex-col w-[50%] gap-4">
          <div className="work-2-img-container bg-[#91ACA5] w-full h-[605px] rounded-[40px]  [clip-path:inset(0_round_40px)]">
            <Image
              className=" work-2-img w-full"
              alt="laptop"
              src={laptop}
              height={605}
            />
          </div>
          <SummaryCard
            title={constants.smartSchedule}
            content={constants.smartScheduleContent}
            containerStyle="p-[25px] bg-[#0D0D0D] rounded-[40px] text-[#C7C7BB] min-h-[350px]  work-2-summary"
            titleStyle="p-[25px] text-[40px] font-bold work-2-summary-text"
            contentStyle="p-[25px]  text-[32px] work-2-summary-text"
            buttonStyle="work-2-summary-button"
          />
        </div>

        <div className="flex flex-col w-[50%] gap-4 overflow-hidden">
          <div className="work-3-img-container bg-[#020B24]  h-[605px] rounded-[40px] [clip-path:inset(0_round_40px)]">
            <Image
              className=" work-3-img w-full"
              alt="experience"
              src={bluePhones}
              height={605}
            />
          </div>
          <SummaryCard
            title={constants.luxuryAutomobile}
            content={constants.luxuryContent}
            containerStyle="p-[25px] bg-[#0D0D0D] rounded-[40px] text-[#C7C7BB] min-h-[350px] work-3-summary"
            titleStyle="p-[25px] text-[40px] font-bold work-3-summary-text"
            contentStyle="p-[25px] text-[32px] work-3-summary-text"
            buttonStyle="work-3-summary-button"
          />
        </div>
      </div>

      <div className="flex flex-row gap-4 work-section-3 overflow-hidden">
        <div className="flex flex-col w-[50%] gap-4">
          <div className="h-[605px] rounded-[40px] work-4-img-container bg-[#F2F4F7] w-full [clip-path:inset(0_round_40px)]">
            <Image
              className=" w-full work-4-img"
              alt="laptop"
              src={screen}
              height={605}
            />
          </div>
          <SummaryCard
            title={constants.portOperation}
            content={constants.portOperationContent}
            containerStyle="p-[25px] bg-[#0D0D0D] rounded-[40px] text-[#C7C7BB] min-h-[350px] work-4-summary"
            titleStyle="p-[25px] text-[40px] font-bold work-4-summary-text"
            contentStyle="p-[25px]  text-[32px] work-4-summary-text"
            buttonStyle="work-4-summary-button"
          />
        </div>

        <div className="flex flex-col w-[50%] gap-4">
          <div className=" h-[605px] rounded-[40px]  work-5-img-container bg-[#181818] w-full [clip-path:inset(0_round_40px)]">
            <Image
              className=" w-full work-5-img"
              alt="experience"
              src={carDetail}
              height={605}
            />
          </div>
          <SummaryCard
            title={constants.usedCar}
            content={constants.usedCarContent}
            containerStyle="p-[25px] bg-[#0D0D0D] rounded-[40px] text-[#C7C7BB] min-h-[350px] work-5-summary"
            titleStyle="p-[25px] text-[40px] font-bold work-5-summary-text"
            contentStyle="p-[25px] text-[32px] work-5-summary-text"
            buttonStyle="work-5-summary-button"
          />
        </div>
      </div>
    </>
  );
};
