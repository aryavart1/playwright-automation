/** Generated from: features\Login.feature */
import { test } from "playwright-bdd";

test.describe("As a Customer", () => {

  test.describe("Login to Orange HRM application with users @Smoke", () => {

    test("Login to Orange HRM application with user- admin", async ({ Given, When, Then }) => {
      await Given("user launches the Orange HRM application site");
      await When("user provides \"admin\" and \"Playwright\" to login into application");
      await Then("user click Logout button");
    });

    test("Login to Orange HRM application with user- Admin", async ({ Given, When, Then }) => {
      await Given("user launches the Orange HRM application site");
      await When("user provides \"Admin\" and \"Bitnami.12345\" to login into application");
      await Then("user click Logout button");
    });

  });

  test("Navigate to PIM page @Regression", async ({ Given, When, Then }) => {
    await Given("user launches the Orange HRM application site");
    await When("user provides \"Admin\" and \"Bitnami.12345\" to login into application");
    await When("user should able to navigate to PIM page");
    await Then("user click Logout button");
  });

  test("Axe scan on Login Page", async ({ Given, When }) => {
    await Given("user launches the Orange HRM application site");
    await When("user checks accessibility check on the page");
  });

  test("Axe scan on dashboard Page", async ({ Given, When, Then }) => {
    await Given("user launches the Orange HRM application site");
    await When("user provides \"Admin\" and \"Bitnami.12345\" to login into application");
    await When("user checks accessibility check on the page");
    await Then("user click Logout button");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("features\\Login.feature"),
  $bddWorldFixtures: ({ page, context, browser, browserName, request }, use) => use({ page, context, browser, browserName, request }),
});

const testMetaMap = {
  "Login to Orange HRM application with users @Smoke|Login to Orange HRM application with user- admin": {"pickleLocation":"14:5"},
  "Login to Orange HRM application with users @Smoke|Login to Orange HRM application with user- Admin": {"pickleLocation":"15:5"},
  "Navigate to PIM page @Regression": {"pickleLocation":"18:3"},
  "Axe scan on Login Page": {"pickleLocation":"25:3"},
  "Axe scan on dashboard Page": {"pickleLocation":"30:3"},
};