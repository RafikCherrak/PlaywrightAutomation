import { test, expect } from '@playwright/test';

test("Mouse Hover", async ({ page }) => {

    try {
        await page.goto("https://demo.opencart.com/");

    const Desktop = await page.locator("//a[normalize-space()='Desktops']")
    const mackbook = await page.locator("//a[normalize-space()='Mac (1)']")


    await Desktop.hover()
    await mackbook.hover()


    // await page.waitForTimeout(5000);
} catch (error) {
    console.error("Navigation failed:", error);
}

})