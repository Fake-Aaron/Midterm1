import * as React from "react";

interface TestimonialCardProps {
  avatar: string;
  name: string;
  username: string;
  content: React.ReactNode;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  avatar,
  name,
  username,
  content,
}) => {
  return (
    <article className="flex overflow-hidden flex-col justify-center p-6 rounded-xl min-w-60 w-[421px] max-md:px-5 max-md:max-w-full">
      <div className="w-full max-w-[460px]">
        <header className="flex gap-3 items-center w-full">
          <img
            src={avatar}
            alt={`${name}'s avatar`}
            className="object-contain shrink-0 self-stretch my-auto w-12 rounded-full aspect-square"
          />
          <div className="self-stretch my-auto min-w-60 w-[373px]">
            <h3 className="text-lg font-semibold leading-loose text-neutral-50">
              {name}
            </h3>
            <p className="text-base text-zinc-400">{username}</p>
          </div>
        </header>
        <p className="mt-2 text-base leading-6 text-zinc-400">{content}</p>
      </div>
    </article>
  );
};
