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
