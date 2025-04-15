import * as React from "react";

export function LogoSection() {
  return (
    <section className="flex flex-col px-8 py-20 w-full text-sm leading-none bg-zinc-950 max-w-[1312px] max-md:px-5 max-md:max-w-full">
      <h2 className="self-center font-semibold text-center text-neutral-50">
        Built with the best tools
      </h2>
      <div className="flex flex-wrap gap-6 justify-center items-center mt-12 w-full font-medium max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-2 items-center self-stretch my-auto whitespace-nowrap text-neutral-50">
          <img
            src="\Figma.svg"
            alt="Figma"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <span className="self-stretch my-auto">Figma</span>
        </div>
        <div className="flex gap-2 items-center self-stretch my-auto whitespace-nowrap">
          <img
            src="\ReactJS.svg"
            alt="React.js"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <span className="self-stretch my-auto text-neutral-50">React.js</span>
          <span className="self-stretch my-auto text-zinc-400">18.3.1</span>
        </div>
        <div className="flex gap-2 items-center self-stretch my-auto whitespace-nowrap">
          <img
            src="\TypeScript.svg"
            alt="Typescript"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <span className="self-stretch my-auto text-neutral-50">
            Typescript
          </span>
          <span className="self-stretch my-auto text-zinc-400">5.6.2</span>
        </div>
        <div className="flex gap-2 items-center self-stretch my-auto whitespace-nowrap">
          <img
            src="\ShadCn.svg"
            alt="Shadcn"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <span className="self-stretch my-auto text-neutral-50">Shadcn</span>
          <span className="self-stretch my-auto text-zinc-400">2.0.7</span>
        </div>
        <div className="flex gap-2 items-center self-stretch my-auto">
          <img
            src="\TailwindCSS.svg"
            alt="Tailwind CSS"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <span className="self-stretch my-auto text-neutral-50">
            Tailwind CSS
          </span>
          <span className="self-stretch my-auto text-zinc-400">3.4.11</span>
        </div>
      </div>
    </section>
  );
}
