"use client";

import * as React from "react";

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <article className="flex-1 shrink basis-0 min-w-60">
      <header className="flex gap-2 items-center w-full text-lg font-semibold leading-loose text-neutral-50">
        <img
          src={icon}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <h3 className="flex-1 shrink self-stretch my-auto basis-0">{title}</h3>
      </header>
      <p className="mt-2 text-base leading-6 text-zinc-400">{description}</p>
    </article>
  );
};
