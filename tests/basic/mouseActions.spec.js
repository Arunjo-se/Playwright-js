import {test, expect} from '@playwright/test';

test('Mouse Actions', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');  
    //hover
    await page.locator('#mousehover').hover();
    await page.locator('text=Top').click();
    await page.waitForTimeout(3000);
    //right click
    await page.locator('#mousehover').click({button:'right'});
    await page.waitForTimeout(3000);

    //double click
    await page.locator('#openwindow').dblclick();
    await page.waitForTimeout(3000);
});