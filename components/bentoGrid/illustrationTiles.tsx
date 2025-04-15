import * as React from "react";

export function IllustrationTiles() {
  return (
    <div className="flex-1 px-14 pt-7 pb-11 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[42%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:mt-10">
            <div className="flex shrink-0 self-end rounded-xl h-[84px] w-[84px] max-md:mr-1" />
            <div className="flex gap-5 mt-5">
              <div className="flex shrink-0 my-auto rounded-xl h-[84px] w-[84px]" />
              <div className="flex-1">
                <img
                  src="\Stack1.svg"
                  alt="Stack illustration 1"
                  className="object-contain rounded-xl aspect-square w-[92px]"
                />
                <div className="flex shrink-0 mt-5 rounded-xl h-[84px] w-[84px] max-md:mr-1" />
              </div>
            </div>
          </div>
        </div>
        <div className="ml-5 w-[19%] max-md:ml-0 max-md:w-full">
          <div className="self-stretch my-auto max-md:w-full">
            <img
              src="\Stack2.svg"
              alt="Stack illustration 2"
              className="object-contain rounded-xl aspect-square w-[92px]"
            />
            <img
              src="\Stack3.svg"
              alt="Stack illustration 3"
              className="object-contain mt-4 rounded-xl aspect-square w-[92px]"
            />
          </div>
        </div>
        <div className="ml-5 w-[19%] max-md:ml-0 max-md:w-full">
          <div className="grow max-md:mt-10">
            <div className="flex shrink-0 rounded-xl h-[84px] w-[84px] max-md:mr-1" />
            <img
              src="\Stack4.svg"
              alt="Stack illustration 4"
              className="object-contain mt-5 rounded-xl aspect-square w-[92px]"
            />
            <div className="flex shrink-0 mt-5 rounded-xl h-[84px] w-[84px] max-md:mr-1" />
          </div>
        </div>
        <div className="ml-5 w-[19%] max-md:ml-0 max-md:w-full">
          <div className="self-stretch my-auto max-md:mt-10">
            <img
              src="\Stack5.svg"
              alt="Stack illustration 5"
              className="object-contain rounded-xl aspect-square w-[92px]"
            />
            <div className="flex shrink-0 mt-5 rounded-xl h-[84px] w-[84px] max-md:mr-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
