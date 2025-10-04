import { test, expect } from "@playwright/test";

test("page navigation", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  console.log(await page.title());
  console.log(page.url());

  await page.goto("https://www.google.com/");
  console.log(await page.title());
  console.log(page.url());

  await page.goBack();
  console.log(await page.title());
  console.log(page.url());

  await page.goForward();
  console.log(await page.title());
  console.log(page.url());

  await page.reload();
  console.log(await page.title());
  console.log(page.url());

  
});
