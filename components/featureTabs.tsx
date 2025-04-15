"use client";
import React, { useState } from "react";
import { TabHeader } from "./featureTabs/tabHeader";
import { TabItem } from "./featureTabs/tabItem";
import { TabItemData } from "./featureTabs/types";

const tabItems: TabItemData[] = [
  {
    id: 1,
    title: "Choose your sections",
    description:
      "Choose among 100+ components to build a landing page suited to the needs of your product.",
    icon: "\TabF1.svg",
    content: "\FeatureEX.png",
  },
  {
    id: 2,
    title: "Add your content",
    description:
      "Fill the blanks with screenshots, videos, and other content featuring your product.",
    icon: "\TabF2.svg",
    content: "\FeatureEX.png",
  },
  {
    id: 3,
    title: "Customize",
    description:
      "Make design yours in no time by changing the variables that control colors, typography, and other styles.",
    icon: "\TabF3.svg",
    content: "\FeatureEX.png",
  },
];

export function FeatureTabs() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="px-8 py-20 max-w-full bg-zinc-950 min-h-[874px] w-[1312px] max-md:px-5">
      <TabHeader
        title="Make the right impression"
        description="Launch UI makes it easy to build an unforgetable website that resonates with professional design-centric audiences."
      />

      <div className="flex flex-wrap flex-1 gap-4 justify-center items-start mt-24 size-full max-md:mt-10 max-md:max-w-full">
        <div className="min-w-60 w-[373px]" role="tablist">
          {tabItems.map((tab) => (
            <div key={tab.id} className="mt-3 first:mt-0">
              <TabItem
                {...tab}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              />
            </div>
          ))}
        </div>

        <article className="overflow-hidden flex-1 shrink px-8 pt-8 rounded-xl basis-0 bg-zinc-1000 bg-opacity-0 border-white border-opacity-10 h-[482px] min-h-[135px] min-w-60 max-md:px-5 max-md:max-w-full">
          <img
            src={tabItems.find((tab) => tab.id === activeTab)?.content}
            className="object-contain w-full rounded-xl aspect-[1.77] max-md:max-w-full"
            alt="Tab content"
          />
        </article>
      </div>
    </section>
  );
}


