const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    viewportWidth: 1280,
    viewportHeight: 720,
    testIsolation: true,
    env: {
    },
    retries: {
      runMode: 1,
      openMode: 1
    }
  },
});
