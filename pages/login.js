import dotenv from "dotenv";
import WaitUtils from "../utils/waitUtils.js";

dotenv.config();
const baseURL = process.env.BaseURL;

export default class Login {
  constructor(page) {
    this.page = page;
    this.username = page.getByPlaceholder("Username");
    this.password = page.getByPlaceholder("Password");
    this.loginButton = page.locator("#login-button");
  }

  async goTo() {
    await this.page.goto(baseURL);
  }

  async validLogin(username, password) {
    await WaitUtils.waitForVisible(this.page, "#user-name"); // wait for username field, from waitUtils
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}
