import { test, expect } from '@playwright/test';
let page;

test.beforeAll(async ({browser})=>{
    page =await browser.newPage();
    await page.goto('https://demoblaze.com/index.html');

    //login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("button[onclick='logIn()']").click();
});

test.afterAll(async ()=>{
     await page.locator('#logout2').click();


});

test('Home Page Test', async ({page}) => {
    try {
    //HOme Page
    const products =await page.$$(".hrefch")
    expect(products).toHaveLength(9);

} catch (error) {
    console.error("Navigation failed:", error);
}
});


test('Add Product to cart Test', async ({page}) => {
    try {
    //HOme Page
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();
     page.on("dialog",async dialog =>{
            await dialog.accept();
    });
} catch (error) {
    console.error("Navigation failed:", error);
}
});