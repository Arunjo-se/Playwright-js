// @ts-check
import { test, expect } from "@playwright/test";

test("@sanity has title", async ({ page }) => {
  test.info().annotations.push({ type: "tag", description: "sanity" });
  // Test to check if the page has the correct title
  await page.goto("https://playwright.dev/"); // Navigate to the Playwright website

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/); // Check if the title contains "Playwright"
});

// test
