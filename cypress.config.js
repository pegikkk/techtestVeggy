const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 390,
  viewportHeight: 844,
})

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:
      'https://ordering-qa-retail.proseller-demo.com/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
});
