import * as React from "react";

export const FooterBottom: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 items-start mt-4 w-full text-xs leading-none max-md:max-w-full">
      <p className="flex-1 shrink basis-0 max-md:max-w-full">
        © 2024 Mikołaj Dobrucki. All rights reserved.
      </p>
      <nav className="flex gap-4 items-start">
        <a href="#" className="hover:text-zinc-300">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-zinc-300">
          Terms of service
        </a>
      </nav>
    </div>
  );
};
