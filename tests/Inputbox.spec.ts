import { test, expect } from '@playwright/test';

test('Input Box', async({page}) => {
   await page.goto('https://qa-dashboard.azurewebsites.net/Identity/Account/Login?ReturnUrl=%2F');

   await expect(await page.locator("//input[@id='Input_Email']")).toBeVisible();
   await expect(await page.locator("//input[@id='Input_Email']")).toBeEmpty();
   await expect(await page.locator("//input[@id='Input_Email']")).toBeEditable();
   await expect(await page.locator("//input[@id='Input_Email']")).toBeEnabled();

   await page.locator("//input[@id='Input_Email']").fill('rafikcherrak07@gmail.com');
   await page.waitForTimeout(5000);

})