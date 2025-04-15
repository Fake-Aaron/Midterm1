import * as React from "react";

interface FooterLink {
  text: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

export const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <nav className="flex flex-col flex-1 shrink justify-center whitespace-nowrap basis-0 min-w-[104px]">
      <h2 className="font-semibold leading-5 text-neutral-50">{title}</h2>
      <ul className="list-none p-0">
        {links.map((link, index) => (
          <li key={index} className="mt-4">
            {link.text}
          </li>
        ))}
      </ul>
    </nav>
  );
};
