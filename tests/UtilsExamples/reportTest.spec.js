import { test, expect } from "@playwright/test";
import ReportUtils from "../../utils/reportUtils.js";
import ScreenshotUtils from "../../utils/screenshotUtils.js";

test("@sanity Add to cart", async ({ page }) => {
  await ReportUtils.step("Open Swag Labs", async () => {
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
  });

  await ReportUtils.step("Login as standard_user", async () => {
    await page.fill("#user-name", "standard_user");
    await page.fill("#password", "secret_sauce");
    await page.click("#login-button");

    const screenshot = await page.screenshot();
    ReportUtils.addScreenshot("LoginPage", screenshot);
  });

  await ReportUtils.step("Add items to cart", async () => {
    const addToCart = page.getByRole("button", { name: "ADD TO CART" });
    const total = await addToCart.count();

    ReportUtils.addAttachment("Total items found", total.toString());

    await addToCart.nth(0).click();

    const cartCount = await page.locator(".shopping_cart_badge").innerText();
    ReportUtils.addAttachment("Cart Count", cartCount);
  });

  ReportUtils.label("component", "Cart");
  ReportUtils.severity("critical");
});
