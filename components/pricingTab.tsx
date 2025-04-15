"use client";

import * as React from "react";
import { PricingTier } from "./pricingTab/pricingTier";

export const PricingTab: React.FC = () => {
  const pricingTiers = [
    {
      name: "Free",
      description: "For everyone starting out on a website for their big idea",
      price: "0",
      priceLabel: "free",
      subLabel: "for everyone",
      buttonText: "Get started for free",
      dividerImage: "\Price1.svg",
      topBorderImage: "\Price2.svg",
      features: [
        { icon: "\CircleCheck.svg", text: "9 landing page sections" },
        { icon: "\CircleCheck.svg", text: "36 components" },
        { icon: "\CircleCheck.svg", text: "5 custom animations" },
      ],
    },
    {
      name: "Pro",
      description: "For early-stage founders, solopreneurs, and indie devs",
      price: "0",
      priceLabel: "one-time payment",
      subLabel: "plus local taxes",
      buttonText: "Get all-access",
      dividerImage: "\Price1.svg",
      headerIcon: "Price3.svg",
      topBorderImage: "\Price2.svg",
      buttonDark: true,
      features: [
        { icon: "\CircleCheck.svg", text: "66 landing page sections" },
        { icon: "\CircleCheck.svg", text: "126 components" },
        { icon: "\CircleCheck.svg", text: "16 illustrations" },
        { icon: "\CircleCheck.svg", text: "15 custom animations" },
      ],
    },
    {
      name: "Team",
      description: "For teams and agencies working on cool products together",
      price: "0",
      priceLabel: "one-time payment",
      subLabel: "plus local taxes",
      buttonText: "Get all-access for your team",
      dividerImage: "\Price1.svg",
      headerIcon: "Price3.svg",
      topBorderImage: "\Price2.svg",
      features: [
        {
          icon: "\CircleCheck.svg",
          text: "All the templates, components and sections available for your entire team",
        },
      ],
    },
  ];

  return (
    <main className="flex flex-col px-8 py-20 max-w-full bg-zinc-950 w-[1312px] max-md:px-5">
      <h1 className="text-5xl font-semibold leading-none text-center text-neutral-50 max-md:max-w-full max-md:text-4xl">
        Build your dream landing page, today.
      </h1>

      <p className="self-center mt-12 text-xl font-medium leading-7 text-center text-zinc-400 w-[594px] max-md:mt-10 max-md:max-w-full">
        Get lifetime access to all the components. No recurring fees. Just
        simple, transparent pricing.
      </p>

      <div className="flex flex-wrap gap-4 justify-center items-start mt-12 w-full max-md:mt-10 max-md:max-w-full">
        {pricingTiers.map((tier, index) => (
          <PricingTier key={index} {...tier} />
        ))}
      </div>
    </main>
  );
};


