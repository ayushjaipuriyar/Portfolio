import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
const LeftSide = () => {
  const iconStyle =
    "w-16 h-16 text-3xl bg-hoverColor rounded-full inline-flex text-textYellow items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300";
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/ayushjaipuriyar" target="_blank">
          <span className={iconStyle}>
            <BsGithub />
          </span>
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <a href="https://www.linkedin.com/in/ayushjaipuriyar/" target="_blank">
          <span className={iconStyle}>
            <BsLinkedin />
          </span>
        </a>
      </div>

      <div className="flex flex-col gap-4">
        <a href="https://github.com/ayushjaippuriyar" target="_blank">
          <span className={iconStyle}>
            <SiLeetcode />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textYellow"></div>
    </div>
  );
};

export default LeftSide;
