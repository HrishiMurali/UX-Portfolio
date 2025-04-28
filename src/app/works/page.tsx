import React from "react";
import { constants } from "@/app/shared/constants";
import Image from "next/image";
import phones from "../../../public/Frame 13.png";
import laptop from "../../../public/laptop.png";
import bluePhones from "../../../public/Frame 13 (1).png";
import screen from "../../../public/Frame 18.png";
import carDetail from "../../../public/Frame 21.png";
import SummaryCard from "../components/summaryCard/SummaryCard";
import "./style.css"; // Import the separate css

const Works = () => {
  return (
    <>
      <div className="work-section-1">
        <div className="flex flex-col overflow-hidden h-full">
          <div className="flex-1 work-1-img-container">
            <Image
              className="work-1-img"
              alt="phones"
              src={phones}
              height={300}
            />
          </div>

          <SummaryCard
            title={constants.standardAutomobile}
            content={constants.standardAutomobileContent}
            containerStyle="flex-1 work-1-summary"
            titleStyle="work-1-summary-text"
            contentStyle="work-1-summary-text"
            buttonStyle="work-1-summary-button"
          />
        </div>
      </div>

      <div className="work-section-2">
        <div className="flex flex-col w-full gap-4">
          <div className="work-2-img-container">
            <Image
              className="work-2-img"
              alt="laptop"
              src={laptop}
              height={605}
            />
          </div>
          <SummaryCard
            title={constants.smartSchedule}
            content={constants.smartScheduleContent}
            containerStyle="work-2-summary"
            titleStyle="work-2-summary-text"
            contentStyle="work-2-summary-text"
            buttonStyle="work-2-summary-button"
          />
        </div>

        <div className="flex flex-col w-full gap-4 overflow-hidden">
          <div className="work-3-img-container">
            <Image
              className="work-3-img"
              alt="bluePhones"
              src={bluePhones}
              height={605}
            />
          </div>

          <SummaryCard
            title={constants.luxuryAutomobile}
            content={constants.luxuryContent}
            containerStyle="work-3-summary"
            titleStyle="work-3-summary-text"
            contentStyle="work-3-summary-text"
            buttonStyle="work-3-summary-button"
          />
        </div>
      </div>

      <div className="work-section-3">
        <div className="flex flex-col w-full gap-4">
          <div className="work-4-img-container">
            <Image
              className="work-4-img"
              alt="screen"
              src={screen}
              height={605}
            />
          </div>
          <SummaryCard
            title={constants.portOperation}
            content={constants.portOperationContent}
            containerStyle="work-4-summary"
            titleStyle="work-4-summary-text"
            contentStyle="work-4-summary-text"
            buttonStyle="work-4-summary-button"
          />
        </div>

        <div className="flex flex-col w-full gap-4">
          <div className="work-5-img-container">
            <Image
              className="work-5-img"
              alt="carDetail"
              src={carDetail}
              height={605}
            />
          </div>
          <SummaryCard
            title={constants.usedCar}
            content={constants.usedCarContent}
            containerStyle="work-5-summary"
            titleStyle="work-5-summary-text"
            contentStyle="work-5-summary-text"
            buttonStyle="work-5-summary-button"
          />
        </div>
      </div>
    </>
  );
};

export default Works;
