// @ts-check
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  // Test to check if the page has the correct title
  await page.goto("https://playwright.dev/"); // Navigate to the Playwright website

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/); // Check if the title contains "Playwright"
});

// testinggg
// 1. abcc
