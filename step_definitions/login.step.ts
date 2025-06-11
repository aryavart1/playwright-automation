import {Given, When, Then, setDefaultTimeout} from '@cucumber/cucumber';
import { CustomWorld } from './customWorld';
setDefaultTimeout(60 * 1000 * 4);

Given('user launches the Orange HRM application site', async function (this: CustomWorld) {
    await this.loginPage.verifyLoginPage();
});

When('user provides {string} and {string} to login into application', async function (this: CustomWorld, UserName: string, Password: string) {
await this.loginPage.login(UserName, Password);
});

When('user checks accessibility check on the page', async function(this: CustomWorld){
await this. loginPage.AxeScan();
});

Then('user click Logout button', async function () {
console.log("Logout user ..! ")
});

When('user should able to navigate to PIM page', async function (this: CustomWorld) {
await this.dashboardPage.navigateToPimMenu();
});