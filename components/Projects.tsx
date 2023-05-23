import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TbBrandGithub } from "react-icons/tb";
import { graphql, GraphQlQueryResponseData } from "@octokit/graphql";
const Projects = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const graphqlWithAuth = graphql.defaults({
        headers: {
          authorization: `bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
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
                        edges {
                          node {
                            name
                          }
                        }
                      }
                      url
                    }
                  }
                }
              }
            }
          }
      `;
      try {
        const { data } = await graphqlWithAuth();
        setData(data);
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
        <div className="w-full flex flex-col items-Center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              href="#"
              target="_blank"
              className="w-full xl:w-1/2 h-auto relative group"
            >
              <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
                <Image className="w-full h-full object-contain" src="" alt="" />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Projects
              </p>
              <h3 className="text-2xl font-bold">NAMe</h3>
              <p className="bg-[#112240] text-sm md:test-base p-2 md:p-6 rounded-md">
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
                officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip
                amet voluptate voluptate dolor minim nulla est proident. Nostrud
                officia pariatur ut officia. Sit irure elit esse ea nulla sunt
                ex occaecat reprehenderit commodo officia dolor Lorem duis
                laboris cupidatat officia voluptate. Culpa proident adipisicing
                id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
                Aliqua reprehenderit commodo ex non excepteur duis sunt velit
                enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur
                et est culpa et culpa duis.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gpa-2 md:gap-5 justify-between text-textDark">
                <li>Stack 1</li>
                <li>Stack 1</li>
                <li>Stack 1</li>
                <li>Stack 1</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/ayushjaipuriyar/project"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="#ANYLINK"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-Center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              href="#"
              target="_blank"
              className="w-full xl:w-1/2 h-auto relative group"
            >
              <div>
                <Image className="w-full h-full object-contain" src="" alt="" />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Projects
              </p>
              <h3 className="text-2xl font-bold">NAMe</h3>
              <p className="bg-[#112240] text-sm md:test-base p-2 xl:-mr-16 md:p-6 rounded-md">
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
                officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip
                amet voluptate voluptate dolor minim nulla est proident. Nostrud
                officia pariatur ut officia. Sit irure elit esse ea nulla sunt
                ex occaecat reprehenderit commodo officia dolor Lorem duis
                laboris cupidatat officia voluptate. Culpa proident adipisicing
                id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
                Aliqua reprehenderit commodo ex non excepteur duis sunt velit
                enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur
                et est culpa et culpa duis.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gpa-2 md:gap-5 justify-between text-textDark">
                <li>Stack 1</li>
                <li>Stack 1</li>
                <li>Stack 1</li>
                <li>Stack 1</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/ayushjaipuriyar/project"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="#ANYLINK"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
