import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
const LeftSide = () => {
  const iconStyle =
    "w-16 h-16 text-3xl bg-hoverColor rounded-full inline-flex text-textYellow items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300";

  const icon = (link: string, tag: JSX.Element) => {
    const ClassName = "flex flex-col gap-4";
    return (
      <div className={ClassName}>
        <a href={link} target="_blank">
          <span className={iconStyle}>{tag}</span>
        </a>
      </div>
    );
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
      {icon("https://github.com/ayushjaipuriyar", <BsGithub />)}
      {icon("https://www.linkedin.com/in/ayushjaipuriyar", <BsLinkedin />)}
      {icon("https://leetcode.com/ayushj02/", <SiLeetcode />)}
      <div className="w-[2px] h-32 bg-textYellow"></div>
    </div>
  );
};

export default LeftSide;
