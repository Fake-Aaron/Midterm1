import * as React from "react";

export const FooterLogo: React.FC = () => {
  return (
    <div className="flex flex-1 shrink gap-2 items-center text-lg font-bold leading-loose text-center basis-0 min-w-[104px] text-neutral-50">
      <img
        src="LaunchUI_Icon.svg"
        alt="Launch UI Logo"
        className="object-contain shrink-0 self-stretch my-auto w-6 rounded aspect-square"
      />
      <span className="self-stretch my-auto">Launch UI</span>
    </div>
  );
};
