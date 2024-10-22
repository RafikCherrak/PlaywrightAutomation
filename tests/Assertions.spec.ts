import { test, expect } from '@playwright/test';

test('AssertionsTest', async({page}) => {
  try {
  //open app url
  await page.goto('https://demo.nopcommerce.com/register')

  //expect(page).toHaveURL()
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

  //expect(page).toHaveTitle
  await expect(page).toHaveTitle('nopCommerce demo store. Register')


    //expect(locator).toBeVisiblr
    const logoElement = await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    // expect(locator).toBeEnabled()
    const search =await page.locator('#small-searchterms')
    await expect(search).toBeEnabled()
    // await expect(search).toBeDisabled()

    //expect(locator).toBeChecked()

                //radio button
    const maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.click()
    await expect(maleRadioButton).toBeChecked()


                //check Box
    const newsletterCheckBox = await page.locator('#Newsletter')
    await expect(newsletterCheckBox).toBeChecked()

    // expect(locator).toHaveAttribut
    const registerButton = await page.locator('#register-button')
    await expect(registerButton).toHaveAttribute('type', 'submit')
  } catch (error) {
    console.error("Navigation failed:", error);
}

})