import { test, expect } from '@playwright/test';

test('Alert ok', async ({page}) => {
    try {
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling Dilaog window handler
page.on('dialog', async dialog=>{
    expect(dialog.type()).toContain('alert')
    expect(dialog.message()).toContain('I am an alert box!')
    await dialog.accept();
})

await page.click('//button[normalize-space()="Alert"]');
await page.waitForTimeout(5000);
} catch (error) {
    console.error("Navigation failed:", error);
}
});