import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

// test('open a new tab in same context', async ({ context }) => {
//   const page1 = await context.newPage(); // First tab
//   await page1.goto('https://www.chess.com/home');
//   await page1.waitForTimeout(4000);

//   const page2 = await context.newPage(); // Second tab (new tab in same browser context)
//   await page2.goto('https://playwright.dev');

//   // You can interact with both tabs independently
//   await page1.click('text=More information');
//   await page2.click('text=Docs');
//   await page2.waitForTimeout(10000); // Wait for 5 seconds to observe the actions
// });


test('open extra tab using only page fixture', async ({ page }) => {
  // current tab
  await page.goto('https://www.chess.com/home');

  // duplicate / second tab in the *same* context
  const tab2 = await page.context().newPage();
  await tab2.goto('https://playwright.dev');

  // both pages share cookies, localStorage, etc.
  await page.click('text=Sign in');
  await tab2.click('text=Docs');
});
