// require packages
const {test, expect} = require('@playwright/test');
const exp = require('constants');

//write test case
// test case title 
//async arrow function with page instace
test("First test case", async ({page}) =>{
    // Test steps
    await page.goto("https://playwright.dev/");
});

test("To verify title of the page", async({page}) =>{
    const landingPage = "https://playwright.dev/";
    await page.goto(landingPage);
    const title = page.locator('//*[@class="navbar__title text--truncate"]');
    await expect(title).toHaveText('Playwright');
});

test("To verify hyperlink 'GET STARTED' is present on lading page", async ({page}) => {
    const landingPage = "https://playwright.dev/";
    await page.goto(landingPage);
    const title = page.locator('//*[@class="navbar__title text--truncate"]');
    await expect(title).toHaveText('Playwright');
    const GETSTARTED = page.locator('//a[@class="getStarted_Sjon"]');
    await expect(GETSTARTED).toHaveText('Get started');
});