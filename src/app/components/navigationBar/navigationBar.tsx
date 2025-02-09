"use client";
import React from "react";
import { useRouter } from "next/navigation";
import user from "../../../../public/user.png";
import Image from "next/image";

const NavigationBar = () => {
  const router = useRouter();
  const navigationList = [
    { label: "Home", route: "/home" },
    { label: "Works", route: "/works" },
  ];

  return (
    <div className="flex justify-between flex-row bg-[#0D0D0D] rounded-[40px] text-[#C7C7BB]  mt-[10px]">
      <div className="flex  flex-row p-[15px]  items-center justify-center gap-4">
        <Image src={user} className="w-[40px] h-[40px]" alt={"user"} />
        <span className=" nav-text text-[40px] font-bold opacity-0 ">
          Hrishi Murali K
        </span>
      </div>
      <div className="flex flex-row pr-4">
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
