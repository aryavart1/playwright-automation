import {Page, test, expect} from "@playwright/test";
// import { BasePage } from "@qecoe/playwright_automation";
import { BasePage } from '../pages/BasePage';
import fs from 'fs';


export class LoginPage extends BasePage{
    
    // Variables
    public title: string | undefined;

    constructor(page: Page) {
      super(page);
    }

    // userNameInput = this.page.locator('#txtUsername')
    // passwordInput = this.page.locator('#txtPassword');
    // loginBtn = this.page.getByRole('button', { name: 'LOGIN' });
    // invalidCredentialsErrorMessage = this.page.getByText('Invalid credenfials');

    //Locators
    private readonly usernameInput = this.page.locator('[name="username"]');
    private readonly passwordInput = this.page.locator('[name="password"]');
    private readonly loginButton = this.page.locator('button[type="submit"]');
    private readonly loginHeader = this.page.locator('h5:has-text("Login")');

    private readonly dashboardHeader = this.page.locator('.oxd-topbar-header-breadcrumb');



    public async goToLoginPage() {
        console.log("test")
    }

    // public async login(user: {username: string, password: string, LoginPageURL: string}) {

    //     await this.page.goto(user.LoginPageURL)
    //     this.title = await this.page.title(); 
    //     console.log(this.title);


    //     // Wait for login form to be ready
    //     await this.page.waitForSelector(this.usernameInput, { state: 'visible' });
    //     await this.page.waitForSelector(this.passwordInput, { state: 'visible' });

    //     // Clear and fill the inputs
    //     await this.page.fill(this.usernameInput, '');
    //     await this.page.fill(this.passwordInput, '');
    //     await this.page.fill(this.usernameInput, user.username);
    //     await this.page.fill(this.passwordInput, user.password);

    //     // Click login and wait for navigation
    //     await this.page.click(this.loginButton);

    //     // Wait for dashboard to load after login
    //     await this.page.waitForSelector(this.dashboardHeader, { 
    //         state: 'visible',
    //         timeout: 30000 
    //     });
    // }

    // async isLoginPageVisible() {
    //     return await this.page.isVisible(this.usernameInput);
    // }


    public async login(user: { username: string; password: string; storageFile: string; LoginPageURL: string }){ 
        const storagePath = user.storageFile;
    
        if (fs.existsSync(storagePath)) {
            const storageState = JSON.parse(fs.readFileSync(storagePath, 'utf-8'));
            if (storageState.cookies && Array.isArray(storageState.cookies)) {
                await this.page.context().addCookies(storageState.cookies);
                await this.page.goto(user.LoginPageURL);
                console.log(`Cookies available` );
                return;
            } else {
                console.log(`Cookies unavailable for $(user.username). Proceeding with fresh login.` );
            }
        }
        try {
                await this.page.goto(user.LoginPageURL);
                await this.page.waitForTimeout(4000);
                // await this.page.waitForSelector('#i0116', { state: "visible", timeout: 10000 ));
            
                if (await this.loginHeader.isVisible()){
                    await this.page.waitForTimeout(4000);
                    await this.usernameInput.fill(user.username);
                    await this.page.waitForTimeout(4000);
                    await this.passwordInput.fill(user.password);
                    await this.loginButton.click();

                    await this.page.context().storageState({ path: user.storageFile });
                    console.log(`Login Session Saved for ${user.username}`);
                }  else {
                        console.log("Login Skipped");
                } 
            }  catch (error) {
                    console.log("Username field didnt appear within timeout");
                }
    }

    public async VerifyingSuccessfulLogin() {
        console.log("Logged in successfully");
    };
}




