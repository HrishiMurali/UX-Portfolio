"use client";
import React from "react";
import Arrow from "../../../../public/ep--arrow-up-bold.svg";

interface SummaryCardProps {
  title: string;
  content: string;
  containerStyle: string;
  titleStyle: string;
  contentStyle: string;
  buttonStyle?: string;
}
const SummaryCard = ({
  title,
  content,
  containerStyle,
  titleStyle,
  contentStyle,
  buttonStyle,
}: SummaryCardProps) => {
  return (
    <div
      className={`p-[20px] flex flex-col justify-between h-full ${containerStyle}`}
    >
      <div className="flex flex-col gap-2 flex-grow">
        <div className={titleStyle}>
          <span>{title}</span>
        </div>
        <p className={`${contentStyle}`}>{content}</p>
      </div>
      <div
        className={`flex flex-row justify-between items-center w-[230px] h-[64px] text-[32px] border-4 border-[#C7C7BB] p-4 rounded-[40px] ${buttonStyle}`}
      >
        <button className="h-[64px] w-[230px]">Details</button>

        <span className="rotate-90">
          <Arrow />
        </span>
      </div>
    </div>
  );
};

export default SummaryCard;
