import * as React from "react";

export function ChatIllustration() {
  return (
    <div className="flex-1 mt-6 w-full text-xs font-medium leading-none text-zinc-400 max-md:max-w-full">
      <div className="flex relative flex-col flex-1 justify-center px-6 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex z-0 flex-col items-start pt-2 w-full max-md:max-w-full">
          <p className="overflow-hidden px-3 py-2 rounded-xl">
            We need to update this heading before launch
          </p>
          <img
            src="\Mouse1.svg"
            alt="Chat arrow 1"
            className="object-contain z-10 mt-5 ml-14 w-4 rounded-sm aspect-[0.73] max-md:ml-2.5"
          />
          <div className="gap-3 self-start px-2 py-1 text-right bg-indigo-600 rounded-lg border-solid border-[1.2px] border-[color:var(--Violet-400,#A78BFA)] shadow-[0px_0px_var(--Spacing-2,8px)_0px_var(--violet-40080,rgba(167,139,250,0.80)),0px_0px_var(--Spacing-16,64px)_0px_var(--Indigo-600,#4F46E5)] text-ellipsis text-neutral-50">
            Sofia G.
          </div>
          <div className="flex flex-col self-end mt-11 w-64 max-w-full max-md:mt-10">
            <p className="overflow-hidden px-3 py-2 rounded-xl">
              Let me quickly jump into Sanity and fix it
            </p>
            <div className="flex z-10 gap-5 justify-between items-start self-end mt-2 max-w-full whitespace-nowrap w-[206px]">
              <img
                src="\Mouse2.svg"
                alt="Chat arrow 2"
                className="object-contain shrink-0 self-end mt-7 rounded-sm aspect-[0.77] w-[17px]"
              />
              <p className="overflow-hidden self-start px-3 py-2 rounded-xl">
                Done!
              </p>
            </div>
            <div className="gap-3 self-start px-2 py-1 ml-14 rounded-lg border border-solid bg-neutral-50 border-zinc-300 text-ellipsis text-zinc-900 max-md:ml-2.5">
              Erik D.
            </div>
          </div>
        </div>
        <div className="flex absolute top-2/4 left-2/4 z-0 max-w-full -translate-x-2/4 -translate-y-2/4 h-[360px] min-h-[360px] w-[360px]" />
      </div>
    </div>
  );
}
