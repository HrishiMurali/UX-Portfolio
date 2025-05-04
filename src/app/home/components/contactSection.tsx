import React from "react";
import { constants } from "@/app/shared/constants";
import Arrow from "../../../../public/ep--arrow-up-bold.svg";
import "./css/contactSection.css";

export const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <span className="contact-title">{constants.masterpieces}</span>

        <div className="contact-buttons">
          <div className="contact-button-background w-[50px] md:w-[274px]">
            <div className="contact-button-text">
              <div className="text-black contact-button-text-inner">Chat</div>
            </div>
          </div>

          <div className="contact-button-icon">
            <Arrow className="contact-button-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};
