"use client";

import * as React from "react";
import { FAQAccordionItem } from "./FAQAcc/FAQAccordion";

const faqItems = [
  "Is Launch UI easy to customise?",
  "Is Launch UI optimized for search engines?",
  "How does Launch UI compare to no-code tools?",
  "Why not just coding a website yourself?",
  "Can I get a refund if I don't like it?",
  "What features will be added in the future?",
];

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col justify-center items-center px-8 py-20 w-full bg-zinc-950 max-w-[1312px] max-md:px-5 max-md:max-w-full">
      <div className="max-w-[720px] w-[720px] max-md:max-w-full">
        <h2 className="text-5xl font-semibold leading-none text-center text-neutral-50 max-md:max-w-full max-md:text-4xl">
          Questions and Answers
        </h2>
        <div className="mt-12 w-full text-base font-medium text-neutral-50 max-md:mt-10 max-md:max-w-full">
          {faqItems.map((question, index) => (
            <FAQAccordionItem
              key={index}
              question={question}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
