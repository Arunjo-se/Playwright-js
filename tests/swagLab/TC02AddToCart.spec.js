import { test, expect } from "@playwright/test";
import Login from "../../pages/login.js";
import ScreenshotUtils from "../../utils/screenshotUtils.js";
import Logger from "../../utils/logger.js";

test.beforeEach(async ({ page }) => {
  console.log("This will run before each test");

  const loginPage = new Login(page);

  await loginPage.goTo();
  Logger.info("Navigated to login page"); // -- Log navigation
  await expect(page).toHaveTitle("Swag Labs");
  Logger.info("Page title verified");
  console.log(await page.title());

  await loginPage.validLogin("standard_user", "secret_sauce");
});

test("@sanity has add to cart", async ({ page }) => {
  const addToCart = page.getByRole("button", { name: "ADD TO CART" });

  let totalItems = await addToCart.count();
  console.log("Total Add to Cart buttons: " + totalItems);

  let count = totalItems;
  while (count > 0) {
    await addToCart.nth(0).click(); // always click the first available
    count = await addToCart.count(); // re-check after DOM updates
    Logger.info(`Clicked an Add to Cart button, ${count} remaining`);
    // check cart icon
    const addBikeLightBtn = page.locator('svg[data-icon="shopping-cart"]');
    await expect(addBikeLightBtn).toBeVisible();

    // element screenshot
    await ScreenshotUtils.takeElementScreenshot(addBikeLightBtn, "bike-light-add"); // -- Screenshot after each add

    console.log("Remaining Add to Cart buttons: " + count);
  }

  // full page screenshot
  await ScreenshotUtils.takePageScreenshot(page, "homepage"); // -- full page screenshot after all adds

  // assert cart badge reflects total
  await expect(page.getByRole("link", { name: /\d+/ })).toHaveText(totalItems.toString());
});

// 