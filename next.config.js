const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});

module.exports = withMDX({
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
  poweredByHeader: false,
  env: {
    "HCAPTCHA.SITEKEY": "e50876fc-880d-4446-ad56-c6cbf293a84e",
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
});
