import {LoginPage} from '../pages/LoginPage';
import {DashboardPage} from '../pages/Dashboard.page';
import {Page} from 'playwright';

export class Pages {
  readonly loginPage: LoginPage;
  readonly dashboardPage: DashboardPage;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
    this.dashboardPage = new DashboardPage(page);
  }
}
