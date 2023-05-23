/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
module.exports = {
  env:{
    GITHUB_ACCESS_TOKEN:'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'
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
