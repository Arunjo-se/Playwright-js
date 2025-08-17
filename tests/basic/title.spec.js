import { test, expect } from "@playwright/test";

test("Get title ", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("OrangeHRM");

  const title = await page.title(); // Get the title of the page
  console.log(`The title of the page is: ${title}`); // Log the title to the console
});
