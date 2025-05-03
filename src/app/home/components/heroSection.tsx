import React from "react";
import Card from "@/app/components/card/card";
import { constants } from "@/app/shared/constants";
import "./css/heroSection.css"; // Import your custom CSS!

export const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-heading-container">
        <Card
          text={constants.heading1}
          textStyle="hero-heading"
          style="hero-heading-card"
        />
      </div>

      <div className="hero-video-container hero-img">
        <video
          src="/Moonlandscape720.mp4"
          className="hero-video"
          autoPlay
          muted
          playsInline
        />
        <Card
          text={constants.heading2}
          textStyle="hero-subheading"
          style="hero-subheading-card"
        />
      </div>
    </div>
  );
};
