import React from "react";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FaRegFolder } from "react-icons/fa";

const Card = () => {
  return (
    <a href="#" target="_blank">
      <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transitions-transform duration-300 group">
        <div className="flex justify-between items-center">
          <FaRegFolder className="text-4xl text-textGreen" />
          <RxOpenInNewWindow className="text-4xl hover:text-textGreen" />
        </div>
        <div>
          <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
            NAME
          </h2>
          <p className="text-sm mt-3">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui
            cupidatat.
          </p>
        </div>
        <ul className="text-xs mdl:text-sm text-textLight flex items-center gap-2 justify-between flex-wrap">
          <li>ITEMS 1</li>
          <li>ITEMS 1</li>
          <li>ITEMS 1</li>
        </ul>
      </div>
    </a>
  );
};

export default Card;
