import React from "react";

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-2 text-textLight">
      <a href="mailto:ayushjaipuriyar21@gmail.com">
        <p className="text-sm rotate-90 w-40 tracking-wide text-textLight hover:text-[#eee] duration-300 transition-all">
          Email me
        </p>
      </a>
      <span className="w-[2px] h-32 bg-textYellow inline-flex" />
    </div>
  );
};

export default RightSide;
