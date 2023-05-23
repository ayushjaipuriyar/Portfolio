import React from "react";
import SectionTitle from "./SectionTitle";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Image from "next/image";
import { profile } from "@/public/assets";
import { motion } from "framer-motion";

const About = () => {
  const bulletStyle = "text-bullet";
  const bullet = (name: String) => {
    return (
      <motion.li
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center md:gap-2 gap-0"
      >
        <span className={bulletStyle}>
          <AiOutlineDoubleRight />
        </span>
        {name}
      </motion.li>
    );
  };

  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 md:py-32 flex flex-col"
    >
      <SectionTitle title="About Me" />
      <div className="flex flex-col md:flex-row gap-16">
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
          <ul className="max-w-[450px] text-md font-titleFont grid grid-cols-4 gap-2 mt-6">
            {bullet("C/C++")}
            {bullet("Python")}
            {bullet("Java")}
            {bullet("HTML")}
            {bullet("CSS")}
            {bullet("Javascript")}
            {bullet("ReactJS")}
            {bullet("MongoDb")}
            {bullet("Nextjs")}
            {bullet("Express.js")}
            {bullet("Node.js")}
            {bullet("SQL")}
            {bullet("Flask")}
            {bullet("pandas")}
            {bullet("NumPy")}
            {bullet("Matplotlib")}
            {bullet("Scikit-learn")}
            {bullet("Git")}
            {bullet("Docker")}
            {bullet("Google Cloud")}
          </ul>
        </div>
        <div className="w-full md:w-2/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-3xl">
            <div className="w-full h-full relative z-20 flex pl-6 md:pl-0 ">
              <Image
                className="rounded-3xl h-full object-cover"
                src={profile}
                alt="profileimg"
              />
              <div className="hidden md:inline-block absolute w-full h-80 bg-textGreen/20 rounded-3xl top-0 left-0 group-hover:bg-transparent duration-300 "></div>
            </div>
          </div>
          <div className="hidden md:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-6 group-hover:-translate-y-6 group-hover:rounded-3xl transition-all duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
