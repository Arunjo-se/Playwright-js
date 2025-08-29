import { allure } from "allure-playwright";

class ReportUtils {
  static step(name, callback) {
    return allure.step(name, callback);
  }

  static addAttachment(name, content, type = "text/plain") {
    allure.attachment(name, content, type);
  }

  static addScreenshot(name, buffer) {
    allure.attachment(name, buffer, "image/png");
  }

  static addJson(name, jsonObj) {
    allure.attachment(name, JSON.stringify(jsonObj, null, 2), "application/json");
  }

  static label(name, value) {
    allure.label(name, value);
  }

  static severity(level) {
    allure.severity(level); // blocker, critical, normal, minor, trivial
  }

  static feature(featureName) {
    allure.feature(featureName);
  }

  static story(storyName) {
    allure.story(storyName);
  }
}

export default ReportUtils;
