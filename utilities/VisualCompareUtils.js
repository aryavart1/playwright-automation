"use strict";
Object.defineProperty(exports, "_esModule", { value: true });
exports.VisualCompareUtils = void 0;
const test_1 = require("@playwright/test");
class VisualCompareUtils {
    page;
    constructor(page) {
      this.page = page;
      this.page = page;
    }

    /** Purpose: Visual comparison for current page with base page
    *
    * Precondition: BaseImage of web page should be exist
    *
    *  Post-condition: Comparison between BaseImage and actual image should be done
    *
    * @param BaseImage: Base Image path from data sheet/root dir
    *
    * @returns - [None]
    */

    async visualComparision(BaseImage) {
    await (0, test_1.expect)(this.page).toHaveScreenshot(BaseImage);
    }
}

exports.VisualCompareUtils = VisualCompareUtils;