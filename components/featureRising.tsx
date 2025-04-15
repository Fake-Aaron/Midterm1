"use client";
import * as React from "react";
import { FeatureRisingHeader } from "./featureRising/featureHeader";

export function FeatureRising() {
  return (
    <section className="px-8 pt-32 w-full text-center bg-zinc-950 max-w-[1312px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <FeatureRisingHeader
        title="Quality you can trust. And build on."
        description="You can trust that all of the designs are taking the full advantage of newest Figma's features and that code is written following best practices out there."
      />
      <figure className="mt-24 max-md:mt-10 max-md:max-w-full">
        <img
          src="\FeatureR.svg"
          alt="Feature illustration"
          className="object-contain w-full aspect-[2.33]"
        />
      </figure>
    </section>
  );
}


