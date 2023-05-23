import React, { useState, useEffect } from "react";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FaRegFolder } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { Octokit } from "octokit";
interface language {
  name: string;
}

interface release {
  url: string;
}

interface topicP {
  topic: {
    name: string;
  };
}
interface Props {
  name: String;
  description: String;
  url: string;
  languages: language[];
  repositoryTopics: topicP[];
  releases: release[];
  deployedlink: string;
}
const Card = ({
  name,
  description,
  url,
  languages,
  repositoryTopics,
  releases,
  deployedlink,
}: Props) => {
  const iconStyle = "text-4xl hover:text-textGreen";
  return (
    <a href={url} target="_blank">
      <div className="w-full rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transitions-transform duration-300 group">
        <div className="flex justify-between items-center">
          <FaRegFolder className="text-4xl text-textGreen" />
          {deployedlink && (
            <a href={deployedlink} target="_blank">
              <CgWebsite className={iconStyle} />
            </a>
          )}{" "}
          {releases.length > 0 ? (
            <a href={releases[0].url} target="_blank">
              <RxOpenInNewWindow className={iconStyle} />
            </a>
          ) : (
            <RxOpenInNewWindow className={iconStyle} />
          )}
        </div>
        <div>
          <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
            {name}
          </h2>
          <p className="text-sm mt-3">{description}</p>
        </div>
        <ul className="text-xs md:text-sm text-textLight flex items-center gap-2 justify-center flex-wrap">
          {languages && languages.length > 0 ? (
            languages.map((language, index) => (
              <li key={index}>{language.name}</li>
            ))
          ) : (
            <p>No languages defined</p>
          )}
        </ul>
        <ul className="text-xs md:text-sm text-textLight flex items-center gap-2 justify-normal flex-wrap">
          {repositoryTopics && repositoryTopics.length > 0 ? (
            repositoryTopics.map((topics, index) => (
              <li
                className="rounded-xl bg-textLight p-2 text-textDark"
                key={index}
              >
                {topics.topic.name}
              </li>
            ))
          ) : (
            <p>No tags defined</p>
          )}
        </ul>
      </div>
    </a>
  );
};

export default Card;
