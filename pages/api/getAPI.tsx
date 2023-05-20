import stream from "stream";
import { promisify } from "util";
import fetch from "node-fetch";
import { NextApiRequest, NextApiResponse } from "next";

const pipeline = promisify(stream.pipeline);
const url =
  "https://github.com/ayushjaipuriyar/resume/releases/latest/download/resume.pdf";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(url); // replace this with your API call & options
  if (!response.ok)
    throw new Error(`unexpected response ${response.statusText}`);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline; filename=resume.pdf");
  await pipeline(response.body, res);
};

export default handler;
