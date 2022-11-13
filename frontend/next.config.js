/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    PORTFOLIO_BACKEND_BASEURL: process.env.PORTFOLIO_BACKEND_BASEURL,
  },
};
