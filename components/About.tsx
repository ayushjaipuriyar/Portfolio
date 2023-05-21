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
        <div className="w-full text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            As a full-stack developer with experience in building robust and
            secure web applications, I have gained expertise in the MERN stack,
            Express.js, MongoDB, and React.js. During my internship at Gail
            Training Institute, I built a sleek and minimalistic website,
            improving user experience by reducing the website loading time by
            30%. As a mentee at Microsoft Engage 2022, I developed a
            recommendation system using Python, Flask, and ReactJS to predict
            movies based on users&apos; past ratings. Furthermore, I designed an
            interactive web page to showcase the recommended movies, with
            endpoints designated for receiving and transmitting requests. I also
            published a Bash script on the Arch User Repository to modify
            performance modes and battery charging options on the Lenovo Ideapad
            Slim 5 AMD laptop.
          </p>
          <p>Here are a few technologies that I have worked on: </p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-3 gap-2 mt-6">
            <li className="flex items=center gap-2">{bullet}C/C++</li>
            <li className="flex items=center gap-2">{bullet}Python</li>
            <li className="flex items=center gap-2">{bullet}Java</li>
            <li className="flex items=center gap-2">{bullet}HTML</li>
            <li className="flex items=center gap-2">{bullet}CSS</li>
            <li className="flex items=center gap-2">{bullet}Javascript</li>
            <li className="flex items=center gap-2">{bullet}ReactJS</li>
            <li className="flex items=center gap-2">{bullet}MongoDb</li>
            <li className="flex items=center gap-2">{bullet}Nextjs</li>
            <li className="flex items=center gap-2">{bullet}Express.js</li>
            <li className="flex items=center gap-2">{bullet}Node.js</li>
            <li className="flex items=center gap-2">{bullet}SQL</li>
            <li className="flex items=center gap-2">{bullet}Flask</li>
            <li className="flex items=center gap-2">{bullet}pandas</li>
            <li className="flex items=center gap-2">{bullet}NumPy</li>
            <li className="flex items=center gap-2">{bullet}Matplotlib</li>
            <li className="flex items=center gap-2">{bullet}Scikit-learn</li>
            <li className="flex items=center gap-2">{bullet}Git</li>
            <li className="flex items=center gap-2">{bullet}Docker</li>
            <li className="flex items=center gap-2">{bullet}Google Cloud</li>
          </ul>
        </div>
        <div className="w-full lgl:w-2/3 h-80 relative group">
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
