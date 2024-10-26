import React from "react";
import Card from "../components/card/card";
import experience from "../../../public/experience.png";
import Image from "next/image";

import icon1 from "../../../public/Frame 28.png";
import icon2 from "../../../public/Frame 27.png";
import icon3 from "../../../public/Frame 26.png";
import icon4 from "../../../public/Frame 25.png";
import icon5 from "../../../public/Frame 24.png";
import icon6 from "../../../public/Frame 23.png";
import icon7 from "../../../public/Frame 22 .png";
import phones from "../../../public/Frame 13.png";
import laptop from "../../../public/Frame 1.png";
import bluePhones from "../../../public/Frame 13 (1).png";
import screen from "../../../public/Frame 18.png";
import carDetail from "../../../public/Frame 21.png";
import Arrow from "../../../public/ep--arrow-up-bold.svg";

import SummaryCard from "../components/summaryCard/SummaryCard";
const iconList = [icon1, icon2, icon3, icon4, icon5, icon6, icon7];
const socialMediaList = [
  { label: "Behance", url: "" },
  { label: "Dribbble", url: "" },
  { label: "Instagram", url: "" },
  { label: "Twitter", url: "" },
  { label: "Artstation", url: "" },
  { label: "LinkedIn", url: "" },
];

const Home = () => {
  const heading1 = "Creating Stunning Designs";
  const heading2 = "Designing Dreams into Digital Realities";
  const description =
    "A passionate UX designer dedicated to crafting immersive digital experiences that blend creativity with functionality. With a keen eye for detail and a commitment to user-centric design";
  const years = "2 Years";
  const ofExperience = "of Experience";
  const shapeExperience = "Shaping Experiences Through Minimalist Design";
  const worksOfArt = "Works of Art that are Simply a Treat to Use";
  const standardAutomobile = "Standard Automobile App Revamp";
  const standardAutomobileContent =
    "Completely revamped the UX design of Standard Automobile app for UAE. Improved the over all user experience. Rectified more then 235 heuristic issues within the app. Redesigned to a stunning design focusing on the current trends.";
  const smartSchedule = "Smart scheduling web application";
  const smartScheduleContent =
    "Web application which helps people grow their connection with a discover and calendar function.";
  const luxuryAutomobile = "Luxury Automobile App Revamp";
  const luxuryContent =
    "Completely revamped the UX design of Luxury Automobile app for UAE";
  const masterpieces = "Let’s create some masterpieces together";
  const portOperation = "Port operation software";
  const portOperationContent =
    "Software that streamlines marine logistics and enhances overall efficiency in port management.";
  const usedCar = "Used Cars Dealership Website";
  const usedCarContent =
    "Website which focus on ease and efficiency of buying and selling used cars.";

  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex  flex-row  gap-4 p-[10px]">
        <div className="flex  flex-col min-w-[55vw]  p-[2px] gap-4">
          <Card
            text={heading1}
            textStyle={"text-[#C7C7BB] text-3xl font-bold"}
            style="bg-[#0D0D0D]  w-full   rounded-[40px] min-h-[70px] flex justify-start items-center pl-[40px]"
          />
          <div className="relative">
            <Image
              src={
                "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc29iMjVkYzJmMXdxcWY4NXdzM2c2ZXVjdjFnamt3Z2Q2cmk0dW0weiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GrWIUslw4cWqBtiAIJ/giphy-downsized-large.gif"
              }
              className="w-full min-h-[560px] bg-[#000000] rounded-[40px]"
              width={100}
              height={100}
              alt="moon"
            />
            <Card
              text={heading2}
              textStyle={"text-[#C7C7BB] text-[40px] font-bold"}
              style="absolute left-[50%] bottom-[30px] translate-x-[-50%] bg-[#0D0D0D] rounded-[40px] min-w-[840px] min-h-[100px] flex justify-center items-center p-[40px]"
            />
          </div>
        </div>
        <div className="flex  flex-col gap-4">
          <div className="relative">
            <div className="absolute left-[50%] top-[35px] translate-x-[-50%] flex justify-center items-center flex-col gap-4">
              <div>
                <span className="text-black text-[74px] font-bold">
                  {years}
                </span>
              </div>
              <div className="text-black text-[32px]">
                <span>{ofExperience}</span>
              </div>
            </div>
            <Image
              className="w-full min-h-[421px] rounded-[40px]"
              src={experience}
              alt="experience"
            />
          </div>

          <Card
            text={description}
            textStyle={"text-[#C7C7BB] text-[32px]"}
            style="flex justify-center items-center bg-[#0D0D0D] p-[25px] text-2xl rounded-[40px]  w-full min-h-[300px]"
          />
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <Card
          text={shapeExperience}
          textStyle={"text-[#C7C7BB]  text-[48px] w-[517px] "}
          style="flex justify-start items-end bg-[#0D0D0D] p-[25px] rounded-[40px]  w-full min-h-[583px] pl-[35px]"
        />
        <div className="bg-[#0D0D0D] p-[25px] text-2xl rounded-[40px]  w-full min-h-[300px]">
          <span className="text-[#C7C7BB] text-3xl">My Expertise</span>
          <div className="flex flex-wrap">
            {iconList.map((icon, index) => (
              <Image
                className="min-w-[50px] min-h-[50px] rounded-[40px] p-[33px]"
                src={icon}
                alt="experience"
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
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
      <Card
        text={worksOfArt}
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
          title={standardAutomobile}
          content={standardAutomobileContent}
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
            title={smartSchedule}
            content={smartScheduleContent}
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
            title={luxuryAutomobile}
            content={luxuryContent}
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
            title={portOperation}
            content={portOperationContent}
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
            title={usedCar}
            content={usedCarContent}
            containerStyle="p-[25px] bg-[#0D0D0D] rounded-[40px] text-[#C7C7BB] min-h-[350px]"
            titleStyle="p-[25px] text-[40px] font-bold"
            contentStyle="p-[25px] text-[32px] "
          />
        </div>
      </div>

      <div className="bg-[#0D0D0D] flex justify-center items-center h-[600px]  round[40px] gap-4">
        <div className="w-[1459px] flex justify-center items-center flex-col pt-[142px] pb-[242px] pl-[184px] pr-[184px]">
          <span className="   text-[#C7C7BB] text-[96px]  text-center pb-[34px]">
            {masterpieces}
          </span>

          <div className="bg-[#C7C7BB] text-[#0D0D0D] flex flex-row rounded-[40px] w-[274px] h-[76px] justify-between  pr-[15px] ">
            <div className="flex justify-center items-center w-full font-bold pt-[16px] pb-[16px]  pl-[16px]">
              <span className="text-[32px]">Chat</span>
            </div>

            <div className="rotate-90 p-[18px] flex justify-center items-center bg-[#0D0D0D]  text-[#C7C7BB] rounded-[50%]">
              <Arrow className="h-[30px] w-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 

export default Home;
