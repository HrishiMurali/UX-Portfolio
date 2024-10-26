import React from "react";

interface CardProps {
  text: string;
  textStyle: string;
  style: string;
}

const Card = ({ text, textStyle, style }: CardProps) => {
  return (
    <div className={style}>
      <span className={textStyle}>{text}</span>
    </div>
  );
};

export default Card;
