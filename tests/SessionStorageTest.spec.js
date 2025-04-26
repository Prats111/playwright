import {test,request} from '@playwright/test'

let webcontext;

test.beforeAll("Session Storage Test",async({browser}) =>{
 const context = await browser.newContext();
 const page = await context.newPage();
 await page.goto("https://rahulshettyacademy.com/client");
 await page.locator("#userEmail").fill("pratikshya069@gmail.com");
 await page.locator("#userPassword").fill("Chunu@211");
 await page.locator("input[type='submit']").click();
 await page.locator("[routerlink*='myorders']").waitFor();
 await context.storageState({ path: 'state.json' });
 webcontext =await browser.newContext({
    storageState: 'state.json'
  });
});

test("Create Order",async() =>{
    // const context1 = await browser.newContext({StorageState: 'state.json'});
    const page = await webcontext.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("[routerlink*='myorders']").click();
    await page.waitForLoadState("networkidle");
    
   });
