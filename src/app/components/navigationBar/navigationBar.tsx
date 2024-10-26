"use client";
import React from "react";
import { useRouter } from "next/navigation";
import user from "../../../../public/user.png";
import Image from "next/image";

const NavigationBar = () => {
  const router = useRouter();
  const navigationList = [
    { label: "Home", route: "/home" },
    { label: "About me", route: "/aboutme" },
    { label: "Works", route: "/works" },
    { label: "Contact", route: "/contact" },
  ];

  return (
    <div className="flex justify-between flex-row bg-[#0D0D0D] rounded-[40px] text-[#C7C7BB]  mt-[10px]">
      <div className="flex  flex-row p-[15px]  items-center justify-center gap-4">
        <Image src={user} className="w-[40px] h-[40px]" alt={"user"} />
        <span className="text-[40px] font-bold">Hrishi Murali K</span>
      </div>
      <div className="flex  flex-row">
        {navigationList.map((option) => {
          const { label, route } = option;
          return (
            <div
              key={label}
              onClick={() => router.push(route)}
              className="cursor-pointer pl-[15px] pr-[15px] flex items-center justify-center text-[24px]"
            >
              {label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavigationBar;
