// --------- https://ui.vision/demo/webtest/frames/


import { test } from "@playwright/test";


test("iframe", async ({ page }) => {
 
  await page.goto("https://ui.vision/demo/webtest/frames/");
  
  const mainFrame = await page.frameLocator('//frame[@src="frame_3.html"]');
  const insideFrame = mainFrame.frameLocator(
    '//iframe[@src="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"]',
  );


  //open dropdown
  await insideFrame
    .locator('//div[@class="MocG8c HZ3kWc mhLiyf LMgvRb KKjvXb DEh1R"]')
    .click();

// Wait for options to render
const option = insideFrame.getByRole('option', {
  name: 'Yes',
});


await option.waitFor({ state: 'visible' });
await option.click();


  await page.waitForTimeout(5000);
});

