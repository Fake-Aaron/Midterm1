import React from "react";
import { TabHeaderProps } from "../featureTabs/types";

export const TabHeader: React.FC<TabHeaderProps> = ({ title, description }) => {
  return (
    <header className="flex flex-col w-full text-center max-md:max-w-full">
      <h1 className="text-5xl font-semibold leading-none bg-clip-text max-md:max-w-full max-md:text-4xl">
        {title}
      </h1>
      <p className="self-center mt-8 text-xl font-medium leading-7 text-zinc-400 w-[578px] max-md:max-w-full">
        {description}
      </p>
    </header>
  );
};
