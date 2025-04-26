import {expect, test} from '@playwright/test'
import {Login} from './utils/Login';
const dataset = JSON.parse(JSON.stringify(require('./utils/testData.json')));
// test.use({
//     video: 'on',
//   });

test.only('check login',async({page}) =>{
    
    const login = new Login(page);
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await login.validLogin("rahulshettyacademy","learning");
    // await page.locator("b i").first().waitFor();
    // await page.locator("#username").fill("rahulshettyacademy");
    // await page.locator("#password").fill("learning");
    // await page.locator("#signInBtn").click();
    await page.waitForLoadState('networkidle');
//     await page.locator(".card").first().waitFor();
  
//     const rows =page.locator(".card");
//     for(let i=0; i< await rows.count() ; i++){
//         const rowtext = await rows.nth(i).locator(".card-body a").textContent();
//         if(rowtext.includes("iphone X")){
//             await rows.nth(i).locator("button:has-text('Add')").click();
//             await page.waitForLoadState('networkidle');
//             break;
//         }
//     }
//     await page.locator("a:has-text('Checkout')").click();
//     await page.locator("button:has-text('Checkout')").click();
//     await page.locator(".form-control").type("ind");
//     await page.locator(".suggestions a").first().waitFor();
//     const suggestions = page.locator(".suggestions a");
//     for(let i=0;i< await suggestions.count(); i++){
//         const text = await suggestions.nth(i).textContent();
//         if(text.includes("India")){
//             await suggestions.nth(i).click();
//             break;
//         }
//     }
//     await page.locator("input[value='Purchase']").click();
//     await page.locator(".alert-success").isVisible();
//     await page.locator(".alert-success").waitFor()
//    await expect(page.locator(".alert-success")).toContainText("Success! Thank you");






    // await page.locator("a:has-text('iphone X')").isVisible();
    // await page.locator("a:has-text('iphone X')").click();
})

// test('child window', async({browser}) =>{
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//     const loc = page.locator("[href*='documents-request']");
//     const [newPage] = await Promise.all([
//         context.waitForEvent('page'),
//         loc.click(),
//     ]);
//     await newPage.locator(".fa-envelope").waitFor();


// })

// test("popup",async({browser}) =>{
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
//     await page.waitForLoadState('networkidle');
//     const framepage = page.frameLocator("#courses-iframe");
//     await framepage.locator('li a[href*="courses"]:visible').click();
    
// })


