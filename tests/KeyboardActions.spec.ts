import { test, expect } from '@playwright/test';

test("Keyboard Actions", async ({ page }) => {

    try {
        await page.goto("https://gotranscript.com/text-compare");

        // Fill the first textarea
        await page.type('[name="text1"]', 'salut bg ta3 les fou');

        // Press Ctrl+A to select all text
        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.up('Control');

        // Press Ctrl+C to copy the text
        await page.keyboard.down('Control');
        await page.keyboard.press('C');
        await page.keyboard.up('Control');

        // Press Tab to move to the next textarea
        await page.keyboard.press('Tab');

        // Press Ctrl+V to paste the copied text
        await page.keyboard.down('Control');
        await page.keyboard.press('V');
        await page.keyboard.up('Control');

        await page.waitForTimeout(30000);

    } catch (error) {
        console.error("Navigation failed:", error);
    }

});
