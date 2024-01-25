import { NextApiRequest, NextApiResponse } from "next";
// import stream from "stream";
// import { promisify } from "util";
import fetch from "node-fetch";

// const pipeline = promisify(stream.pipeline);
const url =
  "https://github.com/ayushjaipuriyar/resume/releases/latest/download/Ayush_Jaipuriyar_resume.pdf";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await fetch(url); // replace this with your API call & options
    if (!response.ok)
      throw new Error(`unexpected response ${response.statusText}`);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "inline; filename=Ayush_Jaipuriyar_Resume.pdf");
    // await pipeline(response.body, res);
    // return response.body, res;
    // response.body.pipe(res);
    if (response.body) {
      response.body.pipe(res);
    } else {
      throw new Error("Response body is null");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export default handler;
