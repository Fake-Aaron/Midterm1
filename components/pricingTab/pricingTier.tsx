"use client";

import * as React from "react";
import { PricingFeatureList } from "./pricingFeatureList";

interface PricingTierProps {
  name: string;
  description: string;
  price: string;
  priceLabel: string;
  subLabel: string;
  buttonText: string;
  features: Array<{ icon: string; text: string }>;
  dividerImage: string;
  headerIcon?: string;
  topBorderImage: string;
  buttonDark?: boolean;
}

export const PricingTier: React.FC<PricingTierProps> = ({
  name,
  description,
  price,
  priceLabel,
  subLabel,
  buttonText,
  features,
  dividerImage,
  headerIcon,
  topBorderImage,
  buttonDark,
}) => {
  return (
    <section className="overflow-hidden relative flex-1 shrink px-6 pt-6 pb-24 rounded-xl basis-0 bg-zinc-800 bg-opacity-0 max-w-[420px] min-h-[541px] min-w-60 max-md:px-5">
      <div className="z-0 w-full max-w-[460px]">
        <div className="flex gap-2 justify-center items-center w-full text-xl font-semibold leading-snug whitespace-nowrap text-neutral-50">
          {headerIcon && (
            <img
              src={headerIcon}
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              alt=""
            />
          )}
          <h3 className="flex-1 shrink self-stretch my-auto basis-0">{name}</h3>
        </div>
        <p className="mt-2 text-base leading-6 text-zinc-400">{description}</p>
      </div>

      <div className="flex z-0 gap-2 items-center mt-6 w-full">
        <div className="flex gap-2 items-start self-stretch my-auto font-semibold whitespace-nowrap min-h-[66px]">
          <span className="text-base text-zinc-400">$</span>
          <span className="text-6xl leading-none text-neutral-50 max-md:text-4xl">
            {price}
          </span>
        </div>
        <div className="flex-1 shrink self-stretch pt-1.5 my-auto text-base basis-0 max-w-[460px] min-w-60">
          <p className="text-neutral-50">{priceLabel}</p>
          <p className="text-zinc-400">{subLabel}</p>
        </div>
      </div>

      <button
        className={`z-0 gap-2 self-stretch px-4 py-2.5 mt-6 w-full text-sm font-medium leading-none rounded-md bg-zinc-700 hover:bg-zinc-600 ${
          buttonDark ? "text-neutral-50 shadow" : "text-neutral-50"
        }`}
      >
        {buttonText}
      </button>

      <p className="z-0 mt-6 text-base text-zinc-400">
        Free and open-source forever
      </p>

      <img
        src={dividerImage}
        className="object-contain z-0 mt-6 w-full aspect-[333.33]"
        alt=""
      />

      <PricingFeatureList features={features} />

      <img
        src={topBorderImage}
        className="object-contain absolute top-0 z-0 max-w-full h-0 aspect-[125] inset-x-[76px] w-[253px]"
        alt=""
      />
    </section>
  );
};
