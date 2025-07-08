/** Generated from: features\Login.feature */
import { test } from "playwright-bdd";

test.describe("Login", () => {

  test("Successful login", async ({ Given, When }) => {
    await Given("I am on the login page");
    await When("user provides username and password for \"User1\" to login into application");
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
  "Successful login": {"pickleLocation":"3:3"},
};