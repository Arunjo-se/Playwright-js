import { test, expect } from "@playwright/test";

test("iframe handling", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  //scroll
  await page
    .locator("//fieldset//legend[text()='iFrame Example']")
    .scrollIntoViewIfNeeded();

  await page.waitForTimeout(3000);

  const frameHandle = page.frameLocator("#courses-iframe");
  await frameHandle.locator("//a[text()='Login']").click();

  await page.waitForTimeout(3000);
});
