import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { graphql, GraphQlQueryResponseData } from "@octokit/graphql";
import Projectsx from "./Projectsx";

interface RepositoryTags {
  topic: {
    name: string;
  };
}
interface RepositoryLanguage {
  name: string;
}
interface UserPinnedItem {
  node: {
    name: string;
    description: string | null;
    languages: {
      nodes: RepositoryLanguage[];
    };
    repositoryTopics: {
      nodes: RepositoryTags[];
    };
    url: string;
    homepageUrl: string | null;
    openGraphImageUrl: string | null;
    usesCustomOpenGraphImage: boolean;
  };
}

interface GraphQLResponse {
  user: {
    pinnedItems: {
      edges: UserPinnedItem[];
    };
  };
}
const Projects = () => {
  const [data, setData] = useState<UserPinnedItem[]>([]);
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
          pinnedItems(first: 10) {
            edges {
              node {
                ... on Repository {
                  name
                  description
                  languages(first: 20) {
                    nodes {
                      name
                    }
                  }
                  url
                  repositoryTopics(first: 10) {
                    nodes {
                      topic {
                        name
                      }
                    }
                  }
                  homepageUrl
                  openGraphImageUrl
                  usesCustomOpenGraphImage
                }
              } 
           }
         }
       }
     }      
    `;
      try {
        const response = await graphqlWithAuth<GraphQLResponse>(query);
        const edgesExtracted: UserPinnedItem[] =
          response.user.pinnedItems.edges;
        setData(edgesExtracted);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <section
      id="products"
      className="max-w-containerSmall mx-auto lg:px-20 py-24"
    >
      <SectionTitle title="Projects" />
      <div>
        {data &&
          data.map((item, index) => (
            <Projectsx
              key={index}
              name={item.node.name}
              description={item.node.description}
              url={item.node.url}
              website={item.node.homepageUrl}
              languages={item.node.languages.nodes}
              tags={item.node.repositoryTopics.nodes}
              imgbool={item.node.usesCustomOpenGraphImage}
              index={index}
            />
          ))}
      </div>
    </section>
  );
};
export default Projects;
