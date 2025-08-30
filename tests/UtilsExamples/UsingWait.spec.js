import { test, expect } from "@playwright/test";
import WaitUtils from "../../utils/waitUtils";

test.describe("SwagLabs Demo - WaitUtils Example", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  });

  test("Login Page should be visible", async ({ page }) => {
    // ✅ Wait for username field to be visible
    await WaitUtils.waitForVisible(page, "#user-name");

    const title = await page.title();
    expect(title).toBe("Swag Labs");
  });

  test("Login Functionality works", async ({ page }) => {
    // ✅ Wait for username field and type
    await WaitUtils.waitForVisible(page, "#user-name");
    await page.fill("#user-name", "standard_user");

    // ✅ Wait for password field and type
    await WaitUtils.waitForVisible(page, "#password");
    await page.fill("#password", "secret_sauce");

    // ✅ Wait for login button to be enabled before clicking
    await WaitUtils.waitForEnabled(page.locator("#login-button"));
    await page.click("#login-button");

    // ✅ Wait until navigation is complete
    await WaitUtils.waitForNavigation(page);

    // ✅ Wait for "Products" title text to appear
    const productsTitle = page.locator(".title");
    await WaitUtils.waitForText(productsTitle, "Products");

    const titleText = await productsTitle.textContent();
    expect(titleText).toBe("Products");
  });
});
