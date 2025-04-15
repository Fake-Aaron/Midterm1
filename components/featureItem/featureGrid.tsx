"use client";

import * as React from "react";
import { FeatureItem } from "../featureItem/featureItem";

const features = [
  {
    icon: "\ItemF1.svg",
    title: "Accessibility first",
    description: "Fully WCAG 2.0 compliment, made with best a11y practices",
  },
  {
    icon: "\ItemF2.svg",
    title: "Responsive design",
    description: "Looks and works great on any device and screen size",
  },
  {
    icon: "\ItemF3.svg",
    title: "Light and dark mode",
    description: "Seamless switching between color schemes, 6 themes included",
  },
  {
    icon: "\ItemF4.svg",
    title: "Easy to customize",
    description: "Flexible options to match your product or brand",
  },
  {
    icon: "\ItemF5.svg",
    title: "Top-level performance",
    description: "Made for lightning-fast load times and smooth interactions",
  },
  {
    icon: "\ItemF6.svg",
    title: "Production ready",
    description: "Thoroughly tested and launch-prepared",
  },
  {
    icon: "\ItemF7.svg",
    title: "Made for localisation",
    description: "Easy to implement support for multiple languages and regions",
  },
  {
    icon: "\ItemF8.svg",
    title: "CMS friendly",
    description:
      "Built to work with your any headless content management system",
  },
];

export const FeatureGrid: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-12 items-start mt-20 w-full max-md:mt-10 max-md:max-w-full">
      {features.map((feature, index) => (
        <FeatureItem
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};
