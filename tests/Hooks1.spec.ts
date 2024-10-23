import { test, expect } from '@playwright/test';

test('Home Page Test', async ({page}) => {
    try {
    await page.goto('https://demoblaze.com/index.html');

    //login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("button[onclick='logIn()'']").click

    //HOme Page
    const products =await page.$$(".hrefch")
    expect(products).toHaveLength(9);

    //logout
    await page.locator('#logout2').click();

    await page.waitForTimeout(5000);
} catch (error) {
    console.error("Navigation failed:", error);
}
});


test('Add Product to cart Test', async ({page}) => {
    try {
    await page.goto('https://demoblaze.com/index.html');
    await page.goto('https://demoblaze.com/index.html');

    //login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("button[onclick='logIn()'']").click();

    //HOme Page
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();
    page.on("dialog",async dialog =>{
            await dialog.accept()
    })

    //logout
    await page.locator('#logout2').click();



await page.waitForTimeout(5000);
} catch (error) {
    console.error("Navigation failed:", error);
}
});