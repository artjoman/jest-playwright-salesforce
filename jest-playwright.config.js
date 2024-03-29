module.exports = {
    launchOptions: {
      headless: false
    },
    contextOptions: {
      ignoreHTTPSErrors: true,
      viewport: {
        width: 1920,
        height: 1080
      }
    },
    browsers: ["chromium", "firefox"],
    devices: []
  }