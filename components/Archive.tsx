import React, { useState, useEffect } from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import { Octokit } from "octokit";

const Archive = () => {
  const [data, setData] = useState<any>([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const octokit = new Octokit({
        headers: {
          "User-Agent": "MyApp",
          Accept: "application/vnd.github.v3+json",
        },
      });

      try {
        const response = await octokit.request(
          "GET /users/{username}/repos?per_page=100&sort=updated&direction=desc",
          {
            username: "ayushjaipuriyar",
          }
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-containerSmall mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          View the Archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lg:px-10">
        {data.map((item: any, index: number) => {
          if (!showMore && index >= 3) return null; // Skip rendering if not in showMore mode and index is beyond the first three
          if (item.archived) return null; // Skip rendering if item is archived
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Card
                name={item.name}
                description={item.description}
                link={item.html_url}
              />
            </motion.div>
          );
        })}
      </div>
      <div className="mt-12 flex items-center justify-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Archive;
