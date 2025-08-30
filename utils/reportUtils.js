import { allure } from "allure-playwright";

class ReportUtils {
  /**
   * Allure step wrapper (supports async).
   */
  static async step(name, callback) {
    return await allure.step(name, callback);
  }

  /**
   * Safe step: logs error details if step fails.
   */
  static async safeStep(name, callback) {
    try {
      return await allure.step(name, callback);
    } catch (error) {
      allure.attachment(
        `${name} - error`,
        error.stack || error.message,
        "text/plain"
      );
      throw error;
    }
  }

  /**
   * Attach plain text, logs, or other string content.
   */
  static addAttachment(name, content, type = "text/plain") {
    allure.attachment(name, content, type);
  }

  /**
   * Attach a screenshot buffer.
   */
  static addScreenshot(name, buffer) {
    allure.attachment(name, buffer, "image/png");
  }

  /**
   * Capture screenshot from Playwright `page` directly.
   */
  static async addPageScreenshot(page, name = "screenshot") {
    const buffer = await page.screenshot();
    allure.attachment(name, buffer, "image/png");
  }

  /**
   * Attach JSON object.
   */
  static addJson(name, jsonObj) {
    allure.attachment(
      name,
      JSON.stringify(jsonObj, null, 2),
      "application/json"
    );
  }

  /**
   * Add label (custom metadata).
   */
  static label(name, value) {
    allure.label(name, value);
  }

  /**
   * Set severity level.
   * Levels: blocker, critical, normal, minor, trivial
   */
  static severity(level) {
    allure.severity(level);
  }

  /**
   * Link test to feature.
   */
  static feature(featureName) {
    allure.feature(featureName);
  }

  /**
   * Link test to story.
   */
  static story(storyName) {
    allure.story(storyName);
  }

  /**
   * Add environment/parameter info.
   */
  static addEnvironment(name, value) {
    allure.parameter(name, value);
  }
}

export default ReportUtils;
