import { test, expect } from '@playwright/test';

test('Handle dropdowns', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Select multiple options from multi select dropdown
    await page.selectOption('#colors', ['Blue', 'Red', 'Yellow']);
    //Assertions
    //1) check number of options in dropdown
    const options = await page.locator('#colors option');
    await expect(options).toHaveCount(5);
    await page.waitForTimeout(5000);
    });