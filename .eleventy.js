module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");

  // 👇 Cela permet à Eleventy de traiter les fichiers Markdown dans /content/
  eleventyConfig.addCollection("articles", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./content/*.md");
  });

  return {
    dir: {
      input: ".",
      includes: "templates",
      data: "data",
      output: "_site"
    },
    markdownTemplateEngine: "njk"
  };
};