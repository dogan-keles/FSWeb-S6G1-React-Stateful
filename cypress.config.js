const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 800,
  viewportHeight: 1200,

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:1234",
  },
});
