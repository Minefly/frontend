const PostcssConfig = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // Support for nested variables
    "postcss-nested": {},
    // Support for next css features
    "postcss-preset-env": {},
    // Modifying svgs from css
    "postcss-inline-svg": {},
  },
};

if (process.env.NODE_ENV == "production") {
  PostcssConfig.plugins.cssnano = {};
}
module.exports = PostcssConfig;
