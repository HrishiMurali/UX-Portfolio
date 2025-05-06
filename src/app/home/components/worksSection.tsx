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
          textStyle="work-1-text"
          style="work-1-card"
        />

        <div className="work-1-wrapper">
          <div className="work-1-img-container">
            <Image className="work-1-img" alt="phones" src={phones} />
          </div>

          <SummaryCard
            title={constants.standardAutomobile}
            content={constants.standardAutomobileContent}
            containerStyle="work-1-summary"
            titleStyle="work-1-summary-title"
            contentStyle="work-1-summary-text"
            buttonStyle="work-1-summary-button"
          />
        </div>
      </div>
      <div className="visible-in-desktop" id="visible-in-desktop">
        <div className="work-section-2">
          {/* Images Row */}
          <div className="work-section-2-images">
            <div className="work-2-img-container">
              <Image className="work-2-img" alt="laptop" src={laptop} />
            </div>
            <div className="work-3-img-container">
              <Image className="work-3-img" alt="bluePhones" src={bluePhones} />
            </div>
          </div>

          {/* Cards Row */}
          <div className="work-section-2-cards">
            <div className="work-2-summary-wrapper">
              <SummaryCard
                title={constants.smartSchedule}
                content={constants.smartScheduleContent}
                containerStyle="work-2-summary"
                titleStyle="work-2-summary-title"
                contentStyle="work-2-summary-text"
                buttonStyle="work-2-summary-button"
              />
            </div>
            <div className="work-3-summary-wrapper">
              <SummaryCard
                title={constants.luxuryAutomobile}
                content={constants.luxuryContent}
                containerStyle="work-3-summary"
                titleStyle="work-3-summary-title"
                contentStyle="work-3-summary-text"
                buttonStyle="work-3-summary-button"
              />
            </div>
          </div>
        </div>

        {/* Third Section */}
        <div className="flex flex-col gap-4 work-section-3 mt-[16px] overflow-hidden h-full">
          {/* Images Row */}
          <div className="work-section-4">
            <div className="work-section-4-images">
              <div className="work-4-img-container">
                <Image
                  className="work-4-img"
                  alt="laptop"
                  src={screen}
                  height={605}
                />
              </div>
              <div className="work-5-img-container">
                <Image
                  className="work-5-img"
                  alt="experience"
                  src={carDetail}
                  height={605}
                />
              </div>
            </div>
          </div>

          {/* Cards Row */}
          <div className="work-section-5">
            <div className="work-section-5-cards">
              <div className="flex-1">
                <SummaryCard
                  title={constants.portOperation}
                  content={constants.portOperationContent}
                  containerStyle="work-4-summary"
                  titleStyle="work-4-summary-title"
                  contentStyle="work-4-summary-text"
                  buttonStyle="work-4-summary-button"
                />
              </div>
              <div className="flex-1">
                <SummaryCard
                  title={constants.usedCar}
                  content={constants.usedCarContent}
                  containerStyle="work-5-summary"
                  titleStyle="work-5-summary-title"
                  contentStyle="work-5-summary-text"
                  buttonStyle="work-5-summary-button"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="visible-in-mobile" id="visible-in-mobile">
        <div className="work-section-2">
          {/* Work 2 Pair */}
          <div className="work-pair">
            <div className="work-2-img-container">
              <Image className="work-2-img" alt="laptop" src={laptop} />
            </div>
            <div className="work-2-summary-wrapper">
              <SummaryCard
                title={constants.smartSchedule}
                content={constants.smartScheduleContent}
                containerStyle="work-2-summary"
                titleStyle="work-2-summary-title"
                contentStyle="work-2-summary-text"
                buttonStyle="work-2-summary-button"
              />
            </div>
          </div>
        </div>

        {/* Work 3 Pair */}

        <div className="work-pair">
          <div className="work-3-img-container">
            <Image className="work-3-img" alt="bluePhones" src={bluePhones} />
          </div>
          <div className="work-3-summary-wrapper">
            <SummaryCard
              title={constants.luxuryAutomobile}
              content={constants.luxuryContent}
              containerStyle="work-3-summary"
              titleStyle="work-3-summary-title"
              contentStyle="work-3-summary-text"
              buttonStyle="work-3-summary-button"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 work-section-3 overflow-hidden h-full">
          {/* Work 4 Pair */}
          <div className="work-pair">
            <div className="work-4-img-container">
              <Image
                className="work-4-img"
                alt="laptop"
                src={screen}
                height={605}
              />
            </div>
            <div className="flex-1">
              <SummaryCard
                title={constants.portOperation}
                content={constants.portOperationContent}
                containerStyle="work-4-summary"
                titleStyle="work-4-summary-text"
                contentStyle="work-4-summary-text"
                buttonStyle="work-4-summary-button"
              />
            </div>
          </div>

          {/* Work 5 Pair */}
          <div className="work-pair">
            <div className="work-5-img-container">
              <Image
                className="work-5-img"
                alt="experience"
                src={carDetail}
                height={605}
              />
            </div>
            <div className="flex-1">
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
        </div>
      </div>
    </>
  );
};
