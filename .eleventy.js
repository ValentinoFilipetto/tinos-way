const { DateTime } = require("luxon");
const eleventyGoogleFonts = require("eleventy-google-fonts");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (config) {
  config.addPassthroughCopy("./src/style.css");
  config.addPassthroughCopy("./src/style");
  config.addPassthroughCopy("./public/img");
  config.addPlugin(eleventyGoogleFonts);
  config.addPlugin(syntaxHighlight);

  config.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
