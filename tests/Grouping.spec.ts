import { test, expect } from '@playwright/test';



test.beforeAll('Before Test',async()=>{
    console.log("this is before hook------")
});

test.afterAll('After Test',async()=>{
    console.log("this is After hook+++++++++")
});

test.beforeEach('beforeEach',async()=>{
    console.log("this is beforeEach hook............")
});

test.afterEach('afterEach',async()=>{
    console.log("this is afterEach hook.............")
});


test.describe('Groupe1', ()=>{
    test('Test1', async ({page}) => {
        try {
            console.log('this is my test 1.....')
        await page.waitForTimeout(2000);
    } catch (error) {
        console.error("Navigation failed:", error);
    }
    });


    test('Test2', async ({page}) => {
        try {
            console.log('this is my test 2.....')
        await page.waitForTimeout(2000);
    } catch (error) {
        console.error("Navigation failed:", error);
    }
    });


    test.describe("Groupe 2", ()=>{
        test('Test3', async ({page}) => {
            try {
                console.log('this is my test 3.....')
            await page.waitForTimeout(2000);
        } catch (error) {
            console.error("Navigation failed:", error);
        }
        });

        test('Test4', async ({page}) => {
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


