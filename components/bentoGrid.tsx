"use client";
import * as React from "react";
import { BentoTile } from "./bentoGrid/bentoTile"
import { IllustrationTiles } from "./bentoGrid/illustrationTiles"
import { ChatIllustration } from "./bentoGrid/chatIllustration"

export function BentoGrid2x2() {
  return (
    <section className="px-8 py-20 w-full bg-zinc-950 max-w-[1312px] max-md:px-5 max-md:max-w-full">
      <h1 className="text-5xl font-semibold leading-none text-neutral-50 max-md:max-w-full max-md:text-4xl">
        Build a better website, faster.
      </h1>
      <div className="mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-4 w-full min-h-[496px] max-md:max-w-full">
          <img
            src="\BentoGlobe.png"
            alt="Website builder illustration"
            className="object-contain py-6 rounded-xl aspect-[1.13] min-w-[360px] w-[560px] max-md:max-w-full"
          />
          <BentoTile
            title="You're in control"
            description="This is not a component library. It's a collection of re-usable components that you can copy and paste into your apps."
            className="flex-1 shrink basis-0 min-w-[360px]"
          >
            <img
              src="\BentoLaunch.svg"
              alt="Control illustration"
              className="object-contain flex-1 w-full aspect-[2.29] max-md:max-w-full"
            />
          </BentoTile>
        </div>

        <div className="flex flex-wrap gap-4 items-center mt-4 w-full max-md:max-w-full">
          <BentoTile
            title="Fits right into your stack"
            description="Built with modern web technologies and tools that fit right into any React project.No bloat, no extra dependencies, no risk of conflicts."
            className="flex-1 shrink self-stretch basis-0 min-h-[560px] min-w-[360px]"
          >
            <IllustrationTiles />
          </BentoTile>

          <BentoTile
            title="Data-agnostic"
            description="All the data is separate from components so you can edit it in seconds or make it dynamic.\nEasily connect to a CMS of your choice."
            className="self-stretch min-h-[560px] min-w-[360px] w-[560px]"
          >
            <ChatIllustration />
          </BentoTile>
        </div>
      </div>
    </section>
  );
}
