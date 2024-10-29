import { test, expect } from '@playwright/test';
//only
    test('test1', async({page})=>{
        console.log("this is test 1")
        })

//skip
    test.skip('test2', async({page})=>{
        console.log("this is test 2")
        })

//skip with condition
    test.skip('test3', async({page,browserName})=>{
        console.log("this is test 3")
        if(browserName==='chromium'){
            test.skip();
        }
        })

    //Fixme
    test('test4', async({page})=>{
            test.fixme();
            console.log("this is test 4")
            })

    //Fail
    test('test5', async({page})=>{
        test.fail();
        console.log("this is test 5..........")
        expect(1).toBe(1);
    })

        //Failwith condition
        test('test6', async({page,browserName})=>{
        console.log("this is test 6..........")
            if(browserName==='chromium'){
                test.fail();
            }
        })

//slow
        test('test7', async({page})=>{
            test.slow();
            console.log("this is test 7..........")
        })