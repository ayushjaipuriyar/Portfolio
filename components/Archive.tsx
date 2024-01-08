import React, { useState, useEffect } from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import { graphql, GraphQlQueryResponseData } from "@octokit/graphql";

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
interface RepositoryNode {
  description: string;
  languages: {
    nodes: language[];
  };
  name: string;
  releases: {
    nodes: release[];
  };
  repositoryTopics: {
    nodes: topicP[];
  };
  url: string;
  homepageUrl: string;
  isArchived: string;
}

interface UserData {
  user: {
    repositories: {
      nodes: RepositoryNode[];
    };
  };
}

const Archive = () => {
  const [showMore, setShowMore] = useState(false);
  const [data, setData] = useState<RepositoryNode[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const graphqlWithAuth = graphql.defaults({
        headers: {
          authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
        },
      });
      const query = `
      {
          user(login: "ayushjaipuriyar") {
            repositories(first: 100, privacy:PUBLIC, orderBy: {field: UPDATED_AT, direction: DESC}) {
              nodes {
                description
                languages(first: 10) {
                  nodes {
                    name
                  }
                }
                name
                releases(first: 1) {
                  nodes {
                    url
                  }
                }
                repositoryTopics(first: 20) {
                  nodes {
                    topic {
                      name
                    }
                  }
                }
                url
                homepageUrl
                isArchived
              }
            }
          }
        }
      `;
      try {
        const response = await graphqlWithAuth<UserData>(query);
        setData(response.user.repositories.nodes);

        // const edgesExtracted: UserPinnedItem[] =
        // response.user.pinnedItems.edges;
        // setData(edgesExtracted);
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
        {data.map((repositoryNode: RepositoryNode, index: number) => {
          if (!showMore && index >= 3) return null; // Skip rendering if not in showMore mode and index is beyond the first three
          if (repositoryNode.isArchived) return null; // Skip rendering if item is archived

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Card
                name={repositoryNode.name}
                description={repositoryNode.description}
                url={repositoryNode.url}
                languages={repositoryNode.languages.nodes}
                releases={repositoryNode.releases.nodes}
                repositoryTopics={repositoryNode.repositoryTopics.nodes}
                deployedlink={repositoryNode.homepageUrl}
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
