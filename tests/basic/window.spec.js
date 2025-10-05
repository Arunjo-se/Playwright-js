import { test, expect } from "@playwright/test";

test("window handling", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  console.log(await page.title());

  //open new window
  const [newWindow] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator("#openwindow").click(),
  ]);

  console.log(await newWindow.title());
  await newWindow.waitForLoadState();
  await newWindow.locator("//a[text()='Access all our Courses']").click();
  await newWindow.waitForTimeout(3000);
  await newWindow.close();

  //back to parent window
  console.log(await page.title());
  await page.waitForTimeout(3000);
});
