module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");

  // ✅ Collection des fichiers Markdown
  eleventyConfig.addCollection("marques", function (collection) {
    return collection.getFilteredByGlob("./content/*.md");
  });

  // ✅ Ajout du pathPrefix pour GitHub Pages
  return {
    pathPrefix: "/tusavais-org/",
    dir: {
      input: ".",
      includes: "templates",
      data: "data",
      output: "_site"
    },
    markdownTemplateEngine: "njk"
  };
};
