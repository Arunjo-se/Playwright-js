import { test } from '@playwright/test'

test('New browser setup', async({browser}) => { // first testcase

  const context = await browser.newContext(); // Create a new browser context
  const page1 = await context.newPage(); // Open a new page in the context(tab1)
  //const page2 = await context.newPage(); // Open another new page in the same context(tab2)


  await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") // Navigate to the OrangeHRM login page(tab1)

  const page2 = await context.newPage();
  await page2.goto("https://playwright.dev/"); // Navigate to the Playwright website(tab2)

    
});

// same as broswer setup. 
test('Normal test ', async({page}) => { // second testcase
    await page1.goto("https://playwright.dev/"); // Navigate to the Playwright website
});

// test.only('Test with only', async({page}) => { // third testcase
//     await page.goto("https://playwright.dev/"); // Navigate to the Playwright

// when using test.only, only this test will run. 