import { test, expect } from "@playwright/test";

test.skip("to be visible and hidden", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  await expect(page.getByPlaceholder("Hide/Show Example")).toBeVisible();

  await page.getByRole("button", { name: "Hide" }).click();
  await expect(page.getByPlaceholder("Hide/Show Example")).toBeHidden();

  await page.waitForTimeout(3000);

  await page.getByRole("button", { name: "Show" }).click();
  await page.waitForTimeout(3000);

  console.log("Show button clicked");

  await expect(page.getByPlaceholder("Hide/Show Example")).toBeVisible();
});

test("to handle alert and confirm popups", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  // Handle alert popup
  page.on("dialog", (dialog) => {
    // Handle alert popup
    console.log(dialog.type());
    console.log(dialog.message());
    dialog.accept();
  });
  await page.getByRole("button", { name: "Alert" }).click();

  page.on("dialog", (dialog) => {
    // Handle confirm popup
    console.log(dialog.type());
    console.log(dialog.message());
    dialog.dismiss();
    //dialog.accept();
  });
  await page.getByRole("button", { name: "Confirm" }).click();

  page.on("dialog", (dialog) => { // prompt()
    // Handle prompt popup
    console.log(dialog.type());
    console.log(dialog.message());
    dialog.accept("8157831453"); // input text in prompt popup
    //dialog.dismiss();
  });
  await page.getByRole("button", { name: "Prompt" }).click();
});
