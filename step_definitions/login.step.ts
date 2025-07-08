import {Given, When, Then, setDefaultTimeout} from '@cucumber/cucumber';
import { CustomWorld } from './customWorld';
import LoginData from "../contents/LoginPageData";
setDefaultTimeout(60 * 1000 * 4);

Given('I am on the login page', async function (this: CustomWorld) {
    await this.loginPage.goToLoginPage();
});

When('user provides username and password for {string} to login into application', async function (this: CustomWorld, userKey: string) {
    const normalizedUserKey = userKey.toUpperCase();
    const user = LoginData[normalizedUserKey as keyof typeof LoginData];
    if (!user) {
        throw new Error(`User data for key "${userKey}" not found.`);
    }
    await this.loginPage.login(user);
});

