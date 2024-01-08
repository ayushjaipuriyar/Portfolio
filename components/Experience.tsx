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
          {experienceLi("AST Consulting", 1)}
          {experienceLi("Gail Training Institute", 2)}
          {experienceLi("Microsoft Engage 2022", 3)}
        </ul>
        {activeItem === 2 && (
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
        {activeItem === 3 && (
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
         {activeItem === 1 && (
          <Work
            Name="AST Consulting"
            Type="Software Devloper Engineer Intern"
            Duration="3 Months"
            Points={[
             "Spearheaded the development of a scalable backend infrastructure using NestJS, MongoDB, and Vite, resulting in a cleaner typescript codes, because of NestJS module micro-architecture.",
             "Orchestrated the integration of AWS services, optimizing image storage and retrieval, which led to a 50% improvement in image loading speed and a 20% reduction in overall data transfer latency.",
             "Designed and executed dynamic schedulers that adapt to timezones",
             "Developed a Telegram bot, enhancing user interaction and experience automating key processes, resulting in a 25% usage by users.",
             "Integrated social media accounts, consolidating analytics data and providing insights that contributed to a 10% increase in user acquisition and a 15% growth in social media engagement.",
             "Utilized OpenAI and attempted to integrate in/-house AI models for content generation",
             "Integrated Chargebee and Stripe payment gateways to streamline payment processing and enhance the platform’s financial capabilities.",
             "Established an analytics framework by connecting Google Analytics and Microsoft Clarity, leading to actionable insights that improved user journey and resulted in a 30% increase in conversion rates.",
             "Set up CI/CD pipelines on AWS, reducing deployment time by 40% and ensuring 95%+ uptime of the platform.",
             "Introduced a comprehensive code review process on GitHub, resulting in a 30% decrease in post-release defects and 20% faster feature delivery.age with designated endpoints for receiving and transmitting requests for getting recommended movies and submitting movie ratings"
            ]}
          />
        )}

      </div>
    </section>
  );
};

export default Experience;
