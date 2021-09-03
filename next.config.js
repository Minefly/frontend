/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";
import mdx from "@next/mdx";

const withMdx = mdx({
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
    future: {
      webpack5: true,
    },
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
