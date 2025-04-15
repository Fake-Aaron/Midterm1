import * as React from "react";

interface TestimonialHeaderProps {
  title: string;
  subtitle: string;
}

export const TestimonialHeader: React.FC<TestimonialHeaderProps> = ({
  title,
  subtitle,
}) => {
  return (
    <header className="flex flex-col items-center self-center text-center max-md:max-w-full">
      <h1 className="text-5xl font-semibold leading-10 text-neutral-50 max-md:max-w-full max-md:text-4xl max-md:leading-10">
        {title}
      </h1>
      <p className="mt-9 text-xl font-medium leading-snug text-zinc-400 max-md:max-w-full">
        {subtitle}
      </p>
    </header>
  );
};
