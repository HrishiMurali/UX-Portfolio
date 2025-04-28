import React from "react";
import Card from "@/app/components/card/card";
import { constants } from "@/app/shared/constants";
import "./css/infoSection.css"; // Import your CSS!

export const InfoSection = () => {
  return (
    <Card
      text={constants.shapeExperience}
      textStyle="info-text"
      style="info-section"
    />
  );
};
