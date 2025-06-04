import { Page, expect } from "@playwright/test";
import { BasePage } from "@qecoe/playwright_automation";

export class DashboardPage extends BasePage{

    constructor(page: Page){
      super(page);
    }

    welcomeMessage = this.page.getByRole('link', { name: 'Welcome Admin' });
    logoutLink = this.page.getByRole('link', { name: 'Logout' });
    pimMenu = this.page.getByRole("link", { name: "PIM" });
    dashboardHeading = this.page.getByRole('heading', { name: 'Dashboard' });

    public async logout(){
        await this.welcomeMessage.click();
        await this.logoutLink.click();
    }I

    public async navigateToPimMenu() {
        await this.pimMenu.click();
    }


    public async confirmPage() {
      await expect(this.welcomeMessage).toContainText('Welcome');
    }

}