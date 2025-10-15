import { test, expect } from "@playwright/test";

test("Tab Handling", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  console.log(await page.title());

  // to check the dropdown options
  await page.locator("#dropdown-class-example").selectOption("option2");
  await page.waitForTimeout(3000);
});
