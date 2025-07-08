import {Page, test, expect} from "@playwright/test";
// import { BasePage } from "@qecoe/playwright_automation";
import { BasePage } from '../pages/BasePage';
import LoginData from "../contents/LoginPageData";
import { getEnvVar } from '../utilities/env';

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
    private readonly usernameInput = '[name="username"]';
    private readonly passwordInput = '[name="password"]';
    private readonly loginButton = 'button[type="submit"]';
    private readonly dashboardHeader = '.oxd-topbar-header-breadcrumb';



    public async goToLoginPage() {

        //Navigating to login page 
        
        console.log("test")
    }

    public async login(user: {username: string, password: string, LoginPageURL: string}) {

        await this.page.goto(user.LoginPageURL)
        this.title = await this.page.title(); 
        console.log(this.title);


        // Wait for login form to be ready
        await this.page.waitForSelector(this.usernameInput, { state: 'visible' });
        await this.page.waitForSelector(this.passwordInput, { state: 'visible' });

        // Clear and fill the inputs
        await this.page.fill(this.usernameInput, '');
        await this.page.fill(this.passwordInput, '');
        await this.page.fill(this.usernameInput, user.username);
        await this.page.fill(this.passwordInput, user.password);

        // Click login and wait for navigation
        await this.page.click(this.loginButton);

        // Wait for dashboard to load after login
        await this.page.waitForSelector(this.dashboardHeader, { 
            state: 'visible',
            timeout: 30000 
        });
    }

    async isLoginPageVisible() {
        return await this.page.isVisible(this.usernameInput);
    }
}

