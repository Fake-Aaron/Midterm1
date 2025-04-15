import * as React from "react";

export function Navbar() {
  return (
    <nav className="flex flex-wrap justify-between items-center px-8 py-4 w-full bg-zinc-950 max-w-[1312px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-4 items-center text-sm font-medium text-neutral-50">
        {/* Logo Section */}
        <div className="flex gap-2 items-center text-lg font-bold">
          <img
            src="/LaunchUI_Icon.svg"
            alt="Launch UI Logo"
            className="w-6 h-6 rounded"
          />
          <span>Launch UI</span>
        </div>

        {/* Nav Links */}
        <button className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-zinc-800 transition">
          <span>Getting started</span>
          <img src="/ArrowV.svg" alt="Arrow" className="w-3 h-3" />
        </button>

        <button className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-zinc-800 transition">
          <span>Components</span>
          <img src="/ArrowV.svg" alt="Arrow" className="w-3 h-3" />
        </button>

        <button className="px-4 py-2 rounded-md hover:bg-zinc-800 transition">
          Documentation
        </button>
      </div>

      {/* Right Buttons */}
      <div className="flex gap-4">
        <button className="px-4 py-2 rounded-md text-neutral-50 hover:bg-zinc-800 transition">
          Sign in
        </button>
        <button className="px-4 py-2 rounded-md bg-white text-zinc-900 hover:bg-neutral-200 transition shadow">
          Get started
        </button>
      </div>
    </nav>
  );
}
