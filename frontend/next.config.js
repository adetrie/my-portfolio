/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    PORTFOLIO_BACKEND_BASEURL: process.env.PORTFOLIO_BACKEND_BASEURL,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
};