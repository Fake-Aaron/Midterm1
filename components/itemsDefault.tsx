"use client";

import * as React from "react";
import { FeatureGrid } from "./featureItem/featureGrid";

export function ItemsDefault() {
  return (
    <section className="flex flex-col px-8 py-20 w-full bg-zinc-950 max-w-[1312px] max-md:px-5 max-md:max-w-full">
      <h2 className="self-center text-5xl font-semibold leading-10 text-center text-neutral-50 max-md:max-w-full max-md:text-4xl max-md:leading-10">
        Everything you need.Nothing you don't.
      </h2>
      <FeatureGrid />
    </section>
  );
}

