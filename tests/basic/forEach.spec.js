// @ts-check
import { test, expect } from "@playwright/test";

test("DropDown test", async ({ page }) => {

    // Dummy test to demonstrate forEach, 
  const states = ["kl", "tn", "ka"];
  const country = ["in", "us", "uk"];

  country.forEach((state) => {
    expect(states).toContain("kl");
  });
});
