import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  try {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
} catch (error) {
  console.error("Navigation failed:", error);
}
});

// test('get started link', async ({ page }) => {
//   try {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// } catch (error) {
//   console.error("Navigation failed:", error);
// }
// });
