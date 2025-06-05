import {Page, test, expect} from "@playwright/test";
// import { BasePage } from "@qecoe/playwright_automation";
import {BasePage} from "./BasePage"
import LoginContent from "../contents/LoginPageContents";
import { getEnvVar } from '../utilities/env';

export class LoginPage extends BasePage{

    constructor(page: Page) {
      super(page);
    }

    userNameInput = this.page.locator('#txtUsername')
    passwordInput = this.page.locator('#txtPassword');
    loginBtn = this.page.getByRole('button', { name: 'LOGIN' });
    invalidCredentialsErrorMessage = this.page.getByText('Invalid credenfials');

    public async verifyLoginPage() {
      await this.page.goto(getEnvVar('UI_URL'));
      await expect(this.page).toHaveTitle("OrangeHRM");
    }

    /**
    *
    * @param username
    * @param password
    */

    public async login(username: string, password: string) {
        await test.step(`Login to Orange HRM application credentials as ${username} & ${password}`, async() => {
          await expect(this.page).toHaveTitle('OrangeHRM');
          await this.userNameInput.fill(username);
          await this.passwordInput.fill(password);
          await this.loginBtn.click();
        });
    }

    public async visualCompare(BaseImage: string){
      await test.step(`Comparing Login page with Base Image` , async ()=>{
        await this.visualCompareUtils.visualComparision(BaseImage);
      });
    }

//     public async AxeScan(){
//       await test.step(`Accessibility scan on Login Page` , async ()=>{
//         await this.axeUtils.checkAccessibilityViolationsWithTags([], "Login Page", "Orange HRM Project");
//       });
//     }
}

