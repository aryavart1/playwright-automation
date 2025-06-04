// this.page is dependent on having a BasePage or equivalent constructor logic that initializes this.page.
// You need to import Page from Playwright and optionally extend a BasePage that holds the page: Page instance.

import { Page } from '@playwright/test';
import {
  VisualCompareUtils,
  // AssertUtils,
  // WebActionUtils,
  // WebElementUtils,
  // WebPageUtils,
  // AxeUtils,
  // TableUtils,
  // ScreenshotUtils,
  // ApiUtils,
  // AuthUtils,
  // XrayUtils,
  // JsonUtils,
  // PDFUtils,
  // ExcelUtils,
  // CsvUtils,
  // AppliToolUtils,
  // DateFormatUtils,
} from '../../utilities'
import { globalTestData } from '../../globalSettings';
import FrameWorkUsageListener from '../../logger/FwUsageListenerPageLevel';

export abstract class BasePage {
  protected page: Page;

  protected visualCompareUtils: VisualCompareUtils;
  // protected webElementUtils: WebElementUtils;
  // protected assertUtils: AssertUtils;
  // protected webActionUtils: WebActionUtils;
  // protected webPageUtils: WebPageUtils;
  // protected axeUtils: AxeUtils;
  // protected tableUtils: TableUtils;
  // protected screenshotUtils: ScreenshotUtils;
  // protected authUtils: AuthUtils;
  // protected apiUtils: ApiUtils;
  // protected appliToolUtils: AppliToolUtils;
  // protected jsonUtils: JsonUtils;
  // protected dateFormatUtils: DateFormatUtils;
  // protected xrayUtils: typeof XrayUtils;
  // protected pdfUtils: typeof PDFUtils;
  // protected csvUtils: typeof CsvUtils;
  // protected excelUtils: typeof ExcelUtils;
  protected frameWorkUsageListener: FrameWorkUsageListener;
  protected globalTestData = globalTestData;

  constructor(page: Page) {
    this.page = page;
    
    this.visualCompareUtils = new VisualCompareUtils(page);
    // this.webElementUtils = new WebElementUtils(page);
    // this.assertUtils = new AssertUtils(page);
    // this.webActionUtils = new WebActionUtils(page);
    // this.webPageUtils = new WebPageUtils(page);
    // this.axeUtils = new AxeUtils(page);
    // this.tableUtils = new TableUtils(page);
    // this.screenshotUtils = new ScreenshotUtils(page);
    // this.authUtils = new AuthUtils(page);
    // this.apiUtils = new ApiUtils(page);
    // this.appliToolUtils = new AppliToolUtils(page);
    // this.jsonUtils = new JsonUtils(page);
    // this.dateFormatUtils = new DateFormatUtils();
    // this.xrayUtils = XrayUtils;
    // this.pdfUtils = PDFUtils;
    // this.csvUtils = CsvUtils;
    // this.excelUtils = ExcelUtils;
    this.frameWorkUsageListener = new FrameWorkUsageListener(page);
  }
}
