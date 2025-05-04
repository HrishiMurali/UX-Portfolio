"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import user from "../../../../public/user.png";
import menu from "../../../../public/burgerMenu.png";
import "./navigationBar.css";

const NavigationBar = () => {
  const router = useRouter();
  const navigationList = [
    { label: "Home", route: "/home" },
    { label: "Works", route: "/works" },
  ];

  return (
    <div className="nav-container">
      <div className="user-section">
        <div>
          <Image src={user} className="user-image" alt="user" />
          <span className="user-name">Hrishi Murali K</span>
        </div>
        <div className="menu-wrapper">
          <Image src={menu} className="menu-image" alt="user" />
        </div>
      </div>

      <div className="nav-items">
        {navigationList.map(({ label, route }) => (
          <div
            key={label}
            onClick={() => router.push(route)}
            className="nav-item"
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
