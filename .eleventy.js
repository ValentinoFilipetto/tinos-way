const { DateTime } = require("luxon");
const eleventyGoogleFonts = require("eleventy-google-fonts");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/style");
  eleventyConfig.addPassthroughCopy("./public/img");
  eleventyConfig.addPlugin(eleventyGoogleFonts);
  eleventyConfig.addPlugin(syntaxHighlight, {
    preAttributes: { tabindex: 0 },
  });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
