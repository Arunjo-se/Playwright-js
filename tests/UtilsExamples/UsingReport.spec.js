import { test } from "@playwright/test";
import ReportUtils from "../../utils/reportUtils";



test.describe("SwagLab Demo", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  });

  test("Login Page Title Test", async ({ page }) => {
    // 🔹 Set severity
    ReportUtils.severity("critical");

    await ReportUtils.step("Verify Login Page Title", async () => {
      const title = await page.title();
      console.log("Login Page Title:", title);

      // Capture screenshot
      await ReportUtils.addPageScreenshot(page, "Login Page Title");

      if (title !== "Swag Labs") {
        throw new Error(`Expected title to be 'Swag Labs' but got '${title}'`);
      }
    });
  });

  test("Login Functionality Test", async ({ page }) => {
    // 🔹 Set higher severity
    ReportUtils.severity("blocker");

    await ReportUtils.step("Perform Login", async () => {
      await page.fill("#user-name", "standard_user");
      await page.fill("#password", "secret_sauce");
      await page.click("#login-button");

      // Capture screenshot after login
      await ReportUtils.addPageScreenshot(page, "After Login");

      const productsTitle = await page.textContent(".title");
      if (productsTitle !== "Products") {
        throw new Error("Login failed or Products page not loaded.");
      }
    });
  });
});
