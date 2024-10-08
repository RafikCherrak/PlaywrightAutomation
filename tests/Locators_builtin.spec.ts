import { test, expect } from '@playwright/test';

test('Built_inlocators', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


    //getByAltText - to locate an element , usually image , by ites text alternative
    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible()


    //getByPlaceholder
    const placeholderUsername = await page.getByPlaceholder('Username').fill("Admin")
    const  placeholderPassword = await page.getByPlaceholder('Password').fill('admin123')
    console.log(` placeholder Username   is :${placeholderUsername} , placeholder Password is  ${placeholderPassword}`)


    //getByRole
    await page.getByRole('button', { name: 'Login' } ).click()


    //getByText

    // await expect(await page.getByText('vishwas dsadsasdfs')).toBeVisible();

})