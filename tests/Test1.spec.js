import {test,expect} from '@playwright/test'

test('1st test', async ({page}) =>{
    // await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    // await page.pause();
    // await page.locator("select.form-control").selectOption("Teacher");

    await page.goto("file:///Users/pratikshya/Documents/js/index.html");
    page.on('dialog',async dialog => await dialog.accept());
    await page.getByText("Click Me").click();
   
  });