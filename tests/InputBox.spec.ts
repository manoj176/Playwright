const {test, expect} = require('@playwright/test')
test('InputBox',async({page})=>{

    await page.goto('https://demo.nopcommerce.com/register');
    await expect (await page.locator("//input[@id='FirstName']")).toBeVisible();
    await expect (await page.locator("//input[@id='FirstName']")).toBeEmpty();
    await expect (await page.locator("//input[@id='FirstName']")).toBeEditable();
    await expect (await page.locator("//input[@id='FirstName']")).toBeEnabled();



    await page.locator("//input[@id='FirstName']").fill("Manoj");

    await page.pause();
    await page.close();
})