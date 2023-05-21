import { Octokit } from "octokit";
export default async function handler(req, res) {
  const octokit = new Octokit();
  const response = await octokit.request("GET /users/{username}/repos", {
    username: "ayushjaipuriyar",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  res.status(200).json(response.data);
}
