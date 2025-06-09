import { setWorldConstructor } from '@cucumber/cucumber';
import { BddWorld, BddWorldOptions } from 'playwright-bdd';  // npm install playwright-bdd@6.6.0 --save-dev

import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/Dashboard.page';

export class CustomWorld extends BddWorld {
    constructor(public options: BddWorldOptions) {
        super(options);
    }
    
    async init() {
         // This method helps to setup beforeEach function for your scripts
    }

    async destroy() {
         // This method helps to setup afterEach function for your scripts
    }

    // following methods shows how to add your project specific Pages to your Basetest and make it available for stepdef

    get loginPage(): LoginPage {
      return new LoginPage(this.page);
    }

    get dashboardPage(): DashboardPage {
      return new DashboardPage(this.page);
    } 
}