"use client";

import * as React from "react";

interface FAQAccordionItemProps {
  question: string;
  isOpen: boolean;
  onClick: () => void;
}

export const FAQAccordionItem: React.FC<FAQAccordionItemProps> = ({
  question,
  isOpen,
  onClick,
}) => {
  return (
    <div className="flex overflow-hidden flex-col justify-center py-4 w-full border-b border-white border-opacity-10 max-md:max-w-full">
      <button
        className="flex flex-wrap gap-3 items-center w-full max-md:max-w-full text-left"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="flex-1 shrink self-stretch my-auto basis-0 min-w-60 max-md:max-w-full text-base font-medium text-neutral-50">
          {question}
        </span>
        <img
          src="ArrowV.svg"
          className={`object-contain shrink-0 self-stretch my-auto w-4 aspect-square transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          alt={isOpen ? "Collapse" : "Expand"}
        />
      </button>
    </div>
  );
};
