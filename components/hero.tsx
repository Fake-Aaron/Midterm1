import * as React from "react";

export function Hero() {
  return (
    <section className="px-8 pt-20 w-full bg-zinc-950 max-w-[1312px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col items-center w-full font-semibold max-md:max-w-full">
        <div className="flex gap-2 justify-center items-center px-2.5 py-1 text-xs leading-none rounded-full border border-solid border-white border-opacity-20">
          <p className="self-stretch my-auto text-zinc-400">
            New version of Launch UI is out!
          </p>
          <div className="flex gap-1 items-center self-stretch my-auto text-neutral-50">
            <a href="#" className="self-stretch my-auto">
              Read more
            </a>
            <img
              src="\RightArrow.svg"
              alt="Arrow"
              className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
            />
          </div>
        </div>
        <h1 className="self-stretch mt-12 text-8xl text-center bg-clip-text leading-[96px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
          Give your big idea the website it deserves
        </h1>
        <p className="mt-12 text-xl font-medium leading-7 text-center text-zinc-400 w-[544px] max-md:mt-10 max-md:max-w-full">
          Landing page kit template with React, Shadcn/ui and Tailwind that you
          can copy/paste into your project.
        </p>
        <div className="flex gap-4 items-start mt-12 text-sm font-medium leading-none max-md:mt-10">
          <button className="gap-2 self-stretch px-4 py-2 rounded-md bg-white shadow hover:bg-neutral-200 text-zinc-900">
            Get started
          </button>
          <button className="gap-2 self-stretch px-4 py-2 whitespace-nowrap rounded-md hover:bg-zinc-800 text-neutral-50">
            Github
          </button>
        </div>
      </div>
      <div className="flex-1 mt-24 w-full rounded-xl max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col justify-center py-0.5 max-md:max-w-full">
          <div className="px-2 pt-2 rounded-2xl bg-zinc-50 bg-opacity-10 max-md:max-w-full">
            <img
              src="\HeroDash.png"
              alt="Hero illustration"
              className="object-contain w-full rounded-lg aspect-[1.64] max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
