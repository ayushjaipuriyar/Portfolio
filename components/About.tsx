import React from "react";
import SectionTitle from "./SectionTitle";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Image from "next/image";
import { profile } from "@/public/assets";

const About = () => {
  const bullet = (
    <span className="text-textGreen">
      <AiOutlineDoubleRight />
    </span>
  );
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col"
    >
      <SectionTitle title="About Me" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>SOME INTRODUCTION</p>
          <p>Here are a few technologies that I have worked on: </p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items=center gap-2">{bullet}Javascript</li>
            <li className="flex items=center gap-2">{bullet}Javascript</li>
            <li className="flex items=center gap-2">{bullet}Javascript</li>
            <li className="flex items=center gap-2">{bullet}Javascript</li>
            <li className="flex items=center gap-2">{bullet}Javascript</li>
            <li className="flex items=center gap-2">{bullet}Javascript</li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-3xl">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-3xl h-full object-cover"
                src={profile}
                alt="profileimg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-3xl top-0 left-0 group-hover:bg-transparent duration-300 "></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen roundede-md group-hover:-translate-x-6 group-hover:-translate-y-6 group-hover:rounded-3xl transition-all duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
