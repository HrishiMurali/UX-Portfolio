"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import user from "../../../../public/user.png";
import menu from "../../../../public/burgerMenu.png";
import "./navigationBar.css";

const NavigationBar = () => {
  const router = useRouter();
  const navigationList = [{ label: "Home", route: "/home" }];

  return (
    <div className="nav-container">
      <div className="user-section">
        <div className="image-name-wrapper">
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
        <a
          href="/work.pdf"
          key={"Works"}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-item"
        >
          {"Works"}
        </a>
        <a
          href="/resume.pdf"
          key={"resume"}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-item"
        >
          {"Resume"}
        </a>
      </div>
    </div>
  );
};

export default NavigationBar;
