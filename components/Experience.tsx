import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import Work from "./Work";

const Experience = () => {
  const [activeItem, setActiveItem] = useState<number | null>(1);
  const handleClick = (index: number) => {
    setActiveItem(index);
  };

  const experienceLi = (text: string, index: number) => {
    const isActive = activeItem === index;

    const liClassName = `border-l-2 border-l-hoverColor bg-transparent py-3 text-sm cursor-pointer duration-300 px-8 font-medium ${
      isActive
        ? "border-l-[#eee] text-[#eee]"
        : "border-l-textGreen text-textGreen hover:text-textLight hover:border-l-textLight"
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
      className="max-w-containerSmall mx-auto py-10 lg:py-24 px-4"
    >
      <SectionTitle title="Experiences" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16 bg-[#112240] rounded-md p-10">
        <ul>
          {experienceLi("Gail Training Institute", 1)}
          {experienceLi("Microsoft Engage 2022", 2)}
        </ul>
        {activeItem === 1 && (
          <Work
            Name="Gail Training Institute"
            Type="Summer Internship | Full Stack Developer"
            Duration="1 Months"
            Points={[
              "Obtained an opportunity to work as a full-stack developer and build a new website using the MERN stack.",
              "Built the website from the ground up, ensuring simplicity and fast loading times, while also enhancing it&apos;s security against cyber attacks.",
              "Ensuring website functionality and stability across different devices.",
              "Implemented a robust and secure backend using Express.js, while utilizing MongoDB as the database technology and React.js for the frontend.",
              "Designed a sleek and minimalistic website with an attractive user interface, showcasing a well-integrated combination of these technologies. Successfully reduced the website loading time by 30% and improved user experience.",
            ]}
          />
        )}
        {activeItem === 2 && (
          <Work
            Name="Microsoft"
            Type="Mentee at Engage'22"
            Duration="3 Months"
            Points={[
              "Built a recommendation system using Python to predict movies that users may be interested in based on their past movie ratings.",
              "Obtained the dataset for the project from MovieLens.",
              "Programmed an interactive web page using ReactJS to acquire movie ratings from users and exhibit the recommended movies.",
              "Utilized Python as the backend programming language with designated endpoints for receiving and transmitting requests for getting recommended movies and submitting movie ratings",
            ]}
          />
        )}
      </div>
    </section>
  );
};

export default Experience;
