"use client";
import * as React from "react";
import { FooterLogo } from "./footerTab/footerLogo";
import { FooterColumn } from "./footerTab/footerCollumn";
import { FooterBottom } from "./footerTab/footerBottom";

export const Footer: React.FC = () => {
  const columns = [
    {
      title: "Product",
      links: [{ text: "Changelog" }, { text: "Documentation" }],
    },
    {
      title: "Company",
      links: [{ text: "About" }, { text: "Careers" }, { text: "Blog" }],
    },
    {
      title: "Contact",
      links: [{ text: "Github" }, { text: "Discord" }, { text: "Twitter" }],
    },
    {
      title: "Contact",
      links: [{ text: "Github" }, { text: "Discord" }, { text: "Twitter" }],
    },
    {
      title: "Contact",
      links: [{ text: "Github" }, { text: "Discord" }, { text: "Twitter" }],
    },
  ];

  return (
    <footer className="p-8 w-full bg-zinc-950 max-w-[1312px] text-zinc-400 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-4 items-start pt-12 pb-24 w-full text-sm leading-none border-b border-white border-opacity-10 max-md:max-w-full">
        <FooterLogo />
        {columns.map((column, index) => (
          <FooterColumn key={index} title={column.title} links={column.links} />
        ))}
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
