import { test, expect } from '@playwright/test';

test("Mouse Right Click", async ({ page }) => {

    try {
        await page.goto("https://testautomationpractice.blogspot.com/");

       const btnDoubleClick =  await page.locator("//button[normalize-space()='Copy Text']")
       //Double Click Action
       await btnDoubleClick.dblclick();

        console.log(btnDoubleClick)


        const field =  await page.locator("//input[@id='field2']");
        await expect(field).toHaveValue('ça va bg ta3 les fou ');


       await page.waitForTimeout(5000);
} catch (error) {
    console.error("Navigation failed:", error);
}

})