const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 20000,
  fullyParallel: true,
  forbidOnly: false,
  retries: process.env.CI ? 2 : 0,
  reporter: [['html']
],

  // Use the HTML reporter
  use: {
    headless : false,
    trace: 'on', // Enable trace for debugging
    screenshot: 'only-on-failure', // Take screenshots only on test failure
    video: 'on',
    contextOptions: {recordVideo: { dir: "videos/"}} // Record video for all tests
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
       
        viewport: {width : 720 , height: 720}

       },
    },
  ],
});