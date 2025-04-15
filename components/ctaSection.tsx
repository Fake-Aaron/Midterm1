import * as React from "react";

export function CtaSection() {
  return (
    <section className="overflow-hidden relative px-8 w-full bg-zinc-950 max-w-[1312px] max-md:px-5 max-md:max-w-full">
      <div className="flex z-0 flex-col pt-32 pb-48 w-full max-md:py-24 max-md:max-w-full">
        <h2 className="text-5xl font-semibold leading-none text-center text-neutral-50 max-md:max-w-full max-md:text-4xl">
          Start building
        </h2>
        <div className="flex gap-4 items-start self-center mt-12 text-sm font-medium leading-none max-md:mt-10">
          <button className="gap-2 self-stretch px-4 py-2 rounded-md bg-white shadow hover:bg-neutral-200 text-zinc-900">
            Get started
          </button>
          <button className="gap-2 self-stretch px-4 py-2 whitespace-nowrap rounded-md hover:bg-zinc-800 text-neutral-50">
            Github
          </button>
        </div>
      </div>
      <div className="flex absolute inset-x-0 bottom-0 z-0 w-full h-[280px] min-h-[280px]" />
    </section>
  );
}
