import { test, expect } from '@playwright/test';


test("handle frame",async ({page})=> {
 await page.goto("https://ui.vision/demo/webtest/frames")
 const allFrames = await page.frames();
 console.log("nombre of all frames ",allFrames.length)


 //const frame = await page.frame("name");  if name is presente
 const frame1 = await page.frame({url : "https://ui.vision/demo/webtest/frames/frame_1.html"});
 if (frame1) {
    await frame1.fill('input[name="mytext1"]', 'Hello Raf');
  } else {
    console.error("Frame not found");
  }



  //approche 2

  const inputbox = await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']")
  inputbox.fill("hello lacrim")
 await page.waitForTimeout(5000);
})