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
