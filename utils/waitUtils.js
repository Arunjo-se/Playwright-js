/**
 * Utility functions for smart waiting in Playwright.
 * Avoids hard-coded page.waitForTimeout().
 */
import { expect } from "@playwright/test";

class WaitUtils {
  /**
   * Wait for an element to be visible on the page.
   * @param {import('@playwright/test').Page} page
   * @param {string} selector
   * @param {number} timeout
   */
  static async waitForVisible(page, selector, timeout = 5000) {
    await page.waitForSelector(selector, { state: "visible", timeout });
  }

  /**
   * Wait for an element to be hidden.
   * @param {import('@playwright/test').Page} page
   * @param {string} selector
   * @param {number} timeout
   */
  static async waitForHidden(page, selector, timeout = 5000) {
    await page.waitForSelector(selector, { state: "hidden", timeout });
  }

  /**
   * Wait for an element to be enabled (interactable).
   * @param {import('@playwright/test').Locator} locator
   * @param {number} timeout
   */
  static async waitForEnabled(locator, timeout = 5000) {
    await locator.waitFor({ state: "visible", timeout }); // ensure it's visible
    await expect(locator).toBeEnabled({ timeout }); // ensure it's enabled
  }

  /**
   * Wait for navigation to complete (page fully loaded).
   * @param {import('@playwright/test').Page} page
   * @param {number} timeout
   */
  static async waitForNavigation(page, timeout = 10000) {
    await page.waitForLoadState("domcontentloaded", { timeout });
    await page.waitForLoadState("networkidle", { timeout });
  }

  /**
   * Wait until text appears inside an element.
   * @param {import('@playwright/test').Locator} locator
   * @param {string|RegExp} text
   * @param {number} timeout
   */
  static async waitForText(locator, text, timeout = 5000) {
    await locator.page().waitForFunction(
      (el, value) => {
        const content = el?.innerText || "";
        return typeof value === "string"
          ? content.includes(value)
          : value.test(content);
      },
      await locator.elementHandle(),
      text,
      { timeout }
    );
  }

  /**
   * Hard wait (last resort, should be avoided).
   * @param {number} ms
   */
  static async sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

export default WaitUtils;
