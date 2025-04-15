import * as React from "react";

interface FeatureRisingHeaderProps {
  title: string;
  description: string;
}

export const FeatureRisingHeader: React.FC<FeatureRisingHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <header className="flex flex-col w-full max-md:max-w-full">
      <h1 className="text-7xl font-semibold bg-clip-text leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
        {title}
      </h1>
      <p className="self-center mt-12 text-xl font-medium leading-7 text-zinc-400 w-[580px] max-md:mt-10 max-md:max-w-full">
        {description}
      </p>
    </header>
  );
};
