import React from "react";
import { constants } from "@/app/shared/constants";
import Arrow from "../../../../public/ep--arrow-up-bold.svg";

export const ContactSection = () => {
  return (
    <div className="bg-[#0D0D0D] flex justify-center items-center h-[600px]  round[40px] gap-4 contact-section contact-container rounded-[40px]">
      <div className="w-[1459px] flex justify-center items-center flex-col p-32 ">
        <span className="  text-[#C7C7BB] text-7xl 2xl:text-8xl  text-center pb-20">
          {constants.masterpieces}
        </span>

        <div className="flex flex-row">
          <div className="bg-[#C7C7BB] text-[#0D0D0D] flex flex-row rounded-[40px] w-[274px] h-[76px] justify-between  pr-[5px] contact-button-background">
            <div className="flex pl-16 w-full font-bold pt-[16px] pb-[16px] contact-button-text">
              <div className="text-[32px]">Chat</div>
            </div>
          </div>
          <div className="rotate-90 relative p-[18px] flex justify-center items-center bg-[#0D0D0D] border border-[#C7C7BB]  text-[#C7C7BB] rounded-[50%] contact-button-icon">
            <Arrow className="h-[30px] w-[30px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
