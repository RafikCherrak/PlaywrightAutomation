import { test, expect } from '@playwright/test';




test.describe('Groupe1@sanity', ()=>{
    test('Test1@sanity', async ({page}) => {
        try {
            console.log('this is my test 1.....')
        await page.waitForTimeout(2000);
    } catch (error) {
        console.error("Navigation failed:", error);
    }
    });


    test('Test2@sanity', async ({page}) => {
        try {
            console.log('this is my test 2.....')
        await page.waitForTimeout(2000);
    } catch (error) {
        console.error("Navigation failed:", error);
    }
    });


    test.describe("Groupe 2@reg", ()=>{
        test('Test3@reg', async ({page}) => {
            try {
                console.log('this is my test 3.....')
            await page.waitForTimeout(2000);
        } catch (error) {
            console.error("Navigation failed:", error);
        }
        });

        test('Test4@reg', async ({page}) => {
            try {
                console.log('this is my test 4.....')
            await page.waitForTimeout(2000);
        } catch (error) {
            console.error("Navigation failed:", error);
        }
        });

        test('Test5', async ({page}) => {
            try {
                console.log('this is my test 5.....')
            await page.waitForTimeout(2000);
        } catch (error) {
            console.error("Navigation failed:", error);
        }
        });
    })


})


