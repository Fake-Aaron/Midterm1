"use client";

import * as React from "react";
import { PricingFeature } from "./pricingFeature";

interface Feature {
  icon: string;
  text: string;
}

interface PricingFeatureListProps {
  features: Feature[];
}

export const PricingFeatureList: React.FC<PricingFeatureListProps> = ({
  features,
}) => {
  return (
    <div className="z-0 mt-6 w-full text-base text-neutral-50">
      {features.map((feature, index) => (
        <div key={index} className={index > 0 ? "mt-2" : ""}>
          <PricingFeature icon={feature.icon} text={feature.text} />
        </div>
      ))}
    </div>
  );
};
