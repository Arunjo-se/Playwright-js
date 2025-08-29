const { existsSync, mkdirSync } = require("fs");
const { join } = require("path");

/**
 * Utility functions for handling screenshots in Playwright.
 */
class ScreenshotUtils {
  /**
   * Ensures the directory exists, creates it if missing.
   * @param {string} dirPath
   */
  static ensureDir(dirPath) {
    if (!existsSync(dirPath)) {
      mkdirSync(dirPath, { recursive: true });
    }
  }

  /**
   * Generates a timestamp string for filenames.
   * @returns {string}
   */
  static timestamp() {
    return new Date().toISOString().replace(/[:.]/g, "-");
  }

  /**
   * Capture a screenshot of the whole page.
   * @param {import('@playwright/test').Page} page - Playwright page instance.
   * @param {string} testName - The name of the test for filename.
   * @param {string} dir - Directory to save the screenshot.
   */
  static async takePageScreenshot(page, testName = "screenshot", dir = "screenshots") {
    this.ensureDir(dir);
    const filePath = join(dir, `${testName}_${this.timestamp()}.png`);
    await page.screenshot({ path: filePath, fullPage: true });
    console.log(`📸 Screenshot saved: ${filePath}`);
    return filePath;
  }

  /**
   * Capture a screenshot of a specific element/locator.
   * @param {import('@playwright/test').Locator} locator - Playwright locator.
   * @param {string} elementName - Name for the file.
   * @param {string} dir - Directory to save the screenshot.
   */
  static async takeElementScreenshot(locator, elementName = "element", dir = "screenshots") {
    this.ensureDir(dir);
    const filePath = join(dir, `${elementName}_${this.timestamp()}.png`);
    await locator.screenshot({ path: filePath });
    console.log(`📸 Element screenshot saved: ${filePath}`);
    return filePath;
  }
}

module.exports = ScreenshotUtils;
