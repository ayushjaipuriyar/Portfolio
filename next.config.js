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
