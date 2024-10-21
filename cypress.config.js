const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://start.duckduckgo.com/',
    env: {
    },
    retries: {
      runMode: 1,
      openMode: 1
    }
  },
});
