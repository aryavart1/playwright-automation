import { Page } from '@playwright/test';

export declare class VisualCompareUtils {
    protected page: Page;
    constructor(page: Page);
    /**
    * Purpose: Visual comparison for current page with base page
    *
    * Precondition: BaseImage of web page should be exist
    *
    * Post-condition: Comparison between BaseImage and actual image should be done
    *
    * @param BaseImage: Base Image path from data sheet/root dir
    *
    * @returns - [None]
    */

    visualComparision(BaseImage: string): Promise<void>;
}
