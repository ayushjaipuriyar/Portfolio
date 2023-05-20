import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
const LeftSide = () => {
  const iconStyle =
    "w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex  items-center justify-center hover:text-textGreenn cursor-pointer hover:-translate-y-2 transition-all duration-300";
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-2 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/ayushjaippuriyar" target="_blank">
          <span className={iconStyle}>
            <BsGithub />
          </span>
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <a href="https://github.com/ayushjaippuriyar" target="_blank">
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
    </div>
  );
};

export default LeftSide;
