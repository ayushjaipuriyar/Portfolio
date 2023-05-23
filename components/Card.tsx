import React, { useState, useEffect } from "react";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FaRegFolder } from "react-icons/fa";
import { Octokit } from "octokit";

interface Props {
  name: String;
  description: String;
  link: string;
}
const Card = ({ name, description, link }: Props) => {
  const [data, setData] = useState([]);
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
          `GET /repos/{username}/${name}/languages`,
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

  const keys = Object.keys(data);
  return (
    <a href={link} target="_blank">
      <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transitions-transform duration-300 group">
        <div className="flex justify-between items-center">
          <FaRegFolder className="text-4xl text-textGreen" />
          <RxOpenInNewWindow className="text-4xl hover:text-textGreen" />
        </div>
        <div>
          <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
            {name}
          </h2>
          <p className="text-sm mt-3">{description}</p>
        </div>
        <ul className="text-xs md:text-sm text-textLight flex items-center gap-2 justify-between flex-wrap">
          {keys && keys.length > 0 ? (
            keys.map((str, index) => <li key={index}>{str}</li>)
          ) : (
            <p>No languages defined</p>
          )}
        </ul>
      </div>
    </a>
  );
};

export default Card;
