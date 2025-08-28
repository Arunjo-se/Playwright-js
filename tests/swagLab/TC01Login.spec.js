// @ts-check
import { test, expect } from "@playwright/test";
import { login } from "../../pages/login";

const loginData = require('../../data/loginPasswordData.json')



test("@sanity has login", async ({ page }) => {

const loginPage = new login(page);

await loginPage.goTo();
await expect(page).toHaveTitle('Swag Labs'); 
console.log(await page.title());

await loginPage.validLogin('standard_user',loginData.password);



});