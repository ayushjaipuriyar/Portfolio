import { Octokit } from "octokit";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const octokit = new Octokit({
      headers: {
        "User-Agent": "MyApp",
        Accept: "application/vnd.github.v3+json",
      },
    });

    const response = await octokit.request("GET /users/{username}/repos", {
      username: "ayushjaipuriyar",
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}
