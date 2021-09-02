/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";
module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "out",
    disable: process.env.NODE_ENV === "development",
    register: true,
  },
});
