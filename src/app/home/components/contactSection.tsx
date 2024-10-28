import React from "react";
import { constants } from "@/app/shared/constants";
import Arrow from "../../../../public/ep--arrow-up-bold.svg";

export const ContactSection = () => {
  return (
    <div className="bg-[#0D0D0D] flex justify-center items-center h-[600px]  round[40px] gap-4">
      <div className="w-[1459px] flex justify-center items-center flex-col pt-[142px] pb-[242px] pl-[184px] pr-[184px]">
        <span className="   text-[#C7C7BB] text-[96px]  text-center pb-[34px]">
          {constants.masterpieces}
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
  );
};
