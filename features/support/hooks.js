const { Before, After, AfterStep } = require("@cucumber/cucumber");
const playwright = require('playwright');

Before (async function () {
    const browser = await require('playwright').chromium.launch(); // Initialize browser
    const context = await browser.newContext(); // Initialize context
   this.page = await context.newPage(); // Initialize page
});

After(async function () {
    console.log(
        'Closing browser'
    );
});

AfterStep(async function ({result}) {
   
    if (result.status === 'failed') {
        console.log('Test failed');
        await this.page.screenshot({ path: 'screenshot.png' });
    } else {
        console.log('Test passed');
    }
})
     
   