/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";
module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "out",
    disable: process.env.NODE_ENV === "development",
    register: true,
  },
  future: {
    webpack5: true,
  },
  pageExtensions: ["tsx", "mdx"],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
});
