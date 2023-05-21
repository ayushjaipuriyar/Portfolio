import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import Work from "./Work";

const Experience = () => {
  const [activeItem, setActiveItem] = useState<number | null>(1);
  const handleClick = (index: number) => {
    console.log(activeItem);
    setActiveItem(index);
  };

  const experienceLi = (text: string, index: number) => {
    const isActive = activeItem === index;

    const liClassName = `border-l-2 border-l-hoverColor bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium ${isActive
        ? "border-l-textGreen text-textGreen"
        : "border-l-textDark text-textDark"
      }`;
    return (
      <li onClick={() => handleClick(index)} className={liClassName}>
        {text}
      </li>
    );
  };
  return (
    <section
      id="experience"
      className="max-w-containerSmall mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Experiences" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul>
          {experienceLi("Gail Training Institute", 1)}
          {experienceLi("Microsoft Engage 2022", 2)}
        </ul>
        {activeItem === 1 && <Work />}
      </div>
    </section>
  );
};

export default Experience;
