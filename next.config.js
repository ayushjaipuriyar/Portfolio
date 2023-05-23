/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
module.exports = {
  env: {
    GITHUB_ACCESS_TOKEN:
      "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",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        port: "",
      },
    ],
  },
};
