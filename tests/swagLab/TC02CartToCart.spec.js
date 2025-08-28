import { test, expect } from "@playwright/test";
import { login } from "../../pages/login";

test.beforeEach(async({page}) => {
    console.log("This will run before each test");  

    const loginPage = new login(page);

    await loginPage.goTo();
    await expect(page).toHaveTitle('Swag Labs'); 
    console.log(await page.title());

    await loginPage.validLogin('standard_user','secret_sauce');


});

test("@sanity has add to cart", async ({ page }) => {
  // keep clicking until no "ADD TO CART" buttons remain
  const addToCart = page.getByRole("button", { name: "ADD TO CART" }); // locator for all "ADD TO CART" buttons

  let count = await addToCart.count(); // initial count
  console.log("Total Add to Cart buttons: " + count); //

  while (count > 0) {
    await addToCart.nth(0).click();  // always click the first available
    count = await addToCart.count(); // re-check after DOM updates

    console.log("Remaining Add to Cart buttons: " + count); //
  }

  // assert cart badge reflects total

  await expect(page.getByRole("link", { name: /\d+/ })).toHaveText(count.toString()); // or expected total
});


