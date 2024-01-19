const {defineConfig} = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    baseUrl: "https://www.cypress.io/",
    excludeSpecPattern: ["**/1-getting-started", "**/2-advanced-examples"],
    specPattern: ["cypress/e2e/**/*.{js,jsx,ts,tsx}"],
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/report/mocha",
      overwrite: false,
      html: false,
      json: true,
      autoOpen: true,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
  },
});
