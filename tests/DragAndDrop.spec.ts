import { test, expect } from '@playwright/test';

test("Drag and Drop", async ({ page }) => {

    try {
        await page.goto("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html ");

        const rome = page.locator("#box6");
        const italy = page.locator("#box106");

        //  Approche 1
       /* await rome.hover();
        await page.mouse.down();

        await italy.hover();
        await page.mouse.up();*/



        //approche 2
        await rome.dragTo(italy);


        //exemple 2
        const washington= await page.locator('#box3');
        const use = await page.locator('#box103')
        await washington.dragTo(use);

       await page.waitForTimeout(5000);
} catch (error) {
    console.error("Navigation failed:", error);
}

})