require("dotenv").config();
const baseURL = process.env.BaseURL;

class login {
  constructor(page) {
    this.page = page; // 'this' keyword refers to the current instance of the class
    this.username = page.getByPlaceholder("Username");
    this.password = page.getByPlaceholder("Password");
    this.loginButton = page.locator("#login-button");
  }

  async goTo() {
    await this.page.goto(baseURL);
  }

  async validLogin(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}
export default {login};
