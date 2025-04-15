"use client";

import * as React from "react";

interface PricingFeatureProps {
  icon: string;
  text: string;
}

export const PricingFeature: React.FC<PricingFeatureProps> = ({
  icon,
  text,
}) => {
  return (
    <div className="flex gap-2 items-center w-full">
      <img
        src={icon}
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
        alt=""
      />
      <p className="flex-1 shrink self-stretch my-auto basis-0">{text}</p>
    </div>
  );
};
