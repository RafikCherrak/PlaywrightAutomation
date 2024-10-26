import { test, expect } from '@playwright/test';


test('Page ScreenShots', async ({page})=>{
    try {
    await page.goto("https://demo.opencart.com/")
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'HomePage.png'})
    await page.waitForTimeout(2000);
} catch (error) {
    console.error("Navigation failed:", error);

}
});


test('Full Page ScreenShots', async ({page})=>{
    try {
        await page.goto("https://demo.opencart.com/")
        await page.screenshot({path:'tests/screenshots/'+Date.now()+'FullPage.png',fullPage:true})
    await page.waitForTimeout(2000);
} catch (error) {
    console.error("Navigation failed:", error);
}

});


test('Element ScreenShots', async ({page})=>{
    try {
        await page.goto("https://demo.opencart.com/")
        await page.locator("//body/main/div[@id='common-home']/div[@class='row']/div[@id='content']/div[@class='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4']/div[1]/div[1]").screenshot({path:'tests/screenshots/'+Date.now()+'Macbook.png'})
    await page.waitForTimeout(2000);
} catch (error) {
    console.error("Navigation failed:", error);
}

});


