// components/StatusCard.tsx

import React from "react";

interface StatusCardProps {
  count: string | number;
  content: string;

  containerClassName?: string; // outermost container
  countContainerClassName?: string; // wrapper around the count
  countTextClassName?: string; // count text only

  contentContainerClassName?: string; // wrapper around the content
  contentTextClassName?: string; // content text only
}

const StatusCard: React.FC<StatusCardProps> = ({
  count,
  content,

  containerClassName = "",
  countContainerClassName = "",
  countTextClassName = "",
  contentContainerClassName = "",
  contentTextClassName = "",
}) => {
  return (
    <div className={`flex items-center gap-3 ${containerClassName}`}>
      <div className={`${countContainerClassName}`}>
        <span className={`${countTextClassName}`}>{count}</span>
      </div>
      <div className={`${contentContainerClassName}`}>
        <span className={`${contentTextClassName}`}>{content}</span>
      </div>
    </div>
  );
};

export default StatusCard;
