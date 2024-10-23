import { test, expect } from '@playwright/test';


test("Multiple Files", async ({ page }) => {

    try {
        await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
        await page.locator('#filesToUpload').setInputFiles(['tests/testfile1.pdf','tests/testfile2.pdf']);



        await page.waitForTimeout(5000);

    } catch (error) {
        console.error("Navigation failed:", error);
    }

});
