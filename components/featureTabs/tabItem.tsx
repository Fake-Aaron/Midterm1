import React from "react";
import { TabItemProps } from "../featureTabs/types";

export const TabItem: React.FC<TabItemProps> = ({
  title,
  description,
  icon,
  isActive,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex gap-2 items-start py-3 pr-5 pl-3 w-full rounded-md hover:bg-zinc-800"
      role="tab"
      aria-selected={isActive}
    >
      <div className="flex gap-2.5 items-center p-0.5 w-5">
        <img
          src={icon}
          className="object-contain self-stretch my-auto w-4 aspect-square"
          alt=""
        />
      </div>
      <div
        className={`flex flex-col flex-1 shrink justify-center basis-0 min-w-60 ${isActive ? "text-neutral-50" : "text-zinc-400"}`}
      >
        <h3 className="text-sm font-semibold leading-none">{title}</h3>
        <p className="text-xs font-medium leading-4">{description}</p>
      </div>
    </button>
  );
};
