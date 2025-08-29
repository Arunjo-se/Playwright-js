require("dotenv").config();
const baseURL = process.env.BaseURL;

class login {
  constructor(page) {
    this.page = page; // 'this' keyword refers to the current instance of the class
    this.username = page.getByPlaceholder("Username");
    this.password = page.getByPlaceholder("Password");
    this.loginButton = page.locator("#login-button");
  }

    constructor(page){ // constructor is a special method for creating and initializing an object created within a class.

  async validLogin(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}
module.exports = login;
