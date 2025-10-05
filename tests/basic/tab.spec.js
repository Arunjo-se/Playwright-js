import { test, expect } from "@playwright/test";

test("Tab Handling", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  console.log(await page.title());

  //open new tab
  const [newTab] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator("#opentab").click(),
  ]);

  console.log(await newTab.title());
  await newTab.waitForLoadState();
  await newTab.locator("//a[text()='Access all our Courses']").click();
  await newTab.waitForTimeout(3000);
  await newTab.close();

  //back to parent tab
  console.log(await page.title());
  await page.waitForTimeout(3000);
});
test("2nd method of Tab Handling", async ({ browser }) => {
  // Create a new browser context and page
  const context = await browser.newContext();
  const page = await context.newPage();

  // Step 1: Open main page
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  console.log("Main page title:", await page.title());

  // Step 2: Click the link that opens a new tab
  const pagesBefore = context.pages();
  await page.locator("#opentab").click();

  // Step 3: Wait for new tab to appear
  await context.waitForEvent("page"); // ensures tab is created

  // Step 4: Get the new tab reference
  const allPages = context.pages();
  const newTab = allPages.find((p) => !pagesBefore.includes(p)) || allPages[1];

  // Step 5: Wait until it loads
  await newTab.waitForLoadState("domcontentloaded");
  console.log("2New tab title:", await newTab.title());

  // Step 6: Perform actions in the new tab
  await newTab.locator("//a[text()='Access all our Courses']").click();

  // Step 7: Wait briefly and close tab
  await newTab.waitForTimeout(3000);
  await newTab.close();
});
