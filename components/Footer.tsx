import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

interface Props {
  text: String;
}

const Footer = ({ text }: Props) => {
  const icons = (tag: JSX.Element, link: string) => {
    const className =
      "p-4 text-3xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300";
    return (
      <a href={link} target="_blank">
        <span className={className}>{tag}</span>
      </a>
    );
  };
  return (
    <div
      className={`${
        text === "nav" ? "gap-6 " : "hidden"
      } flex md:inline-flex xl:hidden items-center justify-center py-6 w-full gap-4`}
    >
      {icons(<BsGithub />, "https://github.com/ayushjaipuriyar")}
      {icons(<BsLinkedin />, "https://www.linkedin.com/in/ayushjaipuriyar/")}
      {icons(<SiLeetcode />, "https://leetcode.com/ayushj02/")}
    </div>
  );
};

export default Footer;
