/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const withMdx = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withPWA(
  withMdx({
    reactStrictMode: true,
    pwa: {
      dest: "out",
      disable: process.env.NODE_ENV === "development",
      register: true,
    },
    webpack5: true,

    pageExtensions: ["tsx", "mdx", "md"],
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });

      return config;
    },
  })
);
