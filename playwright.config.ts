import { defineConfig, devices } from '@playwright/test';

require('dotenv').config();

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 'html',
  reporter: [
    ['list'],
    ['./reporter/CustomReporter.ts'],
    ['html', {'open': 'never'}],
    ["allure-playwright"]
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: process.env.BASE_URL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  // projects: [
  //   // {
  //   //   name: 'chromium',
  //   //   use: { ...devices['Desktop Chrome'] },
  //   // },
  // ],
});
