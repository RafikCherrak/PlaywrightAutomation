import {test,expect} from '@playwright/test'

test('Locators', async ({page})=> {
    await page.goto('https://demoblaze.com/index.html');

    //click on login button  _property
    //await page.locator('id=login2').click();
    await page.click('id=login2');

    //provide username  - css

    // await page.locator('#loginusername').fill("pavanol");
    await page.fill('#loginusername', 'pavanol');




    //provide password  - CSS

    await page.fill('input[id=loginpassword]', 'test@123'); // Replace 'your_password' with the actual password

    //verify login button -Xpath
    await page.click("//button[normalize-space()='Log in']")

     //verify log out button -Xpath
     const logoutlink = await page.locator("//a[normalize-space()='Log out']")

     await expect(logoutlink).toBeVisible();
     await page.close();


    await page.close();
})