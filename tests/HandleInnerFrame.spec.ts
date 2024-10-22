import { test, expect } from '@playwright/test';


test("handle inner frame",async ({page})=> {
   try {
 await page.goto("https://ui.vision/demo/webtest/frames")

 const frame3 = await page.frame({url : "https://ui.vision/demo/webtest/frames/frame_3.html"});
 if(frame3){
    frame3.locator("input[name='mytext3']").fill("ici c'est paris ")
    console.log("Test Passed")
 }else {
    console.log("Test Failed")
 }

if(frame3){
 const childFrame3= await frame3.childFrames()

 if(childFrame3){
    childFrame3[0].locator("//*[@id='i5']/div[3]/div").check()
}else {
    console.log("Test Failed")
 }

 await page.waitForTimeout(5000);
}
} catch (error) {
   console.error("Navigation failed:", error);
}
})