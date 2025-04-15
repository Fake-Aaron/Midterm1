import * as React from "react";

interface BentoTileProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}

export function BentoTile({
  title,
  description,
  children,
  className = "",
}: BentoTileProps) {
  return (
    <article
      className={`overflow-hidden p-6 rounded-xl bg-zinc-900 bg-opacity-0 max-md:px-5 max-md:max-w-full ${className}`}
    >
      <div className="max-w-[460px] w-[460px] max-md:max-w-full">
        <h2 className="text-2xl font-semibold leading-none text-neutral-50 max-md:max-w-full">
          {title}
        </h2>
        <p className="mt-2 text-base leading-6 text-zinc-400 max-md:max-w-full whitespace-pre-line">
          {description}
        </p>
      </div>
      <div className="flex-1 mt-6 w-full max-md:max-w-full">{children}</div>
    </article>
  );
}
