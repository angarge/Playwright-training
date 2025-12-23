// @ts-check
import { defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config= defineConfig({
  testDir: './tests',
  timeout:40000,
  use: {
    connectOptions: {
      wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
        JSON.stringify({
          browserName: 'Chrome',
          browserVersion: 'latest',
          'LT:Options': {
            platform: 'macOS Catalina',
            build: 'Playwright chrome LambdaTest Build',
            name: 'LambaTest Certification chrome',
            user: "angargedeloitte",
            accessKey: "LT_L0m9qIDOlVDvUck0RlUCHEvzEwNYBUKBdLI2gbrnItzRCQq",
            network: true,
            video: true,
            console: true,
          },
        })
      )}`,
    },
  },
});

module.exports=config

/* 

// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 60000,
  retries: 0,

  use: {
    connectOptions: {
      wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
        JSON.stringify({
          browserName: 'Chrome',
          browserVersion: 'latest',
          'LT:Options': {
            platform: 'Windows 11',
            build: 'Playwright LambdaTest Build',
            name: 'Sample Playwright Test',
            user: process.env.LT_USERNAME,
            accessKey: process.env.LT_ACCESS_KEY,
            network: true,
            video: true,
            console: true,
          },
        })
      )}`,
    },
  },

  projects: [
    {
      name: 'LambdaTest Chromium',
      use: { browserName: 'chromium' },
    },
  ],
});

Get Outlook for Android

*/


// ME

// DA-WIN-2942924-1766491655734626438YGK - scenario 2
// DA-WIN-2942924-1766491655622738982TXM - scenario 3
// DA-WIN-2942924-1766491655519080053FDU - scenario 1

// chrome 
// DA-WIN-2942924-1766491117359581361NZZ - scenario 2 
// DA-WIN-2942924-1766491115443927901IVS - scenario 1
// DA-WIN-2942924-1766490412356116033GIV- scenario 3
