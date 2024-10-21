import { test, expect } from '@playwright/test';

test("Mouse Right Click", async ({ page }) => {

    try {
        await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

       const btnRight =  await page.locator("//span[@class='context-menu-one btn btn-neutral']")

       //Right Click Action
       await btnRight.click({button: 'right'});
       await page.waitForTimeout(5000);
} catch (error) {
    console.error("Navigation failed:", error);
}

})