import { test, expect } from '@playwright/test';

test('Home Page', async ({page})=> {
    try {
    await page.goto('https://demoblaze.com/index.html');
    const pageTitle =page.title();
    console.log(`Page title is : ${pageTitle}`);
    await expect(page).toHaveTitle('STORE')


    const pageURL = page.url();
    console.log(`Page URL is : ${pageURL}`);
    await expect(page).toHaveURL('https://demoblaze.com/index.html');
    await page.close();
} catch (error) {
    console.error("Navigation failed:", error);
}
})