// this.page is dependent on having a BasePage or equivalent constructor logic that initializes this.page.
// You need to import Page from Playwright and optionally extend a BasePage that holds the page: Page instance.

import { Locator, Page } from '@playwright/test';

export abstract class BasePage {

    constructor(protected page: Page) {}

    // async waitForElement(selector: string) {
    //     await this.page.waitForSelector(selector);
    // }

    // async click(selector: string) {
    //     await this.page.click(selector);
    // }

    // async fill(selector: string, value: string) {
    //     await this.page.fill(selector, value);
    // }

    // async clickElement(element: Locator) {
    //     await element.click();
    // }
}
