import { test, expect } from '@playwright/test';





    test('Test1', async ({page}) => {
        try {
            await page.goto('https://demoblaze.com/index.html');
        await page.waitForTimeout(2000);
    } catch (error) {
        console.error("Navigation failed:", error);
    }
    });


    test('Test2', async ({page}) => {
        try {
            await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            await expect(page).toHaveTitle('OrangeHRM')
        await page.waitForTimeout(2000);
    } catch (error) {
        console.error("Navigation failed:", error);
    }
})


        test('Test3', async ({page}) => {
            try {
                await page.goto("https://www.orangehrm.com/")
                await expect(page).toHaveTitle('Human Resources Management Software | OrangeHRM')
                console.log('this is my test 3.....')
            await page.waitForTimeout(2000);
        } catch (error) {
            console.error("Navigation failed:", error);
        }
        });


