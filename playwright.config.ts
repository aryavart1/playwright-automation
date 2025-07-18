import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';
dotenv.config();

// BDD-specific configuration
const bddConfig = defineBddConfig({
  paths: ['src/features/**/*.feature'],
  require: ['src/step_definitions/**/*.{ts,js}'], 
  // paths: ['features/**/*.feature'],
  // require: ['step_definitions/**/*.{ts,js}'], 
  // requireModule: ['ts-node/register'], // Needed for TypeScript support
});

export default defineConfig({
  //...bddConfig, // Spread BDD config here

  // This testDir will be overridden by bddConfig.testDir
  // But leaving it here doesn't hurt in case you use @playwright/test elsewhere
  testDir: '.features-gen',

  // testDir: './tests',

  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["html"], ["allure-playwright"]],

  use: {
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        trace: 'off',
        headless: false,
        screenshot: 'on',
        video: 'on',
      },
    },
  ],
});
