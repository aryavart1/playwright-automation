import { test, expect } from '@playwright/test';
import { getEnvVar } from '../utilities/env';



// PW job
// const {test} = require('@playwright/test')


// test("OrangeHRM application validate login", async({browser}) =>
// {
//  const newInstance = await browser.newContext();
//  const newPage = await newInstance.newPage();

//  newPage.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


// }
// )


// console.log(">>>> FILE LOADED <<<<");



test("Page_OrangeHRM application validate login", async({page}) =>
{ 
  await page.goto(getEnvVar('UI_URL'))
  let title = await(page.title())
  console.log(title)
  console.log("test")
  await expect(page).toHaveTitle("OrangeHRM")


}
)
// test("Page_OrangeHRM application validate login", async ({ page }) => {
//   console.log(">>>> TEST STARTED <<<<");

//   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

//   const title = await page.title();
//   console.log("Page title is:", title);

//   await expect(page).toHaveTitle("OrangeHRM");
// });
