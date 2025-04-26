const { When, Given, Then } = require('@cucumber/cucumber');
const playwright = require('playwright');
const {expect} = require('@playwright/test');

Given('I login to ECommerce Application with {string} and {string}', async function (string, string2){
    
//     this.browser = await playwright.chromium.launch(); // Initialize browser
//     this.context = await this.browser.newContext(); // Initialize context
//    this.page = await this.context.newPage(); // Initialize page
    await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await this.page.locator("b i1").first().waitFor();
    await this.page.locator("#username").fill(string);
    await this.page.locator("#password").fill(string2);
    await this.page.locator("#signInBtn").click();
    await this.page.waitForLoadState('networkidle');
    await this.page.locator(".card").first().waitFor();
});

When('I add {string} to the cart', async function (item) {
    const rows = this.page.locator(".card");
    for (let i = 0; i < await rows.count(); i++) {
        const rowtext = await rows.nth(i).locator(".card-body a").textContent();
        if (rowtext.includes(item)) {
            await rows.nth(i).locator("button:has-text('Add')").click();
            await this.page.waitForLoadState('networkidle');
            break;
        }
    }
});

When('I click checkout button', async function () {
    await this.page.locator("a:has-text('Checkout')").click();
    await this.page.locator("button:has-text('Checkout')").click();
    await this.page.waitForLoadState('networkidle');
});

When('I select country {string} and select {string} and click on purchase button', async function (country,countryname) {
 
    await this.page.locator(".form-control").waitFor();
    await this.page.locator(".form-control").type(country);
    // await page.locator(".suggestions a").first().waitFor();
    const suggestions = await this.page.locator(".suggestions a");
    for (let i = 0; i < await suggestions.count(); i++) {
        const text = await suggestions.nth(i).textContent();
        if (text.includes(countryname)) {
            await suggestions.nth(i).click();
            break;
        }
    }
    await this.page.locator("input[value='Purchase']").click();
});

Then('Verify the success page should display', async function () {
    await this.page.locator(".alert-success").isVisible();
    await expect(this.page.locator(".alert-success")).toContainText("Success! Thank you");
});